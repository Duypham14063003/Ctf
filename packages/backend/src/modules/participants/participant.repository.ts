import { Inject, Service } from 'typedi';
import { collectionConstants } from '../../common/constants/collection.constant';
import { FirebaseService } from '../firebase/firebase.service';
import { CollectionReference, FieldValue } from 'firebase-admin/firestore';
import ApiError from '../../common/utils/api-error';

@Service()
export class ParticipantRepository {
  @Inject()
  private readonly firebaseService: FirebaseService;

  private getRef(competitionUid: string): CollectionReference {
    return this.firebaseService.getRef(
      `${collectionConstants.COMPETITIONS}/${competitionUid}/${collectionConstants.PARTICIPANTS}`
    );
  }

  public async register(competitionId: string, uid: string) {
    if ((await this.getRef(competitionId).doc(uid).get()).exists) {
      throw new ApiError(400, 'User already registered!');
    }
    return await this.getRef(competitionId)
      .doc(uid)
      .set({
        registeredAt: new Date(),
        solvedLevels: [],
        currentLevel: 0,
        points:   0,
      });
  }

  public async findOne(competitionId: string, uid: string) {
    return (await this.getRef(competitionId).doc(uid).get()).data();
  }

  public async addLevel(competitionId: string, uid: string, levelId: number) {
    await this.getRef(competitionId)
      .doc(uid)
      .update({
        solvedLevels: FieldValue.arrayUnion({
          levelId: levelId,
          created: new Date(),
        }),
        currentLevel: levelId + 1,
        points: FieldValue.increment(levelId + 1),
      });
  }
}

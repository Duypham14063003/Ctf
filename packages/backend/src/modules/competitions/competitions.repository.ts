import { BaseCompetition } from './competition.model';
import { Inject, Service } from 'typedi';
import { CollectionReference } from 'firebase-admin/firestore';
import { FirebaseService } from '../firebase/firebase.service';
import { collectionConstants } from '../../common/constants/collection.constant';

@Service()
class CompetitionRepository {
  @Inject()
  private readonly firebaseService: FirebaseService;

  private getRef(): CollectionReference {
    return this.firebaseService.getRef(collectionConstants.COMPETITIONS);
  }

  async create(info: BaseCompetition) {
    const response = await this.getRef().doc().set(JSON.parse(JSON.stringify(info)));
    return response;
  }

  async findAll() {
    const result = [];
    const competitions = await this.getRef().get();
    competitions.docs.forEach((doc) =>
      result.push({ uid: doc.id, ...doc.data() })
    );
    return result;
  }

  async findOne(uid: string) {
    const competitions = await this.getRef().doc(uid).get();
    return competitions.data();
  }

  async remove(uid: string) {
    return await this.getRef().doc(uid).set({ deleted: true });
  }
}

export default CompetitionRepository;

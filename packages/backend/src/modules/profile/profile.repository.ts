import { Inject, Service } from 'typedi';
import { FirebaseService } from '../firebase/firebase.service';
import { CollectionReference } from 'firebase-admin/firestore';
import { collectionConstants } from '../../common/constants/collection.constant';
import { Profile } from './profile.model';

@Service()
export class ProfileRepository {
  @Inject()
  private readonly firebaseService: FirebaseService;

  private getRef(): CollectionReference {
    return this.firebaseService.getRef(collectionConstants.PROFILE);
  }

  public async saveProfile(userId: string, info: Profile): Promise<void> {
    const profileRef = await this.getRef().doc(userId);
    if (!(await profileRef.get()).exists) {
        profileRef.set({...info});
    }
  }
}

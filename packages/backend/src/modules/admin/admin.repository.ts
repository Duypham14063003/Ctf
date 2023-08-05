import { Inject, Service } from 'typedi';
import { FirebaseService } from '../firebase/firebase.service';
import { CollectionReference } from 'firebase-admin/firestore';
import { collectionConstants } from '../../common/constants/collection.constant';

@Service()
class AdminRepository {
  @Inject()
  private readonly firebaseService: FirebaseService;

  private getRef(): CollectionReference {
    return this.firebaseService.getRef(collectionConstants.ADMIN);
  }

  async isExist(email: string): Promise<boolean> {
    return (await this.getRef().doc(email).get()).exists;
  }
}

export default AdminRepository;

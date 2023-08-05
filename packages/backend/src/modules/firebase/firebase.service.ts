import { Service } from 'typedi';
import * as firebaseSetting from './firebase-config';
import * as admin from 'firebase-admin';
import { CollectionReference } from 'firebase-admin/firestore';

@Service()
export class FirebaseService {
  public getRef(path: string): CollectionReference {
    return (firebaseSetting as admin.app.App).firestore().collection(path);
  }
}

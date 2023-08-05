import * as serviceAccount from './../../service-account-key.json';
import * as admin from 'firebase-admin';
import { Service } from 'typedi';

@Service()
export class AppConfig {
    private _serviceAccount: admin.ServiceAccount;

    constructor() {
        this._serviceAccount = serviceAccount as admin.ServiceAccount;
    }

    getEnv(key: string) {
        if (!(key in process.env)) {
            // throw new  
        }
    }

    get firebaseConfig() : admin.ServiceAccount {
        return this._serviceAccount;
    }
}
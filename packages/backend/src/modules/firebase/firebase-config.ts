import * as admin from 'firebase-admin';
import Container from 'typedi';
import { AppConfig } from '../../common/configs/app.config';

const appConfig = Container.get(AppConfig);

const firebaseSettings = admin.initializeApp({
  credential: admin.credential.cert(appConfig.firebaseConfig),
  databaseURL:
    'https://codemely-d3437-default-rtdb.asia-southeast1.firebasedatabase.app',
});

module.exports = firebaseSettings;

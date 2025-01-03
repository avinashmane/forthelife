import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {mapValues} from 'lodash-es'

export default defineNuxtPlugin((nuxtApp) => {
  const db = getFirestore(nuxtApp.$firebaseApp);
  const racesRef = collection(db, "races");

  const firebaseApps = mapValues(useAppConfig()?.additionalFirebaseDatabases,
                                  (x,k)=>getFirestore(initializeApp(x,k)))
  // log('firebaseApps',firebaseApps)
  return {
    provide: {
      db,
      racesRef,
      firebaseApps
    },
  };
});
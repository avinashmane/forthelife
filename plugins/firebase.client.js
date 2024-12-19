import { getFirestore, collection } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const db = getFirestore(nuxtApp.$firebaseApp);
  const racesRef = collection(db, "races");

  return {
    provide: {
      db,
      racesRef,
    },
  };
});
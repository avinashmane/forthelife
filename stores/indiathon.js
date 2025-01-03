import { initializeApp } from "firebase/app";
import { getDatabase,ref as databaseRef, push } from 'firebase/database'
// import { useDatabaseList } from "#build/imports";
export const getRTDB=(db,path)=> !db || databaseRef(useDatabase(getDatabase(db),path))
// const {$firebaseApps, $db} = useNuxtApp();
const firebaseConfig = process.env.INDIATHON_FIREBASE_CONFIG || {
    "projectId": "indiathon",
    "apiKey": "AIzaSyAaSvpW0dY3lmtveGSiCAjXyawVFy1byTA",
    "authDomain": "indiathon.firebaseapp.com",
    "databaseURL": "https://indiathon.firebaseio.com",
    "storageBucket": "indiathon.appspot.com",
    "messagingSenderId": "302453575249"
} 



export const useIndiathonStore = defineStore('indiathon', () => {
    const app = initializeApp (firebaseConfig ,'indiathon')
    const db = getDatabase(app) 
    
    const users = ref([])
    const name = ref('Eduardo')
    
    function get(path) {
      const ret = useDatabaseList(databaseRef(db,path))
      // console.log(ret);
      return ret
    }
  
    return { db, get, name, users }
  })



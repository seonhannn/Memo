import * as firebase from "firebase/app";
import "firebase/database";
import { getMemoListSuccess, getMemoListFailure } from '../actions/index';

const firebaseConfig = {
    apiKey: "AIzaSyDRofHH2IoPy9HHx8A2IimTSBS5GCg9-H8",
    authDomain: "memo-8a72a.firebaseapp.com",
    projectId: "memo-8a72a",
    storageBucket: "memo-8a72a.appspot.com",
    messagingSenderId: "189020679355",
    appId: "1:189020679355:web:bbfde109f6dbed5ccd8d9e",
    measurementId: "G-HEGB93B8GM"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const getMemoListApi = (dispatch) => {
    database.ref('memos/').on('value', snapshot => {
        const memoList = snapshot.val();
        const convertedList = memoList ? Object.keys(memoList).map(id => ({id, ...memoList[id]})).sort((l, r) => Number(r.id) - Number(l.id)) : [];

        dispatch(getMemoListSuccess(convertedList));
    }, error => {
        dispatch(getMemoListFailure(error));
    });
};
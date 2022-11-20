import * as types from '../constants/actionTypes';

// 메모 데이터 성공적으로 가져오면 state에 추가
// memoList를 인자로 넣어 객체로 반환하는 함수
export const getMemoListSuccess = (memoList) => ({
    type: types.GET_MEMO_LIST_SUCCESS,
    memoList: memoList
});

export const getMemoListFailure = (error) => ({
    type: types.GET_MEMO_LIST_FAILURE,
    error
});
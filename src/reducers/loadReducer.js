import * as types from '../constants/actionTypes';

const initState = {
    isLoading: true,
    isError: false,
    memoList: null
};

const loadReducer = (state = initState, action) => {
    switch (action.type) {
        // 데이터 fetch 성공시
        case types.GET_MEMO_LIST_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                memoList: action.memoList
            };
        case types.GET_MEMO_LIST_FAILURE:
            return {
                isLoading: false,
                isError: true,
                memoList: state.memoList
            };
        default:
            return state;
    }
};
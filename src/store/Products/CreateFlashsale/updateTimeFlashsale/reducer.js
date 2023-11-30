

import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
    isLoading: false,
    payload: [],
};

const updateTimeFlashsaleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME_FLASH_SALE:
            return { ...state, isLoading: true };

        case ActionTypes.UPDATE_TIME_FLASH_SALE_SUCCESS:
            return { ...state, payload: action.payload, isLoading: false };

        case ActionTypes.UPDATE_TIME_FLASH_SALE_FAILED:
            return { ...state, payload: action.payload, isLoading: false };

        case ActionTypes.RESET_UPDATE_TIME_FLASH_SALE:
            return { ...state, payload: defaultState.payload, isLoading: defaultState.isLoading };

        default:
            return state;
    }
};

export default updateTimeFlashsaleReducer;

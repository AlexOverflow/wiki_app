import {UNCHECKING_LINK, CHECKING_LINK} from '../actions/checkLink';

export const checkLink = (state = {} , action) => {
    switch (action.type) {
        case UNCHECKING_LINK:
            return {
              ...state,
              checkedLinks: action.payload
            };

        case CHECKING_LINK:
            return {
              ...state,
              checkedLinks: action.payload
            };

        default:
            return state;
    }
}

// export default function(state= [], action){
//     return state;
// }

import initialState from '../Reducers/initialState';
import { GET_AVAILABLE_COINS } from "../actionTypes/cryptocontainer";

 /**
 * 
 * @param {object} state 
 * @param {string} action 
 * @desc sample of a reducer
 */
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_AVAILABLE_COINS:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };

  export default reducer;
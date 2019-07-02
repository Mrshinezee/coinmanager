// Moduler Importations
import { GET_AVAILABLE_COINS } from "../actionTypes/cryptocontainer";

 /**
 * @param {object} score 
 * @desc sample of an action
*/
export const setPlayerScore = score => {
    return {
        type: GET_AVAILABLE_COINS,
        score: score
      };
    };
  
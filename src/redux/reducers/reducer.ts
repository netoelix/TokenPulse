import { ApiResponse } from '../../utils/functionsAPI';
import { FETCH_DATA_SUCCESS } from '../actions/action';

interface State {
  data: ApiResponse | null;
}

const initialState: State = {
  data: null,
};

const myReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;

import { DataItem } from '../../types';
import { FETCH_DATA_SUCCESS } from '../actions/action';

interface State {
  data: DataItem[] | null;
}

const initialState: State = {
  data: null,
};

const myReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload ? action.payload.data : state.data,
      };
    default:
      return state;
  }
};

export default myReducer;

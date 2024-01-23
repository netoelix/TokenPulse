import { getAll, ApiResponse } from '../../utils/functionsAPI';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

const fetchDataSuccess = (data: ApiResponse) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchData = () => async (dispatch: any) => {
  const data = await getAll();
  dispatch(fetchDataSuccess(data));
};

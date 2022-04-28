import {apiUrl} from '../utils/apiUrl'
export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';


export function getData () {
    return function (dispatch) {
      dispatch({
        type: GET_DATA,
      });
      fetch(apiUrl + "/ingredients")
        .then( (res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка ${res.status}`);
            }
        }
            
        )
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: GET_DATA_SUCCESS,
              data: res.data,
            });
          } else {
            dispatch({
              type: GET_DATA_FAILED,
            });
          }
        })
        .catch((e) => {
          dispatch({
            type: GET_DATA_FAILED,
          });
        });
    };
  }
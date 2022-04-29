import {apiUrl} from '../utils/apiUrl'
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';


export function getData () {
    return function (dispatch) {
      dispatch({
        type: FETCH_DATA,
      });
      fetch(apiUrl)
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
              type: FETCH_DATA_SUCCESS,
              ingridients: res.data,
            });
          } else {
            dispatch({
              type: FETCH_DATA_FAILED,
            });
          }
        })
        .catch((e) => {
          dispatch({
            type: FETCH_DATA_FAILED,
          });
        });
    };
  }
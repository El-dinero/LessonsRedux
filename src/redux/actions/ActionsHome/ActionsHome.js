import axios from "axios";
import { GET_ITEMS, ITEMS_LOADING } from "../../types";

export const getItems = () => async (dispatch) => {
  dispatch(setItemsLoading());
  const data = await axios.get(
    "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
  );
  dispatch({ type: GET_ITEMS, payload: data });
};
// export const getItems = () => (dispatch) => {
//   dispatch(setItemsLoading());
//   axios
//     .get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
//     .then((res) =>
//       dispatch({
//         type: GET_ITEMS,
//         payload: res.data,
//       })
//     );
// };

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};

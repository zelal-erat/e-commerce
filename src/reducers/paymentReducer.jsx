import { FETCH_PAYMENTS } from "../actions/paymentAction";


const initialState = {
  payments: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYMENTS:
      return { ...state, payments: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;

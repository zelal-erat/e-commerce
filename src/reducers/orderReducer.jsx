const initialState = {
    order: null,
    loading: false,
    error: null,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ORDER_CREATE_SUCCESS":
            return { ...state, order: action.payload, loading: false };
        case "ORDER_CREATE_FAIL":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

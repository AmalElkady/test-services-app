import TYPES from "../types";
const initialState = {
  reqSupportData: {},
  returnStatus: 0,
  returnMessage: "",
  errors: null
};

const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    //ADD REQUEST
    case TYPES.ADD_SUPPORT_REQUEST:
      return {
        ...state,
        reqSupportData: action.payload.data,
        returnMessage: action.payload.message,
        returnStatus: action.payload.status,
        errors: null
      };
    default:
      return { ...state };
  }
};
export default supportReducer;

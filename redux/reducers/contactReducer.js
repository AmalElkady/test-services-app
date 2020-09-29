import TYPES from "../types";
const initialState = {
  contactData: {},
  returnStatus: 0,
  returnMessage: "",
  errors: null
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    //ADD REQUEST
    case TYPES.ADD_CONTACT_REQUEST_SUCCESS:
      return {
        ...state,
        contactData: action.payload,
        returnMessage: action.message,
        returnStatus: action.status
      };
    case TYPES.ADD_CONTACT_REQUEST_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return { ...state };
  }
};
export default contactReducer;

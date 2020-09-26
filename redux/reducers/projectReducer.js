import TYPES from "../types";
const initialState = {
  projects: [],
  errors: null
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET PROJECTS
    case TYPES.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        errors: null
      };
    default:
      return { ...state };
  }
};
export default projectReducer;

import TYPES from "../types";
const initialState = {
  projects: [],
  errors: null
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET PROJECTS
    case TYPES.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects,
        errors: null
      };
    case TYPES.GET_PROJECTS_ERROR:
      return {
        ...state,
        projects: [],
        errors: action.error
      };
    default:
      return { ...state };
  }
};
export default projectReducer;

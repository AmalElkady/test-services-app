import TYPES from "../types";
const initialState = {
  projects: [],
  currentPage: 0,
  isLoading: false,
  errors: null
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET PROJECTS
    case TYPES.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // projects: [...state.projects, ...action.payload]
        projects: action.payload
      };
    // return {
    //   ...state,
    //   projects: action.projects,
    //   errors: null
    // };
    case TYPES.GET_PROJECTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    default:
      return { ...state };
  }
};
export default projectReducer;

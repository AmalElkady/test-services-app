import TYPES from "../types";

export const getCurrentProjects = () => {
  return async dispatch => {
    try {
      const data = await fetch("./api/projects");
      const projects = await data.json();
      dispatch({
        type: TYPES.GET_PROJECTS,
        payload: projects
      });
    } catch (errors) {
      return errors;
    }
  };
};

import TYPES from "../types";

// export const getCurrentProjects = () => {
//   return async dispatch => {
//     try {
//       const data = await fetch("./api/projects");
//       const projects = await data.json();
//       dispatch({
//         type: TYPES.GET_PROJECTS,
//         payload: projects
//       });
//     } catch (errors) {
//       return errors;
//     }
//   };
// };

export function loadMoreProjects(payload) {
  return { type: TYPES.GET_PROJECTS, payload };
}

// export function loadMoreProjectsSucceed(payload) {
//   return { type: TYPES.GET_PROJECTS_SUCCESS, payload };
// }

// export function loadMoreProjectsFailed(payload) {
//   return { type: TYPES.GET_PROJECTS_ERROR, payload };
// }

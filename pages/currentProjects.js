import Project from "../components/project";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getCurrentProjects } from "../redux/actions/projectActions";
import TYPES from "../redux/types";

const CurrentProjects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state.project);
  useEffect(() => {
    dispatch({ type: TYPES.GET_PROJECTS });
    //dispatch(getCurrentProjects());
  }, []);
  return (
    <ul>{projects && projects.map(p => <Project key={p.id} project={p} />)}</ul>
  );
};

export default CurrentProjects;

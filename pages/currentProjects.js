import Project from "../components/project";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMoreProjects } from "../redux/actions/projectActions";
import TYPES from "../redux/types";
import InfiniteScroll from "react-infinite-scroll-component";

const CurrentProjects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state.project);
  useEffect(() => {
    dispatch(loadMoreProjects(1));
    //dispatch(getCurrentProjects());
  }, []);
  return (
    <InfiniteScroll
      dataLength={projects.length} //This is important field to render the next data
      next={loadMoreProjects(1)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {projects && projects.map(p => <Project key={p.id} project={p} />)}
    </InfiniteScroll>
  );
};

export default CurrentProjects;

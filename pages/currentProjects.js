import Project from "../components/project";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMoreProjects } from "../redux/actions/projectActions";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "@material-ui/core";

const CurrentProjects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state.project);
  const [currentCount, setCurrentCount] = useState(5);
  useEffect(() => {
    dispatch(loadMoreProjects(currentCount));
    //dispatch(getCurrentProjects());
  }, []);
  const handleScroll = () => {
    setCurrentCount(currentCount + 5);
    loadMoreProjects(currentCount);
  };

  return (
    <InfiniteScroll
      dataLength={projects.length} //This is important field to render the next data
      //next={handleScroll}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Grid container spacing={3}>
        {projects &&
          projects.map(p => (
            <Grid item xs={4}>
              {" "}
              <Project key={p.id} project={p} />
            </Grid>
          ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default CurrentProjects;

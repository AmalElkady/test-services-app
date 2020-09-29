import { projects } from "../../../projectsData";

// export default (req, res) => {
//   res.status(200).json(projects);
// };

const currentProjects = (req, res) => {
  console.log("limit ", req.query);
  res.status(200).json(projects);
};
export default currentProjects;

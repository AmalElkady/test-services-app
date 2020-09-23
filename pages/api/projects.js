import { projects } from "../../../projectsData";

export default (req, res) => {
  res.status(200).json(projects);
};

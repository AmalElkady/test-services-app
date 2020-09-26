export default (req, res) => {
  console.log("Request data : ", req.body.data);
  res
    .status(200)
    .json({ message: " Your request support sent successfully !" });
  //res.status(404).json({ message: "something wrong " });
};

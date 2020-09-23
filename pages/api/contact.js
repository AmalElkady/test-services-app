// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  //console.log("Request data : ", req.body.data);
  //res.send("success");
  res.status(200).json({ message: " Your request sent successfully !" });
  //res.status(404).json({ message: "something wrong " });
};

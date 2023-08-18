export default function ReqHandler(req, res) {
  res.status(200).json({text: 'Hello World'});
}
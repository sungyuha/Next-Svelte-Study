// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // 파라미터는 사용자가 요청한 정보 req
  res.status(200).json({ id: req.query.id })
}

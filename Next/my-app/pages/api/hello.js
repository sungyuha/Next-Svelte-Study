// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // 백엔드 . status(200)은 응당 성공. 
  // 전송 데이터 자바스크립트 객체를 만들어주면 { name: 'John Doe' }가 객체화 되서 응답하게 됨
  res.status(200).json({ name: 'John Doe' })  
}

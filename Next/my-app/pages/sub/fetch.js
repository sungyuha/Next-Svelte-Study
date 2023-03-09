import { useEffect } from "react"

export default function Fetch() {
    useEffect(() => {
        // 접근이 가능한 환경변수 
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
            .then(type => type.json())
            .then(result=> {
                console.log(result);
            })
    })
    return <>
        <h1>/pages/sub/Fetch.js</h1>
        <a href="/">/pages/index.js</a>
    </>
}
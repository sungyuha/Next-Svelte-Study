import { useEffect,useState } from "react"

export default function Fetch() {
    const [user, setUser] = useState({name:null});
    useEffect(() => {
        // 접근이 가능한 환경변수 
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
            .then(type => type.json())
            .then(result=> {
                setUser(result);
            })
    })
    return <>
        <h1>/pages/sub/Fetch.js</h1>
        <p>{user.name}</p>
        <a href="/">/pages/index.js</a>
    </>
}
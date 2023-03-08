import {useRouter} from 'next/router';

export default function Adout() {
    // useRouter라는 훅을 실행
    const router = useRouter();
    const id = Number(router.query.id); // id 숫자는 문자열로 받음
    return <>
        <h1>/pages/sub/[id].js</h1>
        <p>Parameter id : {id}</p>
        <a href="/">/pages/index.js</a>
    </>
}
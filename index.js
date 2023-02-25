// Svelte

let a = 1;
let b = 2;

<>
    <input type="number" bind:value={a} />
    <input type="number" bind:value={b} />
    {/* 두개의 input에 숫자 1, 숫자 2를 입력했을 때 1 + 2 = 3 이 출력 되는 코드 */}
    <p>{a} + {b} = {a + b}</p>
</>

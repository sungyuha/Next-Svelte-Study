<script>
    let name = 'world';
</script>

<!-- name에 할당 된 값이 출력 -->
<h1>Hello {name}</h1>
<!-- 버튼을 클릭 했을 때 name값이 변경 -->
<button onclick={() => {name = 'Heropy!' }}>
    Change!
</button>

<!-- 
브라우저에서 바닐라 자바스크립트가 동작함
* Svelte가 작업문(애플리케이션)을 VanillaJS로 변환(컴파일)하고 그 결과만 동작하기 때문에,
Svelte는 브라우저(런타임)에서 동작하지 않는 컴파일러라고 할 수 있음
반응성 - 명시적 설계(창의적 작업)

단점 
- 작은 생태계
-->

<!-- REPL(read-eval-print loop) 
- 사용자에게 데터ㄹ 입력받고 이를 평가(실행)하고 결과를 반환하는 단순한 상호작용 컴퓨터 프로그래밍 환경을 말함 -->


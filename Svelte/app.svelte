<script>
    let name = 'world';
</script>

<h1>Hello {name}</h1>
<!-- 버튼을 클릭 했을 때 name값이 변경 -->
<button onclick={() => {name = 'Heropy!' }}>
    Change!
</button>
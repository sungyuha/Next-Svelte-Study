<script>
    import { page } from '$app/stores';
    console.log($page.params.slug);

    //slug를 하면 모든 어떤 경로로 들어왔는지 알려줌
    const slugArr = $page.props.slug.split('/');
    console.log(slugArr);
</script>

<h1>Dosc 페이지</h1>

<!-- svelte 문법 -->
<!-- 배열의 개수가 만약에 1개 라면 -->
{#if slugArr.length === 1}
<h1>Dosc 페이지 ; 주제 {slugArr[0]}</h1>
<!-- 배열의 개수가 2개 라면 -->
{:else if slugArr.length === 2}
<h1>Dosc 페이지 ; 주제 {slugArr[0]} ; 내용 {slugArr[1]}</h1>
{/if}
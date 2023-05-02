<script>
    import { page } from '$app/stores';

    //slug를 하면 모든 어떤 경로로 들어왔는지 알려줌
    const slugArr = $page.props.slug.split('/');
    console.log($page.params);
    // ko나 en이 없다면 강제로 값을 할당 가능. 디폴트 값은 한국어
    const { lang = 'ko' } = $page.params;
</script>

<!-- Optional Parameters의 lang에 요소에 따라서 인사말 출력 -->

<!-- lang이 만약에 한국어면 -->
{#if lang === 'ko'}
    <h1>안녕</h1>
{:else if lang === 'en'}
    <h1>Hello</h1>
{/if}

<hr/>
<h1>Dosc 페이지</h1>

<!-- svelte 문법 -->
<!-- 배열의 개수가 만약에 1개 라면 -->
{#if slugArr.length === 1}
<h1>Dosc 페이지 ; 주제 {slugArr[0]}</h1>
<!-- 배열의 개수가 2개 라면 -->
{:else if slugArr.length === 2}
<h1>Dosc 페이지 ; 주제 {slugArr[0]} ; 내용 {slugArr[1]}</h1>
{/if}

<!-- 옵션 파라미터 : 있어도 되고 없어도 됨 -->
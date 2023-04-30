<script>
    import { page } from '$app/stores';
    console.log($page.params.slug);

    //slug를 하면 모든 어떤 경로로 들어왔는지 알려줌
    const slugArr = $page.props.slug.split('/');
    console.log(slugArr);
</script>

<h1>Dosc 페이지</h1>
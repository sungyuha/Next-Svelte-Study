<!-- []로 감싸게 되면 다이나믹 라우트 구현 -->

<script>
    // 스벨트 프론트 프레임워크 문법
    // page정보를 가져 올 수 있음
    // app/stores는 스밸트킷이 정한 모듈. 스벨트킷이 관리하는 페이지 정보. 페이지를 관리
    import { page } from '$app/stores';
    const productId = $page.params.productId; // params는 url의 페이지 정보 중에 일부
</script>

<h1>제품{productId} 상세 페이지</h1>
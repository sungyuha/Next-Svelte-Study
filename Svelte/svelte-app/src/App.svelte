<script>
	export let name;
	// 반응형 state 변수
	// let fullName = 'jung' + name; // 재랜더링이 안됨
	$: fullName = 'Jung' + name; // $ 표기가 있으면 강제로 재랜더링이 가능
</script>

<main>
	<!-- <h1>Hello {name}!</h1> -->
	<!-- state 변수  -->
	<h1>Hello {fullName}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<!-- 버튼 기능 -->
	<button on:click={() => {name = 'sung' }}>버튼</button> <!-- state 변경 -> name에서 sung으로! -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
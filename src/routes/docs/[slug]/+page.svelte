<script>
    export let data;
    import Navbar from "../../../components/Navbar.svelte";
</script>

<style>
    	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>

<Navbar/>

<article class="markdown-body">
    <h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    <h3>Author: {data.author}</h3>
    <svelte:component this={data.content} />
</article>
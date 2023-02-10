<script>
    export let data;
  </script>
  
  <article>
    <h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    <p>Author: {data.author}</p>
    <svelte:component this={data.content} />
  </article>
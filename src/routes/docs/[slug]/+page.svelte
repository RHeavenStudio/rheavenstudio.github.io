<script>
    import Navbar from "../../../components/Navbar.svelte";
    import { Utterances, utterancesTheme } from "@codewithshin/svelte-utterances";
    export const theme = 'github-light';
    export const reponame = "RHeavenStudio/rheavenstudio.github.io.comments"

    export let data;

    export let githubUsernames = {
		Starpelly : "Starpelly",
		Saraistupid : "Saraistupid",
		Zeo : "ThatZeoMan"
	};
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

<div class="d-flex" id="wrapper">

  <!-- sidebar menu -->
  <div class="sidebar bg-white-2">
    <div class="menu">
      <ul class="menu scrollbar">

        <li>
          <span class="name">Dashboard</span>
          <ul>

            <li class="parent">
              <a href="#" class="employ current up down transition active"><i class="fa fa-cog" aria-hidden="true"></i>Settings</a>
              <ul class="submenu" style="display: block;">
                <li><a href="#">Timezone</a></li>
                <li><a href="#" class="current">Permissions</a></li>
                <li><a href="#">Maintenance</a></li>
              </ul>
            </li>

          </ul>

        </li>

    </div>
  </div>

  <!-- website content -->
  <div class="content">
    <div class="container-fluid">

      <article class="markdown-body">
        <h1>{ data.title }</h1>
        <p>Published: {new Date(data.date).toDateString()}</p>
        <div class="header-badges">
            {#each data.authors as author}
            <a class="header-badge" href={`https://github.com/${githubUsernames[author.name]}`}>
                <span class="badge-avatar" style="background-image: url('https://avatars.githubusercontent.com/{githubUsernames[author.name]}')"></span>
                <span class="badge-label">{author.name}</span>
            </a>
            {/each}
        </div>
        <svelte:component this={data.content} />
      </article>
      
      <div class="container">
        <slot />
          <div class="my-16 relative">
            <Utterances {reponame} {theme} />
          </div>
      </div>

    </div>
  </div>
</div>
<script lang="ts">
	import { page } from '$app/stores';

	import './app.css';
	import navClose from '$lib/images/nav-close.png';

	import navLinks from '$lib/data/navLinks.json';
	import Footer from '$lib/components/Footer.svelte';

	function uncheck() {
		let drawer = document.getElementById('drawer') as HTMLInputElement;
		drawer.checked = false;
	}
</script>

<div class="app w-full max-w-md mx-auto">
	<div class="drawer">
		<input id="drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div class="w-full navbar bg-base-100uiop border-b-1 border-b-2 py-4">
				<div class="font-wayfinder font-bold text-xl w-1/5 mr-auto text-[#24181D]">
					<a href="/">Accouche Capital</a>
				</div>
				<div class="flex-none">
					<label for="drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</div>
			</div>
			<main>
				<slot />
			</main>
			<Footer />
		</div>
		<div class="drawer-side">
			<label for="drawer" aria-label="close sidebar" class="drawer-overlay" />
			<ul class="menu p-4 w-full min-h-full bg-base-100">
				<div class="flex justify-between pb-4 border-b-2">
					<div class="font-wayfinder font-bold text-xl w-1/5 text-[#24181D]">
						<a href="/">Accouche Capital</a>
					</div>
					<button on:click={uncheck}><img src={navClose} alt="" /></button>
				</div>
				<div>
					{#each navLinks as link}
						<button
							class="w-full text-start uppercase border-b-2 text-xl font-articulat font-medium font-primary tracking-wide"
							id={`nav-${link.url}`}
							on:click={uncheck}
							value={link.url}
							><a
								class={`w-full block py-6`}
								href={link.url}
								class:current={$page.url.pathname === link.url}>{link.title}</a
							></button
						>
					{/each}
				</div>
			</ul>
		</div>
	</div>
</div>

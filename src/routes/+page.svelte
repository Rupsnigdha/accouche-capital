<script>
	import india from '$lib/images/india.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center justify-center px-3 h-screen">
	<h2 class="font-quincy bg-base-100 font-medium text-3xl text-center">
		We help small-town startups become profitable companies
	</h2>
	<a
		href="/"
		class="font-quincy font-medium w-1/2 border-2 border-primary text-center py-4 block mt-12 rounded-full"
		>Talk to us</a
	>
	<a
		href="/"
		class="font-quincy font-medium w-1/2 border-2 border-primary text-center py-4 block mt-4 rounded-full"
		>Invest in Accouche</a
	>
</section>

<section class="px-3 py-11">
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-gray-400">Our Mission</h3>
		<p class="font-quincy font-bold text-2xl text-accent">
			At Accouche, we empower small-town founders to think big, scale seamlessly, and transcend
			geographical limits.
		</p>
	</div>
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-gray-400">Fund size</h3>
		<p class="font-quincy font-bold text-2xl">Rs. 50,00,000 for Q1 2024.</p>
	</div>
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-gray-400">Preferred Sectors</h3>
		<p class="font-quincy font-bold text-2xl">
			Tech startups, digital creators, online agencies, internet businesses, service-based
			businesses.
		</p>
	</div>
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-gray-400">Regions</h3>
		<div class="flex">
			<p class="font-quincy font-bold text-2xl">
				Pan-India with a preference for startups from the North-East.
			</p>
			<div>
				<img src={india} width="350" alt="" />
			</div>
		</div>
	</div>
</section>

<section class="flex flex-col items-center px-3">
	<h2 class="font-quincy bg-base-100 font-medium text-3xl text-center">Let's work together</h2>
	<a
		href="/"
		class="font-quincy font-medium w-56 border-2 border-primary text-center py-4 block mt-12 rounded-full"
		>Talk to us</a
	>
	<a
		href="/"
		class="font-quincy font-medium w-56 bg-primary text-base-100 border-2 border-primary text-center py-4 block mt-4 rounded-full"
		>Invest in Accouche</a
	>
</section>

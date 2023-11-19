<script>
	import india from '$lib/images/india.png';
	import mobileHomeVector1 from '$lib/images/mobileHomeVector1.png'
	import mobileHomeVector2 from '$lib/images/mobileHomeVector2.png'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center hero-height bg-background justify-between">
	<h2 class="font-quincy font-medium text-3xl text-center px-3 mt-8">
		We help small-town startups become <span class="text-accent">profitable companies</span>
	</h2>
	<div class="w-full flex flex-col items-center">
		<a
		href="/"
		class="font-quincy font-medium w-56 border-2 border-primary text-center text-primary py-4 block rounded-full"
		>Talk to us</a
	>
	<a
		href="/"
		class="font-quincy font-medium w-56 bg-primary text-base-100 border-2 border-primary text-center py-4 block mt-4 rounded-full"
		>Invest in Accouche</a
	>
	</div>
	<div class="w-full justify-self-end">
		<div class="w-full">
			<img src={mobileHomeVector1} alt="" class="">
		</div>
	</div>
</section>

<section class="px-3 py-11">
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-[#9A9A8E]">Our Mission</h3>
		<p class="font-quincy font-bold text-2xl text-[#7e8d21]">
			At Accouche, we empower small-town founders to think big, scale seamlessly, and transcend
			geographical limits.
		</p>
	</div>
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-[#9A9A8E]">Fund size</h3>
		<p class="font-quincy font-bold text-2xl text-[#434331]">Rs. 50,00,000 for Q1 2024.</p>
	</div>
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-[#9A9A8E]">Preferred Sectors</h3>
		<p class="font-quincy font-bold text-2xl text-[#434331]">
			Tech startups, digital creators, online agencies, internet businesses, service-based
			businesses.
		</p>
	</div>
	<div class="mb-9">
		<h3 class="font-articulat font-medium text-[#9A9A8E]">Regions</h3>
		<div class="flex">
			<p class="font-quincy font-bold text-2xl text-[#434331]">
				Pan-India with a preference for startups from the <span class="text-[#7e8d21]">North-East.</span>
			</p>
			<div>
				<img src={india} width="350" alt="" />
			</div>
		</div>
	</div>
</section>

<section class="flex flex-col items-center px-3">
	<h2 class="font-quincy font-medium text-3xl text-center">Let's work together.</h2>
	<a
		href="/"
		class="font-quincy font-medium w-56 border-2 border-primary text-center text-primary py-4 block mt-12 rounded-full"
		>Talk to us</a
	>
	<a
		href="/"
		class="font-quincy font-medium w-56 bg-primary text-base-100 border-2 border-primary text-center py-4 block mt-4 rounded-full"
		>Invest in Accouche</a
	>
</section>

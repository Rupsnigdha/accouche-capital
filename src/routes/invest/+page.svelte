<script lang="ts">
	import invest from '$lib/images/invest.png';
	import trust from '$lib/images/trust.png';
	import investor from '$lib/images/investor.png';
	import Investor from '$lib/components/invest/Investor.svelte';
</script>

<section class="bg-base px-4 mb-12">
	<div class="flex justify-center py-16">
		<img src={invest} alt="" width="150" />
	</div>
	<div class="flex flex-col items-center font-quincy font-500 font-medium">
		<h1 class="text-3xl font-medium text-center px-6">
			<span class="text-accent">20% returns</span> at the comfort of your home.
		</h1>
		<p class="px-6 text-center mt-4">
			Invest in Accouche. We fund small-town startups with huge profit and growth potential.
		</p>
		<a
			href="https://api.whatsapp.com/send?phone=918368346162&text=Hi,%20here%20to%20invest%20on%20Accouche."
			class="px-12 py-4 bg-primary text-base-100 rounded-full mt-8"
			target="_blank">Invest in Accouche</a
		>
	</div>
</section>
<section class="bg-primary text-base-100 px-4 py-8">
	<div class="flex flex-col">
		<h2 class="w-4/5 text-lg font-medium font-quincy">
			We’ll turn your Rs. 20,00,000 into Rs. 24,80,000 in a year.
		</h2>
		<div class="my-8 font-articulat font-400 text-sm">
			<p class="opacity-60">
				At Accouche, we invest in potential small-town startups with two forces in mind: growth and
				profit.
			</p>
			<p class="mt-8 opacity-60">
				With your investment and our curiosity, we’ll find and fund the right startups with
				exponential growth opportunities and profitability.
			</p>
		</div>
		<a
			href="https://api.whatsapp.com/send?phone=918368346162&text=Hi,%20here%20to%20invest%20on%20Accouche."
			class="px-12 w-56 py-4 bg-base-100 text-primary rounded-full mt-8 self-start font-quincy"
			target="_blank">Invest in Accouche</a
		>
	</div>
</section>
<section class="bg-primary text-base-100 px-4 py-8">
	<p class="mt-8 font-articulat font-400 text-sm opacity-60">
		Accouche started out with one mission.
	</p>
	<p class="mt-8 font-articulat font-400 text-sm opacity-60">
		Help remarkable small-town startups build impactful companies. We pitched our mission to a
		select few investors sharing the same vision. This inspired them to venture together into the
		world of local startups with us. To everyone who believe in us, we thank you from the bottom of
		our hearts.
	</p>
	<div class="mt-4 text-xs opacity-50">
		<p>Deepak Gupta</p>
		<p>CFO, Accouche Capital</p>
	</div>
</section>
<section class="bg-primary text-base-100 px-4 py-8">
	<h2 class="text-center text-3xl font-medium font-quincy">Our Investors</h2>
	<div class="flex justify-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="157"
			height="22"
			viewBox="0 0 157 22"
			fill="none"
		>
			<path
				d="M1 21C14.9579 10.7136 50.573 -3.68747 81.3704 21C97.5795 10.2543 29.0283 -14.5434 156 14.9383"
				stroke="#FFFDF9"
			/>
		</svg>
	</div>
	<div class="grid grid-cols-2 gap-4 mt-12">
		<Investor image={investor} name="Robert Smith" designation="CEO, Gunpoint" />
		<Investor image={investor} name="Julia Rogers" designation="Partner, Suicidal Ventures" />
		<Investor image={investor} name="Robert Smith" designation="CEO, Gunpoint" />
		<Investor image={investor} name="Julia Rogers" designation="Partner, Suicidal Ventures" />
	</div>
</section>
<section>
	<div class="flex justify-center pt-16">
		<img src={trust} alt="" width="200" />
	</div>
	<h2 class="font-quincy font-medium text-3xl text-center">Money is made.</h2>
	<h2 class="font-quincy font-medium text-3xl text-center">
		Trust is <span class="text-accent"> gained.</span>
	</h2>
	<div class="flex justify-center">
		<p class="font-articulat font-medium w-2/3 text-center mt-4">
			Accouche is backed by visionaries who believe local is the new global.
		</p>
	</div>
	<div class="flex justify-center">
		<a
			href="https://api.whatsapp.com/send?phone=918368346162&text=Hi,%20here%20to%20invest%20on%20Accouche."
			class="px-12 py-4 bg-primary text-base-100 rounded-full mt-7"
			target="_blank">Invest in Accouche</a
		>
	</div>
</section>

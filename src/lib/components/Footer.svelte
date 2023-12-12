<script>
	import logo from '$lib/images/footer-logo.png';
	import twitter from '$lib/images/twitter.png';
	import whatsapp from '$lib/images/whatsapp.png';
	import linkedin from '$lib/images/linkedin.png';
</script>

<footer class="mx-auto w-full max-w-6xl">
	<div class="flex justify-center mt-16">
		<img src={logo} alt="" />
	</div>
	<h2 class="text-center font-wayfinder font-bold text-3xl text-[#24181D] mt-4 mb-1">
		Accouche Capital
	</h2>
	<p class="text-center text-sm font-articulat font-medium mb-1 text-[#434331C2]">
		Investing in small-town dreams.
	</p>
	<p class="text-center text-xs text-[#2C2C1970] font-articulat font-medium">
		1st Floor, Daden, Main Road, Naharkatia,
	</p>
	<p class="text-center text-xs text-[#2C2C1970] font-articulat font-medium">
		Dibrugarh, Assam 786610
	</p>
	<div class="flex justify-between px-32 my-6">
		<img src={twitter} alt="" />
		<img src={whatsapp} alt="" />
		<img src={linkedin} alt="" />
	</div>
</footer>

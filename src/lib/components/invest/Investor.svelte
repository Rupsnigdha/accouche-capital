<script lang="ts">
	export let image: string;
	export let name: string;
	export let designation: string;
</script>

<div class="w-full">
	<div class="w-full">
		<img src={image} alt="" class="object-cover w-full" />
	</div>
	<div>
		<h3 class="text-center font-articulat font-bold pt-4">{name}</h3>
		<p class="text-center font-articulat text-xs">{designation}</p>
	</div>
</div>

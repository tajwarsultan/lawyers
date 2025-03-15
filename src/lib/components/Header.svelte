<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		const sideMenu = document.getElementById('side-menu');
		const menuButton = document.getElementById('menu-button');

		if (
			isMenuOpen &&
			sideMenu &&
			menuButton &&
			!sideMenu.contains(event.target as Node) &&
			!menuButton.contains(event.target as Node)
		) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});
</script>

<header class="bg-blue-50 p-4">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="text-2xl font-bold text-teal-600">
			<img src="/images/logo.png" alt="YourSide" class="h-8" />
		</a>

		<button
			id="menu-button"
			class="p-2 text-teal-600 focus:outline-none"
			onclick={toggleMenu}
			aria-label="Menu"
		>
			<div class="mb-1.5 h-0.5 w-6 bg-teal-600"></div>
			<div class="mb-1.5 h-0.5 w-6 bg-teal-600"></div>
			<div class="h-0.5 w-6 bg-teal-600"></div>
		</button>
	</div>
</header>

{#if isMenuOpen}
	<button
		class="bg-opacity-50 fixed inset-0 z-40 bg-black"
		onclick={toggleMenu}
		onkeydown={(event) => event.key === 'Enter' && toggleMenu()}
		aria-label="Close menu"
	></button>
{/if}

<!-- Side Menu -->
<div
	id="side-menu"
	class="fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out"
	class:translate-x-0={isMenuOpen}
	class:translate-x-full={!isMenuOpen}
>
	<div class="border-b p-4">
		<div class="flex items-center justify-between">
			<span class="text-lg font-bold">Menu</span>
			<button
				onclick={toggleMenu}
				class="text-gray-500 hover:text-gray-700 focus:outline-none"
				aria-label="Close menu"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</button>
		</div>
	</div>

	<nav class="p-4">
		<ul>
			<li class="mb-2">
				<a href="/" class="block rounded p-2 hover:bg-blue-50">Home</a>
			</li>
			<li class="mb-2">
				<a href="/region/piedmont" class="block rounded p-2 hover:bg-blue-50">Piedmont Region</a>
			</li>
			<li class="mb-2">
				<a href="/about" class="block rounded p-2 hover:bg-blue-50">About</a>
			</li>
			<li class="mb-2">
				<a href="/contact" class="block rounded p-2 hover:bg-blue-50">Contact</a>
			</li>
		</ul>
	</nav>
</div>

<style>
	.translate-x-full {
		transform: translateX(100%);
	}

	.translate-x-0 {
		transform: translateX(0);
	}
</style>

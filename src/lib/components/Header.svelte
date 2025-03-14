<script lang="ts">
    import { onMount } from 'svelte';
    import logo from '$lib/images/github.svg?url';
    
    let isMenuOpen = false;
    
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  
    // Close menu when clicking outside
    function handleClickOutside(event: MouseEvent) {
      const sideMenu = document.getElementById('side-menu');
      if (isMenuOpen && sideMenu && !sideMenu.contains(event.target as Node)) {
        isMenuOpen = false;
      }
    }
  
    onMount(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  </script>
  
  <header class="bg-blue-50 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-teal-600 text-2xl font-bold">
        <img src={logo} alt="YourSide" class="h-8" />
      </a>
      
      <button 
        class="text-teal-600 p-2 focus:outline-none"
        on:click={toggleMenu}
        aria-label="Menu"
      >
        <div class="w-6 h-0.5 bg-teal-600 mb-1.5"></div>
        <div class="w-6 h-0.5 bg-teal-600 mb-1.5"></div>
        <div class="w-6 h-0.5 bg-teal-600"></div>
      </button>
    </div>
  </header>
  
  {#if isMenuOpen}
    <div 
      id="side-menu"
      class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50"
      class:translate-x-0={isMenuOpen}
      class:translate-x-full={!isMenuOpen}
    >
      <div class="p-4 border-b">
        <div class="flex justify-between items-center">
          <span class="font-bold text-lg">Menu</span>
          <button 
            on:click={toggleMenu}
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <nav class="p-4">
        <ul>
          <li class="mb-2">
            <a href="/" class="block p-2 hover:bg-blue-50 rounded">Home</a>
          </li>
          <li class="mb-2">
            <a href="/region/piedmont" class="block p-2 hover:bg-blue-50 rounded">Piedmont Region</a>
          </li>
          <li class="mb-2">
            <a href="/about" class="block p-2 hover:bg-blue-50 rounded">About</a>
          </li>
          <li class="mb-2">
            <a href="/contact" class="block p-2 hover:bg-blue-50 rounded">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  {/if}
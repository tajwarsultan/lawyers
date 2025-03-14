<script lang="ts">
    import type { Lawyer } from '$lib/types/lawyer';
    import LawyerCard from './LawyerCard.svelte';
    import Pagination from './Pagination.svelte';
    
    export let lawyers: Lawyer[] = [];
    export let title: string = '';
    export let subtitle: string = '';
    
    // Pagination
    const itemsPerPage = 5;
    let currentPage = 1;
    
    $: paginatedLawyers = lawyers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    
    $: totalPages = Math.ceil(lawyers.length / itemsPerPage);
    
    function handlePageChange(page: number) {
      currentPage = page;
      window.scrollTo(0, 0);
    }
  </script>
  
  <div class="max-w-4xl mx-auto px-4">
    {#if title}
      <h1 class="text-2xl md:text-3xl text-navy-800 text-center font-bold my-6">{title}</h1>
    {/if}
    
    {#if subtitle}
      <h2 class="text-xl text-center text-gray-700 mb-6">{subtitle}</h2>
    {/if}
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      {#each paginatedLawyers as lawyer}
        <LawyerCard {lawyer} />
      {/each}
    </div>
    
    {#if totalPages > 1}
      <Pagination 
        {currentPage} 
        {totalPages} 
        onChange={handlePageChange} 
      />
    {/if}
  </div>
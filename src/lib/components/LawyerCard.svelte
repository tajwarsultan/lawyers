<script lang="ts">
    import { goto } from '$app/navigation';
    import type { Lawyer } from '$lib/types/lawyer';
    import ConsultInfo from './ConsultInfo.svelte';
    
    export let lawyer: Lawyer;
    
    function viewProfile() {
      if (lawyer.id) {
        goto(`/lawyer/${lawyer.id}`);
      }
    }
  </script>
  
  <div class="border-b py-4 hover:bg-blue-50">
    <div class="flex">
      <button type="button" class="w-24 h-24 mr-4 flex-shrink-0 cursor-pointer" onclick={viewProfile} aria-label="View Profile">
        <img 
          src={lawyer.photo} 
          alt={lawyer.lawyer} 
          class="w-full h-full object-cover rounded-full border"
        />
      </button>
      
      <div class="flex-grow">
        <button class="text-navy-700 text-xl font-medium cursor-pointer bg-transparent border-none p-0" onclick={viewProfile} aria-label="View Profile" onkeydown={(e) => e.key === 'Enter' && viewProfile()}>
          {lawyer.lawyer}
        </button>
        <p class="text-gray-700">{lawyer.firm}</p>
        
        {#if lawyer.street}
          <p class="text-gray-600 text-sm">
            {lawyer.street}{lawyer.ste ? `, ${lawyer.ste}` : ''}, {lawyer.city}, {lawyer.st} {lawyer.zip}
          </p>
        {:else}
          <p class="text-gray-600 text-sm">
            {lawyer.city}, {lawyer.st} {lawyer.zip}
          </p>
        {/if}
        
        {#if lawyer.practice}
          <p class="text-gray-700 text-sm mt-2">{lawyer.practice}</p>
        {/if}
        
        {#if lawyer.statement}
          <p class="text-gray-600 italic text-sm mt-1">{lawyer.statement}</p>
        {/if}
        
        {#if lawyer.rating}
          <div class="flex items-center mt-2">
            <span class="text-xl font-bold">{lawyer.rating.toFixed(1)}</span>
            <div class="flex text-yellow-400 ml-1">
              <span>★★★★★</span>
            </div>
            {#if lawyer.reviewCount}
              <span class="text-gray-500 text-sm ml-1">Read our {lawyer.reviewCount} reviews</span>
            {/if}
          </div>
        {/if}
        
        <div class="mt-2">
          {#if lawyer["con-1"]}
            <ConsultInfo consultType={lawyer["con-1"]} />
          {/if}
          {#if lawyer["con-2"]}
            <ConsultInfo consultType={lawyer["con-2"]} />
          {/if}
          {#if lawyer["con-3"]}
            <ConsultInfo consultType={lawyer["con-3"]} />
          {/if}
        </div>
        
        {#if lawyer.phone}
          <div class="mt-2">
            <a 
              href={`tel:${lawyer.phone}`} 
              class="inline-block bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-700"
            >
              {lawyer.phone}
            </a>
          </div>
        {/if}
        
        {#if lawyer.website}
          <div class="mt-2">
            <a 
              href={lawyer.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-block bg-teal-600 text-white rounded-full px-4 py-1 text-sm font-medium hover:bg-teal-700"
            >
              Visit Website
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
<script lang="ts">
    import { page } from '$app/stores';
    import { getLawyerById } from '$lib/utils/lawyers';
    import ConsultInfo from '$lib/components/ConsultInfo.svelte';
    
    const lawyerId = $page.params.id;
    const lawyer = getLawyerById(lawyerId);
  </script>
  
  <svelte:head>
    <title>{lawyer ? `${lawyer.lawyer} - Divorce Lawyer` : 'Lawyer Not Found'}</title>
    <meta name="description" content={lawyer ? `Learn about ${lawyer.lawyer}, divorce lawyer in ${lawyer.city}, ${lawyer.state}` : 'Lawyer profile not found'} />
  </svelte:head>
  
  {#if lawyer}
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Header with background -->
        <div class="bg-blue-900 text-white p-6">
          <h1 class="text-2xl md:text-3xl font-bold">{lawyer.lawyer}</h1>
          <p class="text-lg">{lawyer.firm}</p>
        </div>
        
        <div class="p-6">
          <div class="flex flex-col md:flex-row">
            <!-- Lawyer photo -->
            <div class="md:w-1/3 mb-4 md:mb-0 md:pr-6">
              <img 
                src={lawyer.photo} 
                alt={lawyer.lawyer} 
                class="w-48 h-48 object-cover rounded-full border-4 border-blue-100 mx-auto"
              />
              
              {#if lawyer.rating}
                <div class="flex items-center justify-center mt-4">
                  <span class="text-2xl font-bold">{lawyer.rating.toFixed(1)}</span>
                  <div class="flex text-yellow-400 ml-2">
                    <span>★★★★★</span>
                  </div>
                </div>
                {#if lawyer.reviewCount}
                  <p class="text-center text-gray-500 mt-1">Based on {lawyer.reviewCount} reviews</p>
                {/if}
              {/if}
            </div>
            
            <!-- Lawyer details -->
            <div class="md:w-2/3">
              <div class="mb-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
                
                {#if lawyer.street}
                  <p class="text-gray-700">
                    {lawyer.street}{lawyer.ste ? `, ${lawyer.ste}` : ''}<br>
                    {lawyer.city}, {lawyer.st} {lawyer.zip}
                  </p>
                {:else}
                  <p class="text-gray-700">
                    {lawyer.city}, {lawyer.st} {lawyer.zip}
                  </p>
                {/if}
                
                {#if lawyer.phone}
                  <p class="mt-2">
                    <a 
                      href={`tel:${lawyer.phone}`} 
                      class="inline-block bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-700"
                    >
                      {lawyer.phone}
                    </a>
                  </p>
                {/if}
                
                {#if lawyer.website}
                  <p class="mt-2">
                    <a 
                      href={lawyer.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="inline-block bg-teal-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-teal-700"
                    >
                      Visit Website
                    </a>
                  </p>
                {/if}
              </div>
              
              <div class="mb-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Practice Areas</h2>
                {#if lawyer.practice}
                  <p class="text-gray-700">{lawyer.practice}</p>
                {:else}
                  <p class="text-gray-700 italic">Practice areas not specified</p>
                {/if}
              </div>
              
              <div class="mb-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Consultation Options</h2>
                <div class="flex flex-wrap">
                  {#if lawyer["con-1"]}
                    <ConsultInfo consultType={lawyer["con-1"]} />
                  {/if}
                  {#if lawyer["con-2"]}
                    <ConsultInfo consultType={lawyer["con-2"]} />
                  {/if}
                  {#if lawyer["con-3"]}
                    <ConsultInfo consultType={lawyer["con-3"]} />
                  {/if}
                  {#if !lawyer["con-1"] && !lawyer["con-2"] && !lawyer["con-3"]}
                    <p class="text-gray-700 italic">Consultation options not specified</p>
                  {/if}
                </div>
              </div>
            </div>
          </div>
          
          {#if lawyer.statement}
            <div class="mt-8 border-t pt-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">Personal Statement</h2>
              <p class="text-gray-700 italic">{lawyer.statement}</p>
            </div>
          {/if}
          
          {#if lawyer.reviews && lawyer.reviews.trim() !== ''}
            <div class="mt-8 border-t pt-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">Client Reviews</h2>
              <div class="bg-gray-50 p-4 rounded">
                <!-- Instead of using the script directly, we'll create a simple review display -->
                <p class="text-gray-700">Reviews are available on the lawyer's website.</p>
              </div>
            </div>
          {/if}
          
          <div class="mt-8 text-center">
            <a href="/" class="text-blue-600 hover:text-blue-800">
              &larr; Back to lawyer listings
            </a>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Lawyer Not Found</h1>
      <p class="text-gray-600 mb-6">The lawyer profile you're looking for could not be found.</p>
      <a href="/" class="inline-block bg-blue-600 text-white rounded px-6 py-2 font-medium hover:bg-blue-700">
        Return to Home
      </a>
    </div>
  {/if}
<script lang="ts">
    import { page } from '$app/stores';
    import { getLawyersByRegion } from '$lib/utils/lawyers';
    import LawyerList from '$lib/components/LawyerList.svelte';
    
    const region = $page.params.region;
    $: regionName = region.charAt(0).toUpperCase() + region.slice(1);
    $: lawyers = getLawyersByRegion(region);
  </script>
  
  <svelte:head>
    <title>{regionName} Region Divorce Lawyers - YourSide</title>
    <meta name="description" content={`Find divorce lawyers in the ${regionName} region with YourSide.`} />
  </svelte:head>
  
  <div class="bg-blue-900 text-white py-12">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">DIVORCE NORTH CAROLINA</h1>
      <h2 class="text-xl md:text-2xl">{regionName} Region</h2>
    </div>
  </div>
  
  <LawyerList
    lawyers={lawyers}
    title={`Divorce Lawyers - ${regionName} Region`}
    subtitle="Find the right legal representation for your divorce"
  />
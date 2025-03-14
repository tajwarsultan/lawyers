<script lang="ts">
	import { lawyersWithIds } from '$lib/utils/lawyers';
	import LawyerList from '$lib/components/LawyerList.svelte';
	
	// For the homepage, we'll show lawyers from the Piedmont region
	const piedmontLawyers = lawyersWithIds.filter(lawyer => lawyer.region === 'Piedmont');
  </script>
  
  <svelte:head>
	<title>YourSide - Find a Divorce Lawyer</title>
	<meta name="description" content="Find the best divorce lawyers in your area with YourSide." />
  </svelte:head>
  
  <div class="bg-blue-900 text-white py-12">
	<div class="max-w-4xl mx-auto px-4 text-center">
	  <h1 class="text-3xl md:text-4xl font-bold mb-4">DIVORCE NORTH CAROLINA</h1>
	  <h2 class="text-xl md:text-2xl">Piedmont - Raleigh Durham</h2>
	</div>
  </div>
  
  <div class="max-w-4xl mx-auto px-4 py-8">
	<div class="bg-white shadow-md rounded-lg p-6 mb-8">
	  <h2 class="text-xl font-bold text-gray-800 mb-4">Considerations when choosing a Divorce Lawyer</h2>
	  
	  <p class="mb-4 text-gray-700">
		When considering a no-cost or paid consultation, it is important to be aware that a lawyer may provide only general legal 
		information before being formally hired.
	  </p>
	  
	  <h3 class="font-semibold text-gray-800 mb-2">No-cost consultations</h3>
	  <p class="mb-4 text-gray-700">
		may be brief, as little as 15 minutes. A brief consult is intended as a general overview of the divorce 
		process, to cover fees you might have to pay, and to get a sense if you and the lawyer feel like a good fit for working together.
	  </p>
	  
	  <h3 class="font-semibold text-gray-800 mb-2">For paid consultations</h3>
	  <p class="mb-4 text-gray-700">
		you may expect the lawyer to spend time discussing the specifics of your case. Given your 
		circumstances, the lawyer may address potential issues you may face and should inform you if they can provide effective 
		counsel for your situation.
	  </p>
	  
	  <h3 class="font-semibold text-gray-800 mb-2">Conflicting-Out</h3>
	  <p class="mb-4 text-gray-700">
		occurs when one spouse has discussed confidential information with a lawyer. The lawyer and all lawyers 
		at a firm are then barred from representing the other spouse. A free consultation could cause a lawyer to be conflicted out.
	  </p>
	  
	  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
		<div class="flex items-center">
		  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
			<span class="text-white text-xs">💰</span>
		  </div>
		  <span class="text-sm">Paid Consult</span>
		</div>
		
		<div class="flex items-center">
		  <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-2">
			<span class="text-white text-xs">📹</span>
		  </div>
		  <span class="text-sm">Video Consult</span>
		</div>
		
		<div class="flex items-center">
		  <div class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
			<span class="text-white text-xs">💬</span>
		  </div>
		  <span class="text-sm">Voice/Text</span>
		</div>
		
		<div class="flex items-center">
		  <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
			<span class="text-white text-xs">🆓</span>
		  </div>
		  <span class="text-sm">No-Cost Consult</span>
		</div>
		
		<div class="flex items-center">
		  <div class="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mr-2">
			<span class="text-white text-xs">📱</span>
		  </div>
		  <span class="text-sm">Phone Consult</span>
		</div>
		
		<div class="flex items-center">
		  <div class="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-2">
			<span class="text-white text-xs">🔊</span>
		  </div>
		  <span class="text-sm">Voice Calls Only</span>
		</div>
	  </div>
	</div>
	
	<LawyerList
	  lawyers={piedmontLawyers}
	  title="Divorce Lawyers - Piedmont Region"
	/>
  </div>
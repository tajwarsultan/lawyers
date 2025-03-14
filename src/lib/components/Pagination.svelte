<script lang="ts">
	export let currentPage: number;
	export let totalPages: number;
	export let onChange: (page: number) => void;

	const pageRange = 2;

	$: pages = generatePageArray(currentPage, totalPages, pageRange);

	function generatePageArray(current: number, total: number, range: number) {
		let result = [];

		// Always include first page
		result.push(1);

		// Calculate start and end of page range around current page
		let rangeStart = Math.max(2, current - range);
		let rangeEnd = Math.min(total - 1, current + range);

		// Add ellipsis if there's a gap after page 1
		if (rangeStart > 2) {
			result.push('...');
		}

		// Add pages in range
		for (let i = rangeStart; i <= rangeEnd; i++) {
			result.push(i);
		}
		if (rangeEnd < total - 1) {
			result.push('...');
		}

		// Always include last page if total > 1
		if (total > 1) {
			result.push(total);
		}

		return result;
	}
</script>

<div class="my-6 flex justify-center">
	<nav class="inline-flex rounded-md shadow">
		<!-- Previous button -->
		<button
			on:click={() => onChange(currentPage - 1)}
			disabled={currentPage === 1}
			class="rounded-l-md border border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
		>
			&lt;
		</button>

		<!-- Page numbers -->
		{#each pages as page}
			{#if page === '...'}
				<span class="border-t border-b border-gray-300 bg-white px-3 py-1 text-gray-500">
					...
				</span>
			{:else if typeof page === 'number'}
				<button
					on:click={() => onChange(page)}
					class="border border-l-0 border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50"
					class:bg-blue-50={currentPage === page}
					class:text-blue-600={currentPage === page}
					class:font-medium={currentPage === page}
				>
					{page}
				</button>
			{/if}
		{/each}

		<!-- Next button -->
		<button
			on:click={() => onChange(currentPage + 1)}
			disabled={currentPage === totalPages}
			class="rounded-r-md border border-l-0 border-gray-300 bg-white px-3 py-1 text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
		>
			&gt;
		</button>
	</nav>
</div>

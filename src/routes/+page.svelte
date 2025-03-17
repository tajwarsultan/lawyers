<script lang="ts">
	import { lawyersWithIds } from '$lib/utils/lawyers';
	import LawyerList from '$lib/components/LawyerList.svelte';
	import { onMount } from 'svelte';

	const piedmontLawyers = lawyersWithIds.filter(lawyer => lawyer.region === 'Piedmont');

	const testimonials = [
		{ name: "Jane D.", text: "My lawyer was incredibly supportive and knowledgeable. Highly recommend!" },
		{ name: "Mark S.", text: "A smooth process from start to finish. Very professional service." },
		{ name: "Linda K.", text: "Helped me navigate a tough situation with ease and confidence." }
	];

	const faqs = [
		{ question: "How do I choose the right divorce lawyer?", answer: "Look for experience, communication, and client reviews." },
		{ question: "How long does a divorce case usually take?", answer: "It depends on complexity but can take anywhere from a few months to over a year." },
		{ question: "Can I get a free consultation?", answer: "Many lawyers offer brief free consultations to discuss your case." }
	];

	let activeFaq = null;
	function toggleFaq(index) {
		activeFaq = activeFaq === index ? null : index;
	}

	// Sliding Testimonials
	let currentTestimonial = 0;
	onMount(() => {
		setInterval(() => {
			currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		}, 5000);
	});
</script>

<svelte:head>
	<title>YourSide - Find a Divorce Lawyer</title>
	<meta name="description" content="Find the best divorce lawyers in your area with YourSide." />
</svelte:head>

<div class="bg-blue-900 text-white py-12">
	<div class="max-w-4xl mx-auto px-4 text-center">
		<h1 class="text-3xl md:text-4xl font-bold mb-4">DIVORCE NORTH CAROLINA</h1>
		<h2 class="text-xl md:text-2xl">Piedmont - Raleigh Durham</h2>
		<button class="mt-4 bg-yellow-500 text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105">
			Find a Lawyer
		</button>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="bg-white shadow-md rounded-lg p-6 mb-8">
		<h2 class="text-xl font-bold text-gray-800 mb-4">Testimonials</h2>
		<div class="overflow-hidden relative h-24">
			{#each testimonials as testimonial, index}
				<div class="absolute w-full transition-opacity duration-1000" style="opacity: {index === currentTestimonial ? 1 : 0};">
					<p class="text-gray-700 italic">"{testimonial.text}"</p>
					<p class="text-right font-semibold text-gray-800">- {testimonial.name}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-white shadow-md rounded-lg p-6 mb-8">
		<h2 class="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
		<div class="space-y-4">
			{#each faqs as faq, index}
				<div class="border-b border-gray-300 pb-2 mb-2">
					<h3 class="font-semibold text-gray-800 cursor-pointer hover:text-blue-600" on:click={() => toggleFaq(index)}>
						{faq.question}
					</h3>
					{#if activeFaq === index}
						<p class="text-gray-700 mt-2 transition-all duration-300">{faq.answer}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-white shadow-md rounded-lg p-6 mb-8">
		<h2 class="text-xl font-bold text-gray-800 mb-4">Contact Us</h2>
		<form class="space-y-4">
			<input type="text" placeholder="Your Name" class="w-full px-4 py-2 border rounded-lg" required>
			<input type="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded-lg" required>
			<textarea placeholder="Your Message" class="w-full px-4 py-2 border rounded-lg" required></textarea>
			<button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
				Send Message
			</button>
		</form>
	</div>

	<LawyerList lawyers={piedmontLawyers} title="Divorce Lawyers - Piedmont Region" />
</div>

import type { Lawyer } from '$lib/types/lawyer';

// This would be imported from your backend or API
export const lawyers: Lawyer[] = [
  // Your JSON data would be here
];

// Add IDs to the lawyers for routing
export const lawyersWithIds = lawyers.map((lawyer, index) => ({
  ...lawyer,
  id: (index + 1).toString(),
  rating: lawyer.lawyer === "Jared A. Frankel" || lawyer.lawyer === "Joseph R. Greschner" ? 5.0 : undefined,
  reviewCount: lawyer.lawyer === "Jared A. Frankel" ? 82 : lawyer.lawyer === "Joseph R. Greschner" ? 52 : undefined
}));

export const getLawyerById = (id: string) => {
  return lawyersWithIds.find(lawyer => lawyer.id === id);
};

export const getLawyersByRegion = (region: string) => {
  return lawyersWithIds.filter(lawyer => lawyer.region.toLowerCase() === region.toLowerCase());
};
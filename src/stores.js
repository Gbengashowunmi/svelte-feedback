import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Learning svelte is fun and every developer ",
  },
  {
    id: 2,
    rating: 9,
    text: "Svelte is great as a framework to be added to you dev arsenal",
  },
  {
    id: 3,
    rating: 8,
    text: "Svelte is twice as fast as react",
  },
]);

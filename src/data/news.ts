export interface NewsItem {
  date: string;
  isoDate: string;
  text: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: "Sep 2026",
    isoDate: "2026-09",
    text: "Flow Annealing Posterior Sampling (FLAPS) will appear at NeurIPS 2026.",
    link: "https://arxiv.org/abs/2606.22346",
  },
  {
    date: "Sep 2025",
    isoDate: "2025-09",
    text: "Operator Flow Matching was accepted to NeurIPS 2025 as a Spotlight paper.",
    link: "https://arxiv.org/abs/2501.04126",
  },
];

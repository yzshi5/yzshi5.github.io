export interface SiteLink {
  label: string;
  href: string;
  external?: boolean;
}

const cvPath = "/cv/Yaozhong_Shi_CV.pdf";

const links: SiteLink[] = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=3h4T-YgAAAAJ",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/yzshi5",
    external: true,
  },
  { label: "CV", href: cvPath },
  { label: "Email", href: "mailto:yshi5@caltech.edu" },
];

export const site = {
  name: "Yaozhong Shi",
  title: "Yaozhong Shi | Scientific Machine Learning",
  description:
    "Yaozhong Shi is a researcher at Caltech working on scientific machine learning, generative modeling, neural operators, PDEs, and earthquake science.",
  url: "https://yzshi5.github.io",
  role: "Postdoctoral Scholar",
  institution: "California Institute of Technology",
  profileImage: "/images/profile/profile.jpg",
  profileAlt: "Portrait of Yaozhong Shi",
  cvPath,
  about: [
    "I am a Postdoctoral Scholar at the California Institute of Technology working at the intersection of scientific machine learning, generative modeling, and computational science.",
    "My research focuses on generative modeling in function spaces, AI for physical systems, and earthquake science. I develop flow-matching and neural-operator methods for stochastic processes, functional regression, Bayesian inverse problems, PDE surrogate modeling, and uncertainty quantification, together with generative models for regional earthquake wavefields and broadband ground motions.",
  ],
  links,
} as const;

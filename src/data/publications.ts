export interface Publication {
  number: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  award?: string;
  paper?: string;
  code?: string;
  project?: string;
  arxiv?: string;
  image?: string;
  imageAlt?: string;
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    number: 8,
    title:
      "Flow Annealing Posterior Sampling for Function-Space Regression and Inverse Problems",
    authors: ["Yaozhong Shi", "Zachary E. Ross", "Yisong Yue"],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2026,
    paper: "https://arxiv.org/abs/2606.22346",
    code: "https://github.com/yzshi5/FLAPS",
    image: "/images/publications/flaps-demo.png",
    imageAlt:
      "FLAPS workflow for function-space prior learning and posterior sampling",
    selected: true,
  },
  {
    number: 7,
    title:
      "Scalable Physics-Inspired Generative Modeling of Coherent Regional Earthquake Wavefields",
    authors: [
      "Yaozhong Shi",
      "Grigorios Lavrentiadis",
      "Konstantinos Tsalouchidis",
      "Zachary E. Ross",
      "David McCallen",
      "Caifeng Zou",
      "Kamyar Azizzadenesheli",
      "Domniki Asimaki",
    ],
    venue: "Under Review",
    year: 2026,
  },
  {
    number: 6,
    title: "Enforcing Reciprocity in Operator Learning for Seismic Wave Propagation",
    authors: [
      "Caifeng Zou",
      "Yaozhong Shi",
      "Zachary E. Ross",
      "Robert W. Clayton",
      "Kamyar Azizzadenesheli",
    ],
    venue: "Seismological Research Letters",
    year: 2026,
  },
  {
    number: 5,
    title: "Stochastic Process Learning via Operator Flow Matching",
    authors: [
      "Yaozhong Shi",
      "Zachary E. Ross",
      "Domniki Asimaki",
      "Kamyar Azizzadenesheli",
    ],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2025,
    award: "Spotlight, top 3.5%",
    paper: "https://arxiv.org/abs/2501.04126",
    code: "https://github.com/yzshi5/SPL_OFM",
    image: "/images/publications/operator-flow-matching.png",
    imageAlt:
      "Operator Flow Matching framework for stochastic-process learning and posterior sampling",
    selected: true,
  },
  {
    number: 4,
    title: "Mesh-Informed Neural Operator: A Transformer Generative Approach",
    authors: [
      "Yaozhong Shi",
      "Zachary E. Ross",
      "Domniki Asimaki",
      "Kamyar Azizzadenesheli",
    ],
    venue: "Transactions on Machine Learning Research",
    year: 2025,
    paper: "https://arxiv.org/abs/2506.16656",
    code: "https://github.com/yzshi5/MINO",
    image: "/images/publications/mesh-informed-neural-operator.png",
    imageAlt:
      "Mesh-Informed Neural Operator architecture with geometry encoder and cross-attention decoder",
    selected: true,
  },
  {
    number: 3,
    title: "Universal Functional Regression with Neural Operator Flows",
    authors: [
      "Yaozhong Shi",
      "Angela F. Gao",
      "Zachary E. Ross",
      "Kamyar Azizzadenesheli",
    ],
    venue: "Transactions on Machine Learning Research",
    year: 2024,
  },
  {
    number: 2,
    title:
      "Broadband Ground-Motion Synthesis via Generative Adversarial Neural Operators: Development and Validation",
    authors: [
      "Yaozhong Shi",
      "Grigorios Lavrentiadis",
      "Domniki Asimaki",
      "Zachary E. Ross",
      "Kamyar Azizzadenesheli",
    ],
    venue: "Bulletin of the Seismological Society of America",
    year: 2024,
  },
  {
    number: 1,
    title: "Effect of grain size distribution on the shear band thickness evolution in sand",
    authors: [
      "Hadrien Rattez",
      "Yaozhong Shi",
      "Alexandre Sac-Morane",
      "Timothée Klaeyle",
      "Boleslaw Mielniczuk",
      "Manolis Veveakis",
    ],
    venue: "Géotechnique",
    year: 2022,
  },
];

export const selectedPublications = publications.filter(
  (publication) => publication.selected,
);

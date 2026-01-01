export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: {
    repo?: string;
    demo?: string;
    writeup?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Vanstagram",
    description:
      "A scalable social media platform inspired by Instagram and Facebook. Implements core features such as user auth, posting/commenting on home and wall pages, friending, and settings modifications. Also includes personalized news feeds via a modified adsorption algorithm, live chat system using Socket.io, and profile picture customization.",
    highlights: [
      "What you built / owned (data pipeline, infra, model, etc.)",
      "Key metric or result (latency, accuracy, scale, cost, etc.)",
      "Hard part you solved (edge case, reliability, correctness, etc.)",
    ],
    tags: ["Next.js", "TypeScript", "Python", "AWS", "Spark"],
    links: {
      repo: "https://github.com/yourhandle/project",
      demo: "https://project-demo.com",
      writeup: "https://yourdomain.com/projects#project-name",
    },
  },
];
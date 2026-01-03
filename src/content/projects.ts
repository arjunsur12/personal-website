export type ProjectImage = {
  src: string;        // e.g. "/projects/vanstagram/cover.png"
  alt: string;        // accessibility text
  caption?: string;   // optional
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  images: ProjectImage[]; // <-- NEW
  links: {
    repo?: string;
    demo?: string;
    writeup?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "Vanstagram",
    title: "Vanstagram",
    description:
      "A scalable social media platform inspired by Instagram and Facebook. Implements core features such as user auth, posting/commenting on home and wall pages, friending, and settings modifications. Also includes personalized news feeds via a modified adsorption algorithm, live chat system using Socket.io, and profile picture customization.",
    highlights: [
      "My Contributions - (repo private by course policy)",
      "Planned and implemented backend architecture and route/database helper functions using AWS DynamoDB & S3 to ensure scalability and reliability.",
      "Implemented a modified adsorption algorithm using Apache Spark/Livy & AWS EMR for personalized news feeds along with the article liking system to determine edge weights.",
      "Created a friend-friend graph visualization tool using vis.js to analyze social connections and network structure.",
      "Assisted in frontend page organization and styling using HTML, CSS, and JavaScript to enhance user experience.",
    ],
    tags: ["AWS DynamoDB", "EC2", "S3", "EMR", "Node.js", "HTML", "CSS", "JavaScript", "Socket.io", "Apache Spark/Livy", "Java"],
    images: [
      {
        src: "/projects/vanstagram/vanstagram_img_1.png",
        alt: "Vanstagram Home Page",
        caption: "Home Page - displays friend posts/status updates, daily news, and active/inactive friends",
      },
      {
        src: "/projects/vanstagram/vanstagram_img_2.png",
        alt: "Vanstagram Chat Page",
        caption: "Chat Page - Real-time messaging using Socket.io",
      }
    ],
    links: {
    },
  },
];
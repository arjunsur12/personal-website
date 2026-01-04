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
    devpost?: string;
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
  {
    slug: "EdCamelBot",
    title: "EdCamelBot",
    description:
      "A Slack bot for the CIS 1200 Teaching Assistants which automatically sends a message whenever a student asks a question on EdDiscussion, allowing TAs to respond promptly and easily collaborate over difficult questions. Pending LLM-based FAQ generation to further assist TAs in addressing common student queries.",
    highlights: [
      "Uses EdDiscussion API to monitor message updates.",
      "Sends formatted Slack messages to a designated channel using Slack API whenever a new question is posted.",
      "Automates deployment and updates using Github Actions.",
      "In the process of integrating LLM-based FAQ generation.",
    ],
    tags: ["Python", "Slack API", "Github Actions"],
    images: [
      {
        src: "/projects/edcamelbot/edcamelbot_img_1.png",
        alt: "EdCamelBot Slack Message",
        caption: "Slack message sent by EdCamelBot when a new question is posted on EdDiscussion",
      }
    ],
    links: {
      repo: "https://github.com/arjunsur12/EdSlackPoster",
    },
  },
  {
    slug: "SustainaView",
    title: "SustainaView",
    description:
      "SustainaView is a mobile app that makes sustainable interior design easy and fun. Just snap a photo of your room, and our AI will give you personalized, eco-friendly suggestions, show you what your space could look like after a green makeover, and even break down the costs for you. It’s like having a sustainability expert and designer in your pocket!",
    highlights: [
      "Designed app UI/UX and implemented core features using React Native and Expo.",
      "Integrated Gemini 2.5-Flash and Gemini Nano Banana APIs for AI-generated design suggestions and image transformations.",
      "Utilized MongoDB Atlas for user data and design preference storage and AWS S3 for image storage.",
    ],
    tags: ["React Native", "Expo", "MongoDB Atlas", "AWS S3", "Gemini 2.5-Flash API", "Gemini Nano Banana API", "JavaScript"],
    images: [
      {
        src: "/projects/sustainaview/sustainaview_img_1.png",
        alt: "SustainaView App Screenshots",
        caption: "Screenshots of SustainaView app showcasing AI-generated sustainable interior design suggestions",
      }
    ],
    links: {
      repo: "https://github.com/KashGiannis34/SustainaView",
      devpost: "https://devpost.com/software/sustainaview",
    },
  },
  {
    slug: "Anti-Roll Bars",
    title: "Anti-Roll Bars",
    description:
      "Designed and tested anti-roll bars for UPenn's Formula SAE team to improve vehicle handling and stability during cornering maneuvers. Conducted simulations and real-world testing to optimize performance and ensure compliance with competition regulations.",
    highlights: [
      "Designed the anti-roll bars in CAD using Solidworks.",
      "Iterated over 10 designs for the front and rear to reach the desired stiffness values and safety factor using static structural FEA simulations in Ansys.",
      "Developed an improved stiffness calculation procedure using a 6-DOF suspension model in Microsoft Excel to better estimate the effects of the anti-roll bars on vehicle dynamics, improving accuracy by ~30%.",
    ],
    tags: ["Ansys", "Solidworks", "DFM/DFA", "Microsoft Excel"],
    images: [
      /*{
        src: "/projects/arb/arb_img_1.jpg",
        alt: "Anti-Roll Bars Testing Image",
        caption: "Testing setup used to evaluate whole system and component stiffness to improve model accuracy.",
      },*/
      {
        src: "/projects/arb/arb_img_2.png",
        alt: "Anti-Roll Bars Drawing",
        caption: "CAD drawing of one of the designed anti-roll bar blades.",
      }
    ],
    links: {
    },
  },
  {
    slug: "ArmLev",
    title: "ArmLev",
    description:
      "The ArmLev is a low-cost, wearable, and dual-mechanism arm-stabilization device aimed to assist individuals with a wide range of arm-tremor severities in performing activities of daily living (ADLs). It consists of two components, an elbow-stiffening device and an adjustable tuned mass damper to work across tremor frequencies.",
    highlights: [
      "Iterated 3D printed prototypes to optimize ergonomics, comfort, and usability based on a series of 5 tests.",
      "Achieved 90% accuracy in stiffening, activation within 0.3 seconds, handling 50N of force, and working for a wider range of frequencies than commercial devices, all while costing $136 and weighing <1.5 lbs.",
      "Won the 2024 Regeneron Science Talent Search (STS) Award for this project.",
    ],
    tags: ["Fusion360", "Arduino", "DFM/DFA", "3D Printing"],
    images: [
      {
        src: "/projects/armlev/armlev_img_1.png",
        alt: "ArmLev Final Device Image",
        caption: "Images of the final ArmLev devices.",
      }
    ],
    links: {
      writeup: "https://docs.google.com/document/d/1npGKq4i_w9-JdfB4WCHAKziVZppMp0CVLQ8EwbjQL6g/edit?usp=sharing",
    },
  }
];
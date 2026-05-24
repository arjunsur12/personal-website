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
    slug: "FedCast",
    title: "FedCast",
    description:
      "A central-bank policy-forecasting platform that infers Federal Reserve and ECB policymaker beliefs from unstructured communications data, then predicts upcoming rate decisions. Decomposes each meeting into five economic dimensions (employment, growth, inflation, financial conditions, uncertainty) with an importance weight and expected direction per dimension, combines them with realized macro data through estimated reaction functions, and forecasts the rate change (bps) and discrete action (hike/hold/cut).",
    highlights: [
      "Team Project, repo private as private data was utilized.",
      "Built a data pipeline ingesting and cleaning ~5,000 central-bank speeches and ~5,200 policy documents across the Fed and ECB into a Parquet feature backbone (20,000+ dimension-feature rows, 10,000+ macro/market control series, 416 policy decisions) with automated QC reporting.",
      "Implemented a sequential Bayesian belief-updating model (pgmpy) that processes speeches chronologically — each posterior becomes the next prior — blending transcript, prior, and macro evidence into a five-dimension belief state.",
      "Estimated Ridge + multinomial-logistic reaction functions per institution, benchmarking macro-only, belief-only, and combined feature sets to quantify the marginal signal of transcript-derived beliefs; backtested over 2012–2025 on ~2,300 monthly snapshots, reaching up to 95% hike/hold/cut classification accuracy and ~5–12 bps rate-change MAE in-sample.",
      "Orchestrated multi-step reasoning with LangGraph/LangChain and live context retrieval via the Perplexity API, surfacing evidence traces, historical analogs, and skeptic flags for interpretability.",
      "Shipped a Dockerized FastAPI service with synchronous and async job-based forecast endpoints, progress polling, and on-disk forecast caching, plus an interactive JS dashboard featuring belief-history timelines and a rotatable 3D policy-dimension view.",
    ],
    tags: ["Python", "pandas", "scikit-learn", "pgmpy", "LangChain/LangGraph", "Anthropic API", "Perplexity API", "FastAPI", "Docker", "PyArrow/Parquet", "JavaScript", "HTML", "CSS"],
    images: [
      {
        src: "/projects/fedcast/fedcast_1.png",
        alt: "FedCast Forecast Dashboard",
        caption: "Forecast Dashboard - five-dimension belief state, rate-change prediction, and hike/hold/cut action with confidence",
      },
      {
        src: "/projects/fedcast/fedcast_2.png",
        alt: "FedCast Network Visualization",
        caption: "Bayesian Network Visualization - 3D view of the five economic dimensions with importance weights and expected directions, plus evidence trace for interpretability",
      },
    ],
    links: {
    },
  },
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
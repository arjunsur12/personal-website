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
      "Team Project, repo private as private data was utilized. Created as part of Bridgewater Associates Immersion: AI for Innovation Hackathon Program.",
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
    slug: "Quasi-Static Vehicle Simulation",
    title: "Quasi-Static Vehicle Simulation",
    description:
      "Quasi-Static Simulation for Penn Electric Racing: simulates a parameterized car and track to predicts lap times, energy use, and competition scores to systematically justify design decisions. Built in Python with Pydantic-validated subsystem models. My current contributions focus on the accumulator thermal simulation, the drivetrain efficiency model, and a CFD-backed aerodynamic map.",
    highlights: [
      "Codebase private by team policy.",
      "Built a three-node transient cell thermal model (cell body, tab assembly, in-pack air) with temperature- and SOC-dependent internal resistance, entropic heat, Joule heat at the tab interconnects, Stefan-Boltzmann radiation, natural/forced convection (CFM-to-h correlation), and ideal-gas air density — integrated by forward-Euler over the QSS endurance current trace.",
      "Calibrated the thermal model against real Rev11 endurance telemetry via a coarse-to-fine 1-D sweep on the pack heat-rejection parameter, using energy-preserving RMS-vs-mean current resampling (RMS for heating, mean for SOC).",
      "Implemented a motor efficiency model as a 2-D tensor-product polynomial LUT (least-squares fit over RPM x torque CFD/dyno data, normalized inputs, Horner-method evaluation with out-of-bounds distance penalty), and inverted the implicit DC-bus power constraint tau*omega/eta(rpm,tau) <= P_limit by per-RPM bisection into a precomputed power-limited-torque table for O(1) runtime lookup, with automatic rebuild on parameter changes.",
      "Modeled the three-region motor torque curve (flat / field-weakening / cutoff), LUT-aware regenerative braking and coasting with RWD-vs-AWD motor-count conditioning, AWD 80 kW system power clipping, and added voltage derating to couple pack state into the available power limit.",
      "Replaced constant Cl/Cd aero coefficients with a CFD-backed aerodynamic map: a separable pitch x roll multiplier model for downforce, drag, and center-of-pressure, with body pitch/roll derived per simulation step from heave-spring and roll-stiffness suspension physics. Added attitude-driven center-of-pressure migration (front/rear downforce split) and a logarithmic radius-downforce factor for low-speed corners; validated with a Shapley-value decomposition of each effect's contribution to competition points.",
    ],
    tags: ["Python", "NumPy", "SciPy", "Pydantic", "Vehicle Dynamics", "Thermal Modeling", "Numerical Methods", "Lookup Tables", "Bisection", "CFD Data", "Battery Modeling", "Aerodynamics", "Jupyter", "FSAE"],
    images: [{
              src: "/projects/qss/qss_acc.png",
              alt: "QSS Accumulator Thermal Simulation",
              caption: "Accumulator Thermal Simulation - Example fitting of model to REV11 telemetry and thermals.",
             },
             {
              src: "/projects/qss/qss_eff.png",
              alt: "QSS Motor Efficiency Model",
              caption: "Motor Efficiency Model - Example 3D surface plot using the efficency model to determine optimal gear ratio and pack capacity given car parameters.",
             },
             {
              src: "/projects/qss/qss_aero.png",
              alt: "QSS Aerodynamic Model",
              caption: "Aerodynamic Model - Shapley-value decomposition of each effect's contribution to competition points, thus determining relative sensitivities.",
            }],
    links: {
    },
  },
  {
    slug: "PennOS",
    title: "PennOS",
    description:
      "A UNIX-like operating system simulator that runs as a single host-OS process, implementing a priority scheduler, a FAT-based filesystem, and an interactive job-control shell. Built in C with strict kernel/filesystem/user-land abstraction boundaries mirroring real UNIX system-call semantics.",
    highlights: [
      "Repo private as part of course policy.",
      "2 person project for CIS 5480 (Operating Systems Design & Implementation). ~8,700 lines of C across 40+ source/header files.",
      "Built a multi-level round robin priority scheduler with three FIFO queue levels, and falls through to non-empty queues to prevent starvation.",
      "Implemented full process lifecycle: PCBs with parent/child trees, s_spawn / s_waitpid (with nohang) / s_kill / s_nice / s_exit, init-process orphan reparenting, zombie reaping, and three signals (P_SIGSTOP, P_SIGCONT, P_SIGTERM).",
      "Designed the PennFAT filesystem from scratch: mkfs/mount/unmount over a memory-mapped FAT, chain-based block allocation and freeing, 64-byte directory entries, and a full file API. A global open file table plus per-process file descriptor tables enforce single-writer semantics.",
      "Wrote an interactive shell with job control (bg/fg/jobs), I/O redirection (<, >, >>), background execution (&), terminal signal handling, and shell-script execution.",
    ],
    tags: ["C", "pthreads", "Operating Systems", "Scheduling", "Filesystems", "FAT", "Signals", "Concurrency", "Make", "Docker", "clang", "Doxygen"],
    images: [],
    links: {
    },
  },
  {
    slug: "Wanderful",
    title: "Wanderful",
    description:
      "A full-stack trip-planning web app that unifies the Yelp Open Dataset and Inside AirBnb data into a single Postgres-backed itinerary engine. A React (Vite) frontend talks to a Flask/psycopg2 API serving 13 hand-tuned SQL endpoints over 124K establishments and ~11M reviews, with query plans optimized via CTEs, window functions, covering indexes, and GiST spatial indexes.",
    highlights: [
      "Repo private as part of course policy.",
      "4-person project for CIS 5500 (Databases). Combines ~150K Yelp businesses and Inside AirBnb listings into one schema: 124,112 establishments (49,857 restaurants, 74,255 AirBnBs) and 10,990,951 reviews on AWS RDS Postgres.",
      "Designed a normalized schema with an establishments supertype and restaurants/airbnbs subtype tables, plus a unified reviews table, enforced with CHECK constraints, foreign keys, and cross-source ID hashing.",
      "Built 7 small and 6 complex SQL endpoints behind a Flask API, using CTEs, ROW_NUMBER()/RANK() window functions, LATERAL aggregates, and EXISTS correlated subqueries for itinerary, weighted-ranking, and best-value queries.",
      "Optimized the vote-weighted ranking query (CQ2) from 39,161ms to 204ms (192x) by replacing a JOIN + GROUP BY/HAVING that scanned all 10.9M reviews with a CTE + CROSS JOIN LATERAL aggregate over a covering index.",
      "Implemented a Radius Itinerary Finder (CQ5) using a GiST 2D bounding-box pre-filter with a cos(lat) longitude correction, then exact haversine post-filtering — cutting ~1M distance calculations down to ~30 candidates per listing (546ms to 96ms, 5.7x).",
      "Wrote Python ETL loaders to clean and ingest both datasets: filtering to US restaurants, correcting city misspellings, parsing JSON hours/categories into structured columns, and pg_trgm fuzzy-deduping city names for autocomplete.",
      "Frontend in React + React Router with five pages (Home, Restaurants, AirBnBs, Itinerary, Detail), reusable cards/star-rating components, and a reviewer-profile modal; Vite dev proxy in dev, Flask serving the built bundle in prod.",
    ],
    tags: ["React", "Vite", "Flask", "Python", "PostgreSQL", "SQL", "psycopg2", "Query Optimization", "GiST Index", "Window Functions", "ETL", "AWS RDS", "Databases"],
    images: [
      {
        src: "/projects/wanderful/wanderful_1.jpeg",
        alt: "Wanderful Home Page",
        caption: "Home Page - Has search bar and best city results based on a weighted ranking of review count, average rating, and price level.",
      },
      {
        src: "/projects/wanderful/wanderful_2.jpeg",
        alt: "Wanderful Restaurant Search Page",
        caption: "Restaurant Search Page - Has filters and sorting options.",
      },
      {
        src: "/projects/wanderful/wanderful_3.jpeg",
        alt: "Wanderful Itinerary Page",
        caption: "Wanderful Itinerary page - Shows top 3 restaurants per airbnb with zipcode and geographic proximity based filters.",
      }
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
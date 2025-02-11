import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shivam Yadav",
  initials: "DV",
  url: "https://dillion.io",
  location: "Lucknow , India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Dev turned Software Engineer. I love building things and helping people. Very active in RHA (NGO).",
  summary:
    "I am a dedicated Full Stack Developer with expertise in building responsive web and mobile applications. I began my journey in early 2023 as a freelance Front-End Developer, specializing in React.js, and later joined Digital Nawaab in 2024 as a Software Developer.\n \nMy tech stack includes React.js, Node.js, Express, MongoDB, MySQL, Tailwind CSS, and React Native for App development. I have delivered projects like e-commerce platforms, dynamic dashboards, and responsive designs, focusing on clean, scalable, and user-friendly solutions. \n \nCurrently, I’m expanding my skills in DevOps and AWS to efficiently deploy and manage full-stack applications. I am passionate about learning and tackling new challenges in tech.",
  avatarUrl: "/ShivProfile.png",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Version Control",
    "Laravel",
    "Mongo DB",
    "React Native",
    "Harmony Animation",
    "Stick Figure Animation"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      Call: {
        name: "Call Now",
        url: "tel:+916307603013",
        icon: Icons.call,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shivam-yadav2",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivam-yadav-b0a476250/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:shivamyadav6546@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Independent Freelancer",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/freelance.jpg",
      start: "Feb 2023",
      end: "May 2024",
      description:
        "Worked as an Independent Freelancer, specializing in front-end development. Built responsive and user-friendly interfaces using React.js and Tailwind CSS. Collaborated closely with back-end developers to integrate APIs and deliver seamless applications. Focused on performance optimization and clean, maintainable code to enhance user experience.",
    },
    {
      company: "Digital Nawab",
      badges: [],
      href: "https://www.digitalnawab.com/",
      location: "Office",
      title: "Software Developer",
      logoUrl: "/DN.png",
      start: "May 2024",
      end: " Now 2025",
      description:
        "Worked as a Software Developer, specializing in front-end and full-stack development. Contributed to building scalable web applications using React.js, Node.js, and Tailwind CSS. Collaborated with cross-functional teams to integrate front-end interfaces with back-end APIs. Focused on delivering user-centric designs, optimizing performance, and ensuring seamless deployment processes. Gained hands-on experience in modern development practices and maintaining robust application architectures.",
    },
    {
      company: "Full Stack Developer",
      href: "#",
      badges: [],
      location: "Santa Clara, CA",
      title: "Freelancer",
      logoUrl: "/freelance.jpg",
      start: "May 2024",
      end: "Now 2025",
      description:
        "Worked as a Freelance Full Stack Developer, creating full-fledged web applications using the MERN stack. Built responsive front-end interfaces with React.js and implemented robust back-end functionality with Node.js, Express, and MongoDB. Delivered scalable and user-friendly solutions while collaborating with clients to meet project requirements.",
    },
  ],
  education: [
    {
      school: "University of Lucknow",
      href: "#",
      degree: "Bachelor of Computer Application",
      logoUrl: "/lko.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Be10X Certification",
      href: "#",
      degree: "Easily Integrate AI tools in WorkFlow",
      logoUrl: "/10.webp",
      start: "",
      end: "",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Dr Scrubs",
      href: "https://drscrubs.in/",
      dates: "Oct 2023 - Aug 2024",
      active: true,
      description:
        "Developed a comprehensive e-commerce platform for selling doctor scrubs internationally, serving customers both in India and abroad. The website offers an easy-to-navigate interface, secure payment options, and a seamless shopping experience. ",
      technologies: [
        "ReactJs",
        "JavaScript",
        "SQL",
        "Laravel",
        "TailwindCSS",
        "RazorPay",
        "Material Tailwind",
        "AOS",
      ],
      links: [
        {
          type: "Website",
          href: "https://drscrubs.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/scrub.mp4",
    },
    {
      title: "Badri Sarraf Jewellers",
      href: "https://badrijweller.digitalnawab.com/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Created a user-friendly front-end website for Badri Jewellers to showcase their rich legacy and exquisite collection. The website highlights the brand's history, craftsmanship, and premium offerings through visually appealing design and smooth navigation. ",
      technologies: [
        "ReactJs",
        "JavaScript",
        "TailwindCSS",
        "Material Tailwind",
        "AOS",
      ],
      links: [
        {
          type: "Website",
          href: "https://badrijweller.digitalnawab.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/badri.mp4",
    },
    {
      title: "THS International School",
      href: "https://ths.digitalnawab.com/",
      dates: "Aug 2024 - December 2024",
      active: true,
      description:
        "Developed a complete website for Tender Hearts School to manage data for their four branches. The site includes a responsive design and an admin panel for easy updating of branch information, ensuring seamless data management.",
      technologies: [
        "ReactJs",
        "JavaScript",
        "SQL",
        "Laravel",
        "TailwindCSS",
        "Material Tailwind",
        "AOS",
      ],
      links: [
        {
          type: "Website",
          href: "https://ths.digitalnawab.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/ths.mp4",
    },
    {
      title: "ParvatiAs",
      href: "https://www.parvatias.com/",
      dates: "August 2024 - December 2024",
      active: true,
      description:
        "Developed a full-fledged e-commerce web app for Parvatias, specializing in the sale of silver jewelry. The platform provides a seamless shopping experience with features such as product catalog, secure payment options, and easy navigation, ensuring a user-friendly and efficient online shopping environment for customers.",
      technologies: [
        "ReactJs",
        "JavaScript",
        "SQL",
        "Laravel",
        "TailwindCSS",
        "Material Tailwind",
        "AOS",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.parvatias.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/parvati.mp4",
    },
    {
      title: "Posh & Polish",
      href: "https://poshandpolished.digitalnawab.com/",
      dates: "November 2023 - January 2025",
      active: true,
      description:
        "Created a sleek and polished website for a salon, featuring a modern design that highlights services, pricing, and booking options. The site offers a user-friendly experience with easy navigation and a professional aesthetic, reflecting the salon’s premium offerings.",
      technologies: [
        "ReactJs",
        "JavaScript",
        "SQL",
        "Laravel",
        "TailwindCSS",
        "Material Tailwind",
        "AOS",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://poshandpolished.digitalnawab.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/posh.mp4",
    },
    {
      title: "Babu Group Of Institution",
      href: "https://www.babuinstitute.digitalnawab.com/",
      dates: "August 2024 - January 2025",
      active: true,
      description:
        "Built a complete web application for Babu Group University, featuring an admission system and student dashboard. The platform allows students to apply for admission, track their application status, and manage their personal information. The student dashboard offers easy access to academic records, schedules, and other university services, providing a comprehensive and streamlined experience.",
      technologies: [
        "ReactJs",
        "JavaScript",
        "SQL",
        "Laravel",
        "TailwindCSS",
        "Material Tailwind",
        "AOS",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.babuinstitute.digitalnawab.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/babu.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

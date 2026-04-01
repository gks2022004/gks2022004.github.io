import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gaurav Kumar",
  initials: "GK",
  url: "https://gauravkumar.io",
  location: "Prayagraj, India",
  locationLink: "https://www.google.com/maps/place/prayagraj",
  description:
    "I like simple ideas and complex systems. Rust, crypto, and the pursuit of things that actually work.",
  summary:
    "I’m a curious mind with a keyboard, trying to out smart complexity one line of code at a time. I turn wild ideas into things that actually work (after a healthy amount of debugging and coffee). If it feels impossible, impractical, or slightly insane that’s usually my kind of problem. ",
  avatarUrl: "/me.jpg",
  skills: [
    "Solidity",
    "Rust",
    "Ethereum",
    "Solana",
    "Anchor",
    "Foundry",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "imgauravkumar7@gmail.com",
    tel: "+91 8737883746",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gks2022004",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imgauravkumar7/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/i_amgauravkumar",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:imgauravkumar7@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [

    {
      company: "PulsarX",
      href: "https://terminal.pulsarx.io/",
      badges: [],
      location: "Remote",
      title: "Blockchain developer-Infrastructure",
      logoUrl: "/pulsarx.jpeg",
      start: "March 2026",
      end: "Present",
      description:
        "Fixing and building core protocol and infrastructure for PulsarX (more updates soon)",
    },
    {
      company: "Quranium",
      href: "https://www.quranium.org/",
      badges: [],
      location: "Remote",
      title: "Blockchain developer",
      logoUrl: "/quranium.jpeg",
      start: "Oct 2024",
      end: "Feb 2026",
      description:
        "Led end-to-end development of RWA tokenization, DeFi, and exchange infrastructure on the Quranium blockchain, using production grade Solidity, Foundry testing, and off-chain relayers. Deployed and operated Uniswap V3 (QxSwap) on Quranium and built multi-chain ERC-6551 smart accounts with deterministic CREATE2 addresses. Shipped quantum-secure wallets, DeFi + RWA platforms, and automated lending systems running in live environments. Owned full-stack protocol delivery on Quranium from smart contracts through backend orchestration to frontend integrations.",
    },
  
  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  //  
  // ],
  projects: [
       {
      title: "Dark-bridge",
      href: "https://github.com/gks2022004/dark-bridge",
      dates: "",
      active: true,
      description:
        "It's is a privacy-preserving cross-chain bridge that enables confidential token transfers between Base and Solana using Inco Network's TEE technology to keep transaction amounts, balances, and participant identities hidden on-chain.",
      technologies: [
        "Solana",
        "Soldity",
        "Rust",
        "Typescript",
        "Inco-TEE"
      ],
      links: [
        {
          type: "Website",
          href: "https://darkk-bridge.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gks2022004/dark-bridge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Leaf-Sync",
      href: "https://github.com/gks2022004/leafsync",
      dates: "",
      active: true,
      description:
        "Fast P2P file sync using QUIC + TLS. Merkle-based delta transfers & resumable uploads.",
      technologies: [
        "Golang",
        "QUIC",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gks2022004/leafsync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Q-Notes",
      href: "https://github.com/gks2022004/Q-NOTES",
      dates: "",
      active: true,
      description:
        "Post-quantum secure notes app. Kyber-768 encryption via Cloudflare's Cirel. Paranoid security.",
      technologies: [
        "Golang",
        "Kyber-768",
        "Argon2id",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gks2022004/Q-NOTES",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Rust Aggregator",
      href: "https://github.com/gks2022004/rust-aggregator",
      dates: "",
      active: true,
      description:
        "Multi-hop routing for Uniswap/SushiSwap. Real-time optimization with sub-50ms quote responses.",
      technologies: [
        "Rust",
        "DeFi",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gks2022004/rust-aggregator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "seerdotfun",
      href: "https://seer-fun.vercel.app/",
      dates: "",
      active: true,
      description:
        "A decentralized prediction market on Solana where users bet SOL on real-world events (sports, crypto, politics). Markets auto-resolve using AI agents or manual resolution, with seamless betting via Solana Blinks directly from Twitter/X.",
      technologies: [
        "Rust",
        "Solana",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://seer-fun.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gks2022004/seer.fun",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Transaction-service",
      href: "https://github.com/gks2022004/transaction-service",
      dates: "",
      active: true,
      description:
        "A production-ready Rust microservice for managing business accounts, transactions, and webhooks with secure API authentication.",
      technologies: [
        "Rust",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gks2022004/transaction-service",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Staking Dapp",
      href: "https://staking-dapp-7.vercel.app/",
      dates: "",
      active: true,
      description:
        "Web3 staking on Sepolia. Automated reward calc, custom staking algos, secure token approval.",
      technologies: [
        "Solidity",
        "React",
        "Ethers.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://staking-dapp-7.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gks2022004/Staking_dapp/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "NFT-Marketplace",
      href: "https://nft-becho.vercel.app/",
      dates: "",
      active: true,
      description:
        "Ethereum NFT Marketplace forged in Solidity and React, where creators mint, traders conquer, and blockchain dreams scale without limits.",
      technologies: [
        "Solidity",
        "React",
        "Ethers.js",
        "Pinata",
      ],
      links: [
        {
          type: "Website",
          href: "https://nft-becho.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gks2022004/NFTMarketPlace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Solana Privacy Hackathon",
      dates: "January 12th - February 1st, 2026",
      location: "Online",
      description:
        "Built DarkBridge - a first private crosschain bridge between Base & Solana where amounts, balances & identities stay hidden. Powered by TEE-based encryption by inconetwork.",
      image:
        "https://pbs.twimg.com/media/HBTCkzWbwAAFxQA?format=jpg&name=large",
        win: "🏆 Best Infrastructure: Inco sponsor track ($1000)",
      mlh: "https://x.com/i_amgauravkumar/status/2018607208125300868?s=20",
      links: [
         {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/gks2022004/dark-bridge",
        },
        {
          title: "demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://x.com/i_amgauravkumar/status/2018607208125300868?s=20",
        },
         {
          title: "results",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://x.com/solana_devs/status/2022387550824927345?s=20",
        },
      ],
    },
    {
      title: "Pharmathon",
      dates: "November 3rd, 2023",
      location: "Chandigarh University, India",
      description:
        "Developed an innovative e-commerce platform during Pharmathon, showcasing advanced web development skills and integrated blockchain technology for secure transactions. Added supply chain management and product tracking features to enhance transparency and efficiency in the pharmaceutical industry.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHbf9vRQU7xNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719476231191?e=1773273600&v=beta&t=btneM66zJyLWelula3hbOKklUSTIVVpoMwkc_So2Cu8",
        win: "🥉 3rd prize for the best e-commerce website",
      mlh: "",
      links: [],
    },
    {
      title: "Smart India Hackathon - 2023",
      dates: "September 21st, 2023",
      location: "Chandigarh University, India",
      description:
        "INDRA - Developed a cloud burst prediction modelCloud-Burst Prediction using ensemble machine learning models for most accurate predictions by incorporating synoptic data processing.",
      image:
       "https://etimg.etb2bimg.com/photo/103119497.cms",
        win: "Team nominated in Tekathon 2.0 - Internal Hackathon for SIH 2023 by the Department of Academic Affairs, selected in top 20 teams out of 800+ teams.",
      mlh: "",
      links: [],
    },
  ],
} as const;

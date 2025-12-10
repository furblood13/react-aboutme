import type {
  Project,
  Experience,
  Education,
  Skills,
  SocialLink,
} from "../types";
import fixaiImg from "../assets/fixai.png";
import eczImg from "../assets/ecz.webp";
import namegenaiImg from "../assets/namegenai.png";
import linkedinLogo from "../assets/linkedin.jpeg";
import githubLogo from "../assets/github.png";
import instagramLogo from "../assets/instagram.avif";
import upworkLogo from "../assets/upwork.webp";
import bandr from "../assets/bandr.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Nöbetçi Eczane Uygulaması",
    image: eczImg,
    description:
      "Real-time on-duty pharmacy finder application. Fetches real-time on-duty pharmacy data via API and displays them on MapKit. Uses CoreLocation to detect user's location and lists the nearest pharmacies. Built with MVVM architecture for maintainable code structure. Uses Firebase Remote Config to manage API connections dynamically.",
    technologies: [
      "Swift",
      "SwiftUI",
      "MapKit",
      "CoreLocation",
      "MVVM",
      "Firebase Remote Config",
      "RESTful API",
    ],
    link: "https://apps.apple.com/us/app/nöbetçi-eczaneler-81-il/id6739646595",
  },
  {
    id: 2,
    title: "FIXAI: AI Photo Generator",
    image: fixaiImg,
    description:
      "AI-powered photo generation and editing application using FluxContext AI model. Designed a modern and intuitive interface using SwiftUI. Integrated in-app purchase (IAP) system with credit system. Optimized API calls to ensure smooth user experience.",
    technologies: [
      "Swift",
      "SwiftUI",
      "FluxContext AI",
      "In-App Purchase",
      "RESTful API",
    ],
    link: "https://apps.apple.com/us/app/glow-up-your-photos-fixai/id6747312191",
  },
  {
    id: 3,
    title: "NameGenAI For Babies",
    image: namegenaiImg,
    description:
      "AI-powered baby name generator application. Offers personalized, unique, and meaningful name suggestions tailored to your style and preferences. Features smart AI-based name suggestions, filter by origin, meaning, or style, and the ability to save and share favorite names.",
    technologies: ["Swift", "SwiftUI", "AI", "In-App Purchase", "RESTful API"],
    link: "https://apps.apple.com/us/app/namegenai-for-babies/id6740745177",
  },
  {
    id: 4,
    title: "TRT Bandrol Takip Uygulaması",
    image: bandr,
    description:
      "Bandrol tracking application developed using React Native CLI and TypeScript. Implemented OTP-based login and token refresh functionality. Developed a module that sends requested records to users in HTML format via mail endpoint.",
    technologies: [
      "React Native",
      "TypeScript",
      "OTP Authentication",
      "Token Refresh",
      "Email API",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Türkiye Radyo Ve Televizyonu (TRT)",
    position: "Mobile Developer",
    period: "September 2025 - Present",
    responsibilities: [
      "Worked in Mobile Development using React Native CLI and TypeScript",
      "Implemented barcode and serial number reading with camera module",
      "Worked with multiple endpoints and structured code with proper architecture",
      "Developed OTP-based login and token refresh functionality",
      "Developed a module that sends requested records to users in HTML format via mail endpoint",
    ],
  },
  {
    company: "Runic Bytes",
    position: "Mobile Developer",
    period: "June 2024 - August 2024",
    responsibilities: [
      "Developed mobile applications using React Native and Expo",
      "Transferred photos, videos, and audio recordings from users to database via API",
      "Optimized application performance and user experience",
    ],
  },
];

export const education: Education = {
  university: "Konya Technical University",
  degree: "Software Engineering",
  period: "2021 - 2025",
  thesis:
    "Turkey Tourist Application – Developed a mobile application for discovering tourist attractions using Firebase technologies and SwiftUI.",
};

export const skills: Skills = {
  languages: ["Swift", "React Native"],
  frameworks: [
    "RESTful APIs",
    "Firebase",
    "URLSession",
    "JSON Parsing",
    "Google AdMob",
  ],
  architecture: ["MVVM", "SOLID Principles"],
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/furkan-buğra-karci-5142281a5/",
    icon: linkedinLogo,
  },
  {
    name: "GitHub",
    url: "https://github.com/furblood13",
    icon: githubLogo,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/furkankarci111",
    icon: instagramLogo,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01fcdccdfb105f15c4?viewMode=1",
    icon: upworkLogo,
  },
];

export const aboutText = `I graduated from Konya Technical University with a degree in Software Engineering in 2025. I am a mobile developer with one year of experience in SwiftUI, React Native, MVVM architecture, and API integrations. I have three published applications on the App Store, and I also developed an enterprise-distributed React Native application for TRT.

I'm eager to bring my skills to an innovative and dynamic team where I can contribute and continue to grow. You can find my published apps on my App Store page.

Outside of work, I enjoy traveling and exploring new cultures. I have been in US,Italy,Bulgaria and Sri Lanka, which broadened my perspective and strengthened my passion for discovering new places.`;

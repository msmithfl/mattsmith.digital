// Popup Backgrounds - Desktop
import expBackground from '../assets/popup/popup-window-exp-min.png';
import projectsBackground from '../assets/popup/popup-window-projects-min.png';
import devlogsBackground from '../assets/popup/popup-window-devlogs.png';
import contactBackground from '../assets/popup/popup-window-contact-min.png';
import bioBackground from '../assets/popup/popup-window-bio-min.png';
// Popup Backgrounds - Mobile
import expMobileBackground from '../assets/popup/popup-window-mobile-exp.png';
import projectsMobileBackground from '../assets/popup/popup-window-mobile-projects.png';
import devlogsMobileBackground from '../assets/popup/popup-window-mobile-devlogs.png';
import contactMobileBackground from '../assets/popup/popup-window-mobile-contact.png';
import bioMobileBackground from '../assets/popup/popup-window-mobile-bio.png';
// Project GIFs
import bloomStudioProjectGif from '../assets/bloom-studio-demo.gif';
import bloomDemoClip from '../assets/bloom-demo-clip.mp4';
import officeChairProjectGif from '../assets/office-chair-racers.gif';
import officeChairRacersClip from '../assets/office-chair-racers-clip.mp4';
import thousandMetersProjectGif from '../assets/1000-meters.gif';
import thousandMetersClip from '../assets/1000-meters-clip.mp4';
import masterpieceMayhemProjectGif from '../assets/masterpiece-mayhem.gif';
import masterpieceMayhemClip from '../assets/masterpiece-mayhem-clip.mp4';

const sections = {
  EXPERIENCE: {
    background: expBackground,
    mobileBackground: expMobileBackground,
    content: {
      layout: 'experience',
      jobs: [
        {
          title: 'Gameplay Engineer - Bloom Game Studio',
          subtitle: 'December 2023 - Present',
          description: 'Developed 3D gameplay features for a Mario-style platformer game designed for a Web3 audience. Features included expressive movement mechanics, enemy AI systems, level design and camera rigging.',
        },
        {
          title: 'Digital Engagement Intern - Pérez Art Museum Miami',
          subtitle: 'September 2023 - December 2023',
          description: 'Developed and deployed a web-based, multiplayer game using React and WebSocket. Conducted user testing sessions to implement player feedback. Attended weekly SCRUM meetings (on-site and online).',
        },
        {
          title: 'Game Development Intern - Augminted Labs',
          subtitle: 'November 2022 - January 2023',
          description: 'QA testing for Rooftop Rampage, a mobile, Web3 video game developed in Unity (C#). This was an endless runner game developed for the Kaiju Kingz metaverse project. Reported playtesting bugs with detailed feedback and attended SCRUM meetings with the team.',
        },
      ],
    },
  },
  PROJECTS: {
    background: projectsBackground,
    mobileBackground: projectsMobileBackground,
    content: {
      layout: 'projects',
      projects: [
        {
          title: "Bloom Studio Flagship Project (Demo)",
          subtitle: 'Super Mario-style, puzzle-adventure game',
          video: bloomDemoClip,
          description: 'Players navigate through a vibrant world filled with challenging puzzles and enemies. This game features expressive movement mechanics, engaging puzzle design, and environmental storytelling.',
          builtWith: 'Unity / C#',
        },
        {
          title: "Masterpiece Mayhem",
          subtitle: 'Jackbox-style painting game',
          video: masterpieceMayhemClip,
          description: 'Complete with a multiplayer lobby system, players compete against each other to recreate an artwork from Pérez Art Museum’s permanent collection in a 60-second period of time. Users are scored with a pixel-based comparison algorithm.',
          builtWith: 'React / WebSocket',
        },
        {
          title: "Office Chair Racers",
          subtitle: 'Physics-based, multiplayer racing game',
          video: officeChairRacersClip,
          description: 'Players race against each other on office chairs propelled by fire extinguishers. This game features physics-based movement, multiplayer functionality, racing checkpoint system and dual keyboard/gamepad input.',
          builtWith: 'Unity / C#',
        },
        {
          title: "1000 Meters",
          subtitle: 'Speedrunner climbing game',
          video: thousandMetersClip,
          description: 'Inspired by games like Icy Tower and Celeste, this game tests the player\'s quickness and movement mastery as they must climb out of a cave as fast as possible. It features a combo scoring system, precise movement mechanics and original pixel art.',
          builtWith: 'Unity / C# / Aseprite',
        },
      ],
    },
  },
  DEVLOGS: {
    background: devlogsBackground,
    mobileBackground: devlogsMobileBackground,
    content: {
      layout: 'devlogs',
      devlogs: [
        {
          title: 'First Devlog',
          videoId: 'H4cORXlBDBA',
          description: 'This is the first devlog',
        },
        {
          title: 'Second Devlog',
          videoId: 'H4cORXlBDBA',
          description: 'This is the second devlog',
        }
      ],
    },
  },
  CONTACT: {
    background: contactBackground,
    mobileBackground: contactMobileBackground,
    content: {
      layout: 'contact',
      description: 'Get in touch through email or LinkedIn.',
      email: 'msmithfl@icloud.com',
      linkedin: 'https://www.linkedin.com/in/matthew-smith-41ba39156/',
      github: 'https://github.com/msmithfl',
    },
  },
  BIO: {
    background: bioBackground,
    mobileBackground: bioMobileBackground,
    content: {
      layout: 'bio',
      description: 'Matt grew up in South Florida and began his journey\n\n\n into game development during his Computer Science degree at Florida International University. This opened up an exciting opportunity to combine programming with his creative interests. His efforts have been utilized in several professional settings, including Pérez Art Museum Miami and Bloom Studio, a Web3 focused gaming company. While software engineering is his primary strength, he also has experience in asset creation, 3D animation, level design, and UI. Matt\'s goal is to build visually captivating experiences with compelling narratives that transport players into unforgettable, interactive worlds.',
    },
  },
};

export default sections;

/* OLD BIO DESCRIPTION:
'Matt grew up in South Florida and has been skateboarding for nearly two decades.
Along the way, he nurtured a passion for videography, creating several skateboarding films.
His journey into game development began during his Computer Science studies at Florida International University
where he discovered a way to combine coding with his creative interests.
While software engineering is his primary strength, he also has experience in asset design, 3D animation, level design, and UI.
Matt\'s goal is to build visually captivating experiences with compelling narratives that transport players into unforgettable, interactive worlds.
*/
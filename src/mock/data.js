import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tambapps', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Tambapps portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to the portfolio of',
  name: 'Tambapps',
  subtitle: ``,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'tambapps.jpg',
  paragraphOne:
    'My name is Nelson FONKOUA. I am a french developer passionated about Java, Groovy and recently Dart.',
  paragraphTwo:
    'I am mostly interested in back-end projects, but I also develop android (and sometimes desktop) applications.',
  paragraphThree: '',
  // resume: 'https://drive.google.com/uc?export=download&id=1UyBpApZhxcS3sKNtKrmRLU_NqIkGRjTa',
  // use Google Drive to upload your file and replace YOUR FILE ID after id=... or use any CDN you prefer
  // Alternatively, empty the string to disable the button if it's not needed
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fandem_banner.webp',
    title: 'Fandem',
    info: 'Fandem is a cross-platform (Desktop, Android) project for sharing files between two devices, as long as they are on the same network (Wi-Fi, mobile hotspost).',
    info2:
      "The transfer is made in Peer to Peer, allowing you to keep your data private. You'll also notice that it is way faster than a Bluetooth transfer.",
    url: '/fandem', // TODO make page for fandem
    repo: 'https://github.com/tambapps/P2P-File-Sharing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'groovyshell_banner.webp',
    title: 'Groovy Shell for Android',
    info: 'This app allows you to write and run Groovy code directly from your smartphone through an interactive shell.',
    info2:
      'You can do all kinds of things like managing files, perform image processing, display charts and more... There is also a functionality allowing you to launch Groovy scripts in the background (when the app is closed), even periodically',
    url: '/groovy-shell',
    // no repo (it is private)
  },
  // TODO add a project for all software libraries I've created
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a question? Send a mail to',
  btn: `tambapps@gmail.com`,
  email: 'tambapps@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/TambApps',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tambapps',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://fr.linkedin.com/in/nelson-fonkoua-a9919313a',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

// gitprofile.config.js

const config = {
  github: {
    username: 'Jab3303', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Jose Beltran',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'beltranj22@students.ecu.edu',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1b2QmAIdNbSI4Tmz10kROfaj4435tNaOG/edit?usp=drive_link&ouid=113488905775216712096&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Excel',
    'Cisco Packet Tracer',
    'ISC2',
    'AWS Basic',
    'MySQL',
    'SQL Injection',
  ],
  experiences: [
    {
      company: 'Sheppard Memorial Library',
      position: 'Adult Public Service and Technology Center Assistant',
      from: 'June 2022',
      to: 'Present',
      companyLink: '',
    },
  ],
   certifications: [
    {
      name: 'AWS Academy Cloud Foundations',
      body: 'Earners of this badge have taken the AWS Academy Cloud Foundations course.',
      year: 'Dec 2023',
      link: 'https://www.credly.com/badges/acf9aac9-7602-4058-ae95-3ee3ab156087/public_url'
    },
     {
      name: 'ISC2 Candidate',
      body: 'SC2 Candidates are individuals pursuing or considering a cybersecurity certification. To become a Candidate, the individual must apply online and provide minimum identifying information, as well as affirm that they will abide by the ISC2 Code of Ethics and Privacy Policy.',
      year: 'Aug 2023',
      link: 'https://www.credly.com/badges/4307da5a-6389-4bff-93e7-99c1e60f7a7a/public_url'
    },
    {
      name: 'Introduction to Cisco Packet Tracer',
      body: 'Cisco verifies the earner of this badge has knowledge and skills to create digital models of IP Networks and IoT Systems using Cisco Packet Tracer.',
      year: 'Sep 2023',
      link: 'https://www.credly.com/badges/5a0b1cf1-8c70-4c6f-baf9-6ca6a68e866b/public_url'
    },
  ], 
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelors in Science of Business Administration, Management Information Systems',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Wayne Community College',
      degree: 'Associates in Arts',
      from: '2016',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Professional Statement',
      description:
        'Hello, my name is Jose Beltran, I am a passionate person when it comes to cybersecurity, and I enjoy solving these problems for others. I can be a great addition to any organization as I am driven to solve or at the least contribute in a solution.',
      imageUrl: '',
      link: '',
    },
    {
      title: 'NIST Incident Response',
      description:
        '',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mt2V-oQ4ih6rzy7-RByEAQHaHg?rs=1&pid=ImgDetMain',
      link: 'https://docs.google.com/document/d/1b0ZrppOc25cBYoZFXMA8Vx-ewjfeRlmsrvBn7HsdOi4/edit?usp=drive_link',
    },
    {
       title: 'Linux Basic Commands',
      description: '',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mt2V-oQ4ih6rzy7-RByEAQHaHg?rs=1&pid=ImgDetMain',
      link: 'https://docs.google.com/document/d/1l0NcymSgjpodDFASQdOAK9V-RJj9K1id/edit?usp=drive_link&ouid=113488905775216712096&rtpof=true&sd=true',
    },
    {
      title: 'Secuirty Audit',
      description: '',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mt2V-oQ4ih6rzy7-RByEAQHaHg?rs=1&pid=ImgDetMain',
      link: 'https://docs.google.com/document/d/158k9o1k0GOeVt0lbFrMEYJwW3Udp7HsO/edit?usp=drive_link&ouid=113488905775216712096&rtpof=true&sd=true',
    },
    {
      title: 'Home Network and Heatmap Presentation',
      description: '',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mt2V-oQ4ih6rzy7-RByEAQHaHg?rs=1&pid=ImgDetMain',
      link: 'https://drive.google.com/file/d/1uz8NSgqdPDOTJ9_gXCPpi10PBA0P_LeB/view?usp=sharing',
    },
    {
      title: 'TryHackMe Activity Completions',
      description: '',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mt2V-oQ4ih6rzy7-RByEAQHaHg?rs=1&pid=ImgDetMain',
      link: 'https://docs.google.com/document/d/14YEM5ff96fTKZM9NSuOwHTL7Aw-AYvgxogWitXhKZBw/edit?usp=sharing',
    },
     {
      title: 'Earned Badges',
      description: 'Total Earned: 3',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mt2V-oQ4ih6rzy7-RByEAQHaHg?rs=1&pid=ImgDetMain',
      link: 'https://docs.google.com/document/d/1PjkWlxgq_fDSg0D1xjqY80cF-zBGTJxJwHzkdWN_A6c/edit?usp=sharing',
    },
     {
      title: 'Elevator Pitch',
      description: 'Get to know a little about me and my education!',
      imageUrl: 'https://th.bing.com/th/id/OIP.Mt2V-oQ4ih6rzy7-RByEAQHaHg?rs=1&pid=ImgDetMain',
      link: 'https://drive.google.com/file/d/1hhwn857SfR36NvjGLtCRO7WmjD6gtbJu/view?usp=sharing ',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
 /* blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  }, */
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

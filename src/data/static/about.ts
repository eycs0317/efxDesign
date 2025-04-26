// Hero
export function getHeroData() {
  return {
    className: 'bg-primary-1000 text-neutral-000',
    heading: {
      data: {
        content: 'About EFX Design',
        level: 1,
      },
    },
    subheading: {
      data: {
        content: 'We design with purpose. We build with intent, crafting websites that are as strategic as they are beautiful.',
        level: 2,
        className: 'text-2xl',
      },
    },
    footer: {
      data: {
        href: '/',
        content: 'Get Started',
        className: 'button',
      },
    },
  };
}

// About Section
export function getAboutIntro() {
  return {
    className: 'flex-1',
    uid: 'about0',
    content: [
      {
        uid: 'about0a',
        component: 'paragraph',
        data: {
          content: 'EFX Design is a web design studio dedicated to crafting digital experiences that elevate brands and move people. From clean, conversion-focused websites to seamless user interfaces, we believe great design starts with understanding your brand, your audience, and your goals.',
        },
      }, {
        uid: 'about0b',
        component: 'quote',
        data: {
          content: '"With a background in design and front-end engineering, I’ve seen how powerful the right blend of creativity and structure can be.  At EFX Design, we approach every project with the mindset of a designer and the precision of a developer because great digital experiences should be as functional as they are beautiful."',
        },
      }, {
        uid: 'about0c',
        component: 'paragraph',
        data: {
          content: '- Eddie Lou, Founder of EFX Design',
          className: 'author',
        },
      },
    ],
  };
}

export function getAboutData() {
  return {
    className: 'py-8 px-4 max-w-7xl',
    containers: {
      data: [
        getAboutIntro(),
      ],
    },
  };
}

// What We Do Section
export function getWhatWeDoContent() {
  return {
    className: 'flex-2',
    uid: 'do0',
    content: [
      {
        uid: 'do0a',
        component: 'paragraph',
        data: {
          content: 'At EFX Design, we help brands stand out and grow through strategic, beautifully-crafted digital experiences. Our work blends clean design, thoughtful UX, and modern development to build websites that don’t just look good. They’re built to work hard for your business.',
        },
      }, {
        uid: 'do0b',
        component: 'paragraph',
        data: {
          content: 'Whether you’re launching a new idea, refreshing your online presence, or scaling your e-commerce platform, we partner with you to bring clarity, creativity, and consistency to every step of the journey. Every project is a collaboration, and every solution is made with purpose.',
        },
      },
    ],
  };
}

export function getWhatWeDoPhoto() {
  return {
    className: 'flex-1 text-center',
    uid: 'do1',
    content: [
      {
        uid: 'do1a',
        component: 'image',
        data: {
          src: '/assets/i/photos/web-design.jpg',
          alt: 'efx Studio',
          width: 512,
          height: 376,
        },
      },
    ],
  };
}

export function getWhatWeDoData() {
  const defaultConfig = {
    headingLevel: 3,
    headingClassName: 'text-2xl',
  };
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'What We Do',
        level: 2,
        className: 'text-4xl text-center',
      },
    },
    containers: {
      data: [
        getWhatWeDoContent(),
        getWhatWeDoPhoto(),
      ],
    },
  };
}

// Our Philosophy Section
export function getPhilosophyContent() {
  return {
    className: 'flex-2',
    uid: 'philosophy0',
    content: [
      {
        uid: 'philosophy0a',
        component: 'paragraph',
        data: {
          content: 'We don’t believe in templates or one-size-fits-all solutions. Every project is a collaboration grounded in curiosity, clarity, and craft. Our approach is client-focused, feedback-driven, and always intentional, so the end result feels aligned, authentic, and built to last.',
        },
      }, {
        uid: 'philosophy0b',
        component: 'paragraph',
        data: {
          content: 'We care deeply about the details, because details are where trust is built and brands are remembered. Whether we’re working with a solo founder or a growing team, we approach every project with craftsmanship, curiosity, and care.',
        },
      },
    ],
  };
}

export function getPhilosophyPhoto() {
  return {
    className: 'flex-1 text-center',
    uid: 'philosophy1',
    content: [
      {
        uid: 'philosophy1a',
        component: 'image',
        data: {
          src: '/assets/i/photos/user-research.jpg',
          alt: 'efx Studio',
          width: 512,
          height: 376,
        },
      },
    ],
  };
}

export function getPhilosophyData() {
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'Our Philosophy',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getPhilosophyPhoto(),
        getPhilosophyContent(),
      ],
    },
  };
}

// How We Work Section
export function getDiscovery(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'work0',
    content: [
      {
        uid: 'work0a',
        component: 'heading',
        data: {
          content: 'Discovery-First',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        },
      }, {
        uid: 'work0b',
        component: 'paragraph',
        data: {
          content: 'We begin by understanding your business, audience, and goals.',
        },
      },
    ],
  };
}

export function getDesign(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'work1',
    content: [
      {
        uid: 'work1a',
        component: 'heading',
        data: {
          content: 'Design That Performs',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        },
      }, {
        uid: 'work1b',
        component: 'paragraph',
        data: {
          content: 'Our designs are clean, modern, and built to convert, not just impress.',
        },
      },
    ],
  };
}

export function getCollaboration(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'work2',
    content: [
      {
        uid: 'work2a',
        component: 'heading',
        data: {
          content: 'Collaborative Process',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        },
      }, {
        uid: 'work2b',
        component: 'paragraph',
        data: {
          content: 'You’re part of the journey. We share progress early and often.',
        },
      },
    ],
  };
}

export function getScale(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'work3',
    content: [
      {
        uid: 'work3a',
        component: 'heading',
        data: {
          content: 'Built to Scale',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        },
      }, {
        uid: 'work3b',
        component: 'paragraph',
        data: {
          content: 'We think long-term, from systems to responsive design to accessibility.',
        },
      },
    ],
  };
}

export function getHowWeWorkData() {
  const defaultConfig = {
    headingLevel: 3,
    headingClassName: 'text-2xl',
  };
  return {
    className: 'py-8 px-4 max-w-7xl',
    heading: {
      data: {
        content: 'How We Work',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getDiscovery(defaultConfig),
        getDesign(defaultConfig),
        getCollaboration(defaultConfig),
        getScale(defaultConfig),
      ],
    },
  };
}

// Who We Work With Section
export function getWhoWeWorkWithContent() {
  return {
    className: 'flex-1',
    uid: 'who0',
    content: [
      {
        uid: 'who0a',
        component: 'paragraph',
        data: {
          content: 'We partner with ambitious brands, creatives, and startups who care deeply about design, storytelling, and user experience. Whether launching a new venture or evolving a legacy brand, we help shape what’s next.',
        },
      },
    ],
  };
}

export function getWhoWeWorkWithData() {
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'Who We Work With',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getWhoWeWorkWithContent(),
      ],
    },
  };
}

// CTA Section
export function getCTAContent() {
  return {
    className: 'flex-1',
    uid: 'cta0',
    content: [
      {
        uid: 'cta0a',
        component: 'paragraph',
        data: {
          content: 'Have a project in mind? We’d love to hear about it.',
        },
      },
    ],
  };
}

export function getCTAData() {
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'Let\'s Build Something Great',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getCTAContent(),
      ],
    },
    footer: {
      data: {
        href: '/',
        content: 'Start a Project',
        className: 'button primary inline-block',
      },
    },
  };
}

export function getWebsiteDesign(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'services0',
    content: [
      {
        uid: 'services0a',
        component: 'image',
        data: {
          src: '/assets/i/icons/image1.png',
          alt: 'Website Design',
          width: defaultConfig.imageHeight,
          height: defaultConfig.imageWidth,
        }
      }, {
        uid: 'services0b',
        component: 'heading',
        data: {
          content: 'Website Design',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        }
      }, {
        uid: 'services0c',
        component: 'paragraph',
        data: {
          content: 'We craft custom websites that are as strategic as they are stunning—designed to reflect your brand, engage your audience, and drive meaningful results across every screen.',
        }
      },
    ],
  };
}

export function getUXDesign(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'services1',
    content: [
      {
        uid: 'services1a',
        component: 'image',
        data: {
          src: '/assets/i/icons/image2.png',
          alt: 'UX/UI Design',
          width: defaultConfig.imageHeight,
          height: defaultConfig.imageWidth,
        }
      }, {
        uid: 'services1b',
        component: 'heading',
        data: {
          content: 'UX/UI Design',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        }
      }, {
        uid: 'services1c',
        component: 'paragraph',
        data: {
          content: 'We design intuitive, user-centered interfaces that make your product effortless to use and impossible to ignore. From wireframes to polished visuals, we focus on clarity, consistency, and conversion at every step.',
        }
      },
    ],
  };
}

export function getECommerce(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'services2',
    content: [
      {
        uid: 'services2a',
        component: 'image',
        data: {
          src: '/assets/i/icons/image3.png',
          alt: 'E-Commerce',
          width: defaultConfig.imageHeight,
          height: defaultConfig.imageWidth,
        }
      }, {
        uid: 'services2b',
        component: 'heading',
        data: {
          content: 'E-Commerce',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        }
      }, {
        uid: 'services2c',
        component: 'paragraph',
        data: {
          content: 'We build high-performing online stores that are easy to use, easy to manage, and designed to convert. Whether you\'re launching on Shopify or scaling your existing platform, we combine smart UX with sleek design to drive sales and grow your brand.',
        }
      },
    ],
  };
}

export function getServicesData() {
  const defaultConfig = {
    headingLevel: 3,
    headingClassName: 'text-2xl',
    imageHeight: 50,
    imageWidth: 50,
  };
  return {
    className: 'py-8 px-4 max-w-7xl',
    heading: {
      data: {
        content: 'Our Services',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getWebsiteDesign(defaultConfig),
        getUXDesign(defaultConfig),
        getECommerce(defaultConfig),
      ],
    },
  };
}



export function getExpertiseExperience(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'pitch0',
    content: [
      {
        component: 'heading',
        data: {
          content: 'Expertise & Experience',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        }
      }, {
        component: 'paragraph',
        data: {
          content: 'With years of hands-on experience across design, UX, and development, we bring deep expertise and attention to detail to every project. We\'ve helped startups, agencies, and global brands build digital experiences that look sharp and perform even better.',
        }
      },
    ],
  };
}

export function getClientCentric(defaultConfig) {
  return {
    className: 'flex-1',
    uid: 'pitch1',
    content: [
      {
        component: 'heading',
        data: {
          content: 'Client-Centric Approach',
          level: defaultConfig.headingLevel,
          className: defaultConfig.headingClassName,
        }
      }, {
        component: 'paragraph',
        data: {
          content: 'We treat every project like a partnership. From kickoff to launch, we collaborate closely, communicate clearly, and adapt to your needs—so the final product not only meets expectations, but exceeds them.',
        }
      },
    ],
  };
}

export function getPitchData() {
  const defaultConfig = {
    headingLevel: 3,
    headingClassName: 'text-2xl',
  };
  return {
    className: 'py-8 px-4',
    heading: {
      data: {
        content: 'Why Choose Us?',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getExpertiseExperience(defaultConfig),
        getClientCentric(defaultConfig),
      ],
    },
  };
}

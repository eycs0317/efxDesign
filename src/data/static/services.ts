// Hero
export function getHeroData() {
  return {
    className: 'bg-primary-1000 text-neutral-000',
    heading: {
      data: {
        content: 'What We Do',
        level: 1,
      },
    },
    subheading: {
      data: {
        content: 'At EFX Design, we craft digital experiences that are as thoughtful as they are beautiful. From concept to launch, our services are built around strategy, design, and usability.  Helping you connect with your audience and grow with intention.',
        level: 2,
        className: 'text-2xl',
      },
    },
    footer: {
      data: {
        href: '/',
        content: 'Get Started',
        className: 'button primary',
      },
    },
  };
}

// Web Design Section
export function getWebDesignContent() {
  return {
    className: 'flex-2',
    uid: 'web0',
    content: [
      {
        uid: 'web0a',
        component: 'paragraph',
        data: {
          content: 'Custom websites designed to reflect your brand and drive real results. At EFX Design, we blend visual storytelling with thoughtful structure and purposeful clarity to create digital experiences that are intuitive, responsive, and built to convert. Each site is tailored to your goals and audience, ensuring every interaction feels seamless and every page supports your business objectives.',
        },
      },
    ],
  };
}

export function getWebDesignPhoto() {
  return {
    className: 'flex-1 text-center',
    uid: 'web1',
    content: [
      {
        uid: 'web1a',
        component: 'image',
        data: {
          src: '/assets/i/photos/web-design-services.jpg',
          alt: 'efx Studio',
          width: 512,
          height: 376,
        },
      },
    ],
  };
}

export function getWebDesignData() {
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'Web Design',
        level: 2,
        className: 'text-4xl text-center',
      },
    },
    containers: {
      data: [
        getWebDesignContent(),
        getWebDesignPhoto(),
      ],
    },
  };
}

// UX / UI Design Section
export function getUXDesignContent() {
  return {
    className: 'flex-2',
    uid: 'ux0',
    content: [
      {
        uid: 'ux0a',
        component: 'paragraph',
        data: {
          content: 'We design interfaces that are effortless to use and easy to love. From early wireframes to polished final visuals, every step of our process is guided by clarity, accessibility, and user-centered thinking. We dig deep to understand your users’ needs and behaviors, translating that insight into intuitive layouts, thoughtful interactions, and designs that not only look great but feel natural to navigate.',
        },
      },
    ],
  };
}

export function getUXDesignPhoto() {
  return {
    className: 'flex-1 text-center',
    uid: 'ux1',
    content: [
      {
        uid: 'ux1a',
        component: 'image',
        data: {
          src: '/assets/i/photos/ux-ui-design-services.jpg',
          alt: 'efx Studio',
          width: 512,
          height: 376,
        },
      },
    ],
  };
}

export function getUXDesignData() {
  const defaultConfig = {
    headingLevel: 3,
    headingClassName: 'text-2xl',
  };
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'UX / UI Design',
        level: 2,
        className: 'text-4xl text-center',
      },
    },
    containers: {
      data: [
        getUXDesignPhoto(),
        getUXDesignContent(),
      ],
    },
  };
}

// E-Commerce Section
export function getECommerceContent() {
  return {
    className: 'flex-2',
    uid: 'ecommerce0',
    content: [
      {
        uid: 'ecommerce0a',
        component: 'paragraph',
        data: {
          content: 'We build online stores that are easy to manage, seamless to navigate, and optimized to drive sales. Whether it’s a fully branded Shopify site or a custom WooCommerce solution, we design with both your product and your customer in mind. Our e-commerce approach combines strategic layout, mobile-friendly design, and streamlined user flows to help visitors find what they need and complete their purchase with confidence.',
        },
      },
    ],
  };
}

export function getECommercePhoto() {
  return {
    className: 'flex-1 text-center',
    uid: 'ecommerce1',
    content: [
      {
        uid: 'ecommerce1a',
        component: 'image',
        data: {
          src: '/assets/i/photos/ecommerce-services.jpg',
          alt: 'efx Studio',
          width: 512,
          height: 376,
        },
      },
    ],
  };
}

export function getECommerceData() {
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'E-Commerce',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getECommerceContent(),
        getECommercePhoto(),
      ],
    },
  };
}

// Branding & Identity Section
export function getBrandContent() {
  return {
    className: 'flex-2',
    uid: 'brand0',
    content: [
      {
        uid: 'brand0a',
        component: 'paragraph',
        data: {
          content: 'Design that defines you. We help brands discover and express their unique voice through custom logos, cohesive visual identities, and flexible style guides. Whether you’re starting from scratch or evolving an existing brand, we create scalable systems that bring consistency and recognition across every touchpoint, from your website and marketing materials to social media and beyond.',
        },
      },
    ],
  };
}

export function getBrandPhoto() {
  return {
    className: 'flex-1 text-center',
    uid: 'brand1',
    content: [
      {
        uid: 'brand1a',
        component: 'image',
        data: {
          src: '/assets/i/photos/brand-identity-services.jpg',
          alt: 'efx Studio',
          width: 512,
          height: 376,
        },
      },
    ],
  };
}

export function getBrandData() {
  const defaultConfig = {
    headingLevel: 3,
    headingClassName: 'text-2xl',
  };
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: ' Branding & Identity',
        level: 2,
        className: 'text-4xl text-center',
      },
    },
    containers: {
      data: [
        getBrandPhoto(),
        getBrandContent(),
      ],
    },
  };
}

// Design Systems Section
export function getDesignSystemsContent() {
  return {
    className: 'flex-2',
    uid: 'ds0',
    content: [
      {
        uid: 'ds0a',
        component: 'paragraph',
        data: {
          content: 'For clients who need to scale, we build modular, component-based design systems that ensure consistency, accelerate your workflow, and support long-term growth across teams and platforms. These systems create a single source of truth for your brand’s digital presence, making it easier to design, build, and maintain cohesive experiences, no matter how fast you’re growing or how many collaborators are involved.',
        },
      },
    ],
  };
}

export function getDesignSystemsPhoto() {
  return {
    className: 'flex-1 text-center',
    uid: 'ds1',
    content: [
      {
        uid: 'ds1a',
        component: 'image',
        data: {
          src: '/assets/i/photos/design-systems-services.png',
          alt: 'efx Studio',
          width: 512,
          height: 376,
        },
      },
    ],
  };
}

export function getDesignSystemsData() {
  return {
    className: 'py-8 px-4 max-w-5xl',
    heading: {
      data: {
        content: 'Design Systems',
        level: 2,
        className: 'text-4xl text-center',
      }
    },
    containers: {
      data: [
        getDesignSystemsContent(),
        getDesignSystemsPhoto(),
      ],
    },
  };
}

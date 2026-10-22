// All business content, recovered from blueinctech.com (Wayback Machine captures, 2025–2026).
// Placeholder/theme-demo content found on the old site (e.g. "Numerique", lorem ipsum,
// "John Doe") has intentionally NOT been carried over.

export const site = {
  name: 'Blueinc Technologies',
  legalName: 'Blueinc Technologies, Inc.',
  founded: 2016,
  url: 'https://blueinctech.com',
  tagline: 'Technology solutions and digital products',
  description:
    'Blueinc Technologies is a technology solutions and digital product company. We build software for businesses and develop and operate digital products of our own.',
  email: 'contact@blueinctech.com',
  calendly: 'https://calendly.com/projects-blueinctech/consult',
  clientPortal: 'https://nexus.blueinctech.com/',
  phones: [
    { label: 'US', display: '+1 (302) 520-2517', href: 'tel:+13025202517' },
  ],
  // Blueinc is US-based: the Dover, Delaware office is the only published address.
  offices: [
    {
      label: 'United States, Dover',
      city: 'Dover',
      region: 'DE',
      postalCode: '19904',
      street: '1111B S Governors Ave',
      country: 'United States',
      countryCode: 'US',
      main: true,
      tz: 'America/New_York',
      address: '1111B S Governors Ave, Dover, DE 19904',
      map: 'https://www.google.com/maps/search/?api=1&query=1111B+S+Governors+Ave%2C+Dover%2C+DE+19904',
      phone: { display: '+1 (302) 520-2517', href: 'tel:+13025202517' },
    },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/blueinc-technologies' },
    { label: 'Twitter', href: 'https://twitter.com/blueinctech' },
    { label: 'Instagram', href: 'https://www.instagram.com/blueinc_tech/' },
    { label: 'Facebook', href: 'https://facebook.com/blueinctech' },
  ],
  // Rotating words used by the navbar logo label (kept short to fit the 13rem label).
  navTaglines: ['Custom Software', 'Digital Products', 'Mobile Apps', 'Product Design'],
};

// Industries, Our Work, Reviews and Pricing live in the footer (Connect column), not the navbar.
export const nav = [
  { label: 'About', href: '/about-us/' },
  { label: 'Products', href: '/portfolio/#products', children: 'products' },
  { label: 'Services', href: '/our-services/', children: 'services' },
  { label: 'Contact', href: '/contact/' },
];

export const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'Software Development', href: '/our-services/web-development-services/' },
      { label: 'Mobile Apps', href: '/our-services/app-development-services/' },
      { label: 'Enterprise Systems', href: '/our-services/product-management-services/' },
      { label: 'Product Design', href: '/our-services/graphics-interface-design-services/' },
      { label: 'View all Services', href: '/our-services/' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Our Work', href: '/portfolio/' },
      { label: 'Our Products', href: '/portfolio/#products' },
      { label: 'Reviews', href: '/success-stories/' },
      { label: 'Industries Served', href: '/industries-served/' },
      { label: 'Pricing', href: '/pricing-plans/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Blueinc', href: '/about-us/' },
      { label: 'Contact Us', href: '/contact/' },
      { label: 'Our Blog', href: '/blog/' },
      // Press & Media and Company CSR are hidden until those pages exist on this site.
    ],
  },
  {
    title: 'Portal',
    links: [
      { label: 'Clients Portal', href: 'https://nexus.blueinctech.com/' },
      { label: 'Staff Portal', href: 'https://workspace.blueinctech.com/' },
      // Hiring, SAAS and Developers are hidden until those pages exist.
    ],
  },
];

export const home = {
  title: 'Blueinc Technologies | Technology Solutions & Digital Products',
  heroServices: [
    { label: 'Custom Software', href: '/our-services/web-development-services/' },
    { label: 'Mobile Apps', href: '/our-services/app-development-services/' },
    { label: 'Digital Products', href: '/portfolio/' },
    { label: 'Enterprise Systems', href: '/our-services/product-management-services/' },
  ],
  headlineLead: 'Technology Solutions. Digital Products. Real-World',
  headlineWords: ['Impact', 'Results', 'Value'],
  intro:
    'We design, build and scale software for businesses, and we develop and operate our own digital products that solve real problems across industries.',
  trustedBy: 'Trusted by businesses across Canada, UK, US and Nigeria',
  stats: [
    { value: 100, suffix: '+', label: 'Websites & Apps Built' },
    { value: 6, suffix: '+', label: 'Years Experience' },
    { value: 5, suffix: '+', label: 'Countries Served' },
    { value: 4, suffix: '+', label: 'Digital Products We Own & Operate' },
  ],
  whoWeAre: {
    eyebrow: 'Who we are',
    title: 'One Team for Client Solutions and Our Own Products',
    body:
      'We build custom software, web and mobile applications and business systems for our clients, and we run digital products of our own. Building for both keeps our engineering practical and our product thinking sharp.',
  },
  history: {
    eyebrow: 'Our history',
    title: 'Digital solutions for startups and SMEs globally',
    body:
      'For years, Blueinc has been building technology for a diverse range of clients, from multinational companies and government agencies to MSMEs. We specialize in custom software, web and mobile applications, system integration, digital marketing and technology consulting, and we develop and operate digital products of our own. Our talented team of designers, developers, and project managers has completed hundreds of projects over the past 8 years, and helped hundreds more businesses grow and gain visibility online.',
    points: [
      'We’re an award-winning team of engineers, designers, and marketers',
      'We’ve worked with brands from over 9 countries',
      'In over 11 years, we’ve never lost a client. Clients keep coming',
      'Our clients have raised over $100m in Funding',
    ],
  },
  why: {
    eyebrow: 'Why Blueinc?',
    title: 'Engineering Expertise With a Product Mindset.',
    items: [
      {
        title: 'Tailored Solutions',
        body: 'We build software around how your business actually works, from internal systems to customer-facing platforms, with room to scale.',
      },
      {
        title: 'Intuitive Designs',
        body: 'We design products people find easy to use, the same standard we hold our own platforms to every day.',
      },
      {
        title: 'Performance Tracking',
        body: 'We provide detailed analytics and reports, helping you understand user behavior, track key performance indicators, and make informed decisions.',
      },
      {
        title: 'Launch and Growth',
        body: 'Launching is only the start. We help you reach users through content, search and social, then keep improving what you’ve built.',
      },
    ],
  },
  reviewsCount: '120+',
};

export const values = [
  {
    title: 'Team Work',
    body: 'We set aside egos and personal goals for the good of the team. Our philosophy is that when each team member prioritizes the collective success of the project, we can achieve outstanding results.',
  },
  {
    title: 'Integrity',
    body: 'We prioritize honesty and integrity, always striving to build relationships rooted in trust. We understand that trust is earned by consistently upholding our uncompromising standards.',
  },
  {
    title: 'Simplicity',
    body: 'We believe that being an expert should not mean sounding complicated. We are straightforward with our approach, always doing our best to simplify what’s seemingly complex.',
  },
  {
    title: 'Excellence',
    body: 'While perfection might be an ambitious goal, it drives us to deliver the highest quality results for our clients. This commitment means that we put in the extra effort to ensure every detail is meticulously handled.',
  },
];

export const about = {
  title: 'About Blueinc Technologies | Technology Solutions & Digital Products',
  description:
    'Blueinc is a technology solutions and digital product company. We build software for businesses and develop, own and operate digital products of our own.',
  h1: 'Software for Businesses. Products of Our Own.',
  lead: 'A technology company that builds for clients and for itself, and gets better at both.',
  body:
    'Blueinc Technologies designs, builds and supports software for startups, businesses and organizations, and develops and operates its own digital products, including Staffintra, Travel Nurse Houses, MyJobTests and Teststreams.',
  serve: {
    title: 'Who We Serve?',
    body: 'We work with startups, growing businesses, organizations and entrepreneurs that need dependable technology: from a first product to the systems a business runs on every day.',
  },
  believe: {
    eyebrow: 'What We Believe In',
    title: 'We believe technology should solve real problems.',
    body:
      'That belief shapes the software we build for clients and the products we choose to own. We start from the problem, build what is practical and reliable, and keep improving it after launch, with the same honesty and integrity whether the product is ours or yours.',
    principles: ['Transparency', 'Accountability', 'Lifelong Learning', 'Ambition'],
  },
  team: {
    title: 'Meet the Blueinc Team',
    body: 'Engineers, designers and product people who build for our clients and run our own products, and who take ownership of the results.',
  },
};

export const audit = {
  title: 'Get a Free consultation',
  lead: 'Our consultation is a deep dive into your technology and objectives. Here’s what you’ll get',
  points: [
    'A review of your current software, website and tools, and how well they support the way your business runs.',
    'Opportunities to automate manual processes and connect the systems your team already uses.',
    'A practical recommendation on what to build, buy or improve next, with priorities you can act on.',
    'A look at how you reach and convert customers online, including search, content and digital marketing.',
  ],
};

export const servicesPage = {
  title: 'Our Services | Blueinc Technologies',
  h1: 'Technology Solutions Built for Your Business',
  lead: 'From custom software and mobile apps to business systems and automation, we turn complex challenges into practical, scalable technology.',
  beliefTitle: 'We build technology the way we build our own products',
  beliefBody:
    'Because we develop and operate digital products of our own, we know what it takes to ship software that people rely on. We start by understanding your business and its challenges, recommend the right technology, then design, build, launch and support it, from first release to long-term growth.',
  listTitle: 'What we build for our clients',
  closing:
    'We apply the same engineering to client work that we apply to the products we own and operate. We don’t just deliver projects; we build technology partnerships that last.',
};

export const services = [
  {
    slug: 'web-development-services',
    name: 'Software & Web Development',
    short: 'Software Development',
    summary:
      'Custom software, web applications, SaaS platforms and high-performance websites, engineered around how your business works. We build secure, scalable systems, integrate them with the tools you use, and keep them running well.',
    tags: ['Custom Software', 'Web Applications', 'SaaS', 'APIs & Integrations', 'Websites'],
    image: 'clients/fillinstaffing.com.jpg',
    mockup: { laptop: 'scrubharvard.com', phone: 'lexpraxisng.com' },
    h1: 'Custom software, web applications and websites that run your business.',
    lead: 'Practical, reliable software engineered to scale with you.',
    introTitle: 'We engineer software around your business, not the other way round',
    introBody:
      'Whether it’s a SaaS platform, an internal system, a customer portal or a website, our process is collaborative and transparent. It’s the same approach we use to build and run our own products. Here’s how it works:',
    processTitle: 'How We Build Software That Lasts',
    steps: [
      ['Discovery & Planning', 'We start with your business: the problem, the users, the processes involved and what success looks like. Together we define scope, priorities and the right technology.'],
      ['Architecture & Design', 'We plan the system’s structure, data and integrations, and design an interface that is clear and easy to use, so the product is built on solid foundations.'],
      ['Product Strategy', 'We shape the features, content and user journeys that matter most, so the first release delivers value and leaves room to grow.'],
      ['Build & Integrate', 'Our engineers build secure, well-tested software and connect it to the tools and APIs you already rely on, optimized for performance on every device.'],
      ['Test & Launch', 'We test thoroughly for quality, security and performance, review everything with you, and launch with confidence.'],
      ['Support & Optimize', 'After launch we maintain, monitor and improve your software so it stays secure, up to date and ready for the next stage of growth.'],
    ],
    showcase: ['scrubharvard.com', 'fillinstaffing.com', 'gebbrapharma.com'],
    quote: {
      text: 'The entire team at Blueinc Tech are extremely talented. They brought fresh innovative ideas to the table and gave us a fantastic website. I’m really impressed by their ability to understand ideas and turn them into reality.',
      name: 'Femi Ladejo',
      org: 'Pinnacle',
    },
    closing:
      'We’ve built software and websites for healthcare providers and pharmacies, e-commerce stores, educational institutions, non-profits and professional organizations, and we run our own platforms on the same engineering foundations.',
  },
  {
    slug: 'digital-marketing-services',
    name: 'Digital Marketing',
    summary:
      'Great products still need to be found. We help businesses and digital products reach, convert and retain users with data-driven SEO, paid campaigns, content, social media and email marketing, measured against real results.',
    tags: ['SEO', 'PPC', 'Content Marketing', 'Social Media', 'Email Marketing', 'Analytics'],
    image: 'clients/scrubharvard.com.jpg',
    mockup: { laptop: 'spotlightnigeria-france.com', phone: 'scrubharvard.com' },
    h1: 'Data-driven digital marketing strategies that get results.',
    lead: 'Growth strategies for businesses and digital products, informed by what we learn growing our own.',
    introTitle: 'We Drive Growth for Businesses and Digital Products',
    introBody:
      'In today’s digital age, a strong online presence is essential for any business. Our comprehensive digital marketing services are designed to help you reach your target audience, build brand awareness, and drive conversions.',
    processTitle: 'How we help your business achieve its marketing goals',
    steps: [
      ['Strategy & Planning', 'We begin by working closely with you to understand your unique business objectives and target audience. Together, we’ll develop a tailored digital marketing strategy that aligns with your overall goals.'],
      ['Search Engine Optimization (SEO)', 'We’ll optimize your website and content to rank higher in search engine results pages (SERPs), ensuring your ideal customers can easily find you online.'],
      ['Pay-Per-Click Advertising (PPC)', 'We help your business reach a wider audience and, drive targeted traffic to your website with strategic PPC campaigns on platforms like Google Ads.'],
      ['Content Marketing', 'We’ll craft a tailored content strategy that captivates your target audience, builds brand loyalty, and establishes your business as a thought leader in the industry. Our high-quality, engaging content will inform, educate, and resonate with your audience, keeping them hooked and driving long-term growth for your business'],
      ['Social Media Marketing', 'We’ll help your business build a strong social media presence and connect with your audience on the platforms they use most by developing engaging social media content, and targeted social media advertising campaigns.'],
      ['Email Marketing', 'We drive business growth through targeted email marketing campaigns, expertly crafting effective email sequences, managing your email list, and tracking results to convert leads into loyal customers.'],
    ],
    quote: {
      text: 'I believe Blueinc Tech is the only technology company that considers the client’s growth as their key performance indicator. Their digital marketing strategies are very effective. And believe me, I have worked with a few others.',
      name: 'Debra',
      org: 'CEO, Scrub Harvard',
    },
    closing:
      'We’ve partnered with a wide range of businesses, from healthcare providers and pharmacies to e-commerce stores, educational institutions, non-profits, and professional organizations, to execute successful digital marketing campaigns. This experience allows us to bring a wealth of knowledge and proven strategies to every project we undertake.',
  },
  {
    slug: 'app-development-services',
    name: 'Mobile & App Development',
    short: 'Mobile Apps',
    summary:
      'Native and cross-platform apps for iOS, Android and the web, from MVP to scale. We design, build and launch applications that users rely on, backed by the APIs and infrastructure to support them.',
    tags: ['Android', 'iOS', 'Web Apps', 'SaaS', 'API Integration', 'Custom Software'],
    image: 'clients/travelnursehouses.ca.jpg',
    mockup: { laptop: 'travelnursehouses.ca', phone: 'travelnursehouses.ca' },
    h1: 'Mobile and web applications built for real users and real scale.',
    lead: 'From MVP to app-store launch and beyond, built by a team that runs its own products.',
    introTitle: 'We strategically design your app, equipping your business for success',
    introBody:
      'In today’s mobile-first world, a simple, functional and well-designed app can be a game-changer for your business. Our experienced app development team will collaborate with you to bring your idea to life, from concept to app store launch.',
    processTitle: 'Our proven app development process',
    steps: [
      ['Brainstorm & Planning', 'Our app development process begins with a planning and brainstorming phase, where we work closely with you to define your app’s purpose, target audience, and desired outcomes. This solid foundation ensures a smooth development process, minimizes costly revisions, and sets your app up for success in the market.'],
      ['User Research & Strategy', 'With a clear direction in place, our team brainstorm and ideate solutions to bring your app to life. We’ll conduct user research to identify their needs, behaviors, and pain points. This informs our app strategy and ensures your app delivers a valuable user experience.'],
      ['Feature Planning & User Flow', 'Next, we’ll map out the key features and, how users will navigate through the app to achieve their goals. This creates a clear user flow that keeps users engaged.'],
      ['Design & Prototyping', 'Our talented designers will create a visually stunning and user-friendly mock-up of your app, keeping your brand identity in mind. We’ll also develop interactive prototypes to allow you experience the app flow firsthand.'],
      ['Native App Development', 'Our skilled developers will bring your app to life using native development tools for Android and iOS. This ensures optimal performance, security, and a seamless user experience across different devices.'],
      ['Launch & Optimization', 'We’ll handle the app store submission process and get your app ready for the world to see! We’ll also develop launch strategies to drive user acquisition and app downloads.'],
    ],
    quote: {
      text: 'Working with Blueinc has truly transformed our business operations. When we first partnered with them, we were struggling with various technical challenges that slowed us down. The Blueinc team stepped in and quickly got to work, solving issues we had been grappling with for months. Their expertise and dedication have not only streamlined our processes but also enhanced our overall efficiency. Their professional technical support team is reliable, responsive, and consistently meets all our needs. I highly recommend their services to any business looking for dependable and effective technical support.',
      name: 'Andrew',
      org: 'AXA Consulting',
    },
    closing:
      'We’ve partnered with businesses across various industries to develop user-centric applications, from e-commerce and education to on-demand services. We apply the same experience to the platforms we own and operate, including Travel Nurse Houses and MyJobTests.',
  },
  {
    slug: 'graphics-interface-design-services',
    name: 'Product & UX Design',
    short: 'Product Design',
    summary:
      'Research-led UI/UX and digital product design for software, apps and platforms. We map user journeys, prototype and test, and design interfaces and brand systems that are clear, usable and ready to build.',
    tags: ['UI/UX', 'Prototyping', 'Wireframing', 'Branding', 'Usability Testing', 'Animation'],
    image: 'clients/gebbrapharma.com.jpg',
    mockup: { laptop: 'gebbrapharma.com', phone: 'gebbrapharma.com' },
    h1: 'Digital product design that is both beautiful and intuitive.',
    lead: 'UI/UX, product and brand design shaped by research and tested with real users.',
    introTitle: 'Design That Makes Software Easy to Use',
    introBody:
      'Good software starts with a clear experience. Our UI/UX and product designers turn complex requirements into interfaces people understand, backed by brand and visual systems that hold together across every screen.',
    processTitle: 'Our battle tested 6-step design process',
    steps: [
      ['Discovery & Collaboration', 'First, we’ll get to know you and your brand. We’ll discuss your design goals, target audience, and brand identity.'],
      ['User Research & Strategy', 'We carry out user research which is beneficial to understanding user needs and behaviors. This will inform the design strategy for projects with a heavy user focus'],
      ['Concept Development & Design', 'Our creative team will brainstorm and develop unique design concepts that align with your brand and user needs.'],
      ['Prototyping & Iteration', 'We believe in an iterative design process. We’ll create low-fidelity prototypes (if applicable) to test and refine core functionalities or user flows before diving into high-fidelity mockups.'],
      ['Design Refinement & Delivery', 'Based on your feedback, we’ll polish the designs until they meet your expectations. Once everything is finalized, we’ll deliver the final design assets and style guide, ensuring brand consistency across all platforms.'],
      ['Ongoing Support', 'We can provide ongoing design support as needed, such as creating new graphics for marketing materials or adapting your design for different contexts.'],
    ],
    quote: {
      text: 'Aside from the great visual appeal Blueinc Tech created for our website, I am particularly awed by the simplicity of its functions. And I believe that’s what great design is about.',
      name: 'Adebisi',
      org: '365 Days Hampers',
    },
    closing:
      'We’ve had the pleasure of collaborating with a diverse range of clients on various graphics and interface design projects. From crafting brand identities for startups to revamping user interfaces for established businesses, we’ve helped them create visually appealing and user-friendly experiences that elevate their brand and resonate with their target audience.',
  },
  {
    slug: 'customer-support-services',
    name: 'Support & Maintenance',
    summary:
      'Keep your software and your customers well looked after. We maintain and optimize applications after launch, and set up knowledge bases, support teams and systems that resolve customer issues quickly across multiple channels.',
    tags: ['Knowledge Base', 'Agent Training', 'Multi-Channel', 'Live Chat', 'Email', 'Phone'],
    image: 'partner.jpg',
    h1: 'Ongoing support that keeps your software and customers in good hands.',
    lead: 'Maintenance, optimization and customer support, so your product keeps performing long after launch.',
    introTitle: 'Elevating Your Customer Experience',
    introBody:
      'In today’s competitive landscape, exceptional customer support is essential for building trust and loyalty. Our dedicated customer support team is passionate about creating positive experiences for your customers',
    processTitle: 'Our 6-step approach to elevating your customer experience',
    steps: [
      ['Understanding Your Needs', 'First, we’ll work closely with you to understand your unique business needs, customer base, and support channels (phone, email, chat, etc.).'],
      ['Building a Knowledge Base', 'We’ll develop a comprehensive knowledge base filled with helpful articles, FAQs, and tutorials to empower your customers to self-serve whenever possible'],
      ['Agent Training & Development', 'Our customer support agents undergo rigorous training to ensure they have a deep understanding of your products, services, and best practices for customer interaction.'],
      ['Multi-Channel Support', 'We offer support across various channels to meet your customers where they are, including phone, email, live chat, and social media.'],
      ['Issue Resolution & Service Recovery', 'Our team is dedicated to resolving customer issues efficiently and professionally. We go the extra mile to ensure your customers walk away satisfied, even in challenging situations.'],
      ['Performance Measurement & Improvement', 'We continuously monitor key metrics and track customer feedback to identify areas for improvement and optimize our support processes for maximum effectiveness.'],
    ],
    quote: {
      text: 'BlueInc’s support team has been exceptional in their responsiveness and professionalism. They consistently address our queries and issues promptly. This is very commendable.',
      name: 'Director of Marketing',
      org: 'Zarra Home',
    },
    closing:
      'We’ve partnered with a wide range of businesses across various industries to provide exceptional customer support. Our experience allows us to tailor our approach to your specific needs and ensure your customers receive the level of care they deserve. This has resulted in increased customer satisfaction, reduced churn, and improved brand loyalty for our clients',
  },
  {
    slug: 'product-management-services',
    name: 'Enterprise Systems & Automation',
    short: 'Enterprise Systems',
    summary:
      'ERP, business management systems and process automation that connect your operations. We assess your workflows, select or build the right system, migrate your data, integrate your tools and train your team, so work runs on one reliable foundation.',
    tags: ['ERP', 'Business Systems', 'Process Automation', 'Data Migration', 'Integrations'],
    image: 'team-duo.png',
    h1: 'Unify your operations with enterprise systems and automation.',
    lead: 'Replace data silos and manual work with connected systems that support smarter decisions and growth.',
    introTitle: 'We Help You Run Operations on One Reliable System',
    introBody:
      'In today’s data-driven world, a robust Enterprise Resource Planning (ERP) system is the backbone of any successful organization. Our team of ERP specialists will help you integrate your core business functions, streamline operations, and gain valuable insights to drive informed decision-making.',
    processTitle: 'Our proven ERP implementation process',
    steps: [
      ['In-Depth Needs Assessment', 'We begin by working closely with you to understand your unique business needs, challenges, and growth objectives.'],
      ['System Selection & Customization', 'Our ERP experts will recommend the best-fit ERP software solution for your specific requirements. We can also customize the system to seamlessly integrate with your existing infrastructure and workflows'],
      ['Data Migration & Integration', 'Migrating your existing data to the new ERP system is crucial. We’ll handle this process meticulously to ensure data accuracy and continuity'],
      ['System Implementation & Training', 'Our team will configure the ERP system and provide comprehensive training to your staff, empowering them to leverage its full potential.'],
      ['Go-Live Support & Optimization', 'We’ll be by your side during the system launch and beyond, offering ongoing support and continuously optimizing the ERP to maximize its impact on your business.'],
      ['Continuous Improvement & Scalability', 'As your business evolves, your ERP system should too. We’ll partner with you to identify areas for improvement and ensure your ERP scales alongside your growth.'],
    ],
    quote: null,
    closing:
      'We’ve helped businesses across manufacturing, distribution, healthcare and retail run on connected systems. We also build and operate Staffintra, our own workplace operations platform, so we understand day-to-day operations software from the inside.',
  },
];

export const industries = {
  title: 'Industries Served | Blueinc Technologies',
  h1: 'Industries Served',
  body:
    'We build technology for organizations in Nigeria, the USA, Canada, the UK, France, Switzerland, Australia, Saudi Arabia and many more countries. Our client work spans healthcare, consulting, ecommerce, education, NGOs and religious organizations, construction and retail, and our own products serve sectors including healthcare, workforce management and careers.',
  list: [
    { name: 'Health Care', slug: 'health-care' },
    { name: 'Consulting Agency', slug: 'consulting-agency' },
    { name: 'Ecommerce', slug: 'ecommerce' },
    { name: 'Education', slug: 'education' },
    { name: 'NGO’s', slug: 'ngos' },
    { name: 'Religious Organisations', slug: 'religious-organisations' },
    { name: 'Construction', slug: 'construction' },
    { name: 'Retail', slug: 'retail' },
  ],
};

export const portfolio = {
  title: 'Our Work & Products | Blueinc Technologies',
  h1: 'Our Work & Products',
  body:
    'Software, applications and websites we’ve built for clients across Nigeria, the USA, Canada, the UK, France and beyond, alongside the digital products we develop, own and operate.',
  categories: ['Websites', 'Web Applications', 'Mobile Applications', 'Our Products'],
  websites: [
    'scrubharvard.com', 'fillinstaffing.com', 'gebbrapharma.com', '365dayshampers.com',
    'rccgfranceprovince.org', 'goodwillstaffing.us', 'stephensbooks.net', 'constructioncrewpro.ca',
    'everlivelyhhc.ca', 'bridgeandvalue.com', 'goodwillstaffing.ca',
    'tvinstallpro.ca', 'testpremier.com', 'lexpraxisng.com', 'abiodunodunuga.com',
    'equestglobal.com', 'kochezmedical.com', 'rhagfnig.org.ng', 'riteshoe.com',
    'spotlightnigeria-france.com',
  ],
  // The former "Enterprise Softwares" items now sit with web applications; that tab shows Blueinc's own products.
  webApps: ['Truck Service Web App', 'Taxi Booking Web App', 'Event Management Web App', 'e-Commerce Store', 'Ai Bot for Business', 'Ai', 'IT Services'],
  mobileApps: ['Fitness App', 'Food Delivery App'],
};

// Digital products Blueinc develops, owns and operates. Descriptions are taken from each product's own
// live site (checked 2026-10-21); no user numbers or ratings are claimed here.
export const products = [
  { site: 'staffintra.com', url: 'https://staffintra.com/', name: 'Staffintra', kind: 'Workforce platform',
    desc: 'People, attendance, approvals, payroll-ready timesheets and everyday work in one workspace.' },
  { site: 'travelnursehouses.ca', url: 'https://travelnursehouses.ca/', name: 'Travel Nurse Houses', kind: 'Housing marketplace',
    desc: 'Furnished, move-in ready homes near Canadian hospitals for travel nurses and healthcare professionals.' },
  { site: 'myjobtests.com', url: 'https://myjobtests.com/', name: 'MyJobTests', kind: 'Career test prep',
    desc: 'Aptitude test practice, interview preparation and resume review for job seekers.' },
  { site: 'teststreams.com', url: 'https://teststreams.com/', name: 'Teststreams', kind: 'Exam prep platform',
    desc: 'Verified past questions and study packs for job aptitude tests, school exams and scholarships.' },
];

// Home page stacked cards: our own products first, then client work.
export const featuredWork = [
  ...products.map((p) => ({ site: p.site, client: p.name, kind: p.kind, href: p.url, own: true })),
  { site: 'scrubharvard.com', client: 'Scrub Harvard', kind: 'Client website' },
];

export const testimonials = [
  {
    text: 'All we did was share our vision with Blueinc Tech. We told them we needed an online store that would speak to our customers with a clear call to action. And they delivered exactly what we wanted.',
    name: 'Adebisi', org: '365 days hampers', site: '365dayshampers.com',
  },
  {
    text: 'The ROI on our website since partnering with Blueinc Tech has been remarkable. Their team’s dedication to understanding our goals and delivering results-oriented tech solutions is truly commendable. I love those guys!',
    name: 'Biodun', org: 'Bridge And Value', site: 'bridgeandvalue.com',
  },
  {
    text: 'Blueinc technologies are always accommodating our diverse needs and we feel like they are a part of our Company rather than an external company.',
    name: 'Dr. Henry', org: 'Regy and Henry Amazing Grace Foundation', site: 'rhagfnig.org.ng',
  },
  {
    text: 'Blueinc Tech cares about our product and its design as much as we do. They handle everything, from design to customer support to digital marketing. They are engaged, authentic, and talented.',
    name: 'Rachael', org: 'Fill IN Staffing', site: 'fillinstaffing.ca',
  },
  {
    text: 'Blueinc Tech impressed us with their deep knowledge of Real Estate and Web Design. They brought fresh ideas to the table. The team has the ability to understand ideas and turn them into reality.',
    name: 'Arya', org: 'surehomz', site: 'surehomz.com',
  },
  {
    text: 'What I love the most about Blueinc Tech is their desire to truly understand your business goals. They took all our feedback and what we have is a great website and a good ROI.',
    name: 'Cynthia', org: 'Lexpraxis Solicitors', site: 'lexpraxisng.com',
  },
  {
    text: 'BlueInc’s support team has been exceptional in their responsiveness and professionalism. They consistently address our queries and issues promptly. This is very commendable.',
    name: 'Director of Marketing', org: 'Zarra Home',
  },
  {
    text: 'The entire team at Blueinc Tech are extremely talented. They brought fresh innovative ideas to the table and gave us a fantastic website. I’m really impressed by their ability to understand ideas and turn them into reality.',
    name: 'Femi Ladejo', org: 'Pinnacle',
  },
  {
    text: 'I believe Blueinc Tech is the only technology company that considers the client’s growth as their key performance indicator. Their digital marketing strategies are very effective. And believe me, I have worked with a few others.',
    name: 'Debra', org: 'CEO, Scrub Harvard',
  },
];

export const reviewsPage = {
  title: 'Success Stories | Blueinc Technologies',
  h1: 'What our happy clients are saying',
  body:
    'Businesses and organizations rely on Blueinc to design, build and support the technology they run on. Here’s what some of them say about working with us.',
};

export const pricing = {
  title: 'Pricing Plans | Blueinc Technologies',
  h1: 'Our Pricing',
  lead: 'We scope and price every engagement around your goals.',
  plans: [
    { name: 'Websites', items: ['Custom WordPress Websites', 'Custom Shopify Websites', 'WooCommerce Website', 'Template WordPress Websites', 'Custom Websites'], perk: '1 - month FREE Maintenance', type: 'Website' },
    { name: 'Software & App Development', items: ['Custom Software Development', 'Mobile Application Development', 'Web Application Development', 'SaaS Development', 'API Integration and Development'], perk: null, type: 'Custom Software / Web App' },
    { name: 'Digital Marketing', items: ['Marketing Strategy', 'Social Media Marketing', 'Search Engine Optimization', 'Pay-Per-Click Advertising', 'Email Marketing', 'Analytics'], perk: null, type: 'Digital Marketing' },
    { name: 'Product & UX Design', items: ['Visual Design / Animation', 'Prototyping and Wireframing', 'Website UI/UX Design', 'Mobile App UI/UX Design', 'Usability Testing'], perk: '1-Month Free Design Revisions', type: 'UI/UX & Product Design' },
  ],
};

export const contactPage = {
  title: 'Contact Us | Blueinc Technologies',
  h1: 'Let’s talk about what you’re building',
  lead: 'Planning a new product, modernizing a system or need support with existing software? Tell us about it and our team will get back to you.',
};

export const cta = {
  eyebrow: 'Have an idea?',
  title: 'Let’s build what’s next, together.',
  sub: 'Tell us about your project or idea.',
};

export const projectTypes = ['Custom Software / Web App', 'Mobile App', 'Enterprise Systems & Automation', 'Website', 'UI/UX & Product Design', 'Digital Marketing', 'Technology Consulting'];

export const clientLogos = [
  'L13', 'L7', 'L11', 'FILLIN-STAFF', 'FON', 'IMO', 'KEBBI', 'KOCHEZ', 'LEXAP', 'STEPHEN', 'Testp',
  'TV-INSTALL', 'ncs', 'riteshoe', 'equest', 'ccp', 'bridge-and-value', 'SHEAPSMART', 'GE', 'SPOT',
  'RCCG', 'EVERLIVELY',
];

// All business content, recovered from blueinctech.com (Wayback Machine captures, 2025–2026).
// Placeholder/theme-demo content found on the old site (e.g. "Numerique", lorem ipsum,
// "John Doe") has intentionally NOT been carried over.

export const site = {
  name: 'Blueinc Technologies',
  legalName: 'Blueinc Technologies, Inc.',
  founded: 2016,
  url: 'https://blueinctech.com',
  tagline: 'Technology solutions, IT services and digital products',
  description:
    'Blueinc Technologies is a technology and IT solutions company. We help organizations modernize, connect and automate how they work, build and operate our own products, and engineer custom software when it is needed.',
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
};

// Positioning, by emphasis: solutions (problems we solve) first, our own products second,
// development services third. Industries, Our Work, Reviews, Pricing and Blog live in the footer.
export const nav = [
  { label: 'Solutions', href: '/solutions/', children: 'solutions' },
  { label: 'Products', href: '/products/', children: 'products' },
  { label: 'Services', href: '/our-services/', children: 'services' },
  { label: 'About', href: '/about-us/' },
];

export const footerCols = [
  {
    title: 'Solutions',
    links: [
      { label: 'Digital Transformation', href: '/solutions/digital-transformation/' },
      { label: 'Systems & Integration', href: '/solutions/enterprise-systems-integration/' },
      { label: 'AI & Automation', href: '/solutions/ai-process-automation/' },
      { label: 'Workforce & Operations', href: '/solutions/workforce-operations/' },
      { label: 'All solutions', href: '/solutions/' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Staffintra', href: 'https://staffintra.com/' },
      { label: 'Travel Nurse Houses', href: 'https://travelnursehouses.ca/' },
      { label: 'MyJobTests', href: 'https://myjobtests.com/' },
      { label: 'Teststreams', href: 'https://teststreams.com/' },
      { label: 'All products', href: '/products/' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Software & Web', href: '/our-services/web-development-services/' },
      { label: 'Mobile Apps', href: '/our-services/app-development-services/' },
      { label: 'Product Design', href: '/our-services/graphics-interface-design-services/' },
      { label: 'Our Work', href: '/portfolio/' },
      { label: 'Pricing', href: '/pricing-plans/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Blueinc', href: '/about-us/' },
      { label: 'Industries', href: '/industries-served/' },
      { label: 'Reviews', href: '/success-stories/' },
      { label: 'Our Blog', href: '/blog/' },
      { label: 'Contact Us', href: '/contact/' },
      { label: 'Clients Portal', href: 'https://nexus.blueinctech.com/' },
      { label: 'Staff Portal', href: 'https://workspace.blueinctech.com/' },
      // Press & Media, CSR, Hiring and Developers are hidden until those pages exist.
    ],
  },
];

export const home = {
  title: 'Blueinc Technologies | Technology Solutions, IT Services & Digital Products',
  // Hero: two lines under the wordmark, then an AI-chat-style "what's the challenge?" box.
  heroSub:
    'We solve complex business problems with technology, from modernizing operations to automating work, and we build and run products of our own.',
  ask: {
    label: 'What business challenge can we help you solve?',
    placeholder: 'Describe a challenge in your business, or what you want to achieve…',
    hint: 'Our team will reach out to you shortly',
    // label: chip text; prompt: how the message box starts when the chip is clicked; href: chip is a link
    chips: [
      { label: 'Solve a business challenge', prompt: 'We have a business challenge we need to solve: ' },
      { label: 'Digital transformation', prompt: 'We want to digitally transform how our business works: ' },
      { label: 'AI and business automation', prompt: 'We want to use AI to automate ' },
      { label: 'Explore your products', href: '/products/' },
    ],
  },
  headlineLead: 'We solve complex business problems for',
  headlineWords: ['Healthcare', 'Workforces', 'Education', 'Enterprises'],
  intro:
    'Blueinc Technologies is a technology and IT solutions company. We diagnose what is slowing an organization down, then design, integrate and run the technology that fixes it. Our own products, Staffintra, Travel Nurse Houses, MyJobTests and Teststreams, run on the same engineering.',
  integrations: 'Our solutions connect with the platforms organizations already run on',
  solutions: {
    title: 'Solutions for the problems that slow organizations down',
    lead: 'We start with the business challenge, not the technology. Each solution combines strategy, systems, automation and support to deliver a measurable change in how an organization works.',
  },
  industries: {
    title: 'Industry expertise, proven in real operations',
    lead: 'Our solutions and products are built around the realities of specific industries. Here is where we work, and the evidence behind it.',
  },
  productsShowcase: {
    title: 'Products we build, own and operate',
    lead: 'Alongside client solutions, we develop and run our own platforms. They are our proof that we can take a problem from idea to a product people rely on every day.',
  },
  development: {
    title: 'Websites, applications and custom software',
    body: 'When a solution calls for new software, the engineers who build our products build it: websites, web and mobile applications, SaaS platforms and product design.',
  },
  trustedBy: 'Organizations across Canada, the UK, the US and Nigeria rely on our solutions and products',
  stats: [
    { value: 2016, suffix: '', label: 'Solving Problems Since' },
    { value: 100, suffix: '+', label: 'Client Projects Delivered' },
    { value: 4, suffix: '', label: 'Products We Own & Operate' },
    { value: 5, suffix: '+', label: 'Countries Served' },
  ],
  whoWeAre: {
    eyebrow: 'Who we are',
    title: 'Solutions, Products and Engineering Under One Roof',
    body:
      'We solve business problems with technology, we build and operate products of our own, and we engineer software when a solution needs it. One team does all three, so the lessons from running our own platforms go into every client solution.',
  },
  history: {
    eyebrow: 'Our history',
    title: 'Solving problems since 2016',
    body:
      'Blueinc started in 2016 delivering technology for businesses. Today we deliver solutions for organizations across several countries and operate four products of our own.',
    points: [
      'Solutions for organizations in healthcare, education, staffing and more',
      'Four products of our own, built and run in-house',
      'Clients from over 9 countries',
      'Our clients have raised over $100m in funding',
    ],
  },
  why: {
    eyebrow: 'How we deliver',
    title: 'From Diagnosis to Dependable Operation.',
    lead: 'We understand how work really happens before we design anything, then engineer, integrate, launch and keep improving. It is the same discipline we use to run our own products.',
    items: [
      {
        title: 'Diagnose the Real Problem',
        body: 'We map processes, systems and pain points with the people involved, so the solution targets the cause, not the symptom.',
      },
      {
        title: 'Design for the People Who Use It',
        body: 'Staff, managers and customers have to adopt the solution, so we design every workflow and screen to be simple to use.',
      },
      {
        title: 'Measure What Matters',
        body: 'We agree the outcomes up front and build in reporting and analytics, so you can see what has changed.',
      },
      {
        title: 'Run, Support and Improve',
        body: 'After go-live we maintain, monitor and improve the solution, and train your team, so it keeps delivering.',
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
    'Blueinc Technologies is a technology and IT solutions company that solves complex business problems, builds and operates its own products, and engineers custom software.',
  h1: 'We Solve Complex Business Problems With Technology.',
  lead: 'A technology and IT solutions company with its own product portfolio and the engineering to build what organizations need.',
  body:
    'Blueinc Technologies helps organizations modernize how they work: we connect their systems, automate manual processes and support the technology they depend on. We also build and operate our own products, Staffintra, Travel Nurse Houses, MyJobTests and Teststreams, and we engineer websites, applications and custom software when a solution calls for it.',
  serve: {
    title: 'Who We Serve',
    body: 'Organizations that need technology to do more for the business: healthcare and staffing providers, education and training organizations, professional services firms, retailers, nonprofits and growing companies. Through our products we also serve frontline teams, travelling healthcare professionals, job seekers and students directly.',
  },
  believe: {
    eyebrow: 'What We Believe In',
    title: 'We believe technology should solve real problems.',
    body:
      'That belief shapes the solutions we deliver and the products we choose to own. We start from the problem, build what is practical and reliable, and keep improving it long after launch, with the same honesty and integrity whether the platform is ours or a client’s.',
    principles: ['Transparency', 'Accountability', 'Lifelong Learning', 'Ambition'],
  },
  team: {
    title: 'Meet the Blueinc Team',
    body: 'Consultants, engineers, designers and product people who solve problems for clients and run our own products every day, and who take ownership of the results.',
  },
};

export const audit = {
  title: 'Get a Free Technology Consultation',
  lead: 'Our consultation is a deep dive into your technology and objectives. Here’s what you’ll get',
  points: [
    'A review of your current software, website and tools, and how well they support the way your business runs.',
    'Opportunities to automate manual processes and connect the systems your team already uses.',
    'A practical recommendation on what to build, buy or improve next, with priorities you can act on.',
    'A look at how you reach and convert customers online, including search, content and digital marketing.',
  ],
};

export const servicesPage = {
  title: 'Services | Websites, Applications & Custom Software | Blueinc Technologies',
  description: 'Website, web and mobile application, custom software, product design, marketing and support services from Blueinc Technologies.',
  h1: 'Engineering Services Behind Our Solutions',
  lead: 'Websites, web and mobile applications, custom software and the design, marketing and support around them, delivered by the team that builds and runs our own products.',
  beliefTitle: 'We build your software the way we build our own',
  beliefBody:
    'Because we develop and operate digital products of our own, we know what it takes to ship software that people rely on. We start by understanding your business and its challenges, recommend the right technology, then design, build, launch and support it, from first release to long-term growth.',
  listTitle: 'What we build for clients',
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
    illo: 'lexpraxisng',
    mockup: { laptop: 'lexpraxisng', phone: 'scrubharvard' },
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
    showcase: ['scrubharvard.com', 'goodwillstaffing.ca', 'gebbrapharma.com'],
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
    illo: 'scrubharvard',
    mockup: { laptop: 'spotlight', phone: 'scrubharvard' },
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
    illo: 'travelnursehouses',
    mockup: { laptop: 'travelnursehouses', phone: 'travelnursehouses' },
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
    illo: 'gebbrapharma',
    mockup: { laptop: 'gebbrapharma', phone: 'myjobtests' },
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
    illo: 'teststreams',
    mockup: { laptop: 'myjobtests', phone: 'teststreams' },
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
    illo: 'staffintra',
    mockup: { laptop: 'staffintra', phone: 'staffintra' },
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

// Industries as use cases. Proof is limited to our own products and live client work (see util.mjs).
export const industries = {
  title: 'Industries | Blueinc Technologies',
  description: 'How Blueinc Technologies solves technology challenges in healthcare, staffing, education, professional services, events and trade, retail, nonprofits and field operations.',
  h1: 'Industry Expertise',
  lead: 'Technology solutions shaped by how each industry actually works, with evidence from our products and client work.',
  body:
    'We deliver technology for organizations in Nigeria, the USA, Canada, the UK, France and beyond. Our solutions and products serve healthcare, staffing and workforce management, education and careers, professional services, events and trade, retail, nonprofits and field operations.',
  list: [
    { name: 'Healthcare', slug: 'health-care',
      challenge: 'Clinicians on assignment need housing, providers need staff, and supply chains need to reach every facility on time.',
      help: 'We build and run healthcare marketplaces and deliver platforms for staffing agencies and pharmaceutical suppliers.',
      solutions: ['workforce-operations', 'customer-experience'],
      proof: [{ name: 'Travel Nurse Houses', note: 'Our product', href: 'https://travelnursehouses.ca/' }, { name: 'Goodwill Staffing', note: 'Client', href: 'https://goodwillstaffing.ca/' }, { name: 'Gebbra Pharmaceuticals', note: 'Client', href: 'https://gebbrapharma.com/' }] },
    { name: 'Staffing & Workforce', slug: 'staffing-workforce',
      challenge: 'Shift-based and multi-site teams lose hours to manual timesheets, approval chains and scheduling gaps.',
      help: 'We digitize attendance, scheduling, approvals and payroll preparation, and connect them to the tools teams already use.',
      solutions: ['workforce-operations', 'ai-process-automation'],
      proof: [{ name: 'Staffintra', note: 'Our product', href: 'https://staffintra.com/' }, { name: 'Goodwill Staffing', note: 'Client', href: 'https://goodwillstaffing.ca/' }] },
    { name: 'Education & Careers', slug: 'education',
      challenge: 'Learners need realistic, timed practice and feedback at scale, and educators need content they can distribute easily.',
      help: 'We run assessment and learning platforms with timed tests, video lessons, offline libraries and AI feedback.',
      solutions: ['ai-process-automation', 'customer-experience'],
      proof: [{ name: 'MyJobTests', note: 'Our product', href: 'https://myjobtests.com/' }, { name: 'Teststreams', note: 'Our product', href: 'https://teststreams.com/' }] },
    { name: 'Professional Services', slug: 'consulting-agency',
      challenge: 'Law firms, consultancies and advisors win work on credibility and need a fast path from first contact to booked consultation.',
      help: 'We deliver client-facing platforms, booking flows and the systems behind them, for firms working locally and across borders.',
      solutions: ['customer-experience', 'technology-consulting'],
      proof: [{ name: 'Lex-Praxis Solicitors', note: 'Client', href: 'https://lexpraxisng.com/' }, { name: 'Abiodun Odunuga', note: 'Client', href: 'https://abiodunodunuga.com/' }] },
    { name: 'Events & Trade', slug: 'events-trade',
      challenge: 'Forums, trade missions and business events must attract the right delegates, sell tickets and turn introductions into deals.',
      help: 'We deliver event and trade platforms with programmes, ticketing and registration, and the marketing that fills the room.',
      solutions: ['customer-experience', 'digital-transformation'],
      proof: [{ name: 'Spotlight Nigeria', note: 'Client', href: 'https://spotlightnigeria-france.com/' }, { name: 'Bridge and Value', note: 'Client', href: 'https://bridgeandvalue.com/' }] },
    { name: 'Retail & Ecommerce', slug: 'ecommerce',
      challenge: 'Retailers need to be found, convert visitors into customers and handle orders, from single buyers to whole teams.',
      help: 'We combine ecommerce platforms, search and campaign marketing, and analytics that show what drives sales.',
      solutions: ['customer-experience', 'digital-transformation'],
      proof: [{ name: 'Scrub Harvard', note: 'Client', href: 'https://scrubharvard.com/' }] },
    { name: 'Nonprofits & Faith Organizations', slug: 'ngos',
      challenge: 'Mission-driven organizations run on small teams and need simple, low-maintenance tools for members, donors and programs.',
      help: 'We deliver websites, member tools and dependable support so teams can focus on their mission.',
      solutions: ['technology-consulting', 'digital-transformation'],
      proof: [] },
    { name: 'Construction & Field Operations', slug: 'construction',
      challenge: 'Field crews work across sites, so attendance, task updates and approvals are hard to capture accurately.',
      help: 'We provide mobile-first tools for clocking in on site, tracking work and getting approvals without paperwork.',
      solutions: ['workforce-operations', 'digital-transformation'],
      proof: [{ name: 'Staffintra', note: 'Our product', href: 'https://staffintra.com/' }] },
  ],
};

// Solutions: organized around business challenges. Every capability listed maps to something the
// company already delivers (services below, its own products, or client work), so nothing is invented.
// related: service slugs; proof: product scenes / live client work; quote: index into testimonials.
export const solutions = [
  {
    slug: 'digital-transformation', name: 'Digital Transformation', icon: 'transform', scene: 'staffintra',
    mockup: { laptop: 'staffintra', phone: 'staffintra' },
    challenge: 'Work still runs on paper, spreadsheets and disconnected tools, so information is slow and growth adds admin.',
    summary: 'Move from manual processes and disconnected tools to connected, digital operations your team actually adopts.',
    h1: 'Modernize how your organization works.',
    lead: 'Replace paper, spreadsheets and disconnected tools with connected digital operations, rolled out at a pace your team can adopt.',
    challengeLong: 'Many organizations still run critical work on paper forms, email threads and spreadsheets. Information arrives late or not at all, errors creep in when data is copied by hand, and every new customer or location adds more administration instead of more capacity.',
    capabilities: ['Review of current processes, systems and tools', 'A practical roadmap: what to build, buy, connect or retire', 'Digital workflows, forms and approvals that replace paper', 'Customer, staff and partner portals on web and mobile', 'Migration of data from legacy systems and spreadsheets', 'Training and support so your team adopts the change'],
    outcomes: [['Faster operations', 'Requests, approvals and records move digitally instead of by email and paper.'], ['One source of truth', 'Teams work from the same up-to-date information.'], ['Room to grow', 'Processes that scale without the same growth in admin.']],
    proof: [{ scene: 'staffintra', name: 'Staffintra', text: 'Our workplace operations platform replaces paper timesheets, approval emails and spreadsheets for shift-based teams.' }, { scene: 'goodwillstaffing', name: 'Goodwill Staffing', text: 'A healthcare staffing platform that matches nurses and support workers to shifts across Canada.' }],
    related: ['product-management-services', 'web-development-services'], quote: 2, projectType: 'Digital Transformation',
  },
  {
    slug: 'enterprise-systems-integration', name: 'Enterprise Systems & Integration', short: 'Systems & Integration', icon: 'integrate', scene: 'gebbrapharma',
    mockup: { laptop: 'staffintra', phone: 'gebbrapharma' },
    challenge: 'Finance, operations, HR and customer data live in separate systems, so teams re-key data and leaders lack a full picture.',
    summary: 'Unify your operations on reliable business systems, connected to the tools your teams already use.',
    h1: 'Connect your systems. See the whole business.',
    lead: 'ERP, business management systems and integrations that give every team the same accurate data, without re-keying.',
    challengeLong: 'When finance, operations, HR and customer records sit in separate systems that do not talk to each other, people spend hours copying data between them, reports disagree, and decisions are made on partial information.',
    capabilities: ['ERP and business management systems, selected or custom-built', 'Integrations and APIs that connect your existing tools', 'Data migration with checks for accuracy and continuity', 'Dashboards and reporting across departments', 'Configuration, staff training and go-live support', 'Ongoing optimization as the business changes'],
    outcomes: [['No more re-keying', 'Data entered once flows to every system that needs it.'], ['Reliable reporting', 'Leaders see one consistent view of operations.'], ['Systems that scale', 'A foundation that grows with new teams, sites and services.']],
    proof: [{ scene: 'staffintra', name: 'Staffintra', text: 'Our platform connects with Slack, Microsoft Teams, Microsoft 365, Google Workspace and QuickBooks, and exports payroll-ready hours.' }, { scene: 'gebbrapharma', name: 'Gebbra Pharmaceuticals', text: 'A platform for a pharmaceutical supplier covering products, diagnostics and consultation booking.' }],
    related: ['product-management-services', 'web-development-services'], quote: 1, projectType: 'Enterprise Systems & Automation',
  },
  {
    slug: 'ai-process-automation', name: 'AI & Process Automation', short: 'AI & Automation', icon: 'automate', scene: 'myjobtests',
    mockup: { laptop: 'myjobtests', phone: 'staffintra' },
    challenge: 'Skilled people spend hours chasing approvals, copying data and answering the same questions.',
    summary: 'Automate repetitive work and put AI where it saves time, so people can focus on work only they can do.',
    h1: 'Automate the routine. Put AI to work.',
    lead: 'Workflow automation and practical AI that remove repetitive work and speed up decisions, built into the systems you already use.',
    challengeLong: 'Approvals stall in inboxes, staff copy the same data between systems, and customers wait for answers to questions that have been answered a hundred times. The cost is slow service and talented people stuck on routine work.',
    capabilities: ['Workflow and approval automation with escalation when work stalls', 'Automated notifications, reminders and reporting', 'AI assistants and chatbots for customers and staff', 'AI feedback and recommendations inside your products', 'Integration of automation into existing systems', 'Measurement of time saved and process performance'],
    outcomes: [['Hours returned', 'Repetitive tasks run automatically, so people focus on higher-value work.'], ['Faster turnaround', 'Approvals and requests stop waiting in inboxes.'], ['Consistent service', 'Customers get quick, accurate answers at any hour.']],
    proof: [{ scene: 'myjobtests', name: 'MyJobTests', text: 'Our assessment platform gives job seekers instant scoring, AI feedback and a personal study plan.' }, { scene: 'staffintra', name: 'Staffintra', text: 'Requests and approvals escalate automatically when they stall, and timesheets are prepared for payroll without manual work.' }],
    related: ['product-management-services', 'web-development-services'], quote: null, projectType: 'Enterprise Systems & Automation',
  },
  {
    slug: 'workforce-operations', name: 'Workforce & Operations', icon: 'team', scene: 'staffintra',
    mockup: { laptop: 'staffintra', phone: 'staffintra' },
    challenge: 'Shift-based, multi-site and field teams are hard to schedule, track and pay accurately.',
    summary: 'Give frontline and multi-site teams one place for attendance, scheduling, approvals and payroll-ready time.',
    h1: 'Run frontline and multi-site teams with confidence.',
    lead: 'Attendance, scheduling, approvals and payroll-ready timesheets for shift-based, multi-site and field teams, on the platform we built and operate.',
    challengeLong: 'Managing people across shifts and sites usually means paper sign-in sheets, scheduling by message, leave requests lost in email and hours of payroll preparation. Managers lack a live view of who is working, and errors cost money.',
    capabilities: ['Clock-in by phone, tablet or biometric terminal, with geofencing per site', 'Schedules, timesheets and payroll exports', 'Leave and request approvals with escalation', 'Tasks, announcements and team communication', 'Performance reviews and productivity insights', 'Integration with HR, payroll and collaboration tools'],
    outcomes: [['Accurate time and attendance', 'Hours come from clock-ins, not memory or paper.'], ['Less payroll preparation', 'Timesheets are ready to export when the period closes.'], ['A live view of operations', 'Managers see who is working and what needs approval.']],
    proof: [{ scene: 'staffintra', name: 'Staffintra', text: 'Our workforce platform for people, attendance, approvals, payroll-ready timesheets and everyday work.' }, { scene: 'goodwillstaffing', name: 'Goodwill Staffing', text: 'A healthcare staffing platform that places nurses and support workers in per diem and contract shifts.' }],
    related: ['product-management-services', 'app-development-services'], quote: 3, projectType: 'Enterprise Systems & Automation',
  },
  {
    slug: 'customer-experience', name: 'Customer Experience & Growth', short: 'Customer Experience', icon: 'customer', scene: 'travelnursehouses',
    mockup: { laptop: 'travelnursehouses', phone: 'scrubharvard' },
    challenge: 'Customers struggle to find you, buy from you or get help, so demand leaks away.',
    summary: 'Make it easy for customers to find you, buy from you and get help, and measure what drives growth.',
    h1: 'Turn customer experience into growth.',
    lead: 'Customer platforms, self-service, support and data-driven marketing that help customers find you, buy from you and stay.',
    challengeLong: 'Customers expect to find what they need, book or buy without friction, and get help quickly. When a website is hard to use, support is slow or marketing is guesswork, demand leaks to competitors.',
    capabilities: ['Customer platforms, marketplaces and online stores', 'Self-service portals and knowledge bases', 'Multi-channel support: live chat, email, phone and social', 'SEO, content, paid campaigns and email marketing', 'Analytics and conversion tracking', 'Usability research and design improvements'],
    outcomes: [['More customers', 'Better visibility and fewer drop-offs between visit and purchase.'], ['Faster support', 'Answers through the channels customers already use.'], ['Clear insight', 'Reporting that shows what drives sales and retention.']],
    proof: [{ scene: 'travelnursehouses', name: 'Travel Nurse Houses', text: 'Our marketplace helps travel nurses find furnished homes near Canadian hospitals and message hosts directly.' }, { scene: 'scrubharvard', name: 'Scrub Harvard', text: 'An online store for medical scrubs, supported by our digital marketing.' }],
    related: ['digital-marketing-services', 'customer-support-services'], quote: 8, projectType: 'Digital Marketing',
  },
  {
    slug: 'technology-consulting', name: 'Technology Consulting & Managed Support', short: 'Consulting & Support', icon: 'consult', scene: 'lexpraxisng',
    mockup: { laptop: 'lexpraxisng', phone: 'teststreams' },
    challenge: 'You know technology should do more for the business, but not what to prioritize, or who keeps it running.',
    summary: 'Get clear technology priorities, then dependable support and maintenance for the systems you rely on.',
    h1: 'Clear technology decisions. Dependable support.',
    lead: 'An honest review of your technology, a practical plan, and ongoing maintenance and support for the systems your organization depends on.',
    challengeLong: 'Technology decisions are hard to make without a clear view of what you have and what it costs you. Once systems are live, they need maintenance, monitoring and a responsive team when something goes wrong.',
    capabilities: ['Review of your software, systems and tools', 'Prioritized recommendations on what to build, buy or improve', 'Vendor and platform selection', 'Maintenance, monitoring, updates and security patches', 'Responsive technical support for your team', 'Customer support setup: knowledge base, training and channels'],
    outcomes: [['Confident decisions', 'A clear, prioritized plan instead of guesswork.'], ['Reliable systems', 'Software kept secure, up to date and monitored.'], ['Responsive help', 'Issues resolved quickly by a team that knows your setup.']],
    proof: [{ scene: 'lexpraxisng', name: 'Lex-Praxis Solicitors', text: 'A law firm platform with practice areas and booking for free discovery calls.' }, { scene: 'teststreams', name: 'Teststreams', text: 'Our exam preparation platform, which we run, maintain and support every day.' }],
    related: ['customer-support-services', 'product-management-services'], quote: 6, projectType: 'Technology Consulting',
  },
];

// /solutions/ index page
export const solutionsPageData = {
  title: 'Technology Solutions | Blueinc Technologies',
  description: 'Technology solutions for complex business problems: digital transformation, enterprise systems and integration, AI and process automation, workforce operations, customer experience and managed support.',
  h1: 'Technology Solutions for Complex Business Problems',
  lead: 'We start with the challenge holding your organization back, then design, integrate, run and improve the technology that solves it.',
  deliveryLead: 'Every engagement follows the same disciplined path, the one we use to run our own products: understand the problem, design the answer, build and integrate it, then keep it running and improving.',
};

// Shared four-stage delivery approach shown on solution pages.
export const delivery = [
  ['Diagnose', 'We map how work really happens, with the people involved, and agree the outcomes that matter.'],
  ['Design', 'We design the solution and its workflows, choose the right technology, and plan the rollout.'],
  ['Build & integrate', 'We configure, engineer and connect the systems, migrate data, and test with your team.'],
  ['Run & improve', 'We launch, train, support and keep improving, measuring against the agreed outcomes.'],
];

export const portfolio = {
  title: 'Our Work | Blueinc Technologies',
  h1: 'Our Work',
  body:
    'Platforms, applications and websites we have delivered for clients across Nigeria, the USA, Canada, the UK, France and beyond. Here is a selection that is live today.',
  categories: ['Websites', 'Web Applications', 'Mobile Applications'],
  // Live sites only (checked 2026-10-25). Each is shown as an illustration of what the site does,
  // not a screenshot. Kind = what the business is, used as the card's right-hand label.
  websites: [
    { site: 'scrubharvard.com', name: 'Scrub Harvard', kind: 'Medical apparel store' },
    { site: 'goodwillstaffing.ca', name: 'Goodwill Staffing', kind: 'Healthcare staffing' },
    { site: 'gebbrapharma.com', name: 'Gebbra Pharmaceuticals', kind: 'Pharmaceutical supply' },
    { site: 'lexpraxisng.com', name: 'Lex-Praxis Solicitors', kind: 'Law firm' },
    { site: 'bridgeandvalue.com', name: 'Bridge and Value', kind: 'Business development' },
    { site: 'spotlightnigeria-france.com', name: 'Spotlight Nigeria', kind: 'Business forum' },
    { site: 'abiodunodunuga.com', name: 'Abiodun Odunuga', kind: 'Consultant website' },
  ],
  // The former "Enterprise Softwares" items sit with web applications. Blueinc's own products have their own page (/products/).
  webApps: ['Truck Service Web App', 'Taxi Booking Web App', 'Event Management Web App', 'e-Commerce Store', 'Ai Bot for Business', 'Ai', 'IT Services'],
  mobileApps: ['Fitness App', 'Food Delivery App'],
};

// Digital products Blueinc develops, owns and operates. Descriptions are taken from each product's own
// live site (checked 2026-10-21); no user numbers or ratings are claimed here.
export const products = [
  { site: 'staffintra.com', url: 'https://staffintra.com/', name: 'Staffintra', kind: 'Workforce platform', scene: 'staffintra', logo: '/assets/img/products/staffintra.svg',
    desc: 'People, attendance, approvals, payroll-ready timesheets and everyday work in one workspace.',
    audience: 'For shift-based and frontline teams, multi-site companies and people-ops teams.',
    features: ['Clock in by phone, tablet or biometric terminal, with a geofence for each site', 'Schedules and timesheets that export payroll-ready hours', 'Requests and approvals that escalate when they stall', 'Tasks, projects, announcements and team chat', 'Performance reviews confirmed by managers'] },
  { site: 'travelnursehouses.ca', url: 'https://travelnursehouses.ca/', name: 'Travel Nurse Houses', kind: 'Housing marketplace', scene: 'travelnursehouses', logo: '/assets/img/products/travelnursehouses.png',
    desc: 'Furnished, move-in ready homes near Canadian hospitals for travel nurses and healthcare professionals.',
    audience: 'For travel nurses and healthcare professionals, the hosts who house them and staffing agencies.',
    features: ['Search furnished homes by hospital, city and assignment dates', 'Compare homes by commute and monthly price', 'Message hosts about your assignment', 'Verified Pro Hosts and contract protection', 'Calendar sync for hosts with Airbnb, Vrbo and Booking.com'] },
  { site: 'myjobtests.com', url: 'https://myjobtests.com/', name: 'MyJobTests', kind: 'Career test prep', scene: 'myjobtests', logo: '/assets/img/products/myjobtests.png',
    desc: 'Aptitude test practice, interview preparation and resume review for job seekers.',
    audience: 'For job seekers preparing for employer aptitude tests and recruitment exams.',
    features: ['Timed aptitude tests in the style of real employer assessments', 'Instant scoring with worked solutions', 'AI tutor feedback and a personal study plan', 'Resume review with an ATS compatibility check', 'Practice packs organised by employer and test type'] },
  { site: 'teststreams.com', url: 'https://teststreams.com/', name: 'Teststreams', kind: 'Exam prep platform', scene: 'teststreams', logo: '/assets/img/products/teststreams.png',
    desc: 'Verified past questions and study packs for job aptitude tests, school exams and scholarships.',
    audience: 'For job seekers, students, scholarship applicants and teachers.',
    features: ['Verified past questions and study packs', 'Free timed practice tests in the browser', 'Term-by-term video lessons', 'A personal library that works offline', 'Packs for jobs, schools, scholarships and study abroad'] },
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
  h1: 'Let’s talk about the challenge you want to solve',
  lead: 'Modernizing operations, connecting systems, automating work, or building something new? Tell us what you need and our team will get back to you.',
};

export const cta = {
  eyebrow: 'Have a challenge?',
  title: 'Let’s solve what’s holding you back.',
  sub: 'Tell us about a business challenge, or explore the products we build and run.',
};

// Options in the enquiry form. Pricing buttons preselect the service values by exact text, so keep them.
export const projectTypes = ['Digital Transformation', 'Enterprise Systems & Automation', 'Technology Consulting', 'Custom Software / Web App', 'Mobile App', 'Website', 'UI/UX & Product Design', 'Digital Marketing'];

// Platforms our products and partner builds run on or integrate with. Shown as "Built on and
// integrated with", never as clients. Icons: Simple Icons (CC0); Microsoft is drawn inline.
export const platforms = [
  { name: 'Google', icon: 'google' },
  { name: 'Microsoft', icon: null },
  { name: 'Stripe', icon: 'stripe' },
  { name: 'Notion', icon: 'notion' },
  { name: 'Trello', icon: 'trello' },
  { name: 'Slack', icon: 'slack' },
  { name: 'Figma', icon: 'figma' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Shopify', icon: 'shopify' },
  { name: 'PayPal', icon: 'paypal' },
];

// /products/ page (Blueinc-owned products; the sections come from `products` above).
export const productsPageData = {
  title: 'Our Products | Blueinc Technologies',
  description: 'Digital products developed, owned and operated by Blueinc Technologies: Staffintra, Travel Nurse Houses, MyJobTests and Teststreams.',
  h1: 'Our Products',
  lead: 'Platforms we develop, own and operate. Each one solves a real problem in an industry we serve.',
  statement: 'Our products are part of how we solve problems: each began with a challenge we understood, and each keeps our engineering, design and support tested in real operations every day.',
};

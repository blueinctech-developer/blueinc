// All business content, recovered from blueinctech.com (Wayback Machine captures, 2025–2026).
// Placeholder/theme-demo content found on the old site (e.g. "Numerique", lorem ipsum,
// "John Doe") has intentionally NOT been carried over.

export const site = {
  name: 'Blueinc Technologies',
  legalName: 'Blueinc Technologies, Inc.',
  founded: 2016,
  url: 'https://blueinctech.com',
  tagline: 'The company behind Staffintra, Travel Nurse Houses, MyJobTests and Teststreams',
  description:
    'Blueinc Technologies builds and runs digital products, including Staffintra, Travel Nurse Houses, MyJobTests and Teststreams. The same team also builds custom software for select partners.',
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
  navTaglines: ['Staffintra', 'Travel Nurse Houses', 'MyJobTests', 'Teststreams'],
};

// Products lead; client services sit under "Build With Us". Our Work, Reviews, Industries and
// Pricing live in the footer, not the navbar.
export const nav = [
  { label: 'Products', href: '/products/', children: 'products' },
  { label: 'About', href: '/about-us/' },
  { label: 'Build With Us', href: '/our-services/', children: 'services' },
  { label: 'Contact', href: '/contact/' },
];

export const footerCols = [
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
    title: 'Build With Us',
    links: [
      { label: 'Software Development', href: '/our-services/web-development-services/' },
      { label: 'Mobile Apps', href: '/our-services/app-development-services/' },
      { label: 'Enterprise Systems', href: '/our-services/product-management-services/' },
      { label: 'Partner Work', href: '/portfolio/' },
      { label: 'Pricing', href: '/pricing-plans/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Blueinc', href: '/about-us/' },
      { label: 'Contact Us', href: '/contact/' },
      { label: 'Our Blog', href: '/blog/' },
      { label: 'Reviews', href: '/success-stories/' },
      { label: 'Industries', href: '/industries-served/' },
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
  title: 'Blueinc Technologies | We Build and Run Digital Products',
  headlineLead: 'We build and run digital products for',
  headlineWords: ['Workforces', 'Healthcare', 'Job Seekers', 'Learners'],
  intro:
    'Blueinc Technologies is the parent company of Staffintra, Travel Nurse Houses, MyJobTests and Teststreams. We design, build and operate every product in-house, and we put the same engineering to work for a select group of partners.',
  trustedBy: 'Products and partners across Canada, the UK, the US and Nigeria',
  stats: [
    { value: 4, suffix: '', label: 'Products We Own & Operate' },
    { value: 5, suffix: '+', label: 'Countries Served' },
    { value: 2016, suffix: '', label: 'Building Since' },
    { value: 100, suffix: '+', label: 'Partner Projects Delivered' },
  ],
  whoWeAre: {
    eyebrow: 'Who we are',
    title: 'A Parent Company for Products That Solve Real Problems',
    body:
      'Each Blueinc product starts with one real problem: running a frontline workforce, housing healthcare professionals on assignment, preparing for a job test, passing an exam. We own them, build them and run them, with one shared team for engineering, design and growth.',
  },
  history: {
    eyebrow: 'Our history',
    title: 'Building since 2016',
    body:
      'Blueinc started in 2016 building software for businesses. Along the way we began building products of our own, and today we run four of them, while still partnering with a select group of companies on custom software.',
    points: [
      'Four products of our own, built and run in-house',
      'Serving users across Canada, the US, the UK and Nigeria',
      'Partners and clients from over 9 countries',
      'Our partners have raised over $100m in funding',
    ],
  },
  why: {
    eyebrow: 'How we build',
    title: 'Every Product Starts With a Real Problem.',
    lead: 'We pick problems we understand, build the smallest thing that solves them, and keep improving every week after launch. That is how we run our own products, and how we build for partners.',
    items: [
      {
        title: 'Built Around Real Problems',
        body: 'Every product begins with people we can talk to: shift workers, travel nurses, job seekers and students. We build for the job they need done.',
      },
      {
        title: 'Designed for Everyday Use',
        body: 'Clocking in, finding a home near a hospital, practising for a test: our products are used daily, so they have to be simple.',
      },
      {
        title: 'Measured and Improved',
        body: 'Each product ships with analytics from day one, so we can see what people use, fix what slows them down and decide what to build next.',
      },
      {
        title: 'Launched and Grown',
        body: 'Launching is only the start. We grow our products through search, content and partnerships, and keep shipping improvements.',
      },
    ],
  },
  // "Build with us" band on the home page: client services, positioned as secondary.
  partners: {
    eyebrow: 'Build with us',
    title: 'The team behind our products also builds for partners',
    body:
      'The engineering, design and product experience behind Staffintra, Travel Nurse Houses, MyJobTests and Teststreams is available to a select group of businesses: custom software, mobile apps, enterprise systems and product design.',
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
  title: 'About Blueinc Technologies | The Company Behind Our Products',
  description:
    'Blueinc Technologies is a product company. We own and operate Staffintra, Travel Nurse Houses, MyJobTests and Teststreams, and build custom software for select partners.',
  h1: 'We Build Products People Rely On.',
  lead: 'Blueinc Technologies is the parent company of four digital products, built and run by one team.',
  body:
    'Blueinc Technologies owns and operates Staffintra, Travel Nurse Houses, MyJobTests and Teststreams. We design, engineer and grow every product in-house, and we partner with a select group of businesses to build their software with the same team.',
  serve: {
    title: 'Who Our Products Serve',
    body: 'Frontline teams and the people who manage them. Nurses and healthcare professionals on assignment. Job seekers preparing for employer tests. Students and teachers preparing for exams. And the partners who ask us to build their software.',
  },
  believe: {
    eyebrow: 'What We Believe In',
    title: 'We believe technology should solve real problems.',
    body:
      'That belief decides which products we build and own. We start from the problem, build what is practical and reliable, and keep improving it long after launch, with the same honesty and integrity whether the product is ours or a partner’s.',
    principles: ['Transparency', 'Accountability', 'Lifelong Learning', 'Ambition'],
  },
  team: {
    title: 'Meet the Blueinc Team',
    body: 'Engineers, designers and product people who build and run our products every day, and who take ownership of the results.',
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
  title: 'Build With Blueinc | Custom Software by the Team Behind Our Products',
  h1: 'Build With the Team Behind Our Products',
  lead: 'The people who build and run Staffintra, Travel Nurse Houses, MyJobTests and Teststreams also build custom software, mobile apps and business systems for a select group of partners.',
  beliefTitle: 'We build your product the way we build our own',
  beliefBody:
    'Because we develop and operate digital products of our own, we know what it takes to ship software that people rely on. We start by understanding your business and its challenges, recommend the right technology, then design, build, launch and support it, from first release to long-term growth.',
  listTitle: 'What we build for partners',
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
  title: 'Partner Work | Blueinc Technologies',
  h1: 'Partner Work',
  body:
    'Alongside our own products, we build software, applications and websites for partners across Nigeria, the USA, Canada, the UK, France and beyond. Here is a selection that is live today.',
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

// Home page stacked cards: our own products only (partner work has its own page).
export const featuredWork = products.map((p) => ({ site: p.site, scene: p.scene, logo: p.logo, client: p.name, kind: p.kind, href: p.url, own: true }));

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
  sub: 'Explore the products we run, or tell us about the one you want to build.',
};

export const projectTypes = ['Custom Software / Web App', 'Mobile App', 'Enterprise Systems & Automation', 'Website', 'UI/UX & Product Design', 'Digital Marketing', 'Technology Consulting'];

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
  lead: 'Four products, one team. We design, build and run each of them in-house.',
  statement: 'Every Blueinc product starts with a real problem and a group of people we can learn from. We build the smallest thing that solves it, then keep improving it every week.',
};

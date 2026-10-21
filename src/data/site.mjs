// All business content, recovered from blueinctech.com (Wayback Machine captures, 2025–2026).
// Placeholder/theme-demo content found on the old site (e.g. "Numerique", lorem ipsum,
// "John Doe") has intentionally NOT been carried over.

export const site = {
  name: 'Blueinc Technologies',
  legalName: 'Blueinc Technologies LLC',
  regNo: '7362044',
  founded: 2016,
  url: 'https://blueinctech.com',
  tagline: 'Digital solutions for startups and SMEs globally',
  description:
    'Your digital growth partner. We specialize in web design, software and app development, digital marketing, and interface design.',
  email: 'contact@blueinctech.com',
  calendly: 'https://calendly.com/projects-blueinctech/consult',
  clientPortal: 'https://blueinctech.com/hub',
  phones: [
    { label: 'US', display: '+1 613 518 5278', href: 'tel:+16135185278' },
    { label: 'NG', display: '+234 811 033 3323', href: 'tel:+2348110333323' },
  ],
  // Order matters: the first office is the main (headquarters) office everywhere on the site.
  offices: [
    {
      label: 'United States',
      city: '',            // TODO: fill in with the exact US address when available
      country: 'United States',
      countryCode: 'US',
      main: true,
      tz: 'America/New_York', // TODO: adjust if the US office is in another time zone
      address: null,        // TODO: e.g. '123 Example St, Suite 100, City, ST 00000'
      map: null,            // TODO: Google Maps link for the US address
      phone: { display: '+1 613 518 5278', href: 'tel:+16135185278' },
    },
    {
      label: 'Nigeria, Abuja',
      city: 'Abuja',
      country: 'Nigeria',
      countryCode: 'NG',
      tz: 'Africa/Lagos',
      address: 'Suite A301, Global Plaza, Obafemi Awolowo way, Jabi, Abuja. Nigeria',
      map: 'https://maps.app.goo.gl/6yxKHbFYUEP8gay47',
      phone: { display: '+234 811 033 3323', href: 'tel:+2348110333323' },
    },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/blueinc-technologies' },
    { label: 'Twitter', href: 'https://twitter.com/blueinctech' },
    { label: 'Instagram', href: 'https://www.instagram.com/blueinc_tech/' },
    { label: 'Facebook', href: 'https://facebook.com/blueinctech' },
  ],
  // Rotating words used by the navbar logo label (Blueinc's own service names).
  navTaglines: ['Web Development', 'Digital Marketing', 'App Development', 'Interface Design'],
};

export const nav = [
  { label: 'About', href: '/about-us/' },
  { label: 'Services', href: '/our-services/', children: 'services' },
  { label: 'Industries', href: '/industries-served/', children: 'industries' },
  { label: 'Our Work', href: '/portfolio/' },
  { label: 'Reviews', href: '/success-stories/' },
  { label: 'Pricing', href: '/pricing-plans/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/our-services/web-development-services/' },
      { label: 'App Development', href: '/our-services/app-development-services/' },
      { label: 'Interface Design', href: '/our-services/graphics-interface-design-services/' },
      { label: 'Digital Marketing', href: '/our-services/digital-marketing-services/' },
      { label: 'View all Services', href: '/our-services/' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Portfolio', href: '/portfolio/' },
      { label: 'Our Solutions', href: '/our-services/' },
      { label: 'Success Stories', href: '/success-stories/' },
      { label: 'Pricing', href: '/pricing-plans/' },
      { label: 'Industries Served', href: '/industries-served/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Blueinc', href: '/about-us/' },
      { label: 'Contact Us', href: '/contact/' },
      { label: 'Our Blog', href: 'https://blueinctech.com/blog/' },
      { label: 'Press & Media', href: 'https://blueinctech.com/media' },
      { label: 'Company CSR', href: 'https://blueinctech.com/csr' },
    ],
  },
  {
    title: 'Portal',
    links: [
      { label: 'Clients Portal', href: 'https://blueinctech.com/connect' },
      { label: 'Staff Portal', href: 'https://blueinctech.com/connect/admin' },
      { label: 'Hiring', href: 'https://blueinctech.com/hiring' },
      { label: 'SAAS', href: 'https://blueinctech.com/saas' },
      { label: 'Developers', href: 'https://blueinctech.com/developers' },
    ],
  },
];

export const home = {
  title: 'Blueinc Technologies: Web Development | Tech Services',
  heroServices: [
    { label: 'Web Development', href: '/our-services/web-development-services/' },
    { label: 'App Development', href: '/our-services/app-development-services/' },
    { label: 'Digital Marketing', href: '/our-services/digital-marketing-services/' },
    { label: 'Interface Design', href: '/our-services/graphics-interface-design-services/' },
  ],
  headlineLead: 'Websites and Marketing That Turn Visitors Into',
  headlineWords: ['Leads', 'Sales', 'Clients'],
  intro:
    'Blueinc Technologies helps businesses grow online with high-performance websites, SEO, and digital marketing strategies designed to generate consistent leads and revenue.',
  trustedBy: 'Trusted by businesses across Canada, UK, US and Nigeria',
  stats: [
    { value: 100, suffix: '+', label: 'Websites & Apps Built' },
    { value: 6, suffix: '+', label: 'Years Experience' },
    { value: 5, suffix: '+', label: 'Countries Served' },
    { value: 99, suffix: '%', label: 'Proven SEO & Marketing Strategies' },
  ],
  whoWeAre: {
    eyebrow: 'Who we are',
    title: 'Innovative Technology Solutions for Business Growth',
    body:
      'We leverage cutting-edge digital solutions such as web design and development, enterprise applications development, graphics and interface design, digital marketing and advertising to drive business growth.',
  },
  history: {
    eyebrow: 'Our history',
    title: 'Digital solutions for startups and SMEs globally',
    body:
      'For years, Blueinc has been creating innovative web solutions for our diverse range of clients, – from Multinational companies, government agencies, and MSMEs. We specialize in custom web design, web application development, system integration, digital marketing, and web strategy consulting. Our talented team of designers, developers, and project managers has completed hundreds of projects over the past 8 years, and helped hundreds more businesses grow and gain visibility online.',
    points: [
      'We’re an award-winning team of web developers, marketers, and designers',
      'We’ve worked with brands from over 9 countries',
      'In over 11 years, we’ve never lost a client. Clients keep coming',
      'Our clients have raised over $100m in Funding',
    ],
  },
  why: {
    eyebrow: 'Why Blueinc?',
    title: 'We Don’t Just Build, We Drive Growth.',
    items: [
      {
        title: 'Tailored Solutions',
        body: 'We create customized websites that align with your business goals and target audience, ensuring a solid foundation for growth.',
      },
      {
        title: 'Intuitive Designs',
        body: 'We focus on user-centric design, making sure your website is easy to navigate, visually appealing, and engaging for visitors.',
      },
      {
        title: 'Performance Tracking',
        body: 'We provide detailed analytics and reports, helping you understand user behavior, track key performance indicators, and make informed decisions.',
      },
      {
        title: 'Content and Social Media',
        body: 'Our team helps you develop and implement effective content marketing and social media strategies, driving engagement and conversions.',
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
  title: 'Blueinc Technologies: Innovative Web Solutions Company Profile',
  description:
    'We provide innovative web solutions, digital tools and the expertise needed for your business to thrive in today’s competitive market. We are your digital growth partner.',
  h1: 'Digital Solutions for Startups and SMEs Globally',
  lead: 'We provide the tools and expertise needed to thrive in today’s competitive landscape.',
  body:
    'In an era dominated by new media consumption, Blueinc Technologies uses digital solutions such as web design and development, graphics and interface design, digital marketing and advertising to help Startups and SMEs worldwide achieve remarkable business growth.',
  serve: {
    title: 'Who We Serve?',
    body: 'Our primary focus is on serving small to medium businesses and startups with great ideas, providing them with the tools and expertise they need to thrive in today’s competitive landscape.',
  },
  believe: {
    eyebrow: 'What We Believe In',
    title: 'We believe in providing digital solutions that drive business growth!',
    body:
      'We achieve this by scaling impactful businesses. Our focus is on promoting our clients’ brands and effectively disseminating their message worldwide. We refuse to settle for the status quo, constantly striving to expand our own business with the same level of honesty and integrity we employ to enhance our clients’ enterprises.',
    principles: ['Transparency', 'Accountability', 'Lifelong Learning', 'Ambition'],
  },
  team: {
    title: 'Meet the Blueinc Team',
    body: 'We believe in having a talented team of self-starters that want to deliver the best results for our clients.',
  },
};

export const audit = {
  title: 'Get a Free consultation',
  lead: 'Our audit is a deep dive into your tech setup and objectives. Here’s what you’ll get',
  points: [
    'A marketing audit to evaluate your company’s digital marketing efforts and their effectiveness.',
    'Evaluate your target audience to see if they have changed or if you need to adjust your messaging to better reach them.',
    'Analyze your website to ensure it is user-friendly, mobile-responsive, and optimized for search engines.',
    'Review your content marketing efforts, including your blog posts, social media, and email marketing.',
  ],
};

export const servicesPage = {
  title: 'Our Services | Blueinc Technologies',
  h1: 'Powerful Digital Solutions for Your Business',
  lead: 'Don’t survive in today’s digital landscape. Thrive with a comprehensive online strategy tailored to your unique goals',
  beliefTitle: 'We believe in the power of digital solutions to transform businesses',
  beliefBody:
    'We’re a full-service agency offering a comprehensive suite of digital services designed to propel your brand forward. Our team of passionate experts collaborates closely with you to understand your specific needs and challenges. We then craft a customized strategy that leverages the right combination of services to achieve your desired outcomes.',
  listTitle: 'How we prep your business for success',
  closing:
    'Our extensive experience across various industries allows us to tailor our solutions to your specific challenges and goals. We don’t deliver services; we build partnerships for success.',
};

export const services = [
  {
    slug: 'web-development-services',
    name: 'Web Development',
    summary:
      'Imagine a website that actively works to achieve your goals, not passively exist online. We create high-performance, scalable websites that embody your brand identity, deliver a seamless user experience, and drive conversions.',
    tags: ['Custom WordPress', 'Shopify', 'WooCommerce', 'Custom Websites', 'Maintenance'],
    image: 'clients/fillinstaffing.com.jpg',
    mockup: { laptop: 'scrubharvard.com', phone: 'lexpraxisng.com' },
    h1: 'Responsive websites that reflects your brand experience and drive results.',
    lead: 'We don’t build websites, we create digital experiences.',
    introTitle: 'We strategically design your website, equipping your business for success',
    introBody:
      'Our website development process is collaborative and transparent, ensuring your website reflects your vision and exceeds expectations. Here’s a look at our six-step approach:',
    processTitle: 'How We Help You Craft A Perfect Website',
    steps: [
      ['Discovery & Planning', 'We begin by getting to know your business, target audience, and website goals. We’ll discuss your brand identity, competitor landscape, and desired functionalities.'],
      ['Information Architecture & Design', 'With a strong understanding of your vision, we’ll develop a sitemap that outlines your website’s structure and user journey. Our designers will craft a visually appealing and user-friendly interface that aligns with your brand.'],
      ['Content Development & Strategy', 'Next, we’ll work with you to create compelling content that engages your audience and positions you as an authority in your field.'],
      ['Development & Implementation', 'Our skilled developers will bring your website to life, ensuring it’s functional, secure, and optimized for performance across all devices.'],
      ['Final Test, Review & Launch', 'We’ll conduct thorough testing to guarantee a seamless user experience and flawless functionality. Once everything is polished, we’ll launch your website with confidence.'],
      ['Ongoing Support & Maintenance', 'We offer ongoing support to ensure your website stays up-to-date, secure, and performing at its best.'],
    ],
    showcase: ['scrubharvard.com', 'fillinstaffing.com', 'gebbrapharma.com'],
    quote: {
      text: 'The entire team at Blueinc Tech are extremely talented. They brought fresh innovative ideas to the table and gave us a fantastic website. I’m really impressed by their ability to understand ideas and turn them into reality.',
      name: 'Femi Ladejo',
      org: 'Pinnacle',
    },
    closing:
      'Our proven track record speaks for itself. We’ve partnered with a wide range of businesses, from healthcare providers and pharmacies to e-commerce stores, educational institutions, non-profits, and professional organizations, to create impactful websites.',
  },
  {
    slug: 'digital-marketing-services',
    name: 'Digital Marketing',
    summary:
      'Target, attract, nurture and convert your target audience into loyal customers with data-driven digital marketing strategies. We use SEO, PPC campaigns, content marketing, social media marketing, and email marketing strategies to maximize your return on investment (ROI).',
    tags: ['SEO', 'PPC', 'Content Marketing', 'Social Media', 'Email Marketing', 'Analytics'],
    image: 'clients/scrubharvard.com.jpg',
    mockup: { laptop: 'spotlightnigeria-france.com', phone: 'scrubharvard.com' },
    h1: 'Data-driven digital marketing strategies that get results.',
    lead: 'Why wait for customers to find you when you can take control of your online presence and watch your business thrive.',
    introTitle: 'We Drive Your Business Growth with Data-driven Digital Marketing',
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
    name: 'App Development',
    summary:
      'Turn your ideas into creative and innovative applications. We develop native apps for Android, iOS and Web platforms, or explore cross-platform development options to reach a wider audience.',
    tags: ['Android', 'iOS', 'Web Apps', 'SaaS', 'API Integration', 'Custom Software'],
    image: 'clients/travelnursehouses.ca.jpg',
    mockup: { laptop: 'travelnursehouses.ca', phone: 'travelnursehouses.ca' },
    h1: 'Innovative applications that drive engagement and results.',
    lead: 'Don’t just dream it, app it! We transform your idea into a powerful app that users love.',
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
      'We’ve partnered with a wide range of businesses across various industries to develop innovative and user-centric mobile apps. From e-commerce giants to educational institutions and on-demand service providers, we’ve helped them leverage the power of mobile technology to achieve their business goals.',
  },
  {
    slug: 'graphics-interface-design-services',
    name: 'Graphics & Interface Design',
    short: 'Interface Design',
    summary:
      'Elevate your brand identity with a visual language that resonates with your audience. Our team of graphic designers and UI/UX experts will craft logos, icons, illustrations, branding materials, user interfaces, and user experiences that are both aesthetically pleasing and strategically designed to meet your business objectives.',
    tags: ['UI/UX', 'Prototyping', 'Wireframing', 'Branding', 'Usability Testing', 'Animation'],
    image: 'clients/gebbrapharma.com.jpg',
    mockup: { laptop: 'gebbrapharma.com', phone: 'gebbrapharma.com' },
    h1: 'User experiences that are both beautiful and intuitive.',
    lead: 'We create graphic and interface designs that tell your story in a manner it visually captivates your audience.',
    introTitle: 'Elevate Your Brand with Exceptional Design',
    introBody:
      'In today’s digital age, visual impact is everything. Our team of skilled graphic designers and UI/UX experts will create stunning visuals and intuitive interfaces that elevate your brand and drive user engagement.',
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
    name: 'Customer Support',
    summary:
      'Build trust, loyalty, and foster positive brand experiences by delivering exceptional customer service. We develop comprehensive knowledge bases, train dedicated customer support teams to provide efficient and professional support across multiple channels, and implement systems to resolve customer issues effectively.',
    tags: ['Knowledge Base', 'Agent Training', 'Multi-Channel', 'Live Chat', 'Email', 'Phone'],
    image: 'partner.jpg',
    h1: 'Responsive, professional customer support that builds trust and loyalty.',
    lead: 'Our customer support solutions ensures your customers are never left hanging and your business delivers a positive customer experience every time.',
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
    name: 'Enterprise Resource Solutions (ERP)',
    short: 'ERP Solutions',
    summary:
      'Streamline operations, optimize workflows, and gain valuable insights to make informed decisions with robust ERP systems. We help you choose the best-fit ERP software solution for your specific needs and industry, seamlessly implement it, handle data migration, customize the system to fit your workflows, and train your team to leverage its full potential',
    tags: ['Needs Assessment', 'Customization', 'Data Migration', 'Training', 'Go-Live Support'],
    image: 'team-duo.png',
    h1: 'Unify your business processes and unlock new levels of efficiency with our ERP solutions',
    lead: 'Ditch the data silos and fragmented systems. We implement robust ERPs that empower smarter decision-making and growth.',
    introTitle: 'We Help You Achieve Operational Excellence with ERP',
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
      'We’ve partnered with businesses of all sizes across various industries to implement successful ERP solutions. From manufacturing and distribution to healthcare and retail, our experience allows us to deliver customized solutions that address your unique challenges and unlock new levels of efficiency.',
  },
];

export const industries = {
  title: 'Industries Served | Blueinc Technologies',
  h1: 'Industries Served',
  body:
    'With a global presence spanning across Nigeria, France, Switzerland, Australia, USA, UK, Canada, Saudi Arabia, and many more countries, we are a renowned web solutions provider dedicated to delivering top-notch services to a diverse range of industries. Our expertise has benefited various sectors, including healthcare, consulting agencies, ecommerce, education, NGOs and religious organizations, construction and retail, providing innovative web solutions that cater to the unique needs of each industry.',
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
  title: 'Our Portfolio | Blueinc Technologies',
  h1: 'Our Portfolio',
  body:
    'We are a renowned web solutions provider offering a range of services to a global clientele, spanning across Nigeria, France, Switzerland, Australia, USA, UK, Canada, Saudi Arabia and many more countries.',
  categories: ['Websites', 'Web Applications', 'Mobile Applications', 'Enterprise Softwares'],
  websites: [
    'scrubharvard.com', 'fillinstaffing.com', 'gebbrapharma.com', '365dayshampers.com',
    'rccgfranceprovince.org', 'goodwillstaffing.us', 'stephensbooks.net', 'constructioncrewpro.ca',
    'travelnursehouses.ca', 'everlivelyhhc.ca', 'bridgeandvalue.com', 'goodwillstaffing.ca',
    'tvinstallpro.ca', 'testpremier.com', 'lexpraxisng.com', 'abiodunodunuga.com',
    'equestglobal.com', 'kochezmedical.com', 'rhagfnig.org.ng', 'riteshoe.com',
    'spotlightnigeria-france.com',
  ],
  webApps: ['Truck Service Web App', 'Taxi Booking Web App', 'Event Management Web App'],
  mobileApps: ['Fitness App', 'Food Delivery App'],
  enterprise: ['e-Commerce Store', 'Ai', 'IT Services', 'Ai Bot for Business'],
};

// Featured on the home page as stacked cards — the projects with a client testimonial.
export const featuredWork = [
  { site: 'scrubharvard.com', client: 'Scrub Harvard' },
  { site: 'bridgeandvalue.com', client: 'Bridge And Value' },
  { site: 'lexpraxisng.com', client: 'Lexpraxis Solicitors' },
  { site: 'fillinstaffing.com', client: 'Fill IN Staffing' },
  { site: 'spotlightnigeria-france.com', client: 'Spotlight Nigeria' },
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
    'With thousands of success stories and counting, we’re proud to have earned a reputation as a trusted partner to businesses who trust us to deliver exceptional results.',
};

export const pricing = {
  title: 'Pricing Plans | Blueinc Technologies',
  h1: 'Our Pricing',
  lead: 'We tailor our pricing to suit your business needs.',
  plans: [
    { name: 'Web Design', items: ['Custom WordPress Websites', 'Custom Shopify Websites', 'WooCommerce Website', 'Template WordPress Websites', 'Custom Websites'], perk: '1 - month FREE Maintenance', type: 'Web Design' },
    { name: 'Software/App Development', items: ['Custom Software Development', 'Mobile Application Development', 'Web Application Development', 'SaaS Development', 'API Integration and Development'], perk: null, type: 'Software / APP Development' },
    { name: 'Digital Marketing', items: ['Marketing Strategy', 'Social Media Marketing', 'Search Engine Optimization', 'Pay-Per-Click Advertising', 'Email Marketing', 'Analytics'], perk: null, type: 'Digital Marketing' },
    { name: 'UI/UX Design', items: ['Visual Design / Animation', 'Prototyping and Wireframing', 'Website UI/UX Design', 'Mobile App UI/UX Design', 'Usability Testing'], perk: '1-Month Free Design Revisions', type: 'UI/UX Design' },
  ],
};

export const contactPage = {
  title: 'Contact Us | Blueinc Technologies',
  h1: 'We’re here to help 24/7',
  lead: 'Need help with any thing digital? Our award winning support team is happy to work with you.',
};

export const cta = {
  eyebrow: 'Have an idea?',
  title: 'Let’s turn that spark into reality!',
  sub: 'Schedule a call with us.',
};

export const projectTypes = ['Web Design', 'Software / APP Development', 'Digital Marketing', 'UI/UX Design'];

export const clientLogos = [
  'L13', 'L7', 'L11', 'FILLIN-STAFF', 'FON', 'IMO', 'KEBBI', 'KOCHEZ', 'LEXAP', 'STEPHEN', 'Testp',
  'TV-INSTALL', 'ncs', 'riteshoe', 'equest', 'ccp', 'bridge-and-value', 'SHEAPSMART', 'GE', 'SPOT',
  'RCCG', 'EVERLIVELY',
];

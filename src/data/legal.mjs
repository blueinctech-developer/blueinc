// Legal pages, hosted on this site. Text is Blueinc's own published wording from
// blueinctech.com/terms-of-service/ and blueinctech.com/privacy-policy-2/ (Wayback captures,
// January and March 2025), carried over verbatim. The only additions are the company's
// current postal address and phone numbers in each "Contact Us" section.
// NOTE: the old /privacy-policy/ page was an unfinished template (it contained placeholders
// such as "[URL]"), so the completed policy from /privacy-policy-2/ is used here.
//
// Block types: p (paragraph), ul (list), dl (term + description list).

export const terms = {
  route: '/terms-of-service/',
  title: 'Terms of Service | Blueinc Technologies',
  description: 'The Terms of Service that govern your use of the Blueinc Technologies website and services.',
  h1: 'Terms of Service',
  sections: [
    ['Introduction', [
      { p: 'Welcome to Blueinc Technologies! These Terms of Service (“Terms”) govern your use of our website located at blueinctech.com and our services. By accessing or using our website and services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our website or services.' },
    ]],
    ['Definitions', [
      { dl: [
        ['“We,” “Us,” “Our”', 'Refers to Blueinc Technologies.'],
        ['“You,” “Your,” “User”', 'Refers to the individual or entity accessing or using our services.'],
        ['“Services”', 'Refers to the development and digital services provided by Blueinc Technologies.'],
      ] },
    ]],
    ['Use of Our Services', [
      { h: 'Eligibility' },
      { ul: [
        'You must be at least 18 years old to use our services.',
        'By using our services, you represent and warrant that you have the legal capacity to enter into these Terms.',
      ] },
      { h: 'Account Registration' },
      { ul: [
        'To access certain features of our services, you may need to create an account.',
        'You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary.',
      ] },
      { h: 'User Responsibilities' },
      { ul: [
        'You are responsible for maintaining the confidentiality of your account login information.',
        'You agree to use our services only for lawful purposes and in accordance with these Terms.',
      ] },
      { p: 'You agree not to use our services to:' },
      { ul: [
        'Violate any applicable law or regulation.',
        'Infringe upon the intellectual property rights of others.',
        'Transmit any viruses, malware, or other harmful software.',
      ] },
    ]],
    ['Intellectual Property', [
      { h: 'Ownership' },
      { p: 'All content, features, and functionality of our website and services (including but not limited to text, graphics, logos, and software) are owned by Blueinc Technologies and are protected by copyright, trademark, and other intellectual property laws.' },
      { h: 'License' },
      { p: 'We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our website and services for your personal or internal business use, subject to these Terms.' },
    ]],
    ['Payment and Fees', [
      { h: 'Services Fees' },
      { p: 'You agree to pay all fees for the services you select in accordance with our pricing and payment terms.' },
      { h: 'Payment Terms' },
      { ul: [
        'Payments are due upon receipt of invoice unless otherwise agreed upon in writing.',
        'Late payments may result in the suspension or termination of services.',
      ] },
    ]],
    ['Termination', [
      { h: 'Termination by You' },
      { p: 'You may terminate your account at any time by contacting us at {email}.' },
      { h: 'Termination by Us' },
      { p: 'We reserve the right to terminate or suspend your account and access to our services at any time, without prior notice, for any reason, including if you breach these Terms.' },
      { h: 'Effect of Termination' },
      { ul: [
        'Upon termination, all licenses and rights granted to you in these Terms will immediately cease.',
        'Any fees due prior to termination will remain payable.',
      ] },
    ]],
    ['Limitation of Liability', [
      { h: 'Disclaimer of Warranties' },
      { p: 'Our services are provided on an “as-is” and “as-available” basis. We disclaim all warranties, express or implied, including the warranties of merchantability, fitness for a particular purpose, and non-infringement.' },
      { h: 'Limitation of Liability' },
      { p: 'To the fullest extent permitted by law, Blueinc Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:' },
      { ul: [
        'Your use or inability to use our services.',
        'Any unauthorized access to or use of our servers and/or any personal information stored therein.',
      ] },
    ]],
    ['Governing Law', [
      { p: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Blueinc Technologies is headquartered, without regard to its conflict of law principles.' },
    ]],
    ['Changes to These Terms', [
      { p: 'We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Changes are effective immediately upon posting.' },
    ]],
    ['Contact Us', [
      { p: 'If you have any questions about these Terms, please contact us at:' },
      { contact: true },
      { p: 'By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Thank you for choosing Blueinc Technologies.' },
    ]],
  ],
};

export const privacy = {
  route: '/privacy-policy/',
  title: 'Privacy Policy | Blueinc Technologies',
  description: 'How Blueinc Technologies collects, uses, and protects your personal information.',
  h1: 'Privacy Policy',
  sections: [
    ['Introduction', [
      { p: 'Welcome to Blueinc Technologies! This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website, blueinctech.com, and use our services. Blueinc Technologies is committed to safeguarding your privacy and ensuring that your personal information is protected.' },
    ]],
    ['Information We Collect', [
      { h: 'Personal Information' },
      { dl: [
        ['Contact Information', 'Name, email address, phone number, and mailing address.'],
        ['Business Information', 'Company name, industry, and job title.'],
      ] },
      { h: 'Usage Data' },
      { dl: [
        ['Technical Data', 'IP address, browser type, operating system, and device information.'],
        ['Website Interaction', 'Pages visited, links clicked, and other browsing behaviors.'],
      ] },
    ]],
    ['How We Use Your Information', [
      { h: 'Service Delivery' },
      { ul: [
        'To provide and manage our development and digital services.',
        'To communicate with you regarding your projects, inquiries, and support requests.',
      ] },
      { h: 'Website Improvement' },
      { ul: [
        'To analyze website usage and improve our website’s functionality and user experience.',
        'To customize our website content based on your preferences and interactions.',
      ] },
      { h: 'Marketing' },
      { ul: [
        'To send you promotional materials, newsletters, and other communications about our services and offers.',
        'To conduct surveys and gather feedback to improve our services.',
      ] },
    ]],
    ['Sharing Your Information', [
      { h: 'Third-Party Service Providers' },
      { p: 'We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.' },
      { h: 'Legal Requirements' },
      { p: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).' },
    ]],
    ['Security of Your Information', [
      { p: 'We implement a variety of security measures to maintain the safety of your personal information. Your information is stored on secure servers and is only accessible by authorized personnel.' },
    ]],
    ['Cookies and Tracking Technologies', [
      { h: 'Cookies' },
      { p: 'We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information.' },
      { h: 'Third-Party Analytics' },
      { p: 'We may use third-party service providers to monitor and analyze the use of our website.' },
    ]],
    ['Your Data Protection Rights', [
      { p: 'You have the right to:' },
      { dl: [
        ['Access', 'Request copies of your personal data.'],
        ['Rectification', 'Request correction of any inaccurate information.'],
        ['Erasure', 'Request the deletion of your personal data.'],
        ['Restrict Processing', 'Request restriction of processing your personal data.'],
        ['Data Portability', 'Request transfer of your personal data to another organization.'],
        ['Object', 'Object to our processing of your personal data.'],
      ] },
    ]],
    ['Changes to This Privacy Policy', [
      { p: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective immediately upon posting.' },
    ]],
    ['Contact Us', [
      { p: 'If you have any questions about this Privacy Policy, please contact us at:' },
      { contact: true },
      { p: 'Thank you for choosing Blueinc Technologies. We are committed to protecting your privacy and providing you with a secure and enjoyable experience on our website.' },
    ]],
  ],
};

// Address used in the legal documents (as published in the original policies).
export const legalEmail = 'support@blueinctech.com';

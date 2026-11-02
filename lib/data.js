// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Helena Tesfaye',
  role: 'Software Engineer',
  tagline: 'I love turning messy, manual problems into systems people can rely on, and I bring the ownership that helps a team ship them.',
  summary:
    'Computer science senior at the University of Maryland, graduating May 2027. Previously a software development engineer intern at Amazon and a software engineering intern at Goodshuffle.',
  status: 'Open to new-grad software engineering roles for 2027.',
  location: 'College Park, MD',
  email: 'helena.tesf@gmail.com',
  links: {
    github: 'https://github.com/Nell-Tes',
    linkedin: 'https://www.linkedin.com/in/helena-tes',
    resume: '/Helena_Tesfaye_Resume.pdf',
  },
  photo: '/helena.jpg',
  photoSquare: '/helena-square.jpg',
};

export const highlights = [
  { value: '$500K', label: 'Projected annual savings', source: 'Amazon internship' },
  { value: '90%', label: 'Projected cut in manual processing', source: 'Amazon internship' },
  { value: '1,000+', label: 'Participants as Experience Co-Director', source: 'Technica hackathon' },
];

export const about = {
  paragraphs: [
    'Most of the work happens on the backend: queues, workflows, and services that move data reliably without anyone watching over them.',
    "What drives me is taking something fragile and making it dependable. I like finding the step that breaks, understanding why it breaks, and designing it out for good. That is why I write the design doc before the code, and why I care as much about failure modes as the happy path.",
    "Teaching and leading shaped the rest. As a TA and a Resident Assistant, I learned to explain hard ideas clearly and to notice when someone is stuck before they say so. Co-directing the hacker experience at Technica, a hackathon built for underrepresented genders in tech, showed me how much a team can do when everyone understands the goal. I bring that to every team I join: clear communication, ownership of the whole problem, and a habit of making the people around me better.",
  ],
  facts: [
    { k: 'School', v: 'University of Maryland, B.S. Computer Science' },
    { k: 'Graduating', v: 'May 2027' },
    { k: 'Focus', v: 'Software engineering, distributed systems, full-stack development' },
    { k: 'Honors', v: 'Reset Scholar, ColorStack Fellow' },
  ],
};

export const projects = [
  {
    slug: 'banking-simulator',
    name: 'AWS Banking Simulator',
    period: 'Mar – May 2026',
    oneLiner: 'A serverless banking backend where every transaction is queued, processed once, and fully auditable.',
    problem: 'A bank cannot lose or double-apply a transaction, even when traffic spikes or a service fails mid-request.',
    approach:
      'Writes are separated from processing. A Lambda API validates each request and publishes it to SNS, which fans out to SQS. A consumer Lambda then applies the change atomically.',
    points: [
      'Asynchronous pipeline from API Gateway through SNS and SQS to a consumer Lambda, so traffic spikes queue up instead of failing.',
      'DynamoDB handles fast balance reads, while Aurora PostgreSQL keeps a relational audit trail of every transaction.',
      'Database access uses IAM authentication over SSL-only connections, and the React frontend is served from S3.',
    ],
    stack: ['Lambda', 'SNS', 'SQS', 'DynamoDB', 'Aurora PostgreSQL', 'React', 'S3'],
    repo: 'https://github.com/Nell-Tes/capital-one-aws-simulator',
    lang: { name: 'Serverless', color: '#F59E0B' },
  },
  {
    slug: 'auth-api',
    name: 'Secure Authentication API',
    period: 'Feb – Mar 2026',
    oneLiner: 'Stateless JWT authentication and role-based access control for 20+ REST endpoints.',
    problem: 'Session-based auth does not scale cleanly across instances, and hand-rolled security is easy to get wrong.',
    approach: 'Stateless tokens are checked by a custom filter on every request, with access rules declared per role and route.',
    points: [
      'A custom security filter validates each JWT, loads the user, and sets the Spring SecurityContext per request.',
      'Role-based authorization, route whitelisting, and BCrypt-hashed credentials through a DAO auth provider.',
      'Token handling, password storage, and session management follow OWASP guidance.',
    ],
    stack: ['Java', 'Spring Boot 3', 'Spring Security 6', 'JWT', 'BCrypt'],
    repo: 'https://github.com/Nell-Tes',
    lang: { name: 'Java', color: '#B07219' },
  },
  {
    slug: 'file-manager',
    name: 'Cloud File Manager',
    period: 'Sept – Oct 2025',
    oneLiner: 'A full-stack upload and storage app backed by AWS S3.',
    problem: 'Storing user files on an app server does not scale and complicates deployments.',
    approach: 'A Spring Boot REST API sends uploads straight to S3, with a React client calling it through Axios.',
    points: [
      'File storage lives in S3, so the API stays stateless and can scale horizontally.',
      'CORS and a shared Axios client keep browser-to-API calls consistent and secure.',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'AWS S3', 'Axios'],
    repo: 'https://github.com/Nell-Tes/aws-s3-fileupload',
    lang: { name: 'Java', color: '#B07219' },
  },
];

export const experience = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    period: 'Jun – Aug 2026',
    location: 'Sunnyvale, CA',
    metrics: ['90% less manual processing (projected)', '$500K saved per year (projected)'],
    points: [
      'Automated a manual statewide pricing process with an event-driven AWS Step Functions workflow, projected to cut manual work by 90% and save $500K a year.',
      'Wrote the design doc on trade-offs and failure modes, and aligned three engineering teams on integration contracts.',
      'Shipped it end to end, through code review and CI/CD, with an integration-test strategy for a backend-only system.',
    ],
    stack: ['AWS Step Functions', 'Distributed systems', 'CI/CD', 'Integration testing'],
  },
  {
    company: 'University of Maryland',
    role: 'Teaching Assistant, Algorithms & Data Structures',
    period: 'Sep 2025 – Jun 2026',
    location: 'College Park, MD',
    metrics: ['40+ students mentored weekly'],
    points: [
      'Led weekly review sessions and office hours on algorithms, data structures, and complexity analysis.',
      'Used guided questions instead of handing out answers, so students learned to work through hard problems on their own.',
    ],
    stack: ['Algorithms', 'Data structures', 'Complexity analysis'],
  },
  {
    company: 'Goodshuffle',
    role: 'Software Engineering Intern',
    period: 'Jun – Aug 2025',
    location: 'Washington, DC',
    metrics: ['120+ survey responses analyzed'],
    points: [
      'Replaced redundant polling with a RabbitMQ and WebSocket (Pusher) event pipeline, making real-time updates more reliable and reducing server load.',
      'Built and deployed containerized Spring Boot microservices with CI/CD for an AI-driven vendor insights product.',
      'Turned 120+ user survey responses into feature priorities and presented them to the Board.',
    ],
    stack: ['Spring Boot', 'Docker', 'RabbitMQ', 'WebSockets', 'CI/CD'],
  },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C'], core: ['Java', 'Python'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Node.js', 'Microservices', 'RabbitMQ', 'JWT'], core: ['Spring Boot', 'REST APIs'] },
  { group: 'Cloud (AWS)', items: ['Step Functions', 'Lambda', 'SQS', 'SNS', 'DynamoDB', 'S3', 'Aurora', 'API Gateway', 'CloudWatch'], core: ['Step Functions', 'Lambda'] },
  { group: 'Data', items: ['PostgreSQL', 'DynamoDB', 'Aurora PostgreSQL'], core: ['PostgreSQL'] },
  { group: 'Frontend', items: ['React', 'Angular', 'Material UI', 'Bootstrap'], core: ['React'] },
  { group: 'Delivery', items: ['Docker', 'CI/CD', 'Git', 'Gradle', 'WebSockets'], core: ['Docker', 'CI/CD'] },
];

export const leadership = [
  { org: 'Technica', role: 'Experience Co-Director', period: 'Feb 2025 – Jun 2026', detail: "Led planning and logistics for the hacker experience at the world's largest hackathon for underrepresented genders in tech, working with sponsors to support 1,000+ participants." },
  { org: 'Technica', role: 'Tech & Brand Organizer', period: 'Mar 2024 – Feb 2025 · May 2026 – Present', detail: 'Builds features for the official Technica app, including live schedules, venue maps, and hardware tracking for 900+ hackers. Previously ran social content and co-hosted the Technica podcast.' },
  { org: 'University of Maryland', role: 'Resident Assistant', period: 'Third year', detail: 'Runs a residence hall community and mentors newer RAs on staff.' },
  { org: 'Google', role: 'Student Ambassador', period: 'Winter 2027', detail: 'Selected to represent Google on campus.' },
  { org: 'Amazon', role: 'Women of the World', period: '2026', detail: 'Affinity group member, invited to the Amazon ReachBack University event.' },
  { org: 'Product Space at UMD', role: 'Member', period: 'Current', detail: "Selected by interview for UMD's product management club." },
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

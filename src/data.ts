export const WA_NUM_1 = "9877706142";
export const WA_NUM_2 = "9877570709";
export const getWaUrl = (num: string, text: string) => `https://wa.me/91${num}?text=${encodeURIComponent(text)}`;

export const CURRICULUM = [
  {
    title: "Spoken English & Communication",
    desc: "Build confidence in speaking English, improve vocabulary, sentence formation, pronunciation and everyday communication."
  },
  {
    title: "Personality Development",
    desc: "Develop confidence, professional presence, interpersonal skills and effective communication."
  },
  {
    title: "Interview Preparation",
    desc: "Learn how to answer interview questions confidently and present yourself professionally."
  },
  {
    title: "Group Discussions",
    desc: "Develop communication, leadership, critical thinking and participation skills."
  },
  {
    title: "AI Prompt Engineering",
    desc: "Learn how to communicate effectively with AI and create powerful prompts for practical tasks."
  },
  {
    title: "Modern AI Tools",
    desc: "Learn how to practically use AI tools to improve productivity, learning, communication and professional work."
  }
];

export const PRICING = [
  {
    name: "Group Batch",
    price: "1,999",
    tagline: "Interactive group learning",
    features: [
      "24 Sessions",
      "Spoken English + Communication Skills",
      "AI Prompt Engineering",
      "Interactive group learning",
      "Practical activities",
      "Study material",
      "Online sessions"
    ],
    waMessage: "Hello VedantIQ, I am interested in the Group Batch priced at ₹1,999. Please share the enrollment details.",
    highlight: false
  },
  {
    name: "Pair Batch",
    price: "5,000",
    tagline: "Only 2 students per batch",
    features: [
      "24 Sessions",
      "Highly interactive learning",
      "Personalized attention",
      "Spoken English + Communication Skills",
      "AI Prompt Engineering",
      "Practical activities",
      "Study material",
      "Online sessions"
    ],
    waMessage: "Hello VedantIQ, I am interested in the Pair Batch priced at ₹5,000. Please share the enrollment details.",
    highlight: false
  },
  {
    name: "Personal Batch",
    price: "10,000",
    tagline: "1-to-1 Premium Mentorship",
    features: [
      "24 Sessions",
      "One-to-one personalized training",
      "Individual attention",
      "Spoken English + Communication Skills",
      "AI Prompt Engineering",
      "Interview preparation",
      "Personalized practice",
      "Study material",
      "Online sessions"
    ],
    waMessage: "Hello VedantIQ, I am interested in the Personal Batch priced at ₹10,000. Please share the enrollment details.",
    highlight: true
  }
];

export const COMPARISON = [
  { feature: "Number of Students", group: "Batch Size", pair: "2 Students", personal: "1-to-1" },
  { feature: "Personal Attention", group: "Standard", pair: "High", personal: "Maximum" },
  { feature: "Communication Skills", group: "Yes", pair: "Yes", personal: "Yes + Custom Focus" },
  { feature: "Spoken English", group: "Yes", pair: "Yes", personal: "Yes" },
  { feature: "AI Prompt Engineering", group: "Yes", pair: "Yes", personal: "Yes" },
  { feature: "Interview Preparation", group: "Basic", pair: "Advanced", personal: "Comprehensive" },
  { feature: "Practical Activities", group: "Group-based", pair: "Partner-based", personal: "Individualized" },
  { feature: "Study Material", group: "Included", pair: "Included", personal: "Included" },
  { feature: "Online Sessions", group: "Yes", pair: "Yes", personal: "Flexible Schedule" },
];

export const WHY_VEDANTIQ = [
  { title: "Practical Learning", desc: "Learn skills that can actually be applied in academic and professional life." },
  { title: "Communication + AI", desc: "Develop communication skills while learning how to work effectively with AI." },
  { title: "Interactive Sessions", desc: "Focus on participation, practice and real-world activities." },
  { title: "Personalized Attention", desc: "Pair and Personal batches provide greater individual attention." },
  { title: "Future-Ready Skills", desc: "Build capabilities that remain relevant in an increasingly AI-driven world." },
  { title: "Human + AI Advantage", desc: "Learn how human communication and artificial intelligence can work together." }
];

export const FAQS = [
  { q: "What does VedantIQ teach?", a: "VedantIQ teaches a unique combination of Spoken English, Personality Development, Interview Preparation, and AI Prompt Engineering to make you a future-ready professional." },
  { q: "What is included in the ₹1,999 Group Batch?", a: "The Group Batch includes 24 online sessions covering Spoken English, Communication Skills, and AI Prompt Engineering through interactive group learning and practical activities." },
  { q: "What is a Pair Batch?", a: "A Pair Batch is designed for exactly two students, offering highly interactive learning and personalized attention at an affordable price." },
  { q: "How many students are there in a Pair Batch?", a: "There are strictly only 2 students in a Pair Batch to ensure high-quality interaction." },
  { q: "What is included in the ₹10,000 Personal Batch?", a: "The Personal Batch offers 1-to-1 premium mentorship with maximum individual attention, covering all core topics plus personalized interview preparation and flexible scheduling." },
  { q: "Are the sessions online?", a: "Yes, our interactive sessions are conducted online for your convenience." },
  { q: "How can I contact VedantIQ?", a: "You can contact us directly via WhatsApp or phone call at 9877706142 or 9877570709." },
  { q: "Can I contact VedantIQ through WhatsApp?", a: "Yes, WhatsApp is our preferred method of communication. You can click any WhatsApp button on this website to chat with us instantly." },
  { q: "Which batch should I choose?", a: "Choose the Group Batch for interactive peer learning, the Pair Batch if you have a partner or want smaller group dynamics, and the Personal Batch if you require dedicated 1-to-1 mentorship and faster results." }
];

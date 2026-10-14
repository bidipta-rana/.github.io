/*
  ALL SITE CONTENT LIVES HERE. You normally never need to touch index.html.

  HOW TO ADD YOUR MEDIA TO A PROJECT
  ----------------------------------
  images:  list of file paths, e.g. "assets/images/robotic-finger/1.jpg"
           (download from Google Drive, put in that folder, commit)
  videos:  list of items. Three formats are supported:
             "youtube:VIDEO_ID"          -> YouTube (upload as Unlisted)
             "drive:FILE_ID"             -> Google Drive video (file must be shared
                                            as "Anyone with the link can view")
             "assets/videos/demo.mp4"    -> a file in this repo (keep under 25 MB)
           Drive FILE_ID is the long part of the share link:
           https://drive.google.com/file/d/THIS_PART/view
  reports: list of { label, url }. url can be "assets/reports/name.pdf"
           or a Google Drive share link.
  cover:   one image path used on the project card (optional).
*/

const SITE = {
  email: "",   // add your email here, e.g. "name@example.com". Leave "" to hide it.
  linkedin: "https://www.linkedin.com/in/bidipta-rana",
  github: ""   // add your GitHub profile URL here. Leave "" to hide it.
};

const PROJECTS = [
  {
    id: "robotic-finger",
    title: "Anthropomorphic robotic finger",
    kind: "Research project",
    where: "IIT Jodhpur, Jan 2025 to Jul 2025",
    summary: "Compared twisted string actuation with cable-pulling actuation for a human-like robotic finger.",
    description: "Design and development of an anthropomorphic robotic finger, with a comparative study of two actuation mechanisms: twisted string actuation (TSA) and cable-pulling actuation (CPA). The research article is accepted for the December 2025 INACOMM International Conference on Machines and Mechanisms.",
    tags: ["Robotics", "Actuation", "CAD", "3D printing"],
    cover: "", images: [], videos: [], reports: []
  },
  {
    id: "chemistry-analyzer",
    title: "Portable chemistry analyzer",
    kind: "Internship project",
    where: "BioSpectronics Pvt. Ltd., Oct 2023 to Oct 2024",
    summary: "A portable device that measures body analytes by analysing the concentration in body fluids.",
    description: "Development of a portable chemistry analyzer designed to detect various body analytes through concentration analysis of body fluids, to improve diagnostic capability. Related work is published in IEEE Sensors Journal.",
    tags: ["Point-of-care", "Biosensing", "Diagnostics"],
    cover: "", images: [], videos: [], reports: []
  },
  {
    id: "vibration-device",
    title: "Wireless hand-transmitted vibration meter",
    kind: "Internship project",
    where: "NIT Rourkela, May 2024 to Jun 2024",
    summary: "An ESP32 device that streams hand-transmitted vibration from power tools at 600 Hz.",
    description: "Designed and built a wireless device around an ESP32 microcontroller to measure hand-transmitted vibration in power tools, with real-time data visualisation at 600 Hz.",
    tags: ["ESP32", "Wireless", "Signal acquisition"],
    cover: "", images: [], videos: [], reports: []
  },
  {
    id: "emg-hand",
    title: "Machine learning robotic hand using EMG",
    kind: "Academic project",
    where: "B.Tech, RCOEM Nagpur",
    summary: "A robotic hand that mimics natural hand movement from muscle signals.",
    description: "A machine learning based robotic hand that mimics natural hand movements using EMG sensors interfaced with a controller and servo motors, aimed at assistive technologies.",
    tags: ["EMG", "Machine learning", "Servo control", "Assistive tech"],
    cover: "", images: [], videos: [], reports: []
  },
  {
    id: "smart-glasses",
    title: "Smart glasses for the visually impaired",
    kind: "Academic project",
    where: "B.Tech, RCOEM Nagpur",
    summary: "Wearable obstacle detection with real-time audio alerts.",
    description: "An assistive wearable that improves mobility and spatial awareness for visually impaired people. Ultrasonic sensors and an NE555 timer circuit detect obstacles and trigger real-time audio alerts through a buzzer.",
    tags: ["Wearable", "Ultrasonic sensing", "Analog circuits"],
    cover: "", images: [], videos: [], reports: []
  },
  {
    id: "health-monitor",
    title: "IoT health monitoring system",
    kind: "Academic project",
    where: "B.Tech, RCOEM Nagpur",
    summary: "Pulse oximeter and temperature readings sent to a remote dashboard.",
    description: "A health monitoring system that interfaces an ESP32 with a pulse oximeter, a temperature sensor and a seven-segment display. IoT connectivity enables remote monitoring and real-time visualisation of vital parameters.",
    tags: ["ESP32", "IoT", "Vitals monitoring"],
    cover: "", images: [], videos: [], reports: []
  },
  {
    id: "ironing-device",
    title: "Automated ironing device",
    kind: "Design patent",
    where: "Design No. 412341-001, published June 2024",
    summary: "An ironing device that needs minimal human interaction.",
    description: "A design for an automated ironing device that minimises human interaction, combining sensors and automated structures for precise ironing, pressure control and movement.",
    tags: ["Design patent", "Mechanical design", "Sensors"],
    cover: "", images: [], videos: [], reports: []
  }
];

const EXPERIENCE = [
  {
    when: "Jan 2025 to Jul 2025",
    role: "Research intern",
    org: "IIT Jodhpur",
    text: "Designed and compared two actuation mechanisms for an anthropomorphic robotic finger. The article is accepted at INACOMM, December 2025.",
    project: "robotic-finger"
  },
  {
    when: "May 2024 to Jun 2024",
    role: "Research intern",
    org: "NIT Rourkela",
    text: "Built a wireless ESP32 device that measures hand-transmitted vibration in power tools and plots it live at 600 Hz.",
    project: "vibration-device"
  },
  {
    when: "Oct 2023 to Oct 2024",
    role: "Research intern",
    org: "BioSpectronics Pvt. Ltd. (startup)",
    text: "Worked on a portable chemistry analyzer that detects body analytes from fluid concentration.",
    project: "chemistry-analyzer"
  },
  {
    when: "May 2023",
    role: "Biomedical intern",
    org: "MGM Medical College and Hospital",
    text: "Learned the working principles of health monitors, ECG machines, ventilators and defibrillators, and did their routine maintenance.",
    project: ""
  }
];

const PUBLICATIONS = [
  {
    title: "Microfluidic Paper-Based Portable Biochemistry Analyzer for Blood Parameter Sensing",
    authors: "S. Palekar, B. Rana, A. Khaire, A. Awasthi, M. Mahule, J. Kalambe",
    venue: "IEEE Sensors Journal, vol. 25, no. 10, pp. 18155-18162, May 2025",
    url: "https://doi.org/10.1109/JSEN.2025.3558549"
  },
  {
    title: "Graphite Electrode Based Bipolar Electrode Electrochemiluminescence Portable Platform for Point-of-Care-Testing Applications",
    authors: "A. Khaire, B. Rana, A. Awasthi, S. Palekar, M. Bhaiyya, J. Kalambe",
    venue: "IEEE Applied Sensing Conference (APSCON), Hyderabad, 2025, pp. 395-398. Presented at the conference.",
    url: "https://doi.org/10.1109/APSCON63569.2025.11144259"
  },
  {
    title: "Enzymatic Chemiresistive Interdigitated Electrodes Fabricated by Screen-Printing and Functionalized with Novel Green Synthesized Nanoparticles for Detection of Glucose Concentrations",
    authors: "J. B. Zalke, N. P. Narkhede, D. Rotake, B. Rana, C. Sharma",
    venue: "Lecture Notes in Electrical Engineering, pp. 505-519, Jan 2025",
    url: "https://doi.org/10.1007/978-981-96-3758-443"
  },
  {
    title: "Design and Development of an Anthropomorphic Robotic Finger: twisted string vs cable-pulling actuation",
    authors: "B. Rana et al.",
    venue: "Accepted, INACOMM International Conference on Machines and Mechanisms, December 2025",
    url: ""
  },
  {
    title: "Automated Ironing Device",
    authors: "Design patent",
    venue: "Design No. 412341-001, published June 2024",
    url: ""
  }
];

const EDUCATION = [
  ["M.Tech, Biomedical Engineering (2025 to 2027)", "Indian Institute of Technology Madras, Tamil Nadu"],
  ["B.Tech, Biomedical Engineering, Honors in Bioinformatics (2021 to 2025)", "Shri Ramdeobaba College of Engineering and Management, Nagpur. CGPA 10/10"],
  ["Higher Secondary, 93.17% (2019 to 2021)", "Pace Junior Science College, Nerul"],
  ["Secondary School, 95.6% (2019)", "J H Ambani School, Lodhivali"]
];

const SKILLS = [
  ["Technical", "CAD design (Fusion 360), 3D printing, Python, C, microcontrollers (ESP32, Arduino)"],
  ["Research", "Technical writing, problem solving, critical thinking, literature review"],
  ["Recognition", "GATE 2025: All India Rank 82 in Biomedical Engineering"],
  ["Certifications", "IBM: Python for Data Science. L&T Edutech: Data Analytics Fundamentals"],
  ["Leadership", "Vice Chairperson, IEEE EMBS RCOEM Student Branch. Executive Member, REEF RCOEM"],
  ["Workshops and conferences", "IEEE APSCON 2025 (presenter). Electrochemical Biosensor Technology workshop, Dec 2024. International Clinical Engineering and Health Technology Management Congress, AMTZ, Nov 2023"]
];

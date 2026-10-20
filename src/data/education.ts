export type EducationCategory =
  | "Education"
  | "School Coursework"
  | "Certification"
  | "External Training";

export interface EducationEntry {
  id: string;
  title: string;
  /** Institution, provider, or instructor exactly as supplied. */
  provider: string;
  category: EducationCategory;
  /** Display date, e.g. "September 2026". */
  date: string;
  /** Sort key YYYY-MM; a larger value is newer. */
  sortKey: string;
  duration?: string;
  note?: string;
  /** Alternate-script title shown as supplied. */
  titleAlt?: string;
  rtl?: boolean;
}

export const education: EducationEntry[] = [
  {
    id: "hs-diploma",
    title: "High School Diploma Program",
    provider: "Bridgeway School",
    category: "Education",
    date: "Expected graduation: 2027",
    sortKey: "2027-12",
  },
  {
    id: "typescript-ar",
    title: "Learn TypeScript in Arabic",
    provider: "Osama Elzero, YouTube",
    category: "External Training",
    date: "September 2026",
    sortKey: "2026-09",
    duration: "4 hours",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & Small Business Certification",
    provider: "Bridgeway School",
    category: "Certification",
    date: "August 2026",
    sortKey: "2026-08",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    provider: "Bridgeway School",
    category: "School Coursework",
    date: "March 2026",
    sortKey: "2026-03",
  },
  {
    id: "coding-1b",
    title: "Middle School Coding 1b: Learning Python and JavaScript",
    provider: "Bridgeway School",
    category: "School Coursework",
    date: "January 2024",
    sortKey: "2024-01b",
  },
  {
    id: "game-1b",
    title: "Middle School Game Design 1b",
    provider: "Bridgeway School",
    category: "School Coursework",
    date: "January 2024",
    sortKey: "2024-01a",
  },
  {
    id: "game-1a",
    title: "Middle School Game Design 1a",
    provider: "Bridgeway School",
    category: "School Coursework",
    date: "June 2023",
    sortKey: "2023-06b",
  },
  {
    id: "coding-1a",
    title: "Middle School Coding 1a: Introduction",
    provider: "Bridgeway School",
    category: "School Coursework",
    date: "June 2023",
    sortKey: "2023-06a",
  },
  {
    id: "python-everyone",
    title: "Python Programming for Everyone Immersive Training",
    provider: "SDE Arts, Udemy",
    category: "External Training",
    date: "February 2023",
    sortKey: "2023-02",
    duration: "3.5 hours",
  },
  {
    id: "iot-python",
    title: "Internet of Things with Python Programming",
    provider: "Sai Acuity Institute of Learning Pvt Ltd, Udemy",
    category: "External Training",
    date: "November 2022",
    sortKey: "2022-11",
    duration: "30.5 hours",
  },
  {
    id: "sql-hero",
    title: "Zero to Hero in SQL: SQL for Data Analytics",
    provider: "Start-Tech Academy, Pukhraj Parikh and Abhishek Bansal, Udemy",
    category: "External Training",
    date: "July 2022",
    sortKey: "2022-07",
    duration: "10.5 hours",
  },
  {
    id: "web-fundamentals",
    title: "Internet and Web Development Fundamentals",
    provider: "YouAccel Training, Udemy",
    category: "External Training",
    date: "May 2022",
    sortKey: "2022-05b",
    duration: "4 hours",
  },
  {
    id: "cpp",
    title: "Beginning C++ Programming — From Beginner to Beyond",
    provider: "Tim Buchalka’s Learn Programming Academy, Dr. Frank Mitropoulos, Udemy",
    category: "External Training",
    date: "May 2022",
    sortKey: "2022-05a",
    duration: "46 hours",
  },
  {
    id: "arduino-hackster",
    title: "Arduino Programming and Hardware Fundamentals with Hackster",
    provider: "Shawn Hymel, Hackster.io, Udemy",
    category: "External Training",
    date: "October 2021",
    sortKey: "2021-10",
    duration: "7.5 hours",
  },
  {
    id: "arduino-edraak",
    title: "أساسيات برمجة الأردوينو ومشاريعه العملية",
    titleAlt: "Arduino Programming Fundamentals and Practical Projects",
    rtl: true,
    provider: "Edraak",
    category: "External Training",
    date: "September 2020",
    sortKey: "2020-09",
    duration: "4 hours",
  },
];

/** Reverse-chronological. Entries sharing a month keep the order given in the resume. */
export const educationSorted: EducationEntry[] = education
  .map((entry, index) => ({ entry, index }))
  .sort((a, b) => (a.entry.sortKey < b.entry.sortKey ? 1 : a.entry.sortKey > b.entry.sortKey ? -1 : a.index - b.index))
  .map(({ entry }) => entry);

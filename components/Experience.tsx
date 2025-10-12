import React from "react";
import { FaHashtag } from "react-icons/fa";
import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";

const experiences: ExperienceCardProps[] = [
  {
    company: "Shopify Partner",
    role: "Shopify Developer",
    startDate: "2024",
    endDate: "PRESENT",
    duties:
      "As a Shopify developer, I leveraged my expertise in HTML, CSS, JavaScript, AJAX, and Shopify's liquid templating language to build high-converting Shopify themes and apps for merchants across Lagos, Ogun State, Port Harcourt, Abuja, and Nigeria. I also provided ongoing maintenance, support, and training, empowering clients to utilize new platform features effectively.",
    skills: [
      "HTML/CSS",
      "JavaScript", 
      "Shopify",
      "Liquid",
      "AJAX",
    ],
  },
  {
    company: "Lotus",
    role: "Digital Accessibility and Experience Support",
    startDate: "2022",
    endDate: "PRESENT",
    duties: `Currently working in digital accessibility and user experience support, where I gained my CPACC (Certified Professional in Accessibility Core Competencies) certification and am actively pursuing the WAS (Web Accessibility Specialist) certification. I focus on ensuring digital products meet accessibility standards and provide inclusive user experiences for all users.`,
    skills: [
      "Digital Accessibility",
      "WCAG Compliance", 
      "User Experience",
      "Accessibility Testing",
      "ARIA",
    ],
  },
  {
    company: "Bryan and Beckley International",
    role: "Pre-sale Engineer",
    startDate: "2023",
    endDate: "2024",
    duties:
      "As a pre-sale engineer, I worked closely with sales teams to provide technical expertise during the sales process. I conducted product demonstrations, assessed client technical requirements, and provided solutions that aligned with customer needs. This role enhanced my ability to communicate complex technical concepts to diverse audiences.",
    skills: ["Technical Sales", "Product Demos", "Client Consultation", "Solution Architecture", "Communication"],
  },
  {
    company: "Jupiter Academy",
    role: "Sales Representative",
    startDate: "2022",
    endDate: "2023",
    duties:
      "Worked as a sales representative, developing strong communication and relationship-building skills. I was responsible for client outreach, relationship management, and achieving sales targets. This experience strengthened my ability to understand customer needs and provide tailored solutions.",
    skills: ["Sales", "Communication", "Customer Relations", "Client Outreach", "Target Achievement"],
  },
];

function Experience() {
  return (
    <div className="text-[#D0CFCF] mb-24">
      <h2 className="flex items-center text-xl font-semibold mb-12">
        <FaHashtag className="mr-4 text-[#4F4F4F]" size={18} />
        Experience
      </h2>
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  );
}

export default Experience;

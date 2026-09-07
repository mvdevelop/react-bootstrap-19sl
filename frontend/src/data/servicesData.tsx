import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaChartLine,
  FaShieldAlt,
  FaCog,
} from 'react-icons/fa';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: <FaCode size={28} />,
    title: 'Web Development',
    description:
      'Build modern, responsive websites using the latest technologies like React, Vue, and Angular. From simple landing pages to complex web applications.',
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: 'Mobile Development',
    description:
      'Create native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.',
  },
  {
    icon: <FaPalette size={28} />,
    title: 'UI/UX Design',
    description:
      'Design beautiful, intuitive user interfaces with a focus on user experience. We use Figma, Adobe XD, and modern design principles.',
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights using Python, R, SQL, and modern visualization tools like Tableau and Power BI.',
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with our comprehensive security services, including penetration testing and security audits.',
  },
  {
    icon: <FaCog size={28} />,
    title: 'DevOps & Cloud',
    description:
      'Streamline your development workflow with CI/CD pipelines, containerization, and cloud infrastructure management.',
  },
];

export default services;
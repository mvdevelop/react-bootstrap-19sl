import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';
import team5 from '../assets/images/team5.jpg';
import team6 from '../assets/images/team6.jpg';
import { TeamMember } from '../types';

export const socialLinks = [
  { icon: <FaTwitter />, label: 'Twitter', href: '#' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
];

export const teamMembers: TeamMember[] = [
  { id: 1, name: 'Dr. Sarah Chen', role: 'Academic Director', image: team1 },
  { id: 2, name: 'Marcus Johnson', role: 'Lead Instructor', image: team2 },
  { id: 3, name: 'Emma Wilson', role: 'Curriculum Designer', image: team3 },
  { id: 4, name: 'James Lee', role: 'Backend Specialist', image: team4 },
  { id: 5, name: 'Ana Garcia', role: 'Frontend Expert', image: team5 },
  { id: 6, name: 'David Kim', role: 'DevOps Engineer', image: team6 },
];

export default teamMembers;
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React 19',
    excerpt: 'React 19 brings exciting new features including Server Components, Actions, and improved hooks. Learn how to migrate your projects.',
    image: blog1,
    date: 'September 15, 2026',
    author: 'Sarah Chen',
    comments: 12,
    category: 'React',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Explore the emerging trends shaping web development in 2026: AI integration, edge computing, and the evolution of frameworks.',
    image: blog2,
    date: 'September 10, 2026',
    author: 'Marcus Johnson',
    comments: 8,
    category: 'Web Dev',
  },
  {
    id: 3,
    title: 'Building Accessible UIs',
    excerpt: 'Accessibility is not optional. Discover practical tips and best practices for creating inclusive web applications.',
    image: blog3,
    date: 'September 5, 2026',
    author: 'Emma Wilson',
    comments: 15,
    category: 'UX Design',
  },
];

export default blogPosts;
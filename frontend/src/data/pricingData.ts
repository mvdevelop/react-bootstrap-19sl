import { FaCheck, FaTimes } from 'react-icons/fa';
import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for beginners',
    features: [
      { text: 'Access to 5 basic courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Email support', included: true },
      { text: 'Course certificates', included: false },
      { text: '1-on-1 mentorship', included: false },
      { text: 'Career guidance', included: false },
    ],
  },
  {
    id: 2,
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Most popular choice',
    popular: true,
    features: [
      { text: 'Access to all courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Course certificates', included: true },
      { text: 'Monthly mentorship calls', included: true },
      { text: 'Career guidance', included: false },
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For teams and organizations',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Team dashboard', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'Custom course development', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Full career guidance', included: true },
    ],
  },
];

export const featureIcons = { check: FaCheck, cross: FaTimes };

export default pricingPlans;
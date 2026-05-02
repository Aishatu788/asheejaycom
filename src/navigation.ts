import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Products & Services',
      links: [
        {
          text: 'Furniture & Interior Décor',
          href: getPermalink('/services#furniture'),
        },
        {
          text: 'Bamboo Products',
          href: getPermalink('/services#bamboo'),
        },
        {
          text: 'Construction & Building Works',
          href: getPermalink('/services#construction'),
        },
        {
          text: 'Solar Energy Solutions',
          href: getPermalink('/services#solar'),
        },
        {
          text: 'Electrical Works',
          href: getPermalink('/services#electrical'),
        },
        {
          text: 'Procurement & Supplies',
          href: getPermalink('/services#procurement'),
        },
        {
          text: 'Agriculture & Agro Products',
          href: getPermalink('/services#agriculture'),
        },
      ],
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Book a Consultation', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Projects', href: getPermalink('/projects') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Furniture & Interior Décor', href: getPermalink('/services#furniture') },
        { text: 'Bamboo Products', href: getPermalink('/services#bamboo') },
        { text: 'Construction & Building Works', href: getPermalink('/services#construction') },
        { text: 'Solar Energy Solutions', href: getPermalink('/services#solar') },
        { text: 'Electrical Works', href: getPermalink('/services#electrical') },
        { text: 'Procurement & Supplies', href: getPermalink('/services#procurement') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: '+234 803 788 2586', href: 'tel:+2348037882586' },
        { text: 'meetasheejay@gmail.com', href: 'mailto:meetasheejay@gmail.com' },
        { text: 'No.1 Aliyu Turaki Road, Kaduna', href: '#' },
        { text: 'Get in Touch', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/asheejay_furniture_ventures' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/Ashee-Jay' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/2348037882586' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} <a class="text-accent underline" href="/">Ashee Jay Ventures Limited</a> · All rights reserved.
  `,
};

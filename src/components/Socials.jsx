import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialsData = [
  { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebook /> },
  { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
];

const Socials = () => {
  return (
    <div style={styles.container} >
      {socialsData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          className='icons hover:scale-110 hover:text-white transition-all duration-2000'
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
    float: 'right',

  },
  link: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Socials;

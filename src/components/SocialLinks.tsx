// SocialLinks.tsx
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ResumeButton from '../components/ResumeButton';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-3 items-center">
      <ResumeButton />
      <a href="https://github.com/advait-d" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaGithub size={24} />
      </a>
      <a href="mailto:advait.deshmukh3@gmail.com" className="text-gray-400 hover:text-white">
        <FaEnvelope size={24} />
      </a>
      <a href="https://www.linkedin.com/in/advaitdeshmukh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.instagram.com/advaait" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com/AdvaitDeshmukh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaXTwitter size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
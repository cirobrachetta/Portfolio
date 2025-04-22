import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/ciro-perfil.jpg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`bg-dark text-white py-5 ${styles.gradient}`}>
      <div className="container text-center">
        <img
          src={profilePic}
          alt="Ciro Brachetta"
          className={`rounded-circle mb-3 ${styles.profilePic}`}
        />
        <h1>Ciro Brachetta</h1>
        <p className="lead">Desarrollador de Software | Estudiante de Análisis de Sistemas</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="mailto:cirobrachettaprofessional@gmail.com" className="text-white">
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/cirobrachetta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ciro-brachetta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

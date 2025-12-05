import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">MyPortfolio</div>
        <nav className="app-nav">
          <button
            className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`nav-button ${activeTab === 'online' ? 'active' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            Online
          </button>
        </nav>
        <div className="theme-toggle-wrapper">
          <label className="theme-switch" aria-label="Toggle theme">
            <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
            <span className="slider round">
              <span className="icon sun">☀️</span>
              <span className="icon moon">🌙</span>
            </span>
          </label>
        </div>
      </header>

      <main className="app-content">
        {activeTab === 'about' && (
          <section className="intro-section fade-in">
            <div className="intro-text">
              <h1>Hello, I'm Jules.</h1>
              <h2>Software Engineer & Problem Solver</h2>
              <p>
                I am a passionate developer with a knack for building robust and scalable web applications.
                With expertise in modern JavaScript frameworks and a love for clean code, I turn complex problems into elegant solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
              </p>
              <button className="cta-button" onClick={() => setActiveTab('projects')}>View My Work</button>
            </div>
            <div className="intro-image">
               {/* Placeholder for a profile image */}
               <div className="profile-placeholder">
                  <span>Profile Image</span>
               </div>
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="projects-section fade-in">
            <h2>My Projects</h2>
            <div className="project-list">
              <div className="project-card">
                <h3>Personal Website</h3>
                <p>
                  A responsive personal portfolio website built with React and Vite.
                  It features a clean design and seamless navigation.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS</span>
                </div>
              </div>
              <div className="project-card">
                <h3>E-commerce Dashboard</h3>
                <p>
                  A comprehensive dashboard for managing online stores, including inventory management,
                  sales analytics, and user administration.
                </p>
                <div className="project-tags">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Tailwind</span>
                </div>
              </div>
               <div className="project-card">
                <h3>Task Manager API</h3>
                <p>
                  A RESTful API for a task management application, supporting user authentication,
                  task CRUD operations, and categorization.
                </p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'online' && (
          <section className="online-section fade-in">
            <h2>Online Presence</h2>
            <div className="online-list">
              <a href="https://nonlinearity.info" target="_blank" rel="noopener noreferrer" className="online-card">
                <h3>Nonlinearity.info</h3>
                <p>Visit nonlinearity.info</p>
              </a>
              <a href="https://grepsilon.com" target="_blank" rel="noopener noreferrer" className="online-card">
                <h3>Grepsilon.com</h3>
                <p>Visit grepsilon.com</p>
              </a>
            </div>
          </section>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Jules. All rights reserved.</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

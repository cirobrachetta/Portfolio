import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProjectsCarousel = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/cirobrachetta/repos')
      .then(response => response.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork) // opcional: evitar mostrar forks
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // orden por actividad
        setRepos(filtered);
      })
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  return (
    <section className="py-5 bg-white" id="projects">
      <div className="container">
        <h2 className="text-center mb-4">Proyectos</h2>
        {repos.length > 0 ? (
          <Carousel indicators={false}>
            {repos.map(repo => (
              <Carousel.Item key={repo.id}>
                <div className="card shadow mx-auto" style={{ maxWidth: '600px' }}>
                  <div className="card-body text-center">
                    <h5 className="card-title">{repo.name}</h5>
                    <p className="card-text">
                      {repo.description || 'Sin descripción'}
                    </p>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p className="text-center">Cargando proyectos...</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsCarousel;

// app/page.jsx
import { getPortfolioProjects } from '../lib/contentful';

export default async function Portfolio() {
  const projects = await getPortfolioProjects();

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff' }}>
      <header style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#000' }}>Joohyung Park</h1>
        <p style={{ fontSize: '20px', color: '#666' }}>
            Full-Cycle Video Producer: Motion Graphics, Animation, Editing, Color Correction & Audio Post-Production

        </p>
      </header>

      {projects.map((project) => (
        <section key={project.id} style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#000' }}>{project.title}</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
            {project.description}
          </p>

          {project.thumbnailImage && (
            <img 
              src={`https:${project.thumbnailImage}`}
              alt={project.title}
              style={{ width: '100%', maxWidth: '800px', marginBottom: '40px', borderRadius: '8px' }}
            />
          )}

          {project.videos && project.videos.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {project.videos.map((video, index) => (
                <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', backgroundColor: '#fff' }}>
                  <video 
                    controls 
                    style={{ width: '100%', borderRadius: '8px' }}
                    src={`https:${video.url}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {video.title && <p style={{ marginTop: '10px', fontSize: '14px', color: '#000' }}>{video.title}</p>}
                </div>
              ))}
            </div>
          )}

          {project.technologies && (
            <div style={{ marginTop: '20px', color: '#000' }}>
              <strong>Technologies: </strong>
              {project.technologies.join(', ')}
            </div>
          )}

          {project.projectUrl && (
            <div style={{ marginTop: '10px' }}>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#0070f3', textDecoration: 'underline' }}>
                View Project
              </a>
            </div>
          )}
        </section>
      ))}

      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        marginTop: '80px',
        borderTop: '1px solid #e0e0e0',
        color: '#666',
        fontSize: '14px'
      }}>
        © 2026 Joohyung Park. All rights reserved.
      </footer>
    </div>
  );
}
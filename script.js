// script.js
function App() {
    return (
      <div>
        {/* Navbar */}
        <nav>
          <div className="container">
            <div className="nav-logo">Ankita Thakur</div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section className="hero section container">
          <div className="avatar animate-fadein" style={{ width: '200px', height: '200px' }}><img src="profile.png" alt="Ankita Thakur" /></div>
          <h1 className="animate-slideup">Hello, I'm <span>Ankita Thakur</span></h1>
          <p className="subtitle animate-slideup">B.Tech Student & Developer</p>
          <p className="skills animate-slideup">Python | Data Analysis | Web Development</p>
          <a href="#contact" className="btn btn-primary animate-bounce">Contact Me</a>
          <a href="#projects" className="btn btn-secondary animate-bounce">See My Work</a>
          <div className="down-arrow"><i className="fas fa-chevron-down"></i></div>
        </section>
  
        {/* About Me */}
        <section id="about" className="section container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I am Ankita Thakur, currently in my first year pursuing a B.Tech degree at Newton School of Technology. Born and raised in Patna, Bihar, I've developed a passion for technology and problem-solving that drives my academic pursuits.</p>
              <p>I'm deeply interested in Python programming, data analysis, and web development, continuously expanding my knowledge in these areas. When I'm not coding, you'll find me enjoying my hobbies – swimming and reading books, which help me maintain a well-rounded perspective.</p>
            </div>
            <div>
              <div className="card">
                <h3>Education</h3>
                <p><strong>B.Tech – Computer Science</strong></p>
                <p>Newton School of Technology</p>
                <p>2024 – Present</p>
              </div>
              <div className="card">
                <h3>Hobbies & Interests</h3>
                <div className="badges">
                  <div className="badge">Swimming</div>
                  <div className="badge">Reading Books</div>
                  <div className="badge">Coding</div>
                  <div className="badge">Problem Solving</div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* My Skills */}
        <section id="skills" className="section container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-content">
            <div className="skills-left">
              <h3><i className="fas fa-code"></i> Technical Skills</h3>
              <div className="badges">
                <div className="badge">Python</div>
                <div className="badge">JavaScript</div>
                <div className="badge">HTML</div>
                <div className="badge">CSS</div>
              </div>
              <h3><i className="fas fa-layer-group"></i> Libraries & Frameworks</h3>
              <div className="badges">
                <div className="badge">React</div>
                <div className="badge">Data Analysis Libraries</div>
              </div>
              <h3><i className="fas fa-tools"></i> Tools & Technologies</h3>
              <div className="badges">
                <div className="badge">Git</div>
                <div className="badge">Web Development</div>
                <div className="badge">Data Analysis</div>
              </div>
            </div>
            <div className="skills-right">
              <div className="skill-bar">
                <h4>Python Development</h4>
                <div className="progress"><div className="progress-inner" style={{width: '90%'}}></div></div>
              </div>
              <div className="skill-bar">
                <h4>Data Analysis</h4>
                <div className="progress"><div className="progress-inner" style={{width: '75%'}}></div></div>
              </div>
              <div className="skill-bar">
                <h4>Web Development</h4>
                <div className="progress"><div className="progress-inner" style={{width: '85%'}}></div></div>
              </div>
              <div className="skill-bar">
                <h4>React</h4>
                <div className="progress"><div className="progress-inner" style={{width: '80%'}}></div></div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Projects */}
        <section id="projects" className="section container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Capstone Project</h3>
              <p>Linear Regression Model</p>
              <a href="https://github.com/ankitathakur280906/linear-regression-model" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Repo</a>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <a href="https://github.com/ankitathakur280906/project-two" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Repo</a>
            </div>
          </div>
        </section>
  
        {/* Contact */}
        <section id="contact" className="section container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-form">
              <h3>Send Me a Message</h3>
              <form action="mailto:ankitathakur280906@gmail.com" method="POST" encType="text/plain">
                <label>Name</label>
                <input type="text" name="Name" placeholder="Your name" required />
                <label>Email</label>
                <input type="email" name="Email" placeholder="Your email" required />
                <label>Message</label>
                <textarea name="Message" rows="5" placeholder="Your message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item"><i className="fas fa-envelope"></i> ankitathakur280906@gmail.com</div>
              <div className="info-item"><i className="fas fa-map-marker-alt"></i> Sonipath, Haryana, India</div>
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com/ankitathakur280906" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ankita-thakur-908077293/" target="_blank"><i className="fab fa-linkedin"></i></a>
              </div>
              <div className="testimonial">"I'm always interested in hearing about new projects and opportunities!"</div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer>
          <div className="container">
            <div>
              <div className="nav-logo">Ankita Thakur</div>
              <div>B.Tech Student & Developer</div>
            </div>
            <ul className="footer-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <hr />
          <p>© 2025 Ankita Thakur. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  // Render the App component
  ReactDOM.render(<App />, document.getElementById('root'));
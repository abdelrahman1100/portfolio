import React from 'react'

export default function AbdelrahmanPortfolio() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white font-bold">AT</div>
          <div>
            <h1 className="text-lg font-semibold">Abdelrahman Tarek</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Software Engineer — Full‑Stack & Mobile</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-3 items-center">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#experience" className="text-sm hover:underline">Experience</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Hi, I’m Abdelrahman 👋</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">I build production-ready web and mobile applications. I love clean architecture, scalable backends, and delightful UIs. Currently working with React, NestJS, Spring Boot and Flutter.</p>

          <div className="flex gap-3 flex-wrap">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm shadow" href="mailto:Abdulrahmantarek0.1@gmail.com">Email</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm" href="https://github.com/abdelrahman1100" target="_blank" rel="noreferrer">GitHub</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm" href="https://linkedin.com/in/abdelrahmantarek01" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm" href="/files/Abdelrahman_Tarek_CV.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500">Location</div>
              <div className="font-medium">Giza, Egypt</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500">Degree</div>
              <div className="font-medium">B.S. Computer Science — Cairo University</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500">GPA</div>
              <div className="font-medium">3.01 / 4.0</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl text-white font-bold">AT</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 text-center">Software Engineer • Full-Stack • Mobile</div>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700 dark:text-gray-300">I’m a software engineer experienced in building scalable backend systems and responsive frontends. I enjoy working on cross-platform mobile apps and cloud-friendly server APIs. I have practical experience with Spring Boot, NestJS, Node.js, React, and Flutter, and I work comfortably with SQL and NoSQL databases.</p>
      </section>

      <section id="experience" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>

        <article className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-lg font-semibold">Software Engineer — MasteryHub</h4>
              <div className="text-sm text-gray-500">Feb 2025 — May 2025</div>
            </div>
          </div>
          <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Built Wepray (Flutter) mobile app and a React admin dashboard.</li>
            <li>Implemented RESTful APIs with authentication and role-based access using NestJS and PostgreSQL.</li>
            <li>Containerized services using Docker and docker-compose.</li>
            <li>Worked in Agile teams and tracked tasks using Jira.</li>
          </ul>
        </article>

        <article className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-lg font-semibold">Software Engineer Intern — Orange</h4>
              <div className="text-sm text-gray-500">Aug 2024 — Oct 2024</div>
            </div>
          </div>
          <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Worked with MySQL and MongoDB, optimizing queries and data models.</li>
            <li>Developed Spring Boot services and participated in testing with JUnit.</li>
            <li>Collaborated with cross-functional teams to deliver features.</li>
          </ul>
        </article>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h4 className="font-semibold">WEB SERVICE APPLICATION</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">RESTful web service for mobile recharge and money transfers using Spring Boot and MySQL. Implemented authentication, validation, and testing.</p>
            <div className="mt-3 text-xs text-gray-500">Tools: Java, Spring Boot, MySQL, Postman, JUnit, Docker</div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h4 className="font-semibold">NEWS APP</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Full-stack news app with Node.js backend, Flutter frontend, and ML-based offensive comment detection in Python.</p>
            <div className="mt-3 text-xs text-gray-500">Tools: Node.js, Express, MongoDB, Flutter, Python, Docker</div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h4 className="font-semibold">TASK MANAGEMENT APP</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Task tracking app with Spring Boot backend and React frontend. Features authentication and Dockerized deployment.</p>
            <div className="mt-3 text-xs text-gray-500">Tools: Spring Boot, React, MongoDB, Docker</div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Java (Spring Boot)',
            'Node.js & Express',
            'React',
            'Flutter',
            'MongoDB & MySQL',
            'Docker & Git',
            'REST APIs',
            'TypeScript & JavaScript',
            'Design Patterns',
          ].map((s) => (
            <span key={s} className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm shadow-sm">{s}</span>
          ))}
        </div>
      </section>

      <section id="achievements" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Ranked 8th in 2023 ECPC Qualifications — Qualified for ECPC Finalist</li>
          <li>ECPC 2023 Finalist</li>
          <li>Ranked 29th in 2022 ECPC Qualifications</li>
        </ul>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Interested in working together? Reach out via email or LinkedIn and I’ll get back to you.</p>
            <div className="text-sm">
              <div><strong>Email:</strong> <a href="mailto:Abdulrahmantarek0.1@gmail.com" className="text-primary">Abdulrahmantarek0.1@gmail.com</a></div>
              <div className="mt-2"><strong>Phone:</strong> <a href="tel:+201116909615" className="text-primary">+20 111 690 9615</a></div>
              <div className="mt-2"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/abdelrahmantarek01" target="_blank" rel="noreferrer" className="text-primary">linkedin.com/in/abdelrahmantarek01</a></div>
            </div>
          </div>

          <form className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:Abdulrahmantarek0.1@gmail.com'; }}>
            <label className="block text-sm">Your message</label>
            <textarea required className="w-full mt-2 p-3 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700" rows={6} placeholder="Hi Abdelrahman, I'm interested in..." />
            <button className="mt-4 inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg">Send message</button>
          </form>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Abdelrahman Tarek — Built with ❤️
      </footer>
    </main>
  )
}

import React from "react";
// Import Images
import android from '../assets/images/splash-regis-login.png';
import api from '../assets/images/homepage.png'; 
import iot from '../assets/images/laporaniot.png';
import ktpImg from '../assets/images/ktp-project.png'; 


// Import Style
import '../assets/styles/Project.scss';

const projectData = [
  {
    title: "Smart Attendance & IoT Dashboard",
    image: iot,
    desc: "Sistem manajemen kehadiran terpadu yang menggabungkan verifikasi Geolocation, dokumentasi Kamera, dan dashboard monitoring data sensor IoT secara real-time dalam satu platform terintegrasi.",
    tech: "Node.js, Express.js, MySQL, JWT, Socket.io",
    link: "https://github.com/C-PPAW-TI503P-2025/PRKPAW-20230140116"
  },
  {
    title: "Aplikasi Manajemen Keuangan (Android)",
    image: android,
    desc: "Aplikasi Android Native untuk manajemen anggaran mahasiswa menggunakan arsitektur MVVM, Room Database untuk penyimpanan offline, dan MPAndroidChart untuk visualisasi data.",
    tech: "Kotlin, MVVM, Room Database, MPAndroidChart",
    link: "https://github.com/ZahwaAnritia/PAM2025_116"
  },
  {
    title: "KTP Management System",
    image: ktpImg,
    desc: "Sistem CRUD data kependudukan menggunakan Spring Boot dengan arsitektur berlapis (Service/Repository), validasi data server-side, dan interaksi JQuery Ajax tanpa page reload.",
    tech: "Java, Spring Boot, MySQL, JQuery, Ajax",
    link: "https://github.com/ZahwaAnritia/Tugas_CRUD_20230140116" 
  },
  {
    title: "CineData Platform",
    image: api,
    desc: "Pengembangan RESTful API untuk manajemen data film menggunakan Node.js Native guna mendalami fundamental server-side development dan manajemen database relasional.",
    tech: "Node.js, MySQL, JavaScript, Postman",
    link: "https://github.com/ZahwaAnritia/CINEDATA-PLATFORM"
  }
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="section-title">Featured Projects</h1>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              
              <div className="tech-stack">
                <strong>Tech Stack:</strong> <span>{project.tech}</span>
              </div>
              
              <div className="project-footer">
                <a 
                  href={project.link}
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-view"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
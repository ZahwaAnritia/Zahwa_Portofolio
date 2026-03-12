import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>My Roadmap & Journey</h1>
        <VerticalTimeline>
          
          {/* --- 1. Pendidikan: Kuliah (2023 - Sekarang) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Teknologi Informasi Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Muhammadiyah Yogyakarta</h4>
            <p>
              Fokus pada Full-stack Web Development dan Mobile Development. Mempertahankan IPK 3.7/4.0.
            </p>
          </VerticalTimelineElement>

          {/* --- 2. Proyek: KTP Management System (Maret 2026) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2026"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">KTP Management System</h3>
            <h4 className="vertical-timeline-element-subtitle">Full-stack (Spring Boot)</h4>
            <p>
              Membangun sistem CRUD kependudukan menggunakan Spring Boot, MySQL, dan JQuery Ajax dengan arsitektur Service-Repository.
            </p>
          </VerticalTimelineElement>

          {/* --- 3. Proyek: Android Finance App (Nov 2025 - Feb 2026) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2025 - Jan 2026"
            iconStyle={{ background: '#3ddc84', color: '#fff' }} // Warna hijau khas Android
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">Sakuku: Finance Management</h3>
            <h4 className="vertical-timeline-element-subtitle">Android Project (Kotlin)</h4>
            <p>
              Menyelesaikan pengembangan aplikasi manajemen keuangan native dengan arsitektur MVVM dan visualisasi data interaktif.
            </p>
          </VerticalTimelineElement>

          {/* --- 4. Proyek: Smart Attendance & IoT (Dec 2025) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Oct 2025 - Jan 2026"
            iconStyle={{ background: '#242424', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">Smart Attendance & IoT Dashboard</h3>
            <h4 className="vertical-timeline-element-subtitle">Full-stack (Node.js & Express)</h4>
            <p>
              Integrasi verifikasi lokasi (Maps), dokumentasi kamera, dan monitoring sensor IoT dalam satu platform web.
            </p>
          </VerticalTimelineElement>

          {/* --- 5. Proyek: CineData Platform (Late 2025) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2026"
            iconStyle={{ background: '#242424', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">CineData Platform</h3>
            <h4 className="vertical-timeline-element-subtitle">Back-end Project (Node Native)</h4>
            <p>
              Eksplorasi fundamental server-side dengan membangun RESTful API manajemen metadata film.
            </p>
          </VerticalTimelineElement>

          {/* --- 6. Pendidikan: SMA (2020 - 2023) --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">High School Graduate</h3>
            <h4 className="vertical-timeline-element-subtitle">SMAN 1 Mataram, NTB</h4>
            <p>
              Jurusan MIPA. Fokus pada pengembangan logika dasar dan kemampuan analitis.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
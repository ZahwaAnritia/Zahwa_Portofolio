import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faAndroid, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3"
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "Spring Boot", // Tambahkan ini
    "Java",        // Tambahkan ini
    "REST API",
    "JWT"
];

const labelsThird = [
    "Kotlin",
    "MySQL",
    "SQLite",
    "Room Database",
    "Sequelize",
    "Maven"        // Tambahkan ini
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills & Expertise</h1>

            <div className="skills-grid">

                {/* 1. Frontend */}
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>
                        Membangun antarmuka web yang modern dan responsif menggunakan 
                        <b> React.js</b>. Fokus pada pengalaman pengguna (UX) yang intuitif 
                        serta integrasi API yang efisien.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 2. Backend (Ditambahkan Spring Boot) */}
                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>
                        Berpengalaman mengembangkan sisi server menggunakan 
                        <b> Node.js</b> dan <b>Java Spring Boot</b>. Mahir dalam merancang 
                        arsitektur RESTful API, Service-Repository, dan sistem autentikasi JWT.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 3. Database & Mobile */}
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Mobile & Database</h3>
                    <p>
                        Mengembangkan aplikasi <b>Android Native (Kotlin)</b> dengan implementasi 
                        Clean Architecture (MVVM) serta pengelolaan database relasional 
                        menggunakan MySQL dan SQLite.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
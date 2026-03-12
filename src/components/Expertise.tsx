import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3"
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "REST API",
    "JWT Authentication"
];

const labelsThird = [
    "MySQL",
    "Sequelize",
    "SQLite",
    "Room Database"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>

            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>
                        Mengembangkan antarmuka web menggunakan React, HTML, CSS,
                        dan JavaScript untuk membuat aplikasi yang responsif
                        dan mudah digunakan.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>
                        Mengembangkan RESTful API menggunakan Node.js dan Express.js,
                        serta mengimplementasikan sistem autentikasi menggunakan JWT.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Database & Mobile Development</h3>
                    <p>
                        Mengelola database menggunakan MySQL dan SQLite serta memiliki
                        pengalaman membangun aplikasi Android menggunakan Kotlin
                        dengan Room Database.
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
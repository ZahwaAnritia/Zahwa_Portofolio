import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
       
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ZahwaAnritia" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zahwa-anritia-7a7943289?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hi, I'm Zahwa Anritia</h1>
<p>Full-Stack Webe Developer | IT Student at Universitas Muhammadiyah Yogyakarta</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ZahwaAnritia" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zahwa-anritia-7a7943289?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
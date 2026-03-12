import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ZahwaAnritia" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/zahwa-anritia-7a7943289?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/ZahwaAnritia" target="_blank" rel="noreferrer">Zahwa Anritia</a> with 💜</p>
    </footer>
  );
}

export default Footer;
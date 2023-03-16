import React from 'react';
import GithubLogo from "../Images/GithubLogo.png";
import LinkedInLogo from "../Images/linkedinBlack.png";
const styles = {
    footerStyles: {
        background: "#D9D3D6",
      width: "100%",
      height: "3rem",  
    },
  };

export default function Footer() {
  return (
    <div className='flex flex-row items-center place-content-center fixed bottom-0' style={styles.footerStyles}>
            <figure className='flex flex-row  '>
       
            <a className="text-gray-900 text-sm font-semibold  px-3 " href="https://www.linkedin.com/in/jelena-rogic-0b8939137/"><img className="shadow-2xl" src={LinkedInLogo} width="25" height="25" alt="" /></a>
        <a className="text-gray-900 text-sm font-semibold  px-3 " href="https://github.com/Jelenarog/"><img className="shadow-2xl" src={GithubLogo} width="25" height="25" alt="" /></a>

        </figure>


</div>

  );
}

import React from 'react';

const styles = {
    footerStyles: {
        background: "#D9D3D6",
      width: "100%",
      height: "3rem",  
    },
  };

export default function Footer() {
  return (
    <div className='shadow-2xl fixed bottom-0' style={styles.footerStyles}>

  <a class="text-white" href="https://github.com/Jelenarog/">Github</a>
  <a class="text-white" href="https://www.linkedin.com/in/jelena-rogic-0b8939137/">Linkedin</a>

</div>

  );
}

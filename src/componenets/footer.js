import React from 'react';

const styles = {
    footerStyles: {
        background: "#D9D3D6",
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "3rem",  
    },
  };

export default function Footer() {
  return (
    <div className='shadow-2xl' style={styles.footerStyles}>
      <p>
       TO DO : FOOTER
      </p>
    </div>
  );
}

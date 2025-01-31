import React from "react";
import "../styles/Footer.css"; // 스타일 추가

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>🎨 Design by <strong>김태경</strong> | 💻 Developed by <strong>이수민</strong></p>
        <p>📧 Contact: <a href="mailto:contact@example.com">sum37@kaist.ac.kr</a></p>
        <p>© 2025 Lunatic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Social.css";

const Social = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="social-media">
      <h2>Follow me on Social Media for regular Updates</h2>
      <button className="btn" onClick={() => openLink("https://www.instagram.com/falgunivahora/")}>
        Instagram
      </button>
      <button className="btn" onClick={() => openLink("https://www.linkedin.com/company/blissquants/")}>
        LinkedIn
      </button>
      <button className="btn" onClick={() => openLink("https://www.facebook.com/blissquants")}>
        Facebook
      </button>
    </div>
  );
};

export default Social;


import React from "react";

const SocialLinkList = ({ social }) => {
  return (
    <a
      key={social.id}
      href={social.link}
      className={social.socialClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={social.socialIcon}></i>
    </a>
  );
};

export default SocialLinkList;

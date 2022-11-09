import React from "react"
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs"
const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank" rel="noopener noreferrer">
        <BsDribbble />
      </a>
    </div>
  )
}

export default HeaderSocial
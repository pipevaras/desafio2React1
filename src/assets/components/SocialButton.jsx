import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Alert.css'

// Importacion individual de fa
import { faArrows } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFontAwesome,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export const SocialButton = ({ icons }) => {
  const [twitter, facebook, github] = icons

  return (
    <>
      {/* Forma global dinamica */}
      <div className="iconos">
        <a href="">
          <FontAwesomeIcon icon={faTwitter} size="4x" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} size="4x" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
      </div>
    </>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFontAwesome,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faFacebook, faGithub)

// import { library } from '@fortawesome/fontawesome-svg-core'
// import {
//   faFacebook,
//   faTwitter,
//   faGithub,
// } from '@fortawesome/free-brands-svg-icons'
// import {
//   faCheckSquare,
//   faCoffee,
//   faBook,
//   faArrowAltCircleDown,
// } from '@fortawesome/free-solid-svg-icons'

// library.add(
//   faCheckSquare,
//   faCoffee,
//   faBook,
//   faArrowAltCircleDown,
//   faFacebook,
//   faTwitter,
//   faGithub,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

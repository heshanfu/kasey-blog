import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import {rhythm} from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
        display: 'flex',
        marginBottom: rhythm(1 / 2)
      }}>
        <img
          src={profilePic}
          alt={`Kasey Hinton`}
          style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2)
        }}/>
        <p>
          Written by <strong>Kasey Hinton</strong>.<br/>
          Software Engineer at <a href="https://thetechnicalreview.com" >The Technical Review</a> in Cedar City, Utah.
          <a title="github.com" href="https://github.com/kaseyhinton">
            <svg viewBox="0 0 24 24">
              <path
                d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"/>
            </svg>
          </a>
          <a title="kaseyhinton.com" href="http://kaseyhinton.com">
            <svg viewBox="0 0 24 24">
              <path
                d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </a>

          <a
            title="resume"
            href="https://www.dropbox.com/s/xbm4nxh9e87i0oq/kaseyhinton.pdf?dl=0">
            <svg viewBox="0 0 24 24">
              <path
                d="M11.43,10.94C11.2,11.68 10.87,12.47 10.42,13.34C10.22,13.72 10,14.08 9.92,14.38L10.03,14.34V14.34C11.3,13.85 12.5,13.57 13.37,13.41C13.22,13.31 13.08,13.2 12.96,13.09C12.36,12.58 11.84,11.84 11.43,10.94M17.91,14.75C17.74,14.94 17.44,15.05 17,15.05C16.24,15.05 15,14.82 14,14.31C12.28,14.5 11,14.73 9.97,15.06C9.92,15.08 9.86,15.1 9.79,15.13C8.55,17.25 7.63,18.2 6.82,18.2C6.66,18.2 6.5,18.16 6.38,18.09L5.9,17.78L5.87,17.73C5.8,17.55 5.78,17.38 5.82,17.19C5.93,16.66 6.5,15.82 7.7,15.07C7.89,14.93 8.19,14.77 8.59,14.58C8.89,14.06 9.21,13.45 9.55,12.78C10.06,11.75 10.38,10.73 10.63,9.85V9.84C10.26,8.63 10.04,7.9 10.41,6.57C10.5,6.19 10.83,5.8 11.2,5.8H11.44C11.67,5.8 11.89,5.88 12.05,6.04C12.71,6.7 12.4,8.31 12.07,9.64C12.05,9.7 12.04,9.75 12.03,9.78C12.43,10.91 13,11.82 13.63,12.34C13.89,12.54 14.18,12.74 14.5,12.92C14.95,12.87 15.38,12.85 15.79,12.85C17.03,12.85 17.78,13.07 18.07,13.54C18.17,13.7 18.22,13.89 18.19,14.09C18.18,14.34 18.09,14.57 17.91,14.75M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M17.5,14.04C17.4,13.94 17,13.69 15.6,13.69C15.53,13.69 15.46,13.69 15.37,13.79C16.1,14.11 16.81,14.3 17.27,14.3C17.34,14.3 17.4,14.29 17.46,14.28H17.5C17.55,14.26 17.58,14.25 17.59,14.15C17.57,14.12 17.55,14.08 17.5,14.04M8.33,15.5C8.12,15.62 7.95,15.73 7.85,15.81C7.14,16.46 6.69,17.12 6.64,17.5C7.09,17.35 7.68,16.69 8.33,15.5M11.35,8.59L11.4,8.55C11.47,8.23 11.5,7.95 11.56,7.73L11.59,7.57C11.69,7 11.67,6.71 11.5,6.47L11.35,6.42C11.33,6.45 11.3,6.5 11.28,6.54C11.11,6.96 11.12,7.69 11.35,8.59Z"/>
            </svg>
          </a>
        </p>
      </div>
    )
  }
}

export default Bio

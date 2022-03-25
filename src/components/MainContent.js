import React from 'react'

function MainContent() {
  return (
    <div className='mainContent-container'>
       <div className='mainContent'>
           <h3>Lawrence Rupert Arcangeles</h3>
           <h5>Frontend Developer</h5>
           <h6>larcangeles414@gmail.com</h6>
           <div className='mainContent-btn'>
            <a href='https://mail.google.com/mail/u/0/?fs=1&to=larcangeles414@gmail.com&su=SUBJECT&body=BODY&tf=cm' target="_blank">
            <button>Email Me</button>
            </a>
           </div>
           <div className='about'>
            <h5 className='about-me'>About Me</h5>
            <p className='p-about-me'>
                I am a Frontend Developer that likes to apply the things that
                I've learned in my works. I am very eager to learn new things and
                I believe that learning doesn't stop.

            </p>
            <h5 className='interests'>Interests</h5>
            <ul className='p-interests'>
                <li>Playing Video Games</li>
                <li>Watching Online Videos</li>
                <li>Watching Anime</li>
                <li>Playing Basketball</li>
                <li>Drawing</li>

            </ul>
           </div>
       </div>
       
    </div>
  )
}

export default MainContent
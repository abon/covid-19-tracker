import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className="about__question" style={{ fontSize: 20 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z" /><path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="rgba(22,36,71,1)" /></svg>
                <h1 className="text__question" >About</h1>
            </div>
            <div className="about__question" style={{ marginTop: 80, fontSize: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.586 6l-1.829-1.828 1.415-1.415L22.414 18l-4.242 4.243-1.415-1.415L18.586 19H15v-2h3.586z" fill="rgba(22,36,71,1)" /></svg>
                <h1 className="text__question">Who made this website ?</h1>
            </div>
            <div className="about__links">
                <ol >
                    <li>This site was created by <span style={{ fontSize: 20 }}>Abdullah Samadov</span> . I am a developer in Tashkent,Uzbekistan. </li>
                    <li>You can email me at <span style={{ color: '#c70039' }}>mr.abdullokh@gmail.com</span> </li>
                    <li ><a className='linkedin' target="_blank" without rel="noopener noreferrer" href="https://www.linkedin.com/in/samadovabdullah/"><svg style={{ marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="rgba(244,246,255,1)" /></svg>Connect on LinkedIn</a></li>
                    <li >
                        <a className='twitter' target="_blank" without rel="noopener noreferrer" href="https://twitter.com/iam_abdulloh"><svg style={{ marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="rgba(244,246,255,1)" /></svg>Follow @iam_abdullah</a> </li>
                    <li >
                        <a className='github' target="_blank" without rel="noopener noreferrer" href="https://github.com/abon"><svg className='svg' style={{ marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(244,246,255,1)" /></svg>Collaborate @abon</a> </li>

                </ol>
            </div>

            <div className="about__question" style={{ fontSize: 20, marginTop: 30 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z" /><path d="M11 19V9H4v10h7zm0-12V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8zm2-2v14h7V5h-7zM5 16h5v2H5v-2zm9 0h5v2h-5v-2zm0-3h5v2h-5v-2zm0-3h5v2h-5v-2zm-9 3h5v2H5v-2z" fill="rgba(22,36,71,1)" /></svg>
                <h1 className="text__question" >Sources</h1>
            </div>

            <div className='about__links'>
                <ul className='sources'>
                    <li><a target="_blank" without rel="noopener noreferrer" href="https://www.worldometers.info/">Worldometers</a> </li>
                    <li><a target="_blank" without rel="noopener noreferrer" href="https://coronavirus.jhu.edu/us-map">Johns Hopkins University</a> </li>
                    <li><a target="_blank" without rel="noopener noreferrer" href="https://www.raps.org/">Regulatory Affairs Professional Society</a> </li>
                    <li><a target="_blank" without rel="noopener noreferrer" href="https://disease.sh/">Open Disease Data</a> </li>
                    <li><a target="_blank" without rel="noopener noreferrer" href="https://ncov2019.live/data">Coronavirus Dashboard</a> </li>

                </ul>
            </div>
        </div>
    )
}

export default About

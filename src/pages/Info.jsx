import React from 'react';
import './Info.css';
import { QA } from '../components/index'

import introImg from '../assets/img/1.svg';
import covidImg from '../assets/img/2.png';
import symp from '../assets/img/symp.png';
import ill from '../assets/img/ill.png';
import spread from '../assets/img/spread.png';
import v1 from '../assets/img/v1.jpg';
import v2 from '../assets/img/v2.png';
import plus from '../assets/img/plus.png';

function Info() {

    return (
        <section className="info">
            <div className="wiki__headline">
                <svg className='plus' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0H24V24H0z" /><path d="M20 2c.552 0 1 .448 1 1v18c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3c0-.552.448-1 1-1h14zm-6 6h-2v3H9v2h2.999L12 16h2l-.001-3H17v-2h-3V8z" fill="rgba(236,1,1,1)" /></svg>
                <h1 className='headline__text'>Coronavirus Information Center</h1>
            </div>

            <div className="question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z" fill="rgba(19,59,92,1)" /></svg>
                <h1>What is the Coronavirus ?</h1>
            </div>
            <div className='intro__detail'>
                <img src={introImg} className='intro__img' alt="" />
                <p><strong style={{ marginLeft: 50 }}> Coronaviruses</strong>  are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.</p>
            </div>

            <div className="question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0H24V24H0z" /><path d="M13.717 1.947l3.734 1.434-.717 1.867-.934-.359-.746 1.945c.779.462 1.444 1.094 1.945 1.846l1.903-.847-.407-.914 1.827-.813 1.627 3.654-1.827.813-.407-.913-1.902.847c.122.477.187.978.187 1.493 0 .406-.04.803-.117 1.187l1.944.746.358-.933 1.868.717-1.434 3.734-1.867-.717.358-.933-1.944-.747c-.462.779-1.094 1.444-1.846 1.945l.847 1.903.914-.407.813 1.827-3.654 1.627-.813-1.827.913-.407-.847-1.902c-.477.122-.978.187-1.493.187-.407 0-.804-.04-1.188-.118l-.746 1.945.934.358-.717 1.868-3.734-1.434.717-1.867.932.358.748-1.944C8.167 16.704 7.502 16.072 7 15.32l-1.903.847.407.914-1.827.813-1.627-3.654 1.827-.813.406.914 1.903-.848C6.065 13.016 6 12.515 6 12c0-.406.04-.803.117-1.187l-1.945-.746-.357.933-1.868-.717L3.381 6.55l1.867.717-.359.933 1.945.747C7.296 8.167 7.928 7.502 8.68 7l-.847-1.903-.914.407-.813-1.827L9.76 2.051l.813 1.827-.913.407.847 1.902C10.984 6.065 11.485 6 12 6c.406 0 .803.04 1.187.117l.745-1.945L13 3.815l.717-1.868zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-.5 4.866c.478.276.642.888.366 1.366-.276.478-.888.642-1.366.366-.478-.276-.642-.888-.366-1.366.276-.478.888-.642 1.366-.366zM14 11c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-2.134-1.232c.276.478.112 1.09-.366 1.366s-1.09.112-1.366-.366-.112-1.09.366-1.366 1.09-.112 1.366.366z" fill="rgba(22,36,71,1)" /></svg>
                <h1>What is COVID-19 ?</h1>
            </div>
            <div className="covid__detail">
                <img className="covid__img" src={covidImg} alt="" />
                <p className='covid__text'> <strong style={{ marginLeft: 50 }}>COVID-19</strong>  is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.</p>
            </div>
            <div className="question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0H24V24H0z" /><path d="M13.196 2.268l3.25 5.63c.276.477.112 1.089-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751c-.478.276-1.09.112-1.366-.366L8.546 8.215C6.494 8.837 5 10.745 5 13c0 .625.115 1.224.324 1.776C6.1 14.284 7.016 14 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549c.072.338.11.69.11 1.049 0 .343-.034.677-.1 1H21v2l-17 .001c-.628-.836-1-1.875-1-3.001 0-1.007.298-1.945.81-2.73C3.293 15.295 3 14.182 3 13c0-2.995 1.881-5.551 4.527-6.55l-.393-.682c-.552-.957-.225-2.18.732-2.732l2.598-1.5c.957-.552 2.18-.225 2.732.732z" fill="rgba(22,36,71,1)" /></svg>
                <h1>What does it look like?</h1>
            </div>
            <div className='image'>
                <p style={{ textAlign: 'center', marginTop: 10 }}>These images are colorized and from electron microscropes</p>
                <div className="virus__images">
                    <img src={v1} style={{ width: 500 }} alt="" />
                    <img src={v2} style={{ width: 500 }} alt="" />
                </div>
            </div>


            <div className="question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0H24V24H0z" /><path d="M8.5 5.5c1.412.47 2.048 2.159 2.327 4.023l-4.523 2.611 1 1.732 3.71-2.141C11.06 13.079 11 14.308 11 15c0 3-1 6-5 6s-4 0-4-4C2 9.5 5.5 4.5 8.5 5.5zM22.001 17v.436c-.005 3.564-.15 3.564-4 3.564-4 0-5-3-5-6 0-.691-.06-1.92-.014-3.274l3.71 2.14 1-1.732-4.523-2.61c.279-1.865.915-3.553 2.327-4.024 3-1 6.5 4 6.5 11.5zM13 2v9h-2V2h2z" fill="rgba(22,36,71,1)" /></svg>
                <h1>What are the symptoms of COVID-19?</h1>
            </div>
            <div className="symp__detail">
                <img className="symp__img" src={symp} alt="" />
                <p><strong>The most common symptoms of COVID-19</strong>  are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include aches and pains, nasal congestion, headache, conjunctivitis, sore throat, diarrhea, loss of taste or smell or a rash on skin or discoloration of fingers or toes. These symptoms are usually mild and begin gradually. Some people become infected but only have very mild symptoms.
<br /><br />
Most people (about 80%) recover from the disease without needing hospital treatment. Around 1 out of every 5 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer, are at higher risk of developing serious illness.  However, anyone can catch COVID-19 and become seriously ill.  People of all ages who experience fever and/or  cough associated withdifficulty breathing/shortness of breath, chest pain/pressure, or loss of speech or movement should seek medical attention immediately. If possible, it is recommended to call the health care provider or facility first, so the patient can be directed to the right clinic.</p>
            </div>
            <div className="question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0H24V24H0z" /><path d="M16 1c.552 0 1 .448 1 1v3h4c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V6c0-.552.448-1 1-1h4V2c0-.552.448-1 1-1h8zm4 6H4v12h16V7zm-7 2v3h3v2h-3.001L13 17h-2l-.001-3H8v-2h3V9h2zm2-6H9v2h6V3z" fill="rgba(22,36,71,1)" /></svg>
                <h1 style={{ textAlign: 'center', marginLeft: 10, fontSize: 25, }}>What should I do if I have COVID-19 symptoms and <br /> when should I seek medical care?</h1>
            </div>
            <div className="ill__detail">
                <img className="ill__img" src={ill} alt="" />
                <p><strong>If you have minor symptoms,</strong>  such as a slight cough or a mild fever, there is generally no need to seek medical care. Stay at home, self-isolate and monitor your symptoms. Follow national guidance on self-isolation.
<br /><br />
However, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever.  Seek medical help.  When you attend the health facility wear a mask if possible, keep at least 1 metre distance from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.

Seek immediate medical care if you have difficulty breathing or pain/pressure in the chest. If possible, call your health care provider in advance, so he/she can direct you to the right health facility.</p>
            </div>
            <div className="question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="rgba(22,36,71,1)" /></svg>
                <h1 >How does COVID-19 spread?</h1>
            </div>
            <div className="spread__detail">
                <img className="spread__img" src={spread} alt="" />
                <p style={{ marginLeft: 10 }}><strong style={{ marginLeft: 20 }}>People can catch COVID-19 from others who have the virus.</strong> The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks. These droplets are relatively heavy, do not travel far and quickly sink to the ground. People can catch COVID-19 if they breathe in these droplets from a person infected with the virus.  This is why it is important to stay at least 1 meter) away from others. These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.  People can become infected by touching these objects or surfaces, then touching their eyes, nose or mouth.  This is why it is important to wash your hands regularly with soap and water or clean with alcohol-based hand rub.

WHO is assessing ongoing research on the ways that COVID-19 is spread and will continue to share updated findings.    </p>
            </div>
            <div className="question">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 4H5v16h14V4h-5v9l-3.5-2L7 13V4z" fill="rgba(22,36,71,1)" /></svg>
                <h1 >Other Q&A on coronaviruses</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>

                <QA />
                <img src={plus} style={{ width: 400, }} alt="" />
            </div>
            <p style={{ margin: 15 }}>Source: <a target='_blank' rel="noopener noreferrer" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms">WHO</a></p>

        </section>
    )
}

export default Info

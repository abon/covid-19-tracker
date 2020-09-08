import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../QA/Q&A.css';


export default function SimpleAccordion() {
    return (
        <div className='accor'>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >Can COVID-19 be caught from a person who has no symptoms?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        <strong style={{ marginLeft: 10 }}>COVID-19 is mainly spread through respiratory droplets</strong>  expelled by someone who is coughing or has other symptoms such as fever or tiredness. Many people with COVID-19 experience only mild symptoms. This is particularly true in the early stages of the disease. It is possible to catch COVID-19 from someone who has just a mild cough and does not feel ill.
<br /><br />
                        Some reports have indicated that people with no symptoms can transmit the virus. It is not yet known how often it happens. WHO is assessing ongoing research on the topic and will continue to share updated findings.
<br /><br />
                        <a href="https://www.youtube.com/watch?v=677pSwGauqs">Video: Five things to know about COVID-19 transmission</a>
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >Are antibiotics effective in preventing or treating COVID-19?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        No. Antibiotics do not work against viruses; they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. In hospitals physicians will sometimes use antibiotics to prevent or treat secondary bacterial infections which can be a complication of COVID-19 in severely ill patients. They should only be used as directed by a physician to treat a bacterial infection.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >How long does the virus survive on surfaces?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        The most important thing to know about coronavirus on surfaces is that they can easily be cleaned with common household disinfectants that will kill the virus. Studies have shown that the COVID-19 virus can survive for up to 72 hours on plastic and stainless steel, less than 4 hours on copper and less than 24 hours on cardboard.
                    <br /><br />
As, always clean your hands with an alcohol-based hand rub or wash them with soap and water. Avoid touching your eyes, mouth, or nose.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >Can I catch COVID-19 from my pet or other animals?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Several dogs and cats (domestic cats and tigers) in contact with infected humans have tested positive for COVID-19. In addition, ferrets appear to be susceptible to the infection. In experimental conditions, both cats and ferrets were able to transmit infection to other animals of the same species. However, there is no evidence that these animals can transmit the disease to humans and spread COVID-19. COVID-19 is mainly spread through droplets produced when an infected person coughs, sneezes, or speaks.
                    <br /><br />
Minks raised in farms have also been detected with the virus. Most likely, they have been infected by farm workers. In a few instances, the minks that were infected by humans have transmitted the virus to other people. These are the first reported cases of animal-to-human transmission.
<br /><br />
It is still recommended that people who are sick with COVID-19 and people who are at risk limit contact with companion and other animals. When handling and caring for animals, basic hygiene measures should always be implemented. This includes hand washing after handling animals, their food or supplies, as well as avoiding kissing, licking or sharing food.
<br /><br />
More recommendations are available on the <a href=" https://www.oie.int/en/scientific-expertise/specific-information-and-recommendations/questions-and-answers-on-2019novel-coronavirus/">OIE website:</a>
                        <br /><br />
WHO continues to monitor the latest research on this and other COVID-19 topics and will update as new findings are available.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >Can children or adolescents catch COVID-19?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Research indicates that children and adolescents are just as likely to become infected as any other age group and can spread the disease.
<br /><br />
Evidence to date suggests that children and young adults are less likely to get severe disease, but severe cases can still happen in these age groups.

Children and adults should follow the same guidance on self-quarantine and self-isolation if there is a risk they have been exposed or are showing symptoms. It is particularly important that children avoid contact with older people and others who are at risk of more severe disease.
<br /><br />
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >How can we protect others and ourselves if we don't know who is infected?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        <strong >Practicing hand and respiratory hygiene</strong>  are important at ALL times and is the best way to protect others and yourself.
<br /><br />
When possible maintain at least a 1 meter distance between yourself and others. This is especially important if you are standing by someone who is coughing or sneezing.  Since some infected persons may not yet be exhibiting symptoms or their symptoms may be mild, maintaining a physical distance with everyone is a good idea if you are in an area where COVID-19 is circulating.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >What should I do if I have come in close contact with someone who has COVID-19?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        If you have been in close contact with someone with COVID-19, you may be infected.
<br /><br />
                        Close contact means that you live with or have been in settings of less than 1 metre from those who have the disease. In these cases, it is best to stay at home.
                        <br /><br />
                        However, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever. Seek medical help. When you attend the health facility wear a mask if possible, keep at least 1 metre distant from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.
                        <br /><br />
                        If you do not live in an area with malaria or dengue fever please do the following:
                        <ul>
                            <li>If you become ill, even with very mild symptoms you must self-isolate</li>
                            <li>Even if you don’t think you have been exposed to COVID-19 but develop symptoms, then self-isolate and monitor yourself</li>
                            <li>You are more likely to infect others in the early stages of the disease when you just have mild symptoms, therefore early self-isolation is very important.</li>
                            <li>If you do not have symptoms, but have been exposed to an infected person, self-quarantine for 14 days.</li>
                        </ul>
                        <br />
                        If you have definitely had COVID-19 (confirmed by a test) self-isolate for 14 days even after symptoms have disappeared as a precautionary measure – it is not yet known exactly how long people remain infectious after they have recovered. Follow national advice on self-isolation.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >What does it mean to self-isolate?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Self-isolation is an important measure taken by those who have COVID-19 symptoms to avoid infecting others in the community, including family members.
<br /><br />
Self-isolation is when a person who is experiencing fever, cough or other COVID-19 symptoms stays at home and does not go to work, school or public places. This can be voluntarily or based on his/her health care provider’s recommendation. However, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever. Seek medical help. When you attend the health facility wear a mask if possible, keep at least 1 metre distant from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.
                        <br /><br />
                        -  If a person is in self-isolation, it is because he/she is ill but not severely ill (requiring medical attention)
<br />
                        <ul>
                            <li>have a large, well-ventilated with hand-hygiene and toilet facilities</li>
                            <li>If this is not possible, place beds at least 1 metre apart</li>
                            <li>Keep at least 1 metre from others, even from your family members</li>
                            <li>Monitor your symptoms daily</li>
                            <li>Stay positive and energized by keeping in touch with loved ones by phone or online, and by exercising yourself at home.</li>
                            <li>Isolate for 14 days, even if you feel healthy</li>
                            <li>If you develop difficulty breathing, contact your healthcare provider immediately – call them first if possible</li>
                        </ul>
                        <br />
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4 >How to properly wear a medical mask?</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        If you choose to wear a mask:
<br /><br />


                        <ul>
                            <li>Before touching the mask, clean hands with an alcohol-based hand rub or soap and water</li>
                            <li>Take the mask and inspect it for tears or holes.</li>
                            <li>Orient which side is the top side (where the metal strip is).</li>
                            <li>Ensure the proper side of the mask faces outwards (the coloured side).</li>
                            <li>Place the mask to your face. Pinch the metal strip or stiff edge of the mask so it moulds to the shape of your nose.</li>
                            <li>Pull down the mask’s bottom so it covers your mouth and your chin.</li>
                            <li>After use, take off the mask with clean hands; remove the elastic loops from behind the ears while keeping the mask away from your face and clothes, to avoid touching potentially contaminated surfaces of the mask.</li>
                            <li>Discard the mask in a closed bin immediately after use. Do not reuse the mask.</li>
                            <li>Perform hand hygiene after touching or discarding the mask – Use alcohol-based hand rub or, if visibly soiled, wash your hands with soap and water.</li>
                        </ul>
                        Be aware that there is a global shortage of medical masks (both surgical masks and N95 masks). These should be reserved as much as possible for health care workers.
                        <br /><br />
                        Remember that  masks are not a substitute for other, more effective ways to protect yourself and others against COVID-19 such as frequently washing your hands, covering your cough with the bend of elbow or tissue and maintain a distance of at least 1 meter from others. See <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"> basic protective measures against the new coronavirus for more information.</a>
                        <br /><br />
                        Follow the advice of your national health authority on the use of masks.
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

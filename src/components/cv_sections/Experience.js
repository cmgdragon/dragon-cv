import React, { useEffect } from 'react';
import * as dragonText from '../../translations/cv_Sections/Experience.json';
import { showBubble } from '../speech_bubble/ShowBubble';

const Experience = ({expanded, lang, setDragonText}) => {

    useEffect(() => scrollItem(), [])

    useEffect(() => {

        if (!expanded) return;

        document.querySelector('.experience-section').classList.add('show');

    }, [expanded]);

    const scrollItem = () => {
        document.querySelectorAll('.experience').forEach(element => {
            const top = element.getBoundingClientRect().y;
            const elementTop = Math.round((top * 100) / window.innerHeight);

            if (elementTop >= 20 && elementTop <= 50) {
                element.querySelector('.experience-tasks').classList.add('expanded');
                element.style.opacity = 1;
                element.style.pointerEvents = 'all';
                element.classList.add('selected');
            } else {
                element.querySelector('.experience-tasks').classList.remove('expanded');
                element.querySelector('.experience__img').blur();
                element.classList.remove('selected');
                element.style.pointerEvents = 'none';
                if (elementTop < 40) {
                    element.style.opacity = elementTop*0.05;
                    element.querySelector('.experience__img').blur();
                } else {
                    element.style.opacity = (100-elementTop)*0.02;
                }
            }
        });
    }

    const expandTaskTech = ({target}) => {
        target.parentElement.classList.toggle('expanded');
    }

    const dragonTextHandler = text => {
        showBubble(text, setDragonText, true);
    }


    return (
        <div className="cv-section experience-section">
            <div id="experience-bar" onScroll={scrollItem}>

                
                <div className="experience">
                    <div className="experience__box">
                        <img className="experience__img"
                            tabIndex={0}
                            onClick={() => dragonTextHandler(dragonText.job1.dragon)}
                            data-clickable
                            src="/images/cv_sections/experience/upf.png"
                        />
                        <div className="experience__work">
                            <div className="experience__info">
                                <div className="experience__name">{dragonText.job1.name[lang]}</div>
                                <div className="experience__place">{dragonText.job1.place[lang]}</div>
                            </div>
                            <div className="experience-tasks">
                                {
                                    Object.values(dragonText.job1.tasks).map((task, i) => {
                                        const hasTech = task[lang].tech.length === 0 ? false : true;
                                        return (
                                            <div key={i} className="experience-tasks__task" 
                                                onClick={expandTaskTech}
                                                style={{ cursor: hasTech ? 'pointer' : 'default' }}
                                            >
                                                <div className="experience-tasks__task-box">
                                                    <span className="experience-tasks__task-name">
                                                        {task[lang].name}
                                                    </span>
                                                    <span 
                                                        className={`experience-tasks__task-expand ${hasTech ? 'visible' : ''}`}>
                                                    +</span>
                                                </div>
                                                { !hasTech ? undefined : 
                                                        <div className="experience-tasks__tech">
                                                            {
                                                                task[lang].tech.map((tech, i) => 
                                                                    <div key={`tech${i}`} className="experience-tasks__tech-item">
                                                                        { tech }
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="experience__timeline">
                        <div className="experience__year">{dragonText.job1.year}</div>
                    </div>
                </div>


                <div className="experience">
                    <div className="experience__box">
                    <img className="experience__img"
                            tabIndex={0}
                            onClick={() => dragonTextHandler(dragonText.job2.dragon)}
                            data-clickable
                            src="/images/cv_sections/experience/upf.png"
                        />
                        <div className="experience__work">
                            <div className="experience__info">
                                <div className="experience__name">{dragonText.job2.name[lang]}</div>
                                <div className="experience__place">{dragonText.job2.place[lang]}</div>
                            </div>
                            <div className="experience-tasks">
                                {
                                    Object.values(dragonText.job2.tasks).map((task, i) => {
                                        const hasTech = task[lang].tech.length === 0 ? false : true;
                                        return (
                                            <div key={i} className="experience-tasks__task" 
                                                onClick={expandTaskTech}
                                                style={{ cursor: hasTech ? 'pointer' : 'default' }}
                                            >
                                                <div className="experience-tasks__task-box">
                                                    <span className="experience-tasks__task-name">
                                                        {task[lang].name}
                                                    </span>
                                                    <span 
                                                        className={`experience-tasks__task-expand ${hasTech ? 'visible' : ''}`}>
                                                    +</span>
                                                </div>
                                                { !hasTech ? undefined : 
                                                        <div className="experience-tasks__tech">
                                                            {
                                                                task[lang].tech.map((tech, i) => 
                                                                    <div key={`tech${i}`} className="experience-tasks__tech-item">
                                                                        { tech }
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="experience__timeline">
                        <div className="experience__year">{dragonText.job2.year}</div>
                    </div>
                </div>


                <div className="experience">
                    <div className="experience__box">
                    <img className="experience__img"
                        tabIndex={0}
                        onClick={() => dragonTextHandler(dragonText.job3.dragon)}
                        data-clickable
                        src="/images/cv_sections/experience/upf.png"
                    />
                        <div className="experience__work">
                            <div className="experience__info">
                                <div className="experience__name">{dragonText.job3.name[lang]}</div>
                                <div className="experience__place">{dragonText.job3.place[lang]}</div>
                            </div>
                            <div className="experience-tasks">
                                {
                                    Object.values(dragonText.job3.tasks).map((task, i) => {
                                        const hasTech = task[lang].tech.length === 0 ? false : true;
                                        return (
                                            <div key={i} className="experience-tasks__task" 
                                                onClick={expandTaskTech}
                                                style={{ cursor: hasTech ? 'pointer' : 'default' }}
                                            >
                                                <div className="experience-tasks__task-box">
                                                    <span className="experience-tasks__task-name">
                                                        {task[lang].name}
                                                    </span>
                                                    <span 
                                                        className={`experience-tasks__task-expand ${hasTech ? 'visible' : ''}`}>
                                                    +</span>
                                                </div>
                                                { !hasTech ? undefined : 
                                                        <div className="experience-tasks__tech">
                                                            {
                                                                task[lang].tech.map((tech, i) => 
                                                                    <div key={`tech${i}`} className="experience-tasks__tech-item">
                                                                        { tech }
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="experience__timeline">
                        <div className="experience__year">{dragonText.job3.year}</div>
                    </div>
                </div>


                <div className="experience">
                    <div className="experience__box">
                    <img className="experience__img"
                            tabIndex={0}
                            onClick={() => dragonTextHandler(dragonText.job4.dragon)}
                            data-clickable
                            src="/images/cv_sections/experience/ub.png"
                        />
                        <div className="experience__work">
                            <div className="experience__info">
                                <div className="experience__name">{dragonText.job4.name[lang]}</div>
                                <div className="experience__place">{dragonText.job4.place[lang]}</div>
                            </div>
                            <div className="experience-tasks">
                                {
                                    Object.values(dragonText.job4.tasks).map((task, i) => {
                                        const hasTech = task[lang].tech.length === 0 ? false : true;
                                        return (
                                            <div key={i} className="experience-tasks__task" 
                                                onClick={expandTaskTech}
                                                style={{ cursor: hasTech ? 'pointer' : 'default' }}
                                            >
                                                <div className="experience-tasks__task-box">
                                                    <span className="experience-tasks__task-name">
                                                        {task[lang].name}
                                                    </span>
                                                    <span 
                                                        className={`experience-tasks__task-expand ${hasTech ? 'visible' : ''}`}>
                                                    +</span>
                                                </div>
                                                { !hasTech ? undefined : 
                                                        <div className="experience-tasks__tech">
                                                            {
                                                                task[lang].tech.map((tech, i) => 
                                                                    <div key={`tech${i}`} className="experience-tasks__tech-item">
                                                                        { tech }
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="experience__timeline">
                        <div className="experience__year">{dragonText.job4.year}</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Experience;
import React, { useEffect, useState } from 'react';
import * as dragonText from '../../translations/cv_Sections/Experience.json';
import { showBubble } from '../speech_bubble/ShowBubble';
import { hideBubble } from '../speech_bubble/hideBubble';

const Experience = ({lang, setDragonText}) => {

    const [barTranslate, setBarTranslate] = useState(0);
    const [selectedItem, setSelectedItem] = useState(0);
    const separation = 150;
    useEffect(() => scrollItem(), [])

    useEffect(() =>{
       /* document.getElementById('experience').addEventListener('wheel', scrollItem);
        //changeItem();
        return () => document.getElementById('experience').removeEventListener('wheel', scrollItem);*/
    }, [selectedItem]);

    /*const getItemsHeight = () => 
         [...document.getElementsByClassName("experience")]
                        .map(item => (item.offsetHeight * 100) / window.innerHeight)*/

    const getItemsHeight = () => 
         [...document.getElementsByClassName("experience")]
                        .map(item => item.offsetHeight)

    const changeItem = () => {
        const itemHeight = getItemsHeight()[selectedItem];
        //const separationInPx = window.innerHeight * +`0.${separation}`;

        const getRemainderHeight = number =>
            getItemsHeight().splice(-getItemsHeight().length, number)
            .reduce((prev, curr) => curr + prev);

        switch (selectedItem) {
            case 0:
                setBarTranslate(separation + itemHeight);
                break;
            case 1:
                setBarTranslate(0);
                break;
            default:
                setBarTranslate(-(separation * selectedItem) - (itemHeight*(selectedItem-2) ));
        }
    }

    const expandTasks = element => {
        element.querySelectorAll('.experience-tasks').classList.add('expanded');
    }

    const unExpandTasks = element => {
        element.querySelectorAll('.experience-tasks__task').forEach(task => {
            task.classList.remove('expanded');
        });
    }

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

        /*if ((selectedItem === 0) )
        return;*/
        
        /*if (Math.sign(deltaY) === -1 && selectedItem !== 0) {
            setSelectedItem(selectedItem-1);
        } else if (Math.sign(deltaY) === 1 && selectedItem !== getItemsHeight().length -1) {
            setSelectedItem(selectedItem+1);
        }
        console.log(Math.sign(deltaY), selectedItem)
        changeItem();*/
    }

    const expandTaskTech = ({target}) => {
        target.parentElement.classList.toggle('expanded');
    }

    const dragonTextHandler = text => {
        showBubble(text, setDragonText, true);
    }

    const experienceStyle = {
        //transform: `translateY(${barTranslate}px)`,
        //margin: `20vh 0`
    }

    const style = { 
        //transform: `translateY(${barTranslate}px`
    }

    return (
        <div className="cv-section experience-section">
            <div style={style} id="experience-bar" onScroll={scrollItem}>

                
                <div style={experienceStyle} className="experience">
                    <div className="experience__box">
                        <img className="experience__img"
                            tabIndex={0}
                            onClick={() => dragonTextHandler(dragonText.job1.dragon)}
                            data-clickable
                            src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png"
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


                <div style={experienceStyle} className="experience">
                    <div className="experience__box">
                    <img className="experience__img"
                            tabIndex={0}
                            onClick={() => dragonTextHandler(dragonText.job2.dragon)}
                            data-clickable
                            src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png"
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


                <div style={experienceStyle} className="experience">
                    <div className="experience__box">
                    <img className="experience__img"
                        tabIndex={0}
                        onClick={() => dragonTextHandler(dragonText.job3.dragon)}
                        data-clickable
                        src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png"
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


                <div style={experienceStyle} className="experience">
                    <div className="experience__box">
                    <img className="experience__img"
                            tabIndex={0}
                            onClick={() => dragonTextHandler(dragonText.job4.dragon)}
                            data-clickable
                            src="http://127.0.0.1:8081/images/cv_sections/experience/ub.png"
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
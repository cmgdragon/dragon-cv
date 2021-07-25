import React, { useEffect, useState } from 'react';

const Experience = () => {

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
                element.classList.add('selected');
            } else {
                element.querySelector('.experience-tasks').classList.remove('expanded');
                element.classList.remove('selected');
                if (elementTop < 40) {
                    element.style.opacity = elementTop*0.05;
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
                    <img className="experience__img" src="http://127.0.0.1:8081/images/cv_sections/experience/ub.png" />
                    <div className="experience__work">
                        <div className="experience__info">
                            <div className="experience__year">1996</div>
                            <div className="experience__name">Test</div>
                        </div>
                    <div className="experience-tasks">
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                    </div>
                    </div>
                </div>
                <div style={experienceStyle} className="experience">
                    <img className="experience__img" src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png" />
                    <div className="experience__work">
                        <div className="experience__info">
                            <div className="experience__year">1996</div>
                            <div className="experience__name">Test</div>
                        </div>
                    <div className="experience-tasks">
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                    </div>
                    </div>
                </div>
                <div style={experienceStyle} className="experience">
                    <img className="experience__img" src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png" />
                    <div className="experience__work">
                        <div className="experience__info">
                            <div className="experience__year">1996</div>
                            <div className="experience__name">Test</div>
                        </div>
                    <div className="experience-tasks">
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                    </div>
                    </div>
                </div>
                <div style={experienceStyle} className="experience">
                    <img className="experience__img" src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png" />
                    <div className="experience__work">
                        <div className="experience__info">
                            <div className="experience__year">1996</div>
                            <div className="experience__name">Test</div>
                        </div>
                    <div className="experience-tasks">
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                    </div>
                    </div>
                </div>
                <div style={experienceStyle} className="experience">
                    <img className="experience__img" src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png" />
                    <div className="experience__work">
                        <div className="experience__info">
                            <div className="experience__year">1996</div>
                            <div className="experience__name">Test</div>
                        </div>
                    <div className="experience-tasks">
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                    </div>
                    </div>
                </div>
                <div style={experienceStyle} className="experience">
                    <img className="experience__img" src="http://127.0.0.1:8081/images/cv_sections/experience/upf.png" />
                    <div className="experience__work">
                        <div className="experience__info">
                            <div className="experience__year">1996</div>
                            <div className="experience__name">Test</div>
                        </div>
                    <div className="experience-tasks">
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                        <div className="experience-tasks__task">Task1</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
import React, { useEffect, useState } from 'react';
import './Projectstyle.css';
const Product = require('./Product.json');

const Project = () => {
    const colorArray = [
        "#000080", // Navy Blue
        "#006400", // Dark Green
        "#8B0000", // Deep Red
        "#4169E1", // Royal Blue
        "#4B0082", // Dark Purplea
        "#008080", // Teal
        "#800000", // Maroon
        "#008B8B", // Dark Cyan
        "#8B4513"  // Chocolate
    ]
    const [locations, setlocations] = useState([-10, 280, 610, 1040, 1370]);
    const [positions, setPositions]=useState([1,2,3,4,5])

    const [position1, setPosition1] = useState(1);
    const [position2, setPosition2] = useState(2);
    const [position3, setPosition3] = useState(3);
    const [position4, setPosition4] = useState(4);
    const [position5, setPosition5] = useState(5);
    const clickHandler = (btnNum) => {
        const buttons = document.querySelectorAll("#options button");
        buttons.forEach((button) => button.classList.remove("active"));
        buttons[btnNum - 1].classList.add("active");

    }
    const cardClickHandler = (btnNum) => {
        const cards = document.querySelectorAll(".card");

        if (btnNum === 2) {
            let templocations = [...locations];
            let firstValue = templocations[0];

            for (let i = 0; i < templocations.length - 1; i++) {
                templocations[i] = templocations[i + 1];
            }
            templocations[templocations.length - 1] = firstValue;

            setlocations(templocations);
            cards.forEach((card) => card.className = "")
            setPosition1((prev) => {
                const newPosition = prev < 5 ? prev + 1 : 1;
                cards[0].classList.add("card", "card-" + newPosition);
                cards[0].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition2((prev) => {
                const newPosition = prev < 5 ? prev + 1 : 1;
                cards[1].classList.add("card", "card-" + newPosition);
                cards[1].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition3((prev) => {
                const newPosition = prev < 5 ? prev + 1 : 1;
                cards[2].classList.add("card", "card-" + newPosition);
                cards[2].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition4((prev) => {
                const newPosition = prev < 5 ? prev + 1 : 1;
                cards[3].classList.add("card", "card-" + newPosition);
                cards[3].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition5((prev) => {
                const newPosition = prev < 5 ? prev + 1 : 1;
                cards[4].classList.add("card", "card-" + newPosition);
                cards[4].style.zIndex = newPosition;
                return newPosition;
            });


        } else if (btnNum === 4) {
            let templocations = [...locations];
            let lastValue = templocations[templocations.length - 1];
            for (let i = templocations.length - 1; i > 0; i--) {
                templocations[i] = templocations[i - 1];
            }
            templocations[0] = lastValue;
            setlocations(templocations);

            cards.forEach((card) => card.className = "")
            setPosition1((prev) => {
                const newPosition = prev > 1 ? prev - 1 : 5;
                cards[0].classList.add("card", "card-" + newPosition);
                cards[0].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition2((prev) => {
                const newPosition = prev > 1 ? prev - 1 : 5;
                cards[1].classList.add("card", "card-" + newPosition);
                cards[1].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition3((prev) => {
                const newPosition = prev > 1 ? prev - 1 : 5;
                cards[2].classList.add("card", "card-" + newPosition);
                cards[2].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition4((prev) => {
                const newPosition = prev > 1 ? prev - 1 : 5;
                cards[3].classList.add("card", "card-" + newPosition);
                cards[3].style.zIndex = newPosition;
                return newPosition;
            });
            setPosition5((prev) => {
                const newPosition = prev > 1 ? prev - 1 : 5;
                cards[4].classList.add("card", "card-" + newPosition);
                cards[4].style.zIndex = newPosition;
                return newPosition;
            });
        }

    }

    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        cards[0].style.left = locations[0] + "px";
        cards[1].style.left = locations[1] + "px";
        cards[2].style.left = locations[2] + "px";
        cards[3].style.left = locations[3] + "px";
        cards[4].style.left = locations[4] + "px";

        // coloring language
        const lang = document.querySelectorAll("#p-res p");
        let j = 0;
        for (let i = 0; i < lang.length; i++) {
            lang[i].style.backgroundColor = colorArray[j];
            if (j % 8 === 0) {
                j = 0;
            }
            j++;
        }
    }, [locations])

    // creating div from Product.js
    //     const divs = [];
    //     for (let i = 0; i < 5; i++) {
    //     divs.push(
    //         <div className={`card card-${i}`} onClick={() => cardClickHandler(position1)}>
    //         <iframe src="https://www.youtube.com/embed/7d8Vube4rd0?si=tnfgPoFq4nEIXNT6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <h1 id="p-title">Personal Portfolio</h1>
    //         <div id="p-stack">
    //             <div id="line-left"></div>
    //             <p>Tech Stack</p>
    //             <div id="line-right"></div>
    //         </div>

    //         <div id="p-res">
    //             <p>HTML</p>
    //             <p>CSS</p>
    //             <p>JavaScript</p>
    //         </div>
    //         <div id="p-detail">
    //             🚀 A responsive portfolio website featuring my projects, skills, and experience. Built with a clean UI, smooth animations, and interactive elements.
    //         </div>
    //         <button id="b-detail">Detail →</button>
    //     </div>
    //     );
    //   }

    // console.log(Product)
    return (
        <div id="project-section">
            <p id="title">Project</p>
            <div id="options">
                <button className="button active" onClick={() => clickHandler(1)}>All</button>
                <button className="button" onClick={() => clickHandler(2)}>JavaScript</button>
                <button className="button" onClick={() => clickHandler(3)}>Database</button>
                <button className="button" onClick={() => clickHandler(4)}>Blender</button>
                <button className="button" onClick={() => clickHandler(5)}>Java</button>
            </div>
            <div id="project-card">
                <div className="card card-1" onClick={() => cardClickHandler(position1)}>
                    <iframe src="https://www.youtube.com/embed/7d8Vube4rd0?si=tnfgPoFq4nEIXNT6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h1 id="p-title">Personal Portfolio</h1>
                    <div id="p-stack">
                        <div id="line-left"></div>
                        <p>Tech Stack</p>
                        <div id="line-right"></div>
                    </div>

                    <div id="p-res">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div id="p-detail">
                        🚀 A responsive portfolio website featuring my projects, skills, and experience. Built with a clean UI, smooth animations, and interactive elements.
                    </div>
                    <button id="b-detail">Detail →</button>
                </div>
                <div className="card card-2" onClick={() => cardClickHandler(position2)}>
                    <iframe src="https://www.youtube.com/embed/7d8Vube4rd0?si=tnfgPoFq4nEIXNT6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h1 id="p-title">Personal Portfolio</h1>
                    <div id="p-stack">
                        <div id="line-left"></div>
                        <p>Tech Stack</p>
                        <div id="line-right"></div>
                    </div>

                    <div id="p-res">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div id="p-detail">
                        🚀 A responsive portfolio website featuring my projects, skills, and experience. Built with a clean UI, smooth animations, and interactive elements.
                    </div>
                    <button id="b-detail">Detail →</button>
                </div>
                <div className="card card-3" onClick={() => cardClickHandler(position3)}>
                    <iframe src="https://www.youtube.com/embed/7d8Vube4rd0?si=tnfgPoFq4nEIXNT6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h1 id="p-title">Personal Portfolio</h1>
                    <div id="p-stack">
                        <div id="line-left"></div>
                        <p>Tech Stack</p>
                        <div id="line-right"></div>
                    </div>

                    <div id="p-res">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div id="p-detail">
                        🚀 A responsive portfolio website featuring my projects, skills, and experience. Built with a clean UI, smooth animations, and interactive elements.
                    </div>
                    <button id="b-detail">Detail →</button>

                </div>
                <div className="card card-4" onClick={() => cardClickHandler(position4)}>
                    <iframe src="https://www.youtube.com/embed/7d8Vube4rd0?si=tnfgPoFq4nEIXNT6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h1 id="p-title">Personal Portfolio</h1>
                    <div id="p-stack">
                        <div id="line-left"></div>
                        <p>Tech Stack</p>
                        <div id="line-right"></div>
                    </div>

                    <div id="p-res">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div id="p-detail">
                        🚀 A responsive portfolio website featuring my projects, skills, and experience. Built with a clean UI, smooth animations, and interactive elements.
                    </div>
                    <button id="b-detail">Detail →</button>
                </div>
                <div className="card card-5" onClick={() => cardClickHandler(position5)}>
                    <iframe src="https://www.youtube.com/embed/7d8Vube4rd0?si=tnfgPoFq4nEIXNT6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h1 id="p-title">Personal Portfolio</h1>
                    <div id="p-stack">
                        <div id="line-left"></div>
                        <p>Tech Stack</p>
                        <div id="line-right"></div>
                    </div>

                    <div id="p-res">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div id="p-detail">
                        🚀 A responsive portfolio website featuring my projects, skills, and experience. Built with a clean UI, smooth animations, and interactive elements.
                    </div>
                    <button id="b-detail">Detail →</button>
                </div>
            </div>
        </div>
    )
}
export { Project };
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

    let screenWidth = window.screen.width;
    const padding = screenWidth * 4 / 100;

    const [locations, setlocations] = useState([]);
    const [positions, setPositions] = useState([])
    const [Project, setProject] = useState(Product)


    const clickHandler = (btnNum) => {
        const types = ["All", "Javascript", "Database", "FCC", "Others"];
        const fLocation = [((screenWidth / 2) - 185) - 500 - (padding * 2), ((screenWidth / 2) - 185) - 270 - padding, ((screenWidth / 2) - 185), ((screenWidth / 2) - 185) + 370 + padding, ((screenWidth / 2) - 185) + 640 + (padding * 2)]
        let totalData = 0;
        let positionArray = [];
        let locationArray = []
        const buttons = document.querySelectorAll("#options button");
        buttons.forEach((button) => button.classList.remove("active"));
        buttons[btnNum - 1].classList.add("active");
        if (btnNum == 1) {
            setProject(Product)
            if (Product.length == 1) {
                locationArray.push((screenWidth / 2) - 185);
                positionArray.push(3);
            } else if (Product.length == 2) {
                positionArray.push(2, 3)
                locationArray.push((screenWidth / 2) - 185 - padding - 270, (screenWidth / 2) - 185);
            } else if (Product.length <= 5) {
                for (let i = 0; i < Product.length; i++) {
                    positionArray.push(i + 1);
                    locationArray.push(fLocation[i]);
                }
            } else {
                for (let i = 0; i < 5; i++) {
                    positionArray.push(i + 1);
                    locationArray.push(fLocation[i]);
                }
                for (let i = 0; i < Product.length - 5; i++) {
                    positionArray.push(i + 5);
                    locationArray.push((((screenWidth / 2) - 185) + 640 + (padding * 3 + 1) + (230 * (i + 1))));
                }
            }
        } else {
            let Matched = [];
            for (let i = 0; i < Product.length; i++) {
                if (Product[i].type == types[btnNum - 1]) {
                    Matched.push(Product[i])
                }
            }
            setProject(Matched);
            if (Matched.length == 1) {
                locationArray.push((screenWidth / 2) - 185);
                positionArray.push(3);
            } else if (Matched.length == 2) {
                positionArray.push(2, 3)
                locationArray.push((screenWidth / 2) - 185 - padding - 270, (screenWidth / 2) - 185);
            } else if (Matched.length <= 5) {
                for (let i = 0; i < Matched.length; i++) {
                    positionArray.push(i + 1);
                    locationArray.push(fLocation[i]);
                }
            } else {
                for (let i = 0; i < 5; i++) {
                    positionArray.push(i + 1);
                    locationArray.push(fLocation[i]);
                }
                for (let i = 0; i < Matched.length - 5; i++) {
                    positionArray.push(i + 5);
                    locationArray.push((((screenWidth / 2) - 185) + 640 + (padding * 3 + 1) + (230 * (i + 1))));
                }
            }
        }
        setlocations(locationArray);
        setPositions(positionArray);
    }
    useEffect(() => {
        clickHandler(1)
    }, [])
    const cardClickHandler = (btnNum) => {
        const cards = document.querySelectorAll(".card");
        if (btnNum === 2) {
            cards.forEach((card) => card.className = "")
            let templocations = [locations.slice(), positions.slice()]; // Deep copy

            let firstValue = [templocations[0][0], templocations[1][0]]; // Store first values

            for (let i = 0; i < templocations[0].length - 1; i++) {
                templocations[0][i] = templocations[0][i + 1];
                templocations[1][i] = templocations[1][i + 1];

                cards[i].classList.add("card", "card-" + templocations[1][i]);

                if (templocations[1][i] == 3) {
                    cards[i].style.zIndex = 22;
                } else {
                    cards[i].style.zIndex = templocations[1][i];
                }

                if (i === templocations[0].length - 2) {
                    cards[i + 1].classList.add("card", "card-" + (firstValue[1]));
                    cards[i + 1].style.zIndex = (firstValue[1]);
                }
            }

            templocations[0][templocations[0].length - 1] = firstValue[0];
            templocations[1][templocations[1].length - 1] = firstValue[1];

            setlocations([...templocations[0]]);
            setPositions([...templocations[1]]);

        } else if (btnNum === 4) {
            cards.forEach((card) => card.className = "")

            let templocations = [locations.slice(), positions.slice()]; // Deep copy

            let lastValue = [templocations[0].at(-1), templocations[1].at(-1)]; // Get last values

            for (let i = templocations[0].length - 1; i > 0; i--) {
                templocations[0][i] = templocations[0][i - 1];
                templocations[1][i] = templocations[1][i - 1];

                cards[i].classList.add("card", "card-" + templocations[1][i]);
                if (templocations[1][i] == 3) {
                    cards[i].style.zIndex = 22;
                } else {
                    cards[i].style.zIndex = templocations[1][i];
                }
            }

            templocations[0][0] = lastValue[0];
            templocations[1][0] = lastValue[1];
            cards[0].classList.add("card", "card-" + lastValue[1]);
            cards[0].style.zIndex = lastValue[1];

            setlocations([...templocations[0]]);
            setPositions([...templocations[1]]);
        }

    }

    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card, index) => {
            card.style.left = locations[index] + "px";
        });


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

    // Createing project cards
    const divs = [];
    for (let i = 0; i < positions.length; i++) {
        divs.push(
            <div className={`card card-${positions[i]}`} onClick={() => cardClickHandler(positions[i])}>
                <iframe src={Project[i].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h1 id="p-title">{Project[i].name}</h1>
                <div id="p-stack">
                    <div id="line-left"></div>
                    <p>Tech Stack</p>
                    <div id="line-right"></div>
                </div>

                <div id="p-res">
                    {[...Array(Project[i].language.length)].map((_, j) => (
                        <p>{Project[i].language[j]}</p>
                    ))}
                </div>
                <div id="p-detail">
                    {Project[i].description}
                </div>
                <button id="b-detail">Detail →</button>
            </div>
        );
    }
    return (
        <div id="project-section">
            <p id="title">Project</p>
            <div id="options">
                <button className="button active" onClick={() => clickHandler(1)}>All</button>
                <button className="button" onClick={() => clickHandler(2)}>JavaScript</button>
                <button className="button" onClick={() => clickHandler(3)}>Database</button>
                <button className="button" onClick={() => clickHandler(4)}>FreeCodeCamp</button>
                <button className="button" onClick={() => clickHandler(5)}>Others</button>
            </div>
            <div id="project-card">
                {divs}
            </div>
        </div>
    )
}
export { Project };
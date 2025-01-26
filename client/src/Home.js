import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
import './HomeStyle.css';

const Homepage = ()=>{
    const i_3_2_Array = [
        "Web...   ",
        "Front End...   ",
        "Back End...   ",
        "Full Stack...   ",
        "UI/UX...   ",
        "Software...   "
    ]
    const [ i_3_2, set_i_3_2] = useState(i_3_2_Array[0])

        useEffect(() => {
            function randomNumberGenerator(){
                const number = Math.floor(Math.random() * i_3_2_Array.length);
                let C_String = i_3_2_Array[number].split("");
                let a=0;
                let new_String;
            const intervalId = setInterval(() => {
                new_String=new_String?new_String+C_String[a]:C_String[a];
                a++;
                if(a>=i_3_2_Array[number].length){
                    set_i_3_2(new_String);
                    clearInterval(intervalId);
                    randomNumberGenerator();
                }
                set_i_3_2(new_String);    
            }, 300);
        }
        randomNumberGenerator();
    
        }, [])

    return(
        <div id="home-section">
             <div id="logo">
                <div id="l-top">RUPESH</div>
                <div id="l-bottom">&lt;INFO/&gt;</div>
             </div>
             <div id="main_info">
                <div id="i_1">Hi, Welcome</div>
                <div id="i_2">I,m Rupesh Singh</div>
                <div id="i_3">
                    <div id="i_3_1">a</div>
                    <div id="i_3_2">{i_3_2}</div>
                </div>
                <div id="i_4">Developer</div>
                <div id="i_5">
                    <button id="contact">CONTACT</button>
                </div>
             </div>
        </div>
    );
}
export { Homepage };
import Picture from "../config.json";
import React, { useState } from 'react';

const Abs = () => {

    let pic = Picture.map(data => data.icon)

    const [hidden5, showepigastriumactive] = useState(false);
    const [hidden6, showepigastriumhighlight] = useState(false);
    const [hidden7, showllqactive] = useState(false);
    const [hidden8, showllqhighlight] = useState(false);
    const [hidden9, showluqactive] = useState(false);
    const [hidden10, showluqhighlight] = useState(false);
    const [hidden16, showrlqactive] = useState(false);
    const [hidden17, showrlqhighlight] = useState(false);
    const [hidden18, showeruqactive] = useState(false);
    const [hidden19, showruqhighlight] = useState(false);
    const [hidden20, showsuprapubicactive] = useState(false);
    const [hidden21, showsuprapubichighlight] = useState(false);
    const [hidden22, showumbilicusactive] = useState(false);
    const [hidden23, showumbilicushighlight] = useState(false);
    const [hidden0, showalloverhighlight] = useState(false);

    return (
        <div className="relative">
            <div className="p-5 flex flex-col">
                <p className="text-2xl font-bold text-center">
                    ปวดท้องที่บริเวณใดมากที่สุด ?
                </p>
            </div>
            
            <img id="defaultabs" src={pic[1]} className="h-[35rem]"></img>

            {hidden5 && (
                <img id="epigastriumactive" src={pic[5]}
                    className="absolute bottom-0">
                </img>
            )}
            {hidden6 && (
                <img id="epigastriumhighlight" src={pic[6]}
                    className="absolute bottom-0">
                </img>
            )}
            {hidden7 && (
                    <img id="llqactive" src={pic[7]}
                        className="absolute bottom-0 ">
                    </img>
            )}
            {hidden8 && (
                <img id="llqhighlight" src={pic[8]}
                    className="absolute bottom-0">
                </img>
            )}
            {hidden9 && ( 
                <img id="luqactive" src={pic[9]}
                    className="absolute bottom-0">
                </img>
            )}
            {hidden10 && (        
                <img id="luqhighlight" src={pic[10]}
                    className="absolute bottom-0">
                </img>
            )}
            {hidden16 && ( 
            <img id="rlqactive" src={pic[16]}
                className="absolute bottom-0">
            </img>
            )}
            {hidden17 && ( 
            <img id="rlqhighlight" src={pic[17]}
                className="absolute bottom-0">
            </img>
            )}
            {hidden18 && ( 
            <img id="ruqactive" src={pic[18]}
                className="absolute bottom-0">
            </img>
            )}
            {hidden19 && ( 
            <img id="ruqhighlight" src={pic[19]}
                className="absolute bottom-0">
            </img>
            )}
            {hidden20 && (  
            <img id="suprapubicactive" src={pic[20]}
                className="absolute bottom-0">
            </img>
            )}     
            {hidden21 && (    
            <img id="suprapubichighlight" src={pic[21]}
                className="absolute bottom-0">
            </img>
            )}
            {hidden22 && (
            <img id="umbilicusactive" src={pic[22]}
                className="absolute bottom-0">
            </img>
            )}
            {hidden23 && (
            <img id="umbilicushighlight" src={pic[23]}
                className="absolute bottom-0">
            </img>
            )}
            {hidden0 && (
            <img id="alloverhighlight" src={pic[0]}
                className="absolute bottom-0">
            </img>
            )}
            
            <button
                id="btn1"
                onClick={() => {showepigastriumactive(!hidden5); showepigastriumhighlight(!hidden6)}}
                className="h-14 w-11 absolute top-[17rem] left-[13rem]"
            ></button>
            <button
                id="btn2"
                onClick={() => {showluqactive(!hidden9); showluqhighlight(!hidden10)}}
                className="h-14 w-11 absolute top-[19rem] left-[16rem]"
            ></button>
            <button
                id="btn3"
                onClick={() => {showllqactive(!hidden7); showllqhighlight(!hidden8)}}
                className="h-14 w-11 absolute top-[23rem] left-[16rem]"
            ></button>
            <button
                id="btn4"
                onClick={() => {showsuprapubicactive(!hidden20); showsuprapubichighlight(!hidden21)}}
                className="h-14 w-11 absolute top-[25rem] left-[13rem]"
            ></button>
            <button
                id="btn5"
                onClick={() => {showrlqactive(!hidden16); showrlqhighlight(!hidden17)}}
                className="h-14 w-11 absolute top-[23rem] left-[10rem]"
            ></button>
            <button
                id="btn6"
                onClick={() => {showeruqactive(!hidden18); showruqhighlight(!hidden19)}}
                className="h-14 w-11 absolute top-[19rem] left-[10rem]"
            ></button>
            <button
                id="btn7"
                onClick={() => {showumbilicusactive(!hidden23); showumbilicushighlight(!hidden22)}}
                className="h-9 w-11 absolute top-[22rem] left-[13rem]"
            ></button>

            <button
                id="btn8"
                onClick={() => {showalloverhighlight(!hidden0); showepigastriumhighlight(!hidden6); showllqhighlight(!hidden8)
                    showluqhighlight(!hidden10); showrlqhighlight(!hidden17); showruqhighlight(!hidden19)
                    showsuprapubichighlight(!hidden21); showumbilicushighlight(!hidden23);}}
                className="rounded-full h-12 w-40 absolute top-[35rem] left-[9rem]"
            ></button>
        </div>
    )        
};
export default Abs;
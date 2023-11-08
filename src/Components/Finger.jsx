import Picture from "../config.json";
import React, { useState } from 'react';
import Layout from "./Layout";
import Card from "./Card";

const Finger = () => {

    let pic = Picture.map(data => data.icon)

    const [hidden3, showdipactive] = useState(false);
    const [hidden4, showdiphighlight] = useState(false);
    const [hidden11, showmcpactive] = useState(false);
    const [hidden12, showmcphighlight] = useState(false);
    const [hidden14, showpipactive] = useState(false);
    const [hidden15, showpiphighlight] = useState(false);
    const [hidden13, showothershighlight] = useState(false);

    return (
        <Layout>
            <Card>
                <div className="relative">
                    <div className="p-5 flex flex-col">
                        <p className="text-2xl font-bold text-center">
                            จุดไหนที่คุณปวดนิ้วมากที่สุด ?
                        </p>
                    </div>
                    <img id="defaulfinger" src={pic[2]} className="h-[35rem]"></img>

                    {hidden3 && (
                    <img id="dipactive" src={pic[3]}
                        className="absolute bottom-0">
                    </img>
                    )}
                    {hidden4 && (
                    <img id="diphighlight" src={pic[4]}
                        className="absolute bottom-0">
                    </img>
                    )}
                    {hidden11 && (
                    <img id="mcpactive" src={pic[11]}
                        className="absolute bottom-0">
                    </img>
                    )}
                    {hidden12 && (
                    <img id="mcphighlight" src={pic[12]}
                        className="absolute bottom-0">
                    </img>
                    )}
                    {hidden14 && (
                    <img id="pipactive" src={pic[14]}
                        className="absolute bottom-0">
                    </img>
                    )}
                    {hidden15 && (
                    <img id="piphighlight" src={pic[15]}
                        className="absolute bottom-0">
                    </img>
                    )}
                    {hidden13 && (
                    <img id="othershighlight" src={pic[13]}
                        className="absolute bottom-0">
                    </img>
                    )}
                    <button
                        id="btn1"
                        onClick={() => {showdipactive(!hidden3); showdiphighlight(!hidden4)}}
                        className="h-5 w-8 absolute top-[13rem] left-[6rem]"
                    ></button>
                    <button
                        id="btn2"
                        onClick={() => {showdipactive(!hidden3); showdiphighlight(!hidden4)}}
                        className="h-5 w-6 absolute top-[9rem] left-[10rem]"
                    ></button>
                    <button
                        id="btn3"
                        onClick={() => {showdipactive(!hidden3); showdiphighlight(!hidden4)}}
                        className="h-7 w-6 absolute top-[7rem] left-[13rem]"
                    ></button>
                    <button
                        id="btn4"
                        onClick={() => {showdipactive(!hidden3); showdiphighlight(!hidden4)}}
                        className="h-7 w-9 absolute top-[8rem] left-[16rem]"
                    ></button>
                    <button
                        id="btn5"
                        onClick={() => {showpipactive(!hidden14); showpiphighlight(!hidden15)}}
                        className="h-7 w-8 absolute top-[15rem] left-[7rem]"
                    ></button>
                    <button
                        id="btn6"
                        onClick={() => {showpipactive(!hidden14); showpiphighlight(!hidden15)}}
                        className="h-5 w-8 absolute top-[13rem] left-[10rem]"
                    ></button>
                    <button
                        id="btn7"
                        onClick={() => {showpipactive(!hidden14); showpiphighlight(!hidden15)}}
                        className="h-7 w-8 absolute top-[11rem] left-[13rem]"
                    ></button>
                    <button
                        id="btn8"
                        onClick={() => {showpipactive(!hidden14); showpiphighlight(!hidden15)}}
                        className="h-6 w-9 absolute top-[12rem] left-[16rem]"
                    ></button>
                    <button
                        id="btn9"
                        onClick={() => {showpipactive(!hidden14); showpiphighlight(!hidden15)}}
                        className="h-9 w-9 absolute top-[18rem] left-[8rem]"
                    ></button>
                    <button
                        id="btn10"
                        onClick={() => {showmcpactive(!hidden11); showmcphighlight(!hidden12)}}
                        className="h-7 w-7 absolute top-[17rem] left-[11rem]"
                    ></button>
                    <button
                        id="btn11"
                        onClick={() => {showmcpactive(!hidden11); showmcphighlight(!hidden12)}}
                        className="h-6 w-10 absolute top-[17rem] left-[13rem]"
                    ></button>
                    <button
                        id="btn12"
                        onClick={() => {showmcpactive(!hidden11); showmcphighlight(!hidden12)}}
                        className="h-7 w-9 absolute top-[17rem] left-[16rem]"
                    ></button>
                    <button
                        id="btn13"
                        onClick={() => {showmcpactive(!hidden11); showmcphighlight(!hidden12)}}
                        className="h-9 w-8 absolute top-[18rem] left-[23rem]"
                    ></button>
                    <button
                        id="btn14"
                        onClick={() => {showmcpactive(!hidden11); showmcphighlight(!hidden12)}}
                        className="h-7 w-9 absolute top-[23rem] left-[20rem]"
                    ></button>
                    <button
                        id="btn15"
                        onClick={() => {showothershighlight(!hidden11); showdiphighlight(!hidden4); showpiphighlight(!hidden12)
                            showmcphighlight(!hidden15)}}
                        className="rounded-full h-12 w-80 absolute top-[36rem] left-[5rem]"
                    ></button>
                </div>
            </Card>
        </Layout>                
    )

};

export default Finger;
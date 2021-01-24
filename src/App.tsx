import React from 'react';
import './App.css';
import {accessibility, CldImg, responsive, lazyload, placeholder} from "@cloudinary/react";
import {CloudinaryImage} from "@cloudinary/base/assets/CloudinaryImage";
import {sepia} from "@cloudinary/base/actions/effect";
import {crop} from "@cloudinary/base/actions/resize";

function ImageList() {
    const elements = [];
    for (let i = 0; i < 100; i++) {
        let cld = new CloudinaryImage(`bear${i}`, {cloudName: 'rcstraus'}).effect(sepia()).resize(crop(700, 400));
        elements.push(<div>
            <CldImg transformation={cld} plugins={[accessibility()]}/>
        </div>);
    }

    return elements;
}

function App() {

    return (
    <div>
        {/*@ts-ignore*/}
        <ImageList />
    </div>
  );
}

export default App;

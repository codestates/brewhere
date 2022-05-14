import React, { useEffect } from 'react';
import KakaoMapScript from "./MapContainer";

export default function Map() {

    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div id='myMap' style={{
            width: '100vw',
            height: '100vh'
        }}></div>
    );
}
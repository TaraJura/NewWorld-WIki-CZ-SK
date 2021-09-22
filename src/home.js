import React from 'react'
import './home.css';

export default function Home() {
    return (
        <div id="homescreen">
            <video className="menuvideo" muted preload="auto" loop autoPlay="autoPlay">
                        <source src="https://m.media-amazon.com/images/G/01/xmM9E6ZZp2x76/NewWorld-80f28eea-a856-45b5-8e40-6f4d9b62674d/___NW_Marquee_GC_0820_20a6b860d67c9b1330fa1b6f7603c819f916f390197852bcc03417eecf663ee._CB1629475574_.mp4" type="video/mp4"></source>
            </video>
            <div id="homelogo">
            <img id="logoimg" src="https://images.ctfassets.net/j95d1p8hsuun/4GbhgO0RBh2C0MqP6lKamS/9a73e7f9829fa6e4edad68f601b4a7b2/NWshadow.svg" width="570" height="165" alt="New World logo" draggable="false" aria-hidden="true"></img>
            <h1>Česko - Slovenská Wiki</h1>
            </div>
        </div>
    )
}

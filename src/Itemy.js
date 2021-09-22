import React from 'react'
import './itemy.css';
import Iframescript from './scripts/iframescript';

export default function Itemy() {
    return (
            <div id="itemy" >
                <iframe src="https://nwdb.info" width="99%" height="820px" id="iframeItemy" title="itemy"></iframe>
                    <button onClick={<Iframescript />}></button>
            </div>
    )
}


/** SCRIPT : document.querySelector("#svelte > div.container.mt-4.container-mb.my-auto.svelte-tg35q7 > div.container.main-page > div > div.col-lg-7.p-3.p-lg-1.p-xl-5.pt-lg-3 > div > a.btn.btn-primary.btn-lg.px-4\!.fw-bold").click(); */
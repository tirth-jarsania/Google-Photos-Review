import {dataFiles} from "./registry.js";
import picController from './Controller/picController.js';

async function fetchPictures() {
    const res = await fetch(dataFiles.actressPics);
    if( res.status !== 200 ) {
        console.log(res.status);
        throw new Error('Something went wrong!!!');
    }
    const pics = await res.json();
    return pics;
}

fetchPictures().then(pics => {
    console.log(pics);
    picController.init(pics);
})
.catch(err => console.log(err));
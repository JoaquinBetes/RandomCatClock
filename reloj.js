"use strict"
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const floppa = document.querySelector(".floppa");
const time2 = new Date();
let keyword = "cat";
let minact = time2.getMinutes();

const getGato = () => {
    $(document).ready(function(){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            let rnd = Math.floor(Math.random() * data.items.length);
            let image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
            floppa.innerHTML = `<img src="${image_src}" class = "floppa_img" loading="lazy">`;
        });
    });
}

const actualizeTime = ()=>{
    
    const gitgud = (t) => {
        if(t<10) t ="0" + t ;
        else toString(t);
        return t
    }

    const time = new Date();
    let hrs = gitgud(time.getHours());
    let mins = gitgud(time.getMinutes());
    let secs = gitgud(time.getSeconds());

    minact = gitgud(minact);

    if (minact != mins) {
        getGato();
        minact = mins; 
    }

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;

}


getGato();
actualizeTime();
setInterval(actualizeTime, 1000);

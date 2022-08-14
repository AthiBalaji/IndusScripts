function retrieve(){
    const searchvalue = document.getElementById('searchvalue').value;
    fetch('http://localhost:3000/search/' + searchvalue)
    .then(response => response.json())
    .then(records => displaycard(records['data']));
    
}

const btn = document.getElementById("searchbtn");
btn.addEventListener("click", retrieve);

function displaycard(records){
    document.querySelector('.main_display').innerHTML = '';
    records.forEach(
        (record,idx) =>{
            //creates a card for each record
            const card = document.createElement("div");
            card.setAttribute("id", `card${idx}`);
            const main_display = document.querySelector(".main_display");
            main_display.appendChild(card);

            displayimage(card, record.symbol);
            codeconversion(record.signno, card);
        }

    );
}
//takes the code and dynamically renders the information
function codeconversion(number, card) {
    
    //first four digits IM77 number
    im77 = document.createElement('div');
    card.appendChild(im77);
    const f = Math.floor(number/1000000);
    if(f<2000 && f>1000){
        im77.innerHTML = `<b>Text number: </b>${number} Mohenjo daro: Texts published in MIC, vol III
        `;    
    }else if(f<3000 && f>2000){
        im77.innerHTML = `<b>Text number: </b>${number} Mohenjo daro: Texts published in MIC, vol III
        `; 
    }else if(f<4000 && f>3000){
        im77.innerHTML = `<b>Text number: </b>${number} Mohenjo daro: Other texts`
    } else if(f<5000 && f>4000){
        im77.innerHTML = `<b>Text number: </b>${number} Harappa texts: published in EH, vol II`
    }
    else if(f<6000 && f>5000){
        im77.innerHTML = `<b>Text number: </b>${number} Harappa: other texts `
    }
    else if(f<7000 && f>6000){
        im77.innerHTML = `<b>Text number: </b>${number} Chahudaro: texts published in CE`
    }
    else if(f<8000 && f>7000){
        im77.innerHTML = `<b>Text number: </b>${number} `
    }
    else if(f<8000 && f>7000){
        im77.innerHTML = `<b>Text number: </b>${number} `
    }
    else{
        im77.innerHTML = `<b>Text number: </b>${number} `
    }

    //col5
    const q = (''+number)[4];
    type = document.createElement('div');
    card.appendChild(type);
    if(q==1){
        type.innerHTML = `<b>Type of inscribed object: </b> Seals`
    }else if(q==2){
        type.innerHTML = `<b>Type of inscribed object: </b> Sealings`
    }else if(q==3){
        type.innerHTML = `<b>Type of inscribed object: </b> Miniature tablets(made of stone, terracota or faience)`
    }else if(q==4){
        type.innerHTML = `<b>Type of inscribed object: </b> Pottery graffiti`
    }else if(q==5){
        type.innerHTML = `<b>Type of inscribed object: </b> Copper tablets`
    }else if(q==6){
        type.innerHTML = `<b>Type of inscribed object: </b> Bronze implements`
    }else if(q==7){
        type.innerHTML = `<b>Type of inscribed object: </b> Ivory or bone rods`
    }else if(q==8){
        type.innerHTML = `<b>Type of inscribed object: </b> Miscellanous inscribed objects`
    }
    
}

function displayimage(card, text){
        console.log('its called');
        const imgpanel  = document.createElement("div");
        card.appendChild(imgpanel);
        imgpanel.style.display ="flex";
        const tarr = text.split('-');
        tarr.forEach((mem)=>{
            img = document.createElement("img");
            img.style.width = "5em";
            img.style.height = "5em";
            img.src = `pictures/page1/${mem}.jpg`;
            imgpanel.appendChild(img);
        });

}
const btn2 = document.getElementById("freqbtn");
btn2.addEventListener("click", retrieve2);

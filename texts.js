

const btn = document.getElementById("searchbtn");
btn.addEventListener("click", retrieve);







function retrieve(){
    const searchvalue = document.getElementById('searchvalue').value;
    fetch('http://localhost:3000/search/' + searchvalue)
    .then(response => response.json())
    .then((records) => {
        console.log("inretrieve fey "+ records['data'] );
        displaycard(records['data']);
        

    });
    
}

function displaycard(records){
    if(records.length != 0) {
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
     }else{
        document.querySelector('.main_display').innerHTML = '';
        document.querySelector('.main_display').innerHTML = `<b>Please enter a valid input</b>`;
     }
    
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


    //col6
    const q2 = (''+number)[5];
    type = document.createElement('div');
    card.appendChild(type);
    if(q2==0){
        type.innerHTML = `<b>Side of inscribed object: </b> Only side`
    }else if(q2==1){
        type.innerHTML = `<b>Side of inscribed object: </b> First side`
    }else if(q2==2){
        type.innerHTML = `<b>Side of inscribed object: </b> Second side`
    }else if(q2==3){
        type.innerHTML = `<b>Side of inscribed object: </b> Third side`
    }else if(q2==4){
        type.innerHTML = `<b>Side of inscribed object: </b> Fourth side`
    }else if(q2==5){
        type.innerHTML = `<b>Side of inscribed object: </b> Fifth side`
    }else if(q2==6){
        type.innerHTML = `<b>Side of inscribed object: </b> Sixth side`
    }

    //col6
    const q3 = (''+number)[6]+(''+number)[7];
    console.log(q3);
    type = document.createElement('div');
    card.appendChild(type);
    if(q3<=35){
        type.innerHTML = `<b>Field Symbol: </b> Animals`
    }else if(q3>35 && q3<=43){
        type.innerHTML = `<b>Field Symbol: </b> Reptiles, Fish or Birds`
    }else if(q3>43 && q3 <=46){
        type.innerHTML = `<b>Field Symbol: </b> Trees and Leaves`
    }else if(q3>46 && q3 <=59){
        type.innerHTML = `<b>Field Symbol: </b> anthrophomorphic forms`
    }else if(q3>59 && q3 <=81){
        type.innerHTML = `<b>Field Symbol: </b> Scenes with anthrophomorphic and animal figures and other objects`
    }else if(q3>81 && q3 <=98){
        type.innerHTML = `<b>Field Symbol: </b> Various symbols, motifs and geometrical patterns`
    }else if(q3==99){
        type.innerHTML = `<b>Field Symbol: </b> Damaged or illegible field symbol`
    }else if(q3==00){
        type.innerHTML = `<b>Field Symbol: </b> No field symbol on the side`
    }


    //col9
    const q9 = (''+number)[8];
    type = document.createElement('div');
    card.appendChild(type);
    if(q9==0){
        type.innerHTML = `<b>Line of text: </b> Only line of text on the side`
    }else if(q9==1){
        type.innerHTML = `<b>Line of text: </b> First line`
    }else if(q9==2){
        type.innerHTML = `<b>Line of text: </b> Second line`
    }else if(q9==3){
        type.innerHTML = `<b>Line of text: </b> Third line`
    }else if(q9==9){
        type.innerHTML = `<b>Line of text: </b> The side has no line of text but only a field symbol`
    }


    //col10
    const q10 = (''+number)[9];
    type = document.createElement('div');
    card.appendChild(type);
    if(q10==0){
        type.innerHTML = `<b>Direction of writing: </b> No line of text`
    }else if(q10==1){
        type.innerHTML = `<b>Direction of writing: </b> Right to left`
    }else if(q10==2){
        type.innerHTML = `<b>Direction of writing: </b> Left to right`
    }else if(q10==3){
        type.innerHTML = `<b>Direction of writing: </b> Single sign in the line of text`
    }else if(q10==4){
        type.innerHTML = `<b>Direction of writing: </b> Top to bottom`
    }else if(q10==5){
        type.innerHTML = `<b>Direction of writing: </b> Symmetrical arrangement of sign`
    }else if(q10==9){
        type.innerHTML = `<b>Direction of writing: Doubtful on account of damage and illegibility </b> `
    }
    
    card.style.border="0.01em solid black";
    card.style.paddingBottom="2em";
    
}

function displayimage(card, text){
        const imgpanel  = document.createElement("div");
        card.appendChild(imgpanel);
        imgpanel.style.display ="flex";
        imgpanel.style.flexDirection = "row";
        imgpanel.style.justifyContent = "center";
        imgpanel.style.margin = "1em";

        const tarr = text.split('-');
        tarr.forEach((mem)=>{
            img = document.createElement("img");
            img.style.width = "5em";
            img.style.height = "5em";
            img.style.border= "2px solid black";
            img.src = `pictures/page1/${mem}.jpg`;
            imgpanel.appendChild(img);
        });

}

function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}



// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const mybtn = document.getElementById("myButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

mybtn.addEventListener("click", function() {
    modal.style.display = "block";
  }
  )

span.addEventListener("click", function() {
    modal.style.display = "none";
  })

window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })
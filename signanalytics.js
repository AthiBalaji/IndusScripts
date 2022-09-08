


const btn = document.getElementById("searchbtn");
btn.addEventListener("click", displaysignstats);



function displaysignstats(){
    document.querySelector(".main_display").innerHTML = "";
    signimages();
    retrievesignrec();
    
    
    


}

function signimages(){
    const val = document.getElementById("searchvalue").value;

    //symbol holder
    const symbolholder = document.createElement("div");
    symbolholder.id = "symbol";
    document.querySelector(".main_display").appendChild(symbolholder);
    
    //symbol
    const symbol = document.createElement("img");
    symbol.src = `pictures/page1/${val}.jpg`;
    symbol.style.width = "2.5em";
    symbol.style.height = "2.5em";
    symbolholder.style.border = "0.1em solid black";
    symbolholder.appendChild(symbol);

}

function retrievesignrec(){
    const searchvalue = document.getElementById('searchvalue').value;
    fetch('http://localhost:3000/signrec/' + searchvalue)
    .then(response => response.json())
    .then((records) => {
        displayrecurrences(records['data']);
        

    });
    
}


function retrievesigntexts(){
    console.log("retrieve is called");
    const searchvalue = document.getElementById('searchvalue').value;
    fetch('http://localhost:3000/signtext/' + searchvalue)
    .then(response => response.json())
    .then((records) => {
        displaysigntexts(records['data']);
        

    });
    
}

function displaysigntexts(records){
    
    const alltextholder = document.getElementById('alltextholder');
    alltextholder.innerHTML = "";
    records.forEach((record)=>{
        displayimage(alltextholder, record);
    })

}

function displayimage(card, text){
    const imgpanel  = document.createElement("div");
    const val5 = document.getElementById("searchvalue").value;
    

    card.appendChild(imgpanel);
    card.style.border = "1px solid black";
    imgpanel.style.display ="flex";
    imgpanel.style.flexDirection = "row";
    imgpanel.style.justifyContent = "center";
    imgpanel.style.margin = "1em";
   
    const textno = text.text_no;
    const textcode = text.text_code;

    delete text.text_no;
    delete text.text_code;
    const tarr2 = Object.values(text);
    const textinfo = document.createElement("div");
    const textholder = document.createElement("div");
    textinfo.innerHTML =  `Text No: ${textno} <br> Text Code: ${textcode}`;
    card.appendChild(textinfo);
    textinfo.style.borderBottom = "1px solid black";

    tarr2.forEach((mem)=>{

        if(mem === "\\0"){
            return;
        }
        img = document.createElement("img");
        
         

        img.style.width = "2.5em";
        img.style.height = "2.5em";
        img.src = `pictures/page1/${mem}.jpg`;
        if(mem === val5){
            img.style.border = "0.2em solid brown";
        }
        imgpanel.appendChild(img);

    });

}




function displayrecurrences(records) {
    

            const val5 = document.getElementById("searchvalue").value;
            const card = document.createElement("div");
            const card2 = document.createElement("div");
             const main_display = document.querySelector(".main_display");
             const main_card = document.createElement("div");
             main_display.appendChild(main_card);
             main_card.appendChild(card);
             main_card.appendChild(card2);
            card.style.display = "flex";
            card.style.flexWrap = "wrap";
            card.style.padding = "0.2em";
            card.style.margin = "1em";
            card.innerHTML = `<div class="flex-element" style="margin:1em; font-size:large; font-weight:900; font-size:large; font-weight:900;">At Position 1:  ${records[0].pos_1_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 2:  ${records[0].pos_2_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 3:  ${records[0].pos_3_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 4:  ${records[0].pos_4_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 5:  ${records[0].pos_5_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 6:  ${records[0].pos_6_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 7:  ${records[0].pos_7_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 8:  ${records[0].pos_8_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 9:  ${records[0].pos_9_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 10:  ${records[0].pos_10_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 11:  ${records[0].pos_11_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 12:  ${records[0].pos_12_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 13:  ${records[0].pos_13_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 14:  ${records[0].pos_14_occurrence} times</div> 
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 15:  ${records[0].pos_15_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 16:  ${records[0].pos_16_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 17:  ${records[0].pos_17_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 18:  ${records[0].pos_18_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 19:  ${records[0].pos_19_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 20:  ${records[0].pos_20_occurrence} times</div>
            <div class="flex-element" style="margin:1em; font-size:large; font-weight:900;">At Position 21:  ${records[0].pos_21_occurrence} times</div> 
            
            `;
            const barcanvas = document.createElement('canvas');
            barcanvas.id = 'myChart';
            card2.appendChild(barcanvas);


            const labels = [
                'Position_1',
                'Position_2',
                'Position_3',
                'Position_4',
                'Position_5',
                'Position_6',
                'Position_7',
                'Position_8',
                'Position_9',
                'Position_10',
                'Position_11',
                'Position_12',
                'Position_13',
                'Position_14',
                'Position_15',
                'Position_16',
                'Position_17',
                'Position_18',
              ];
            
              const data = {
                labels: labels,
                datasets: [{
                  label: 'Occurence of sign in each position',
                  backgroundColor: 'rgb(255, 255, 0)',
                  borderColor: 'rgb(0,0,0)',
                  data: [`${records[0].pos_1_occurrence}`, `${records[0].pos_2_occurrence}`, `${records[0].pos_3_occurrence}`, `${records[0].pos_4_occurrence}`, `${records[0].pos_5_occurrence}`, `${records[0].pos_6_occurrence}`, `${records[0].pos_7_occurrence}`, `${records[0].pos_8_occurrence}`, `${records[0].pos_9_occurrence}`,`${records[0].pos_10_occurrence}`, `${records[0].pos_11_occurrence}`, `${records[0].pos_12_occurrence}`,`${records[0].pos_13_occurrence}`,`${records[0].pos_14_occurrence}`,`${records[0].pos_15_occurrence}`,`${records[0].pos_16_occurrence}`,`${records[0].pos_17_occurrence}`,`${records[0].pos_18_occurrence}`],
                }]
              };
            
              const config = {
                type: 'bar',
                data: data,
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                },
              };
              const myChart = new Chart(
                document.getElementById('myChart'),
                config
              );

              const alltextholder = document.createElement('div');
              alltextholder.id = "alltextholder";
              const showtextbtn = document.createElement('button');
              showtextbtn.id ="showtextbtn";
              showtextbtn.innerHTML = "Show all texts";  
              alltextholder.appendChild(showtextbtn);
              main_display.appendChild(alltextholder);
              document.getElementById("showtextbtn").addEventListener("click", retrievesigntexts(val5));
              

              


    

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
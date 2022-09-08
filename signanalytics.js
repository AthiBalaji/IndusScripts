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

function displayrecurrences(records) {
    

    
            const card = document.createElement("div");
             const main_display = document.querySelector(".main_display");
             const main_card = document.createElement("div");
             main_display.appendChild(main_card);
             main_card.appendChild(card);
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
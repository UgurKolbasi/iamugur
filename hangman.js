const word_el=document.querySelector('#word');
const correctLetters=[]
const wrongLetters=[];
const popup=document.querySelector('.popup-container');
const popupContent =document.querySelector('.pop-up h3');
const again=document.querySelector('#play-again')
let selectedWord=getRandomWord();
const mesajbox= document.querySelector('#mesaj');
const items=document.querySelectorAll('.item')
const  failedLetters= document.querySelector('#wrong-letters');
const playAgain=document.querySelector('#play-again');







function getRandomWord(){
    const words=["dangerous","mascot","apple","key","endorse","way","gym","book","protein","guitar","box","phone","candle","picture","handbook","towel","water","iron","hangman","light","sky","sadness","english",];
    return words[Math.floor(Math.random()*words.length)];
}
console.log(getRandomWord());


function displayWord(){
   

    word_el.innerHTML=`  
    ${selectedWord.split('').map(letter=> `
    
    <div class="letter">
    ${correctLetters.includes(letter) ? letter:''}
    </div>
    `).join('')}
    `;

     const w =word_el.innerText.replace(/\n/g,'');
     if(w=== selectedWord){

        popup.style.display='flex';
        popupContent.innerText='You have gussed the word successfully';
        again.style.display='block';
        
     }

}

function displayMessage(){
    mesajbox.classList.add('show');
    setTimeout(e=>{
        mesajbox.classList.remove('show');

    },3000);

}
window.addEventListener('keydown',e=>{
   if(e.keyCode>=65 && e.keyCode<=90){
    if(selectedWord.includes(e.key)){
        if(!correctLetters.includes(e.key)){
            correctLetters.push(e.key);
            displayWord();
        }else{ displayMessage();

        }
    }else{
        if(!wrongLetters.includes(e.key)){
            wrongLetters.push(e.key);
            updatewrongLetters();
        }else{
            displayMessage();

        }
    }
   }
})

function updatewrongLetters(){
    failedLetters.innerHTML=`
    ${wrongLetters.length>0?`<h3>Hatali Harfler</h3>`:''}
    ${wrongLetters.map(letter=>`<span>${letter}</span>`)}`;


    items.forEach((item,index)=>{
        const erorCount=wrongLetters.length;
        if(index<erorCount){
            item.style.display='block';
        }else{
            item.style.display='none';

        }
    })

 if(wrongLetters.length==items.length){
    popup.style.display='flex'
    popupContent.innerText=`YOU LOSE`
    again.style.display='block';
 }
}

playAgain.addEventListener('click',e=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=getRandomWord();
    displayWord();
    updatewrongLetters();
    popup.style.display='none';
})


displayWord();
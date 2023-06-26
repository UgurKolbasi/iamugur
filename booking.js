
// Tiklama Elementi Degiskenleri 

const container= document.querySelector('.container');
const movie=document.querySelector('#movie');
const text=document.querySelector('.text');
const count=document.querySelector('.count');
const amount=document.querySelector('#amount');
const allseats=document.querySelectorAll('.seat:not(.reserved)');




getFromLocalStorage();
calculateTotal();

// Price

//Tiklama fonksiyonu
 container .addEventListener('click', e=>{

    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){

        e.target.classList.toggle('selected');
        calculateTotal();

        }
    
    
});


movie.addEventListener('change',e=>{

    calculateTotal();
});

function calculateTotal(){
    const selectedseats =document.querySelectorAll('.seat.selected');
    
   const allseats=document.querySelectorAll('.seat:not(.reserved)');
  const selectedSeatsArr=[];
   const allseatsar =[];

    let selectioncount= document.querySelectorAll('.seat.selected').length;
    if(selectioncount>0){
      text.style.display='block';
  
        count.innerText=selectioncount;
        let totalprice=movie.value*selectioncount;
        amount.innerText=totalprice;
       

    }  else{
        text.style.display='none'

    }


selectedseats.forEach(e=>{
    selectedSeatsArr.push(e);
})


 allseats.forEach(e=>{

    allseatsar.push(e);
})
let selectedseatindex= selectedSeatsArr.map(e=>{
    return allseatsar.indexOf(e);

   

    
})
console.log(selectedseatindex);

saveToLocalStorage(selectedseatindex);


}

function saveToLocalStorage(index){

    localStorage.setItem('selectedseats',JSON.stringify(index));
    localStorage.setItem('selectedMovieIndex',movie.selectedIndex);
}


function getFromLocalStorage(){

    const selected_Seats=JSON.parse(localStorage.getItem('selectedseats'));
    if(selected_Seats!=null && selected_Seats.length>0){
        allseats.forEach((e,index)=>{
        if(selected_Seats.indexOf(index)>-1){
            e.classList.add('selected');
        }

        })


    }


    const selectedMovie_Index=localStorage.getItem('selectedMovieIndex');
    if(selectedMovie_Index!=null){
     movie.selectedIndex=selectedMovie_Index;
    }

}











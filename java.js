const lightbox=document.querySelector('#lightbox');
const resimler=document.querySelectorAll('.resim');
const scrollingnav=document.querySelector('.headsed');
const body= document.body;


let lastScroll=0;

window.addEventListener("scroll",e=>{
    const currentScroll= window.pageYOffset;
    console.log(currentScroll);
    if( currentScroll<=0){

        scrollingnav.classList.remove("up")
    }
    if (currentScroll>lastScroll && !scrollingnav.classList.contains("down")){
        scrollingnav.classList.remove("up")
        scrollingnav.classList.add("down")

    }
    if (currentScroll<lastScroll && scrollingnav.classList.contains("down")){
        scrollingnav.classList.remove("down")
        scrollingnav.classList.add("up")

    }
    lastScroll=currentScroll;
})


resimler.forEach(resim=>{

    resim.addEventListener('click',e=>{

       lightbox.classList.add('active');
       const img=document.createElement('img');

       while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
       }

       lightbox.appendChild(img);
       img.src=resim.src;
       img.style.width= "1000px";
       img.style.height="500px";
       img.style.opacity=1;



    })

    lightbox.addEventListener('click' ,e=>{
        if(e.target!== e.currentTarget) return
        lightbox.classList.remove('active');
    })
})


const lightbox=document.querySelector('#lightbox')
const resimler=document.querySelectorAll('img');

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
/*const home=document.getElementById("home");
home.addEventListener("mouseover",(eo)=>{
    home.style.color="green";

});
home.addEventListener("mouseout",(eo)=>{
    home.style.display="block";

})
home.addEventListener("mouseover",(eo)=>{
    home.style.display="none";

})*/
/*
const home=document.getElementById("home");
const logo=document.querySelector(".mylogo");
home.addEventListener("click",(eo)=>{
    const random=Math.round(Math.random()*100);
    logo.style.backgroundColor=`hsl(217,${random}%,55%)`;
    home.style.color="black"

});



const changeColor=()=>{
    return Math.round(Math.random()*360)
};

home.addEventListener("click",(eo)=>{
   const allTitle=document.querySelectorAll("h1:not(#and)")
   allTitle.forEach(item =>{
    item.style.color=`hsl(${changeColor()},44%,55%)`
   });
})

*/
/*
const random=()=>{
    return Math.round(Math.random()*255)
}


home.addEventListener("click",(eo)=>{
    const allSec=document.querySelectorAll("section")
    const rgb1=random();
    const rgb2=random();
    const rgb3=random();




    allSec.forEach(item=>{
        item.style.backgroundColor=`rgb(${rgb1},${rgb2},${rgb3})`
        

    });

})
const ra=(Math.random()*6).toString(16).slice(2,8);

console.log(`# ${ra}`);
*/
/*

const random=()=>{
    return `#${Math.random().toString(16).slice(2,8)}`;
}
home.addEventListener("click",(eo)=>{
    const allsec=document.querySelectorAll('section');
    const hex=random();


    for(let i=0;i<allsec.length;i++){
        const item=allsec[i];
        item.style.backgroundColor=hex;


    }
});*/
/*
const random=()=>{
    return `#${Math.random().toString(16).slice(2,8)}`;
}
home.addEventListener("click",(eo)=>{
    const allsec=document.querySelectorAll('section');
    const hex=random();

for(const i in allsec){
    const item=allsec[i];
    item.style.backgroundColor=hex;

}
});*/


/*const random=()=>{
    return `#${Math.random().toString(16).slice(2,8)}`;
}
home.addEventListener("click",(eo)=>{
    const allsec=document.querySelectorAll('section');
    const hex=random();

    for(const i of allsec ){
        const item=i;
        item.style.backgroundColor=hex;

    }
});*/
/*
const random=()=>{
    return `#${Math.random().toString(16).slice(2,8)}`;
}
home.addEventListener("click",(eo)=>{
    const allsec=document.querySelectorAll('section');
    const hex=random();


let i=0;
while(i<allsec.length){
    const item=allsec[i];
    item.style.backgroundColor=hex;
    i++;
}
});
*/
/*
const random=()=>{
    return `#${Math.random().toString(16).slice(2,8)}`;
}
home.addEventListener("click",(eo)=>{
    const allsec=document.querySelectorAll('section');
    const hex=random();


let i=0;
do{
    const item=allsec[i];
    item.style.backgroundColor=hex;
    i++;
}while(i<allsec.length)
});*/
/*
const random=()=>{
    return `#${Math.random().toString(16).slice(2,8)}`;
}
home.addEventListener("click",(eo)=>{
    const allsec=document.querySelectorAll('section');
    const hex=random();


let i=0;
for(;;){
    if(i<allsec.length){
    const item=allsec[i];
    item.style.backgroundColor=hex;
    i++;
    }else{break};
}
})*/
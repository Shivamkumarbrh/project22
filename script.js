

let dOpen = ()=>{
    ddownpage.style.display = 'block'
}
let dClose = ()=>{
    ddownpage.style.display = 'none'
}
let q;

 q = ()=>{
    let p = document.getElementById('first');
    if(p.style.display === 'block'){
        p.style.display = 'none'
    }
    else{
        p.style.display = 'block';
    }
} 

let paragraph1 = ()=>{
    if(mgroupFirst.style.display === 'block'){
        mgroupFirst.style.display = 'none';
    }
    else{
        mgroupFirst.style.display = 'block'
    }
}
let paragraph2 = ()=>{
    if(mgroupSecond.style.display === 'block'){
        mgroupSecond.style.display = 'none';
    }
    else{
        mgroupSecond.style.display = 'block'
    }
}
let imgGroup = ()=>{
    if(document.querySelector(".imgContainer").style.display === 'block'){
        document.querySelector(".imgContainer").style.display = 'none';
    }
    else{
        document.querySelector(".imgContainer").style.display = 'block'
    }
}

let alert1 = ()=>{
    document.querySelector(".alert").style.display = 'none';
}

// navbarMobile

let btn = ()=>{
    if(document.querySelector('.dropdown2').style.display === 'block'){
        document.querySelector('.dropdown2').style.display = 'none'
    }
    else{
        document.querySelector('.dropdown2').style.display = 'block'
    }
}
/* let h=0;
let m=0;
let s=0;

function cronometroContando(){
    if(s==59){
        s=0;
        if(m==59){
            m=0;
            h++;
        }else{
            m++;
        }
    }else{
        s++;
    }
    if(s<10 && m<10 && h<10){
        return `0${h}:0${m}:0${s}`
    }else if(s>9 && m<10 && h<10){
        return `0${h}:0${m}:${s}`
    }else if(s<10 && m>9 && h<10){
        return `0${h}:${m}:0${s}`
    }else if(s<10 && m<10 && h>9){
        return `${h}:0${m}:0${s}`
    }else if(s>9 && m>9 && h<10){
        return `0${h}:${m}:${s}`
    }else if(s>9 && m<10 && h>9){
        return `${h}:0${m}:${s}`
    }else if(s<10 && m>9 && h>9){
        return `${h}:${m}:0${s}`
    }else if(s>9 && m>9 && h>9){
        return `${h}:${m}:${s}`
    }
} */

function documento (){
    function cronometroContando(segundos){
        const data = new Date(segundos*1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    
    let timer;
    let segundos = 0;
    let iniciado = false;
    
    document.addEventListener('click',function(e){
        const el = e.target;
        console.log(el);
        if(!iniciado){
            if(el.classList.contains('iniciar')){
                iniciado = true;
                relogio.classList.remove('pausado');
                timer = setInterval(function(){
                    segundos++;
                    relogio.innerHTML = cronometroContando(segundos);
                },1000);
            }
        }
        if(el.classList.contains('pausar')){
            relogio.classList.add('pausado');
            clearInterval(timer);
            iniciado = false;
        }
        if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
            iniciado = false;
        }
    })
}

documento();
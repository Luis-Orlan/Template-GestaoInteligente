addEventListener("load", function() {
    document.querySelector(".load-fullsreen").style.display = "none";
    setTimeout(function() {
       
    }, 1200);
});

var msg = document.querySelector('.msg-box'), alert = document.querySelector('.msg-alert');
// document.querySelectorAll(".btn-cadastro").addEventListener("click", function() {
//     let login = document.querySelector('.form-cadastro'), r_ = "Essa requisição não funcionou.";
//     let formData = new FormData(login), object = {};

//     formData.forEach((value, key) => object[key] = value);

//     let json = JSON.stringify(object), 
//     ajax = new XMLHttpRequest();

//     ajax.open("POST", "index.php", true), 
//     ajax.setRequestHeader("Content-type", "application/json"), 
//     ajax.send(json), ajax.onreadystatechange = function() {
    
//         if (ajax.readyState == 4 && ajax.status == 200) {
//             let data = ajax.responseText;
//             document.getElementsByClassName('resposta-resquest').value = data;
//         }else{

//             msg.classList.add("animated");
//             msg.style.display = 'block'; 
//             alert.classList.add("erro");
            
//             msg.classList.add("bounceInRight");
//             document.getElementById("resposta").innerHTML = r_;

//             setTimeout(function() {
//                 msg.classList.remove("bounceInRight");
//                 msg.classList.add("bounceOutRight");

//                 setTimeout(function() {
//                     msg.style.display = 'none'; 
//                     msg.classList.remove("bounceOutRight");
//                     msg.classList.remove("animated");
//                     alert.classList.remove("erro");
//                 }, 700);   
//             }, 2500);         
//         }
//     }
// });

document.querySelector(".btn-cadastro-cpf").addEventListener("click", function() {
    let login = document.querySelector('.form-cadastro-cpf'), r_ = "Essa requisição não funcionou.";
    let formData = new FormData(login), object = {};

    formData.forEach((value, key) => object[key] = value);

    let json = JSON.stringify(object), 
    ajax = new XMLHttpRequest();

    ajax.open("POST", "index.php", true), 
    ajax.setRequestHeader("Content-type", "application/json"), 
    ajax.send(json), ajax.onreadystatechange = function() {
    
        if (ajax.readyState == 4 && ajax.status == 200) {
            let data = ajax.responseText;
            document.getElementsByClassName('resposta-resquest').value = data;
        }else{

            msg.classList.add("animated");
            msg.style.display = 'block'; 
            alert.classList.add("erro");
            
            msg.classList.add("bounceInRight");
            document.getElementById("resposta").innerHTML = r_;

            setTimeout(function() {
                msg.classList.remove("bounceInRight");
                msg.classList.add("bounceOutRight");

                setTimeout(function() {
                    msg.style.display = 'none'; 
                    msg.classList.remove("bounceOutRight");
                    msg.classList.remove("animated");
                    alert.classList.remove("erro");
                }, 700);   
            }, 2500);         
        }
    }
});

document.querySelector(".btn-cadastro-cnpj").addEventListener("click", function() {
    let login = document.querySelector('.form-cadastro-cnpj'), r_ = "Essa requisição não funcionou.";
    let formData = new FormData(login), object = {};

    formData.forEach((value, key) => object[key] = value);

    let json = JSON.stringify(object), 
    ajax = new XMLHttpRequest();

    ajax.open("POST", "index.php", true), 
    ajax.setRequestHeader("Content-type", "application/json"), 
    ajax.send(json), ajax.onreadystatechange = function() {
    
        if (ajax.readyState == 4 && ajax.status == 200) {
            let data = ajax.responseText;
            document.getElementsByClassName('resposta-resquest').value = data;
        }else{

            msg.classList.add("animated");
            msg.style.display = 'block'; 
            alert.classList.add("erro");
            
            msg.classList.add("bounceInRight");
            document.getElementById("resposta").innerHTML = r_;

            setTimeout(function() {
                msg.classList.remove("bounceInRight");
                msg.classList.add("bounceOutRight");

                setTimeout(function() {
                    msg.style.display = 'none'; 
                    msg.classList.remove("bounceOutRight");
                    msg.classList.remove("animated");
                    alert.classList.remove("erro");
                }, 700);   
            }, 2500);         
        }
    }
});

var isento_ck = document.querySelector("input[name=isento]");
var cpf = document.querySelector(".form-cadastro-cpf"), btn_cpf = document.querySelector(".esc-cpf"), cnpj = document.querySelector(".form-cadastro-cnpj"), btn_cnpj = document.querySelector(".esc-cnpj");
cpf.classList.add("animated"),cpf.classList.add("delay--5s"), cnpj.classList.add("animated"),cnpj.classList.add("delay--5s");

btn_cpf.addEventListener("click", function() {
     if(btn_cpf.classList != 'escolha'){
         cnpj.classList.add("bounceOutRight");
         setTimeout(function() {
             cpf.classList.add("bounceInRight");

             cnpj.style.display = 'none';
             cpf.style.display = 'block';

             btn_cnpj.classList.remove("escolha");
             btn_cpf.classList.add("escolha");

             cpf.classList.remove("bounceOutRight");
             cnpj.classList.remove("bounceInRight");
         }, 1000);
     }             
 });

 btn_cnpj.addEventListener("click", function() {
     if(btn_cnpj.classList != 'escolha'){
         cpf.classList.add("bounceOutRight");

         setTimeout(function() {
             cnpj.classList.add("bounceInRight");

             cpf.style.display = 'none';
             cnpj.style.display = 'block';

             btn_cpf.classList.remove("escolha");
             btn_cnpj.classList.add("escolha");

             cnpj.classList.remove("bounceOutRight");
             cpf.classList.remove("bounceInRight");
         }, 1000);                
     }
 });

 isento_ck.addEventListener("click", function() {
     if(document.getElementById("ie").disabled == false){
         document.getElementById("ie").disabled = true;
     }else{
         document.getElementById("ie").disabled = false;
     }
     
 });
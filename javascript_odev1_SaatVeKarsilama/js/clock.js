let ad = prompt("Lütfen adınızı giriniz")
let karsilama = document.querySelector("#myName")
karsilama.innerHTML = ad


function myClock() {         
    setTimeout(function() { 
        const gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        const d = new Date();
        const n = d.toLocaleTimeString();
        const day = gunler[d.getDay()];
        document.getElementById("demo").innerHTML = n + " " + day; 
      myClock();             
    }, 1000)
  }
  myClock();  
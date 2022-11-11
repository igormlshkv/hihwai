function goTop(){
    var article = document.querySelector("article");
    article.scrollTop = 0;
}


const article = document.querySelector(".article")
var darkMode = localStorage.getItem("dark_mode");

function DarkMode() {
    article.classList.add("darkmode");
  localStorage.setItem("dark_mode", "yes");
};

function LightMode() {
  article.classList.remove("darkmode");
  localStorage.setItem("dark_mode", "no");
};

if (darkMode === "yes") {
  DarkMode(); 
}
function DarkModeToggle(){
    darkMode = localStorage.getItem("dark_mode");
    if (darkMode === "no") {
        DarkMode();
      } else {
        LightMode();
      }

}



function loadArticle(articleName){     
    let article = document.querySelector(".trescArtykulu"); 
    document.querySelector(".tresc")?.remove();    
    let iframe = document.createElement("iframe");     
    iframe.setAttribute("src", `articles/${articleName}.html`);     
    iframe.setAttribute("onload", "this.insertAdjacentHTML('afterend', (this.contentDocument.body||this.contentDocument).innerHTML);this.remove()");    
    iframe.setAttribute("style", "display: none");    
    article.appendChild(iframe); 
}
$(function() {
  $("form[name='ankieta']").validate({
  rules: {
      fname:
      {
        required:true,
        digits:false,
      },
      age: {
      required:true,
      digits:true
      },
      gender:"required",
      pilkarz:"required",
      email: {
      required: true,
      email: true,

      }
  },
  messages: {
      fname: "<br/>Wprowadź imię!<br/>",
      age: "<br/>Wprowadź poprawny wiek!<br/>",
      gender:"Wymagane!",
      pilkarz:"<br/>Wprowadź piłkarza!<br/>",
      email: {
      email: "<br/>Niepoprawny email!<br/>",
      required: "<br/>Wprowadź email!<br/>",
      }
  },
  submitHandler: function(form) {
      $( "#dialog" ).dialog();
      setTimeout(() => {
        form.submit()
    }, 5000);

  }
  });
});

$( function() {
  let pilkarze = [
  "Cristiano Ronaldo",
  "Lionel Messi",
  "Neymar",
  "Paulo Dybala",
  "Robert Lewandowski",
  "Kevin De Bruyne",
  "Erling Haaland",
  "Mohamed Salah",
  "Eusebio",
  "Gerd Muller",
  "Franz Beckenbauer",
  "Zinedine Zidane",
  "Diego Maradona",
  "Pele"
  ];
  $( "#pilkarz" ).autocomplete({
    source: pilkarze
  });
} );



$( function() {
  let imiona = [
  "Antoni",
  "Jan",
  "Aleksander",
  "Franciszek",
  "Nikodem",
  "Jakub",
  "Leon",
  "Stanisław",
  "Mikołaj",
  "Szymon",
  "Kacper",
  "Maksymilian",
  "Krystyna",
  ];
  $( "#fname" ).autocomplete({
    source: imiona
  });
} );


sessionStorage.setItem("clicks",0);
  document.addEventListener("click", countClicks);
  function countClicks(){
  let num=Number(sessionStorage.getItem("clicks"));
  num++;
  sessionStorage.setItem("clicks",num);
}

$( function() {
  var state = false;
  $( "#articleMenu" ).animate({
    backgroundColor: "#aa0000",
    color: "whitesmoke",
    width: 500
  }, 1000 );
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#articleMenu" ).animate({
        backgroundColor: "#aa0000",
        color: "whitesmoke",
        width: 500
      }, 1000 );
    } else {
      $( "#articleMenu" ).animate({
        backgroundColor: "hsl(74, 50%, 50%);",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );

var fontState=localStorage.getItem("fontState");
if(fontState=="bigger"){
  biggerFontsize();
}

function initialFontsize(){
    var artykul = document.querySelectorAll("p");
    for(var i=0;i<artykul.length;i++){
      artykul[i].style.fontSize="initial";
      localStorage.setItem("fontState","initial");
    }
    
}
function biggerFontsize(){
  var artykul = document.querySelectorAll("p");
  for(var i=0;i<artykul.length;i++){
    artykul[i].style.fontSize="200%";
    localStorage.setItem("fontState","bigger");
  }
}
function fontToggle(){
  if(localStorage.getItem("fontState")=="initial"){
    biggerFontsize();
  }
  else{
    initialFontsize();
  }
}


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

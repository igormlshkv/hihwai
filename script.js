function goTop(){
    var myDiv = document.querySelector("article");
    myDiv.scrollTop = 0;
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

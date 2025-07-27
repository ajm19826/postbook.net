//FORMAT - PostBook - JS
window.history.pushState('', 'New Page Title', '/new-url.php');
//Remove (" to enable menu.
document.onclick = hideMenu; 
document.oncontextmenu = rightClick; 

 function hideMenu() { 
     document.getElementById("contextMenu") 
             .style.display = "none" 
 } 

 function rightClick(e) { 
     e.preventDefault(); 

     if (document.getElementById("contextMenu") .style.display == "block"){ 
         hideMenu(); 
     }else{ 
         var menu = document.getElementById("contextMenu")      
         menu.style.display = 'block'; 
         menu.style.left = e.pageX + "px"; 
         menu.style.top = e.pageY + "px"; 
     } 
 }
 BOTLAUNCHER = document.write("");
 var today = new Date();
var time = today. getHours() + ":" + today. getMinutes() + ":" + today. getSeconds();
document. getElementById("style.time"). value = time; 
  tinymce.init({
    selector: '#emoji-search',
    plugins: 'a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker',
    toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents',
    toolbar_mode: 'floating',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
  });
  function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
let on=document.getElementById("on");
  let off=document.getElementById("off");
  on.addEventListener("click", onMode);
  off.addEventListener("click", offmode);
  let target = document.body;
  function onMode(){
    target.style.backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIKvfwB3XJAgh_sUejLAdqlzwtJKlHbWfyQ&usqp=CAU";
  on.style.display="none";
  off.style.display="block";
  function offMode(){
    target.style.backroundColor="grey";
    on.style.display="block";
    on.style.display="none";

  }
}
function newtitle() {
    newPageTitle = 'My Website | Home';
              document.title.replace = newPageTitle;
              }
              function HASHTAG() {
                var query_1 = window.open("", "anotherWindow", "width=300,height=150");
                query_1.document.write("<HTML><TITLE>My Website | Hashtag >  Lorem Ispum</TITLE><body><center><p>Your content here...</p></center></body></HTML>");
              }
              function myFunction(x) {
                x.classList.toggle("fa-thumbs-down");
              }
              const d = new Date();
  document.getElementById("screenTIME").innerHTML = d;
  $(document).ready(function(){
    $("games-button").click(function(){
      $("boydy").remove();
    });
  });
 function gameswindowopen(){
window.open("")
$(document).ready(function(){
    $("games-button").click(function(){
      $("boydy").remove();
    });
  });
 }
 
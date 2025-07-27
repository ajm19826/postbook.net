function openCode(evt, codeName) {
    // All variables must be declared
    var i, tabcontent, tablinks;
   
    // Hide all elements with class="tabcontent" 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
   
    // Select all elements with class="tablinks" and remove the "active" class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
   
    // Display the current tab, and add an "active" class to that displayed button that opened the tab
    document.getElementById(codeName).style.display = "block";
    evt.currentTarget.className += " active";
  }
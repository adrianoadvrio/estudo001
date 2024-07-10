function myFunction() {
    var element = document.getElementById("myDIV"); // grab de "ID" and insert mystyle class .
                                                    // < id="myDIV" class="mystyle">
                                                    //togle it at every button click
  
    element.classList.toggle("mystyle");
  }


  // you can add a class
  //element.classList.add("mystyle");


  // remove a class
  //element.classList.remove("mystyle");
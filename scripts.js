//Javascript for TP6


function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}




window.onload = function() {
  
  loadFileInto("ingredients.html", "#ingredients ul");
  loadFileInto("directions.html", "#directions ol");
  loadFileInto("equiptment.html", "#equiptment ul");
  
  document.querySelector("#titleBanner h1").classList.add("tp");
  
  document.querySelector("#titleBanner h1").onclick = function() {
    
    this.classList.toggle("black");
    
  }
  
  document.querySelector("#recipeColomns #ingredients").onclick =function(){
    this.classList.toggle("tpShow");
  }
   document.querySelector("#recipeColomns #equiptment").onclick =function(){
    this.classList.toggle("tpShow");
   }
    document.querySelector("#recipeColomns #directions").onclick =function(){
    this.classList.toggle("tpShow");
    }
    
   setTimeout(function(){
              document.querySelector("#recipeColomns #equiptment ul").innerHTML += "<li>An appetite for candy</li>";
   },10);
  
    
} //end window.onload 
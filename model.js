
let visitors = [ ["Dave", "lister"]
 ];


function initValidation(formName) {

  let $form = $(formName);

  $(':input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")

    //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
    //than the whole form at once
  });
  
  $("#myform").submit(function(event){
    $form = $("#myform");
    formEl=$form.get(0);

    event.preventDefault();  //prevent default browser submit
    event.stopPropagation(); //stop event bubbling

    validateForm();

    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
    }
    else{
let name =[];
let vis = [];
      //TODO
      //hide form
document.getElementById("myform").style.display="none";
name.push(document.getElementById("first-name").value)
name.push(document.getElementById("last-name").value)
vis.push(document.getElementById("address").value)
vis.push(document.getElementById("city").value)
vis.push(document.getElementById("state").value)
vis.push(document.getElementById("zip").value)
vis.push(document.getElementById("email").value)
vis.push(document.getElementById("phone").value)
localStorage.setItem(name, vis)
document.write("Visitors")

    }
   

  });
}

console.log(localStorage)


function modelDeleteVisitor() {
	localStorage.removeItem(document.getElementById("remove-person").value);
}

function modelPrint(){

}
function findVisitor(id) {}
function findVisitorIndex(id) {}
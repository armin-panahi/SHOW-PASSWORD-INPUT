// PROGRAMMING BY : 
// ARMIN PANAHI | ARMINP10 | P10 | P10CODING
// SHOW PASSWORD INPUT PROJECT

// GET Element's
const password_input = document.querySelector("#password");
const see_pass_icon = document.querySelector(".second_inputs_container > i");

// CREATE FUNCTION FOR ACTION'S
function seePassword(){
    if(password_input.type === "password"){
        password_input.type = "text";
    }
    else{
        password_input.type = "password";
    };
    
    // CHANGE ICON VIEW
    see_pass_icon.classList.toggle("fa-eye");
    see_pass_icon.classList.toggle("fa-eye-slash");
};

// SET CLICK EVENT 
see_pass_icon.addEventListener("click",seePassword);





// FINISH
let name=document.querySelector("#name");

let email=document.querySelector("#email");
let pass=document.querySelector("#pass");
let submit=document.querySelector(".submit");

let nameerror=document.querySelector(".nameerror");
let emailerror=document.querySelector(".emailerror");
let passerror=document.querySelector(".passerror");


submit.addEventListener("click",(e)=>{
    e.preventDefault();
   
 nameval=name.value.trim();
 emailval=email.value.trim();
 passval=pass.value.trim();

 nameerror.textContent="";
 emailerror.textContent="";
 passerror.textContent="";
 
 let isvalid=true;

 if(nameval==="")
 {
    nameerror.innerHTML="*Name is required ";
    nameerror.style.color="red";
    nameerror.style.fontSize="15px";
    isvalid=false;
 }
name.addEventListener("input",()=>{
    if(name.value.trim!="")
    {
        nameerror.textContent="";
    }
})

 if(emailval==="")
 {
    emailerror.innerHTML="*Email is required";
    emailerror.style.color="red";
    emailerror.style.fontSize="15px";
    isvalid=false;
 }
 else if(!emailval.endsWith("@gmail.com"))
    {
        emailerror.innerHTML="Email is not valid";
        isvalid=false;
    }
  
    email.addEventListener("input",()=>{
        if(email!=="" || email.endsWith("@gmail.com"))
        {
            emailerror.textContent="";
        }
    })
    

 if(passval==="")
    {
       passerror.innerHTML="*password is required";
       passerror.style.color="red";
       passerror.style.fontSize="15px";
       isvalid=false;

    }
    else if(passval.length<8)
    {
        passerror.textContent="Password must be at least 8 characters long";
        passerror.style.color="red";
        passerror.style.fontSize="15px";
        isvalid=false;
    }
    pass.addEventListener("input",()=>{
        if(pass.value.trim().length>8)
        {
            passerror.textContent="";
        }
    })
  
    

    if (isvalid) {
        // Show success message
        
            const successMessage = document.createElement('div');
            successMessage.textContent = "Sign up successfully!";
            successMessage.style.color = 'green';
            successMessage.style.fontSize = '18px';
            successMessage.style.marginTop = '20px';
            document.body.appendChild(successMessage);
       
        
        setTimeout(()=>{
            successMessage.style.display="none";

         },4000);
    alert("Sign up successfully!");
        // Reset form values
        name.value = "";
        email.value = "";
        pass.value = "";
    }



        
})



let open_eye=document.querySelector(".showicon");


let close_eye=document.querySelector(".hideicon");
open_eye.style.display='none';
    close_eye.style.display='block';


open_eye.addEventListener("click",(e)=>{
   
    pass.type="password";
    open_eye.style.display='none';
    close_eye.style.display='block';


})


close_eye.addEventListener("click",(e)=>{
   
    pass.type="text";
    open_eye.style.display='block';
    close_eye.style.display='none';


})
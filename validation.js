// validation script here
const inputs = document.querySelectorAll('input');

const patterns =
{
    telephone: /^[0-9]{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^[a-zA-Z\d-\.]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,8}(\.[a-z]{2,8})?$/i
};

function Validate(field,regex){
     if(regex.test(field.value)){
         field.className = 'valid';
     }
     else {
        field.className = 'invalid';
     }

}
inputs.forEach((input) =>
{
    input.addEventListener('keyup',(e) =>{
        //console.log(e.target.attributes.name.value);
        Validate(e.target,patterns[e.target.attributes.name.value]);
    });
});
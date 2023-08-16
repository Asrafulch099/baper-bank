document.getElementById('btn-submit').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
 
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;

   if(email=== 'bravo099@email.com' && password=== 'secret'){
      console.log('valid')
   }
   else{
      console.log('invalid');
   }
})
$(function($) {
   $('#contact-form').submit(function(e) {
       console.log("yooooo");
       var name = document.getElementById('name');
       var email = document.getElementById('email');
       var message = document.getElementById('message');
       
       if (!name.value || !email.value || !message.value) {
           alertify.error("Make sure your form is complete!")
       } else {
           $.ajax({
                url: "https://formspree.io/benswift404@gmail.com", 
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
           e.preventDefault();
           $(this).get(0).reset()
           alertify.success("Message sent!");
       }
   }); 
});
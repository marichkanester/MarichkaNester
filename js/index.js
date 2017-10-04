$(function(){
    $('form input[type=submit]').click(function(e){
        if(!$('form')[0].checkValidity()){
             return;
        }
        e.preventDefault();
         $.ajax({
            url: "https://formspree.io/marichkanester@gmail.com",
            method: "POST",
            data: { 
                personName: $('#inp-name').val(),
                personEmail: $('#inp-email').val(),
                message: $('#your-message').val()},
            dataType: "json"
        }).done(function(){
            document.getElementById("form-send").style.display="none";
             $('#message-box').html('<img src="../img/fox.png"><br><h6>Thank You for Your message</h6>');
        }).fail(function() {
            $('#message-box').html('Error');
        });
        
    })
    
    
})
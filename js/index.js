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
            $('form')[0].reset();
        $('#message-box').html('Thank you!');
        }).fail(function() {
            $('#message-box').html('Error');
        });
    })
    
    
})
$(document).ready( function() {
	    $("#btn-form").click(function(e){
       e.preventDefault();

       $.post('contact.php',{
          nombre : $("#nombre").val(),
          telefono : $("#telefono").val(),
          mail : $("#mail").val(),
          texto : $("#texto").val()
       }).done(function(data){
            if(data == '1'){
               $("#resp").html('Tu mensaje a sido enviado :)').addClass('resp-active');
            }else{
               $("#resp").html('Ocurrio un error al enviar tu mensaje :(').addClass('resp-active');
            }
       });
       
    });
});
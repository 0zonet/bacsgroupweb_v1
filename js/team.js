  $(document).ready(function(){
         $(".galery-item").click(function(){
             var item, i;
             item = $(this);
             i = item.attr('id');

             if(i == 'team1'){
                //Añadir clases active
                $('#team1').addClass('galery-item-active');
                $('#card-one').addClass('my-card-left-active');

                //Quitar clases active
                $('#team2').removeClass('galery-item-active');               
                $('#card-two').removeClass('my-card-right-active');
             }else{
                $('#team2').addClass('galery-item-active');
                $('#card-two').addClass('my-card-right-active');

                $('#team1').removeClass('galery-item-active');
                $('#card-one').removeClass('my-card-left-active');
             }
         });
      });
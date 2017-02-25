 var webs = function(){
       $('#webs .row .my-card').addClass('animated');
       $('#webs .row:first-child .my-card').addClass('flipInY');
       $('#webs .row:last-child .my-card').addClass('flipInX');

       $('#webs .row .my-card').show();
    }


    var services = function(){
       $('#services-list .my-card').addClass('animated');
       $('#services-list .my-card').addClass('flipInX');
       $('#mas').addClass('animated');
       $('#mas').addClass('flipInX');

       $('#services-list .my-card').show();
       $('#mas').show();

    }

    var us = function(){
            $('#us .my-card').addClass('animated');
            $('#us .my-card').addClass('fadeInLeft');
            $('#us .my-card').show();
    }

     $(document).ready(function(){
      $('#webs .row .my-card').hide();
      $('#services-list .my-card').hide();      
      $('#mas').hide();
      $('#us .my-card').hide();

           var options = [
                {selector: '#webs', offset: 200, callback: 'webs()' },
                {selector: '#services-list', offset: 200, callback: 'services()' },
                {selector: '#us', offset: 200, callback: 'us()' }
              ];
              
               Materialize.scrollFire(options);

     });
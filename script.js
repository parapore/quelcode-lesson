
  'use strict';
  
		$(function(){
			$('.btn-trigger').on('click', function() {
				$(this).toggleClass('active');
				return false;
			});
		});


      $(document).ready(function() {
          $('.btn-trigger').on('click', function() {
              $('.phone-menu').slideToggle();
          });
      });

      $(document).ready(function() {
        $('.query1').on('click', function() {
            $('.mask1').slideToggle();
        });
    });

    $(document).ready(function() {
        $('.query2').on('click', function() {
            $('.mask2').slideToggle();
        });
    });

    $(document).ready(function() {
        $('.query3').on('click', function() {
            $('.mask3').slideToggle();
        });
    });

    $(document).ready(function() {
        $('.query4').on('click', function() {
            $('.mask4').slideToggle();
        });
    });

    $(document).ready(function() {
        $('.query5').on('click', function() {
            $('.mask5').slideToggle();
        });
    });

        $(function() {
      $(window).scroll( function() {
        let count = $(this).scrollTop();
        if(count >= 100) {
          $('header').addClass('is-fixed');
        } else {
          $('header').removeClass('is-fixed');
        }
      })
    })
    

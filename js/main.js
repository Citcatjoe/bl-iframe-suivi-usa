(function($){
    
    window.scrollTo(0, 0);
	
    setTimeout(function() { 
        $('body').addClass('is-visible');
        // window.scrollTo(0, 0);
        setTimeout(function() { 
        //  qrCodeTl.play();
      }, 200);
    }, 1000);


    // var isMobileApp = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    // if (isMobileApp) {
    //     document.body.style.display = 'none'; // Masquer le contenu
    // }

    
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if ((/iPhone|iPod|iPad/.test(userAgent) && !window.MSStream && !/Safari/.test(userAgent)) || 
        (/Android/.test(userAgent) && /wv/.test(userAgent))) {
        alert('webview');
    }


    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) 
    {
        $('#link').attr('href', 'https://apps.apple.com/ch/app/blick-fr/id1596317983?l=fr-FR');
        $('.img-qr').hide();
    } 
    else if (/android/i.test(userAgent)) 
    {
        $('#link').attr('href', 'https://play.google.com/store/apps/details?id=ch.blick.news.fr');
        $('.img-qr').hide();
    }
    else 
    { 
       
        $('#link').contents().unwrap();


        $('.img-btn').hide();
    }


   






function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

  

	
    
     


  
})(jQuery);
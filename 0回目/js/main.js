// jsを記述する際はここに記載していく
'use strict'

{
    const images = [
        'img/mainbg.png',
        'img/mainbg1.png',
        'img/mainbg2.png',
        'img/mainbg3.png',
        'img/mainbg4.png',
        'img/mainbg5.png',
        'img/mainbg6.png',
        'img/mainbg7.png',
        'img/mainbg8.png',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];
  
    images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
  
      const li = document.createElement('li');
      if (index === currentIndex) {
        li.classList.add('current');
      }
      li.addEventListener('click', () => {
        mainImage.src = image;
        const thumbnails = document.querySelectorAll('.thumbnails > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
      });
  
      li.appendChild(img);
      document.querySelector('.thumbnails').appendChild(li);
    });
  
    const next = document.getElementById('next');
    next.addEventListener('click', () => {
      let target = currentIndex + 1;
      if (target === images.length) {
        target = 0;
      }
      document.querySelectorAll('.thumbnails > li')[target].click();
    });
    
    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
      let target = currentIndex - 1;
      if (target < 0) {
        target = images.length - 1;
      }
      document.querySelectorAll('.thumbnails > li')[target].click();
    });


    let timeoutId;

    function playSlideshow(){
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        },1000);
    }

    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (isPlaying === false) {
            playSlideshow();
            play.textContent = 'Pause';
        } else{
            clearTimeout(timeoutId)
            play.textContent = 'Play slideshow';
        }
        isPlaying = !isPlaying;
    });

    $('#nav_btn .next').click(function(){
      $('#slide:not(:animated)').animate({
        'margin-left' : -1*$('#slide li').width()
      },function(){
        $('#slide').append($('#slide li:first-child'));
        $('#slide').css('margin-left','0');
      });
    });
  
    $('#nav_btn .prev').click(function(){
      $('#slide:not(:animated)').prepend($('#slide li:last-child'))
      .css('margin-left', -1*$('#slide li').width())
      .animate({
        'margin-left' : 0
      });
    });

    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
  
    
    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
    });
  
    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
}


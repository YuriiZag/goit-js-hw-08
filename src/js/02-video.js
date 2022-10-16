import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

      const iframe = document.querySelector('iframe');
      const player = new Player(iframe);

      player.on('play', function () {
          console.log('played the video!');
        
      });

      player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });


      player.on('timeupdate', throttle(getCurrentTime, 1000) );

      function getCurrentTime(currentTime) {
          console.log(currentTime.seconds);
          

          return localStorage.setItem("videoplayer-current-time", currentTime.seconds);
      }

console.log(localStorage.getItem('videoplayer-current-time'))

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
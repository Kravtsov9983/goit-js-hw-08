import Player from '@vimeo/player';

// import throttle  from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(time) {
    console.log("time", time)
});

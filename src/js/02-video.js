import Player from '@vimeo/player';
import { times } from 'lodash';
import throttle  from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const playerEl = new Player(iframe);


const onPlayEl = ({ seconds }) => {
    localStorage.setItem("videoplayer-current-time", seconds )
}
playerEl.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

playerEl.on('timeupdate', throttle(onPlayEl, 1000))





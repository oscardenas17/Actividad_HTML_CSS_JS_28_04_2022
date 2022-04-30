let navigation = document.querySelector('.navigation');
navigation.onclick = function(){
    navigation.classList.toggle('active')
}


let plantilla =`
<span style="--i:0;--x:-1;--y:0">   <ion-icon name="camera-outline"></ion-icon> </span>
<span style="--i:1;--x:1;--y:0">    <ion-icon name="diamond-outline"></ion-icon>    </span>
<span style="--i:2;--x:0;--y:-1">   <ion-icon name="chatbubble-outline"></ion-icon> </span>
<span style="--i:3;--x:0;--y:1">    <ion-icon name="alarm-outline"></ion-icon>  </span>
<span style="--i:4;--x:1;--y:1">    <ion-icon name="game-controller-outline"></ion-icon>    </span>
<span style="--i:5;--x:-1;--y:-1">  <ion-icon name="moon-outline"></ion-icon>   </span>
<span style="--i:6;--x:0;--y:0">    <ion-icon name="notifications-outline"></ion-icon>  </span>
<span style="--i:7;--x:-1;--y:1">   <ion-icon name="water-outline"></ion-icon>  </span>
<span style="--i:8;--x:1;--y:-1">   <ion-icon name="time-outline"></ion-icon>   </span>
`

navigation.insertAdjacentHTML("beforeend", plantilla)
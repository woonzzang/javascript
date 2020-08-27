//canvas.js
(function($){
  
    var can = document.getElementById('canvas_wrap'); //캔버스는 자바스크립트 코딩만을 합니다. 
    var ctx = can.getContext('2d'); //캔버스의 콘텍스트 가져온다. 선언문

        console.log( can );
        console.log( ctx );

        //드로잉
        //ctx.fillRect(200, 200, 200, 200);
        ctx.strokeRect(200, 200, 200, 200);
        ctx.fillstyle = 'blue';

})();

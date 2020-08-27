(function($, window, document, undefined){
    // var h =5;
    // var m =27;
    // var s =30;

    //날짜 객체

    setInterval(timerFn, 1000);

    function timerFn(){
        var toDay = new Date();  //날짜 생성자
        var h = toDay.getHours()-12;   //24시각제를 12시각제로 변경
        var m = toDay.getMinutes();   
        var s = toDay.getSeconds();   
        console.log('h '+ h );
        console.log('m '+ m );
        console.log('s '+ s );
    
    
 
    $('.timeS').css({ transform:'rotate('+(6*s)+'deg)'});   // 공배 불인정
    $('.timeM').css({ transform:'rotate('+(6*m)+'deg)'});
    $('.timeH').css({ transform:'rotate('+((30*h)+(m*0.5))+'deg)'});
}
})(jQuery, window, document);
//timer.js


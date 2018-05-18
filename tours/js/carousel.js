function $(id) {
    return document.getElementById(id);
}
var oCf=$("carousel_figure");
var cfc=$("cf_content");
var aImg=cfc.children;
var cb=$("circle_btn");
var now=0;
var nowZIndex=2;
for (var i=0;i<aImg.length;i++){
    setInterval(function(){
        now++;
        for (var i=0;i<aImg.length;i++){
            if (now==aImg.length-1){
                now=0;
            }
            aImg[now].style.zIndex=nowZIndex++;
        }
    },2000)
}

var hBtn=document.getElementsByClassName("ht_btn")[0];
var bc=document.getElementById("btn_content");
var del=bc.getElementsByTagName("div")[0];
hBtn.onclick=function () {
   bc.style.display="block";
}
del.onclick=function () {
  bc.style.display="none";
}
// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi


$(document).ready(function(){

 $(".quad").each(function(){
   $(this).text(randomNumber(1,100));
 })

  function randomNumber(min, max) {
    return Math.floor(Math.random()* max - min) + min;
  }

  for (var i = 0; i < 16; i++) {
    $(this).text(randomNumber(1,100));

  }

 $(".quad").click(function(){

   $(this).addClass("active");
 });

});

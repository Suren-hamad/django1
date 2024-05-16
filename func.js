$(document).ready(() => {
  $("#sign1").click(function show1() {
    $("#L_C_1").show();
  });

  $("#L_C_1").mouseleave(function () {
    $("#L_C_1").hide();
  });

  $("#icon1").click(function () {
    $("#list1").show();
  });
  $("#list1").mouseleave(function () {
    $("#list1").hide();
  });

  // $('#pi').css({
  //   color:'red'
  // })

  $("#log").on('click', function(event) {
    var us = "ali";
    var ps = "a1122";

    var use1 = $("#user").val();
    var pas1 = $("#pass").val(); 
    var lk= $('a').attr("href");
    if (pas1 === ps && use1 === us) {
      // $("#sign1").hide();
      // window.location.href = "INDEX.HTML";

      
    
      event.preventDefault(); 
      window.location.href = lk;
     
   

      // $("#sign1").css({
      //   display:'none'
      // });
      // $("#log").hide();
      // $("#account1").slideDown();

     
    } else {
      alert("something went wrong");
    }
  });


  function rep(){
    $("#sign1").hide();
    $("#account1").show();

  }







});
//   $('#log2').on('click', function(event) {

    
//     event.preventDefault(); 

//    window.location.href = lk;
// })

  // $(document).ready(() => {
  // });
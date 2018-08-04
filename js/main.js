function fun(){
    $("#btn").click(function(){
        $("#disappear").show()
    })


}

// function fun2(){
    
//     if($('#choice1').attr('checked')){
//         $('label').css('color','red')
//     }
// }




function  fun2(){
    

        

    if($("#choice1").is(':checked')){



   
    
    $('#label1').css({'color':'green'}) ;
    $('#disappear').delay(3000).fadeOut();
    $('#Question2').delay(3025).fadeIn();

        
    }
       else if($('#choice2').is(':checked'))
    {
        $('#label2').css({'color':'red'});


    }
       else if($('#choice3').is(':checked'))

        {
            $('#label3').css({'color':'red'});
}

    else if($('#choice4').is(':checked'))
        {
            $('#label4').css({'color':'red'});}
}




 

 




 
function fun3(){

   

    if($('#choice5').is(':checked')){

        $('#label5').css({'color':'red'});

    }else if($('#choice6').is(':checked')){

        $('#label6').css({'color':'red'});

    }else if($('#choice7').is(':checked')){

        $('#label7').css({'color':'red'});
        
    }else if($('#choice8').is(':checked')){

        $('#label8').css({'color':'green'});
        $('#Question2').delay(3000).fadeOut() 
        $('#Question3').delay(3025).fadeIn()     

    }
}

function fun4(){
    if($('#choice9').is(':checked')){
        $('#label9').css({'color':'red'});

    }else if($('#choice10').is(':checked')){
        $('#label10').css({'color':'red'});

    }else if($('#choice11').is(':checked')){
        $('#label11').css({'color':'red'});

    }else if($('#choice12').is(':checked')){
        $('#label12').css({'color':'green'})
        $('#Question3').delay(3000).fadeOut()
        $('#success').delay (3025).fadeIn()
    }
}



// function gihpy(){
//  var search = 'funny'
//  var pic = document.getElementById("gpy")

//   $.ajax({

//     url:"http://api.giphy.com/v1/gifs/search?q=" +search+ " &api_key=GSDnLqZCnUusYNylGRmMR63qXGxgt4dk&limit=5 ",
//     dataType:'json',
//     success:function(){
//         pic.innerHTML +="<div class='gip' > <img src=' " + data.data +


//     },
//     error: function(){
//         console.log('API  call failed')
//     },
//     type:'GET'
    

//    });
// }


//    var G  = function (){
//     var userInput = 'victory'
    
//     var pic = document.getElementById('image')

//     $.ajax({
//     url: "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=i0NwF1Awg8DlkZF0TqqVgCKn0hAckF3c&limit=10",
    
//     dataType: "json",
//     success: function(data) {
//         console.log(data)
//         for(var i = 0; i < data.data.length; i++) {
//             pic.innerHTML = "<div class='gif'><img src='" + data.data[1].images.original.url +"'></div>"
//         }
        
//     },
//     error: function() {
//         console.log("API call failed")
//     },
//     type: 'GET' 
// });


// }

// document.getElementById('image').innerHTML = G;
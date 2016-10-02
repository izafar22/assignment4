$(document).ready(function(){
    
    function init(){
        for(var i=0;i<=99;i++){
    $('.container').append('<div id="col"'+ i +' class="numchart"><span style="display:inline;">'+i+'</span></div>');
        }
        $('#submit').attr({disabled:'disabled'});
        
}
    init();
var count=0;
    $('.numchart').click(function(){
    var selected=$(this).text();
   if(count<1){    
    $(this).html('');
   count++;
   $('#inputBox').attr({contentEditable:'true'});
   $('#inputBox').blur(function(){
 $('#submit').attr({disabled:'true'})
   })
   
   
   }
  
    });
})


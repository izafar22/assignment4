$(document).ready(function(){
    
    function init(){
        alert('I am running');
        for(var i=0;i<=99;i++){
    $('.container').append('<div id="col"'+ i +' class="numchart"><span style="display:inline;">'+i+'</span></div>');
        }
        
}
    init();
})
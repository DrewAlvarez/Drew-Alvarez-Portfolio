$(document).ready(function(){
    $(".appBtn").click(function(){
        $(".objAbil").hide();
        $(".workHist").removeAttr("hidden");
    })
    $(".eduBtn").click(function(){
        $(".workHist").hide();
    })
})

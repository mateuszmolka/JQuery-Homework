'use strict';
$(function(){
    
    var paraDiv=$('#paraDiv');
    
    $('#buttonDown').click(function(){
        paraDiv.append(paraDiv.children().first())
    })
    
    $('#buttonUp').click(function(){
        paraDiv.prepend(paraDiv.children().last())
    })
    
})


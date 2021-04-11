$(document).ready(function(){
    /* 
    MENU BIG
    */
    var item = $("li.item");
    console.log(dropDown);
    var link = item.children("a");
    console.log(link);
    var dropDown = item.children(".drop-down");
    console.log(dropDown);
    
    link.click(function() {
        var openMenu = $(this).next(dropDown);
        
        dropDown.not(openMenu).hide();
        
        openMenu.toggle();
    });
    
    /* End doc ready */
})



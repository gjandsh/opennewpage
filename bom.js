window.$ = function(){ }

$.bom={openAtCenter: function(width, height, url){
    let left=window.screen.availWidth/2-width/2
    let top=window.screen.availHeight/2-height/2
    window.open(url,'_blank',`width=${width}px,height=${height}px,left=${left}px,top=${top}px`)
}}
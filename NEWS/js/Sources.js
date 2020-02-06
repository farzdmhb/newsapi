$(function () {
    this.$container = $('.js-container');
        this.$NEWSContainer = this.$container.find('.js-NEWSs-container');
        this.$moreButton = $('#getMoreNEWS');
    var req = new XMLHttpRequest();
        const url='https://newsapi.org/v2/sources?apiKey=4eda22e00b22424a91340c2715a5e73c';
        req.open('GET', url, false);
        req.send(null);
        

        var obj = JSON.parse(req.responseText);
        
        var ITEMLIST  = obj.sources;
       
        

        var index = 0;
        var $NEWSContainer = this.$NEWSContainer;
        for (var item in ITEMLIST){
          
                var div = "<div class='col-lg-4 animated  ITEM'  style='padding:15px;margin-bottom: 15px;' > <div class=''> </div> <div style='border: 1px solid #eee; padding: 10px; text-align: center;'> <p style='cursor:pointer' id='"+ITEMLIST[item].id+"' class='NEWSTitle'>"+ITEMLIST[item].name+"</p><p style='cursor:pointer' id='"+ITEMLIST[item].id+"' class='NEWSTitle'>"+ITEMLIST[item].description+"</p><a href='"+ITEMLIST[item].url+"'>Direct Link</a> </div></div>"

                //var div = "<div class='col-lg-4 animated  ITEM' id='"+ITEMLIST[item].name+"' style='padding:15px;margin-bottom: 15px;' > <div class='imageHolder'> <p class='newsImage' style='width:100%' />"+ITEMLIST[item].description+"</p></div> <div style='border: 1px solid #eee; padding: 10px; text-align: center;'> <p style='cursor:pointer' class='NEWSTitle'>"+ITEMLIST[item].url+"</p></div></div>"
                $NEWSContainer.append( div);
               // $NEWSContainer.append( '<label>' + NEWS[item].title + '</label>');
    
                index++;
            
        }

       
        this.$NEWSContainer.on('click', '.NEWSTitle', function(){
           
           // alert( $(this).attr('id'));
            window.location.href = 'NEWS.html?soucrce=' +  $(this).attr('id');

           
        });


       // 
        

});

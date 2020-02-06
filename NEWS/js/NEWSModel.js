



var NEWSModel = function (source) {
    this.NEWS = [];
    this.addNEWSEvent = new Event(this);
   
    this.totalNumber = 0;
    this.currentPage = 1;
    this.selectedTitle = "daf";
    this.selectedSource = source;
   
    

};
 
NEWSModel.prototype = {

    setSelectedSource : function(name){
        selectedSource = name;
    },
    getTotalNumber : function(){
        return this.totalNumber;

    },
    getCurrentPage : function(){
        return this.currentPage;

    },
    
    
    addNEWS: function (ITEM,page) {
      
        var obj = JSON.parse(ITEM);
        var ITEMLIST  = obj.articles;
        this.totalNumber = obj.totalResults;
        this.currentPage = page;
        for (var item in ITEMLIST){
           
            this.NEWS.push({
                source: ITEMLIST[item].source,
                author:ITEMLIST[item].author,
                title: ITEMLIST[item].title,
                description: ITEMLIST[item].description,
                url: ITEMLIST[item].url,
                urlToImage: ITEMLIST[item].urlToImage,
                publishedAt: ITEMLIST[item].publishedAt,
                content: ITEMLIST[item].content,
    
            });
        }
        
        
        this.addNEWSEvent.notify();
    },
    
    getNEWS: function () {
        var final  = this.NEWS.slice(this.NEWS.length - 20, this.NEWS.length);
        return final;
    },
    changeSelectedItem: function(title){
        index = 0;
        for (i = 0; i < this.NEWS.length; i++) {
             if (this.NEWS[i].title === title){
                index = i;
                return this.NEWS[i];
             }
          } 
          
        // index  = 0;
        // for (var searchitem in this.NEWS){
        //     if (this.NEWS[searchitem] == title){
        //         index = searchitem;
        //     }
        //     else{
        //         this.NEWS[searchitem].title;
        //     }
        // }
      // let newtitle =  this.NEWS[0].title;
       return title;
    },
    getITEMNEWS: function(){
        var final  = this.NEWS.slice(this.NEWS.length - 20, this.NEWS.length);
        return final;
    }

    

    


};


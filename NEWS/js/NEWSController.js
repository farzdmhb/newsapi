var NEWSController = function (model, view,type,source) {
    this.model = model;
    this.view = view;
    if (type === 1){  //NEWS
        this.addNEWS();
        this.initNEWS();
    }
    else if (type === 2){  //SOURCE
        this.addNEWS();
        this.initSource();
    }
    
};

NEWSController.prototype = {

    initNEWS: function () {
        this  //.toDoList()
            .setupHandlersNEWS()
            .enableNEWS();
    },
    initSource: function () {
        this  //.toDoList()
            .setupHandlersSource()
            .enableSource();
    },

    // toDoList: function () {
    //     this.addNEWS();
    //     return this;
    // },

    setupHandlersNEWS: function () {
      
        this.moreHandler = this.getNewdata.bind(this);
        this.itemSelectHandler = this.itemclick.bind(this);
        
        return this;
    },

    enableNEWS: function () {

        
        //this.view.moreButtonEvent.attach(this.moreHandler);
     

         /**
         * Event Dispatcher
         */
        this.view.itemClickEvent.attach(this.itemSelectHandler)
        this.view.moreButtonEvent.attach(this.moreHandler)
        return this;
    },

    setupHandlersSource: function () {
      
        this.moreHandler = this.getNewdata.bind(this);
        this.itemSelectHandler = this.itemclick.bind(this);
        
        return this;
    },

    enableSource: function () {

        
        //this.view.moreButtonEvent.attach(this.moreHandler);
     

         /**
         * Event Dispatcher
         */
        this.view.itemClickEvent.attach(this.itemSelectHandler)
        this.view.moreButtonEvent.attach(this.moreHandler)
        return this;
    },
  
    getDataFromServer: function(page){
        var source = this.model.selectedSource;
       
        var req = new XMLHttpRequest();
        const url = 'https://newsapi.org/v2/top-headlines?' +'sources='+source+'&' +'apiKey=4eda22e00b22424a91340c2715a5e73c';
     
      //  const url='https://newsapi.org/v2/everything?q=bitcoin&page='+page+'&from=2020-01-06&sortBy=publishedAt&apiKey=4eda22e00b22424a91340c2715a5e73c';
       // alert(url);
        req.open('GET', url, false);
        req.send(null);
        this.model.addNEWS(req.responseText,page);
      
    },
    addNEWS: function () {
        this.getDataFromServer(1);

        
    },
    getNewdata : function(){
        let nextPage = this.model.getCurrentPage() + 1;
        this.getDataFromServer(nextPage)
    },
    itemclick : function (sender,args){
      
        var item = this.model.changeSelectedItem(args.title);
        

        
        window.location.href = 'detail.html?title='+item.title+'&contetn='+item.content+'&imageUrl='+item.urlToImage+'&publishedAt='+item.publishedAt;
       // alert(args.title);
       
    }

    

};

var NEWSView = function (model,type) {
    this.model = model;
    this.getItemEvent = new Event(this);
    this.moreButtonEvent = new Event(this);
    this.itemClickEvent = new Event(this);
    this.getSoucrceEvent = new Event(this);
    this.variable = '0';
    if(type === 1){   // NEWS
        this.initNEWS();
    }
    else if(type === 2){   // SOURCE
        this.initSource();
    }
   
    
};

NEWSView.prototype = {

    initNEWS: function () {
        this.createChildrenNEWS()
            .setupHandlersNEWS()
            .enableNEWS();
    },
    initSource: function () {
        this.createChildrenSource()
            .setupHandlersSource()
            .enableSource()
            
    },

    createChildrenNEWS: function () {
        // cache the document object
        
        this.$container = $('.js-container');
        this.$NEWSContainer = this.$container.find('.js-NEWSs-container');
        this.$moreButton = $('#getMoreNEWS');
        this.$itemDetail = $('#itemDetial');
        
        return this;
    },

    setupHandlersNEWS: function () {
        this.itemClickedHandler = this.itemclicked.bind(this)
        this.showNEWSHandler  = this.showNEWS.bind(this);
        this.moreHandler = this.moreBottonClicked.bind(this);
        
        return this;
    },

    enableNEWS: function () {
        
        this.$NEWSContainer.on('click', '.NEWSTitle', this.itemClickedHandler);
        this.$moreButton.click(this.moreHandler);
        
        /**
         * Event Dispatcher
         */
        this.model.addNEWSEvent.attach(this.showNEWSHandler);
      

        return this;
    },
    createChildrenSource: function () {
        // cache the document object
        
        this.$container = $('.js-container');
        this.$NEWSContainer = this.$container.find('.js-NEWSs-container');
        this.$moreButton = $('#getMoreNEWS');
        this.$itemDetail = $('#itemDetial');
        
        return this;
    },

    setupHandlersSource: function () {
        this.getSoucrceHandler = this.getSoucrce.bind(this)
        return this;
    },

    enableSource: function () {
        
        this.$NEWSContainer.on('click', '.NEWSTitle', this.itemClickedHandler);
        this.$moreButton.click(this.moreHandler);
        
        /**
         * Event Dispatcher
         */
        this.model.addNEWSEvent.attach(this.showNEWSHandler);
      

        return this;
    },
    



   

    // getItemDetail: function () {
    //     this.getItemEvent.notify({
    //         NEWS: this.$NEWSTextBox.val()
    //     });
    // },

    

    show: function () {
        this.buildList();
    },

    buildList: function () {
        var NEWS =this.model.getNEWS();
        
        var html = '';
        var $NEWSContainer = this.$NEWSContainer;
        var index = 0;
        for (var item in NEWS) {
           if (NEWS[item].urlToImage == null){
            NEWS[item].urlToImage = "images/default.jpg"
           }
           var div = "<div class='col-lg-4 animated  ITEM' id='"+(item+1)+"' style='padding:15px;margin-bottom: 15px;' > <div class='imageHolder'> <img class='newsImage' style='width:100%' src='"+NEWS[item].urlToImage+"'/></div> <div style='border: 1px solid #eee; padding: 10px; text-align: center;'> <p style='cursor:pointer' class='NEWSTitle'>"+NEWS[item].title+"</p><a href='"+NEWS[item].url+"'>Direct Link</a> </div></div>"
            $NEWSContainer.append( div);
           // $NEWSContainer.append( '<label>' + NEWS[item].title + '</label>');

            index++;
        }
       
          

    },
    moreBottonClicked :function()
    {
        this.moreButtonEvent.notify();
        //alert("aaa");
    },
    itemclicked :function(){
        // selectedTitle  = $(event.target).text()
        // this.itemClickEvent.notify({
        //     title: selectedTitle
        // });
    },
    getSoucrce: function(){
      

    },
    



    /* -------------------- Handlers From Event Dispatcher ----------------- */

    showNEWS: function () {
        this.show()
    },
   

    /* -------------------- End Handlers From Event Dispatcher ----------------- */


};




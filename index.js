var MyRouter = Backbone.Router.extend({

  routes: {
    '*page': 'page'
  },

  initialize: function(){
    $('body').on('click', 'a', function(e){
      console.log('navigating to: ' + $(this).attr('href'));
      try {
        Backbone.history.navigate($(this).attr('href'));
      } catch(e){
        console.log(e);
      }

      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  },

  page: function(){

  }

});

$(function(){
  var router = new MyRouter();
  Backbone.history.start({ pushState:true, root: '/' });
});



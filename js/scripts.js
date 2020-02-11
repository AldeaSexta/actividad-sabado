document.addEventListener ("DOMContentLoaded", function(event) {

  // LazyLoad Images
  $("img").each(function() {
      
    $(this).attr("data-src",$(this).attr("src"));
    $(this).removeAttr("src");
    console.log($(this)[0].outerHTML);
  });
  function addLazyLoad() {
    var lazyLoad = document.querySelectorAll("img");
    for (var i = 0; i < lazyLoad.length; i++)
      lazyLoad[i].className += " lazyload";

  }

  addLazyLoad();

  $(document).ready(function(){
    columnChart();
    
    function columnChart(){
        var item = $('.chart', '.column-chart').find('.item'),
        itemWidth = 100 / item.length;
        item.css('width', itemWidth + '%');
        
        $('.column-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            itemProgress.css('height', itemProgressHeight);
        });
    };

  });

});
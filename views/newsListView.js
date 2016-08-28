var NewsListView = function() {

  return {

    list: function() {

    },

    render: function(jsonoutput) {
      var html = "<h2>UK News Summary</h2><ul>";
      var allArticles = jsonoutput;
      for(i = 0; i < allArticles.length; i++) {
        newsTitle = allArticles[i].webTitle;
        openingHTML = "<div><li><a id='news' href='#" + i + "'>";
        html += openingHTML + newsTitle + "</a></li></div>";
      }
      document.getElementById('app').innerHTML = html + "</ul>";
    }

  };

};

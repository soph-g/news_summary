var Storage = function() {

  var HttpClient = function(){
    this.get = function(url, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            callback(httpRequest.responseText);
        }
      };
      httpRequest.open("GET", url, true);
      httpRequest.send(null);
    };
  };

  var http = new HttpClient();

  var dataset = [];

  return {

    newsList: function() {
      return dataset;
    },


    getNews: function() {
      var httprequest = new XMLHttpRequest();
      http.get("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&show-fields=all", function(response) {
        news = (JSON.parse(response)).response.results;
        dataset = [];
        for (i = 0; i < news.length; i++) {

          dataset.push(news[i]);
        }
        newsView.render(dataset);
      });
    },

    getSummary: function(articleUrl, callback) {
      var httprequest = new XMLHttpRequest();
      http.get(articleUrl, function(response) {
        article = (JSON.parse(response)).text;
        callback(article);
      });

    }

  };

};

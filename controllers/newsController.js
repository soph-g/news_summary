// var noteList = new NoteList();
// var noteView = new NoteListView(noteList);
var newsView = new NewsListView();
var storage = new Storage();
var singleArticle = new SingleArticleView();

window.addEventListener("load", function() {
  loadNoteView();
});


window.addEventListener("hashchange", function() {
  showSelectedStory();
});

function loadNoteView() {
  storage.getNews();
}


function showSelectedStory() {
  showNews(getNewsID(window.location));
}

function getNewsID(location) {
  return location.hash.split("#")[1];
}

function showNews(newsID) {
  var url = storage.newsList()[newsID].webUrl;
  var articleUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url;

  document.getElementById("story-view").innerHTML = storage.getSummary(articleUrl);
}

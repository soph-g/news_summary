var expect = new Harper();
var describe = expect.describe;
var it = expect.it;


describe('News Story Model', function() {

  it("returns a list of new stories", function() {
    expect.toEqual(newsStoryModel.getAll() === true);  
  });


});

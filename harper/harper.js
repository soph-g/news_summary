var Harper = function() {

  var space = "   ";

  return {
    describe: function(name, testBlock) {
      console.log(name);
      testBlock();
    },

    it: function(name, testBlock) {
      console.log(space + name);
      testBlock();
    },

    toEqual: function(assertion){
      if (!!assertion) {
        console.log(space.repeat(2) + "passed" + " 👍 💃 🍾");
      } else {
        console.log(space.repeat(2) + "failed" + " 👎 🙈 🙅");
      }
    }

  };

};

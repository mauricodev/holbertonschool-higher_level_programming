const functions = {
  callMeMoby: function (x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  },
};

module.exports = functions;

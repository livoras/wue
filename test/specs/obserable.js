var obserable = require("../../src/obserable.js")

describe("Test obserable", function() {
  describe("Test obserable string attribute", function() {
    var attr = null;

    before(function() {
      attr = obserable("i love you")
    })

    it("init default value and get it", function() {
      attr().should.be.equal("i love you")
    })

    it("watcher function should be invoked when attr is changed", function() {
      var watcher = sinon.spy()
      attr.$$.watch(watcher)
      var val = "i love you, too"
      attr(val)
      watcher.should.have.been.calledWith(val, attr.$$)
      attr().should.be.equal("i love you, too")
    })
  })
})
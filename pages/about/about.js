Page({
  data: {
    time: Date(),
  },
  updateTime: function() {
    this.setData({
      time: Date()
    })
  },
  onLoad: function() {
    var vm = this;
    setInterval(vm.updateTime, 1000)
  }
})
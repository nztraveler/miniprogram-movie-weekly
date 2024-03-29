// pages/weekly/weekly.js
Page({

  /**
   * Page initial data
   */
  data: {
    thisWeekMovieList: [{
      name: '教父',
      comment: '最精彩的电影。。。',
      image: '/images/my_avatar.jpg',
      isHighlyRecommended: false
    }, {
      name: '教父2',
      comment: '最精彩的电影。。。',
      image: '/images/my_avatar.jpg',
      isHighlyRecommended: false
    }, {
      name: '教父3',
      comment: '最精彩的电影。。。',
      image: '/images/my_avatar.jpg',
      isHighlyRecommended: false
    }],
    count: 213,
    score: 55,
    currentIndex: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.setData({
      currentIndex: this.data.thisWeekMovieList.length - 1
    })
  },

  onBackTap: function(e){
    console.log(e)
    this.setData({
      currentIndex: this.data.thisWeekMovieList.length - 1
    })
  },

  // onChange: function (event){
  //   console.log(event)
  //   this.setData({
  //     currentIndex: current
  //   })
  // },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})
// pages/data/data.js
var country = 'Worldwide';
let site = "https://covid19-api.com/country?name="+country+"&format=json"  
Page({
 
 data: {
   name: country
 },
bindFormSubmit: function(e){
  
  country = e.detail.value.textarea
  site = "https://covid19-api.com/country?name=" + country + "&format=json"
  
  wx.request({
    url:  site,
    success: (res) => {
      
      let result = res.data[0]
      this.setData({ result })
      
    }
  })
},

 onLoad: function () {
   wx.request({
     url: 'https://covid19-api.com/totals',
     success: (res) => {
       
       let result = res.data[0]
       this.setData({ result })
     }
   })
 }
})
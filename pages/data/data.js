// pages/data/data.js
let country = 'spain';
let site = "https://covid19-api.com/country?name="+country+"&format=json"  
Page({
 
 data: {
   name: "World data"
 },
bindFormSubmit: function(e){
  
  country = e.detail.value.textarea
  site = "https://covid19-api.com/country?name=" + country + "&format=json"
  
  wx.request({
    url:  site,
    success: (res) => {
      
      let result = res.data[0]
      this.setData({ result })
      this.setData(this.name= country) 
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
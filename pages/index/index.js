//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    value:"",
    status:"pending",
    pending:[],
    finished:[]
  },
  //事件处理函数
  add:function(){
    let arr = this.data.pending;
    let item = {
      value:this.data.value,
      status:"pending",
      checked:false,
      disabled:false
    }
    arr.push(item)
    this.setData({
      pending:arr
    })
  },
  getValue:function(e){
    this.setData({
      value : e.detail.value
    })
  },
  change:function(e){
    let temp = e.target.dataset.item;
    let tempArr = this.data.pending;
    let tempArr2 = this.data.finished;
    if(temp.status === "pending"){
      let index = tempArr.findIndex((element)=> element.value === temp.value)
      tempArr.splice(index,1)
      tempArr2.push({
        value:temp.value,
        status:"finished",
        checked:true,
        disabled:true
      })
    }else{
      let index = tempArr2.findIndex((element)=> element.value === temp.value)
      tempArr2.splice(index,1)
      tempArr.push({
        value:temp.value,
        status:"status",
        checked:false,
        disabled:false
      })
    }

    this.setData({
      pending:tempArr,
      finished:tempArr2
    })
  }
 
})

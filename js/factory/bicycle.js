//console.log('工厂模式');
// 函数属于对象,函数是一等对象
// 类，就是一个简单的只有一个构造函数，类跟构造函数没有区别
// js 本身并没有类，只是用的人多了，给了这个实现
// js 只有对象 Object原型对象的始祖
// 原型 prototype
// js 不需要传统继承，只要有个参照物就可以实现原型式继承
var Bicycle=function(brand){
  // 构造函数 constructor
  // new 时执行
  this.brand=brand || '凤凰'
}
// 原型 凤凰。。。
// 二维码，手机支付，
// js 继承关系，不是
// 共享单车完全颠覆了自行车，
Bicycle.prototype={
  sellBicycle:function(model){
    var bicycle=null;
    switch(model){
      case 'Giant':
        bicycle=new Giant()
      break;
      case'Speedster':
        bicycle=new Speedster()
        break;
        case 'u2':
        bicycle=new u2()
    }

    bicycle.assemble();
    bicycle.wash();
    bicycle.provideRepair();

    return bicycle;
  }
}
    // function assemble(){
    //   console.log('已组装')
    // }

    // function wash(){
    //   console.log('已清洗')
    // }

    // function provideRepair(bikename){
    //   switch (bikename){
    //     case 'Giant':
    //       console.log('保修3年')
    //       break;
    //     case 'Speedster':
    //       console.log('保修2年')
    //       break;
    //     case 'u2':
    //       console.log('保修1年')
    //       break;
    //   }
    // }
    function Speedster() {
    }
    Speedster.prototype = {
      assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },
      provideRepair: function() {
        console.log('保修一年');
      }
    }
    
    function Giant() {
    }
    Giant.prototype = {
      assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },
      provideRepair: function() {
        console.log('保修二年');
      }
    }
    
    function U2() {
    }
    U2.prototype = {
      assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },
      provideRepair: function() {
        console.log('保修三年');
      }
    }
    
    // console.log('卖车了...');
    // return null;

    // 面向对象们
    // 卖车，商店，很多车，维修，仓库
  

// js 基本类型：字符串，数字，布尔值，undefined,null
// 复杂类型 object<-prototype Array function json

// 雷速达
// function Speedster(){

// }
// Speedster.prototype={

// }
// //捷安特
// function Giant(){

// }
// Giant.prototype={

// }

function u2(){

}
u2.prototype={
  
}


var bicycle=new Bicycle();
console.log(bicycle.sellBicycle('Giant'));
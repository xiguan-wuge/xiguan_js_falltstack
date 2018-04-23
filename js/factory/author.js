function Person(name){
  this.name=name;
}
Person.prototype.getName=function(){
  return this.name;
}

//IT工程师
//extends Pereson
function Coder(name,languages){

  Person.call(this,name)
  // 父类没有的可以加
  // 语言
  this.languages=languages
}

// new Person 新的对象就是Coder的原型对象
Coder.prototype=new Person();
Coder.prototype.constructor=Coder 
Coder.prototype.getlanguages=function(){
  return this.languages;
}

var zrf=new Person('周润发');
console.log(zlf.name);
var xwq=new Coder('许文强',['javascript','python','c/c++']);
console.log(xwq.name+''+xwq.languages.join(','));
console.log(xwq.getName());

console.log(xwq.getlanguages())

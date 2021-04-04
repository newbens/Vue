const app = new Vue({
  el: '#app',
  data:{
    books:[
      {
        id:1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id:2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id:3,
        name: '《Java编程思想》',
        date: '2005-8',
        price: 125.00,
        count: 1
      },
      {
        id:4,
        name: '《代码大全》',
        date: '2006-1',
        price: 124.00,
        count: 1
      },
    ]
  },
  methods:{
    addClick(index){
      this.books[index].count++;
    },
    subClick(index) {
      if(this.books[index].count == 1){
        this.remove(index);
      }else {
        this.books[index].count--;
      }
    },
    remove(index) {
      this.books.splice(index,1);
    },
    getFinalPrice(price) {
      return ''+price.toFixed(2)
    },
    getAllPrice() {
      let allPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        allPrice += this.books[i].price * this.books[i].count;
      }
      return allPrice;
    }
  },
})

const nums = [20, 30, 60, 90, 100, 120]
//数组函数使用
//1.filter函数  返回小于100的新数组
//filter函数会自己遍历数组 它的参数是方法 方法中的n是每次遍历的数
let newNum = nums.filter(function (n) {
  return n < 100;
})
//2.map函数   //会遍历数组 并且对每个元素做操作返回一个新数组
let new2Num = newNum.map(function (n) {
  return n*2
})
//3.reduce  对数组内容进行汇总
new2Num.reduce(function (pre,n) {
  //pre 是上一次返回的值
  return pre+n; //返回数组总和
},0)
/*执行顺序：
 第一次： 0 40
 第二次： 100 60
 第三次： 100 180

 */

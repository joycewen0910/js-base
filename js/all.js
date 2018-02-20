//**// document選取網頁上的內容/網頁上的主體 .使用js的相關功能
//document.getElementById

//alert("~~~~~")

//js2-1 //**// .textContent 修改文字
document.getElementById("js2-1Link1").textContent = "文字被修改了！！";

//變數 var ======================================================================
//**// “變數”：常見的資料型別 - 數字Number , “字串string” , 布林Boolean.

//js3-1
var cakePrice = 200;
document.getElementById("js3-1Price").textContent = cakePrice;

//js3-2
var cartGreet = "hello ";
var cartHost = "Joyce";
document.getElementById("js3-2Cart").textContent = cartGreet + cartHost;

//js3-3
console.log(cartGreet);
console.log(cartHost);

//js3-4
var cakePrice = 200;
var CakeBuyAmoun = 6;
var CakeTotalPrice = cakePrice * CakeBuyAmoun;

document.getElementById("js3-4CakePrice").textContent = cakePrice;
document.getElementById("js3-4CakeBuyAmount").textContent = CakeBuyAmoun;
document.getElementById("js3-4CakeTotalPrice").textContent = CakeTotalPrice - 10;

//函式 function ======================================================================

//js4-1
//**// greet() 函式名稱, { 要執行的內容 }
function greet() {
    console.log("歡迎光臨");
    console.log("需要做餐點介紹嗎？");
}
//**//執行函式
greet();

//js4-2
//**// function 函式名稱(參數), 參數有點像變數
function count(oneNum, twoNum) {
    var total = oneNum * twoNum; //**// 區域變數--函式結束後，此變數就會被清除
    console.log("區域總共：" + total + "個");
}
count(10, 20);

//js4-3
var oneNum = 10; //**// 全域變數
var twoNum = 20; //**// 全域變數
var total = oneNum * twoNum * 2; //**// 全域變數
function count2() { //**// Hoisting, 擺放的順序不管在哪裡，在讀取時都會被優先處理
    console.log("全域共：" + total + "元");
}
count2();
count2();
count2(); //**// 如果要執行函數的時候，只需要呼叫該函數的名字就可以囉
console.log(total);

//**//使用 parseInt() 將字串轉變成數字
var Number = "6";
console.log(typeof (Number)); //**//查詢屬於哪總資料型別 (數字 , “字串string” , 布林)
Number = parseInt(Number);
console.log(typeof (Number));

//js4-4 //**// .onclick 事件
document.getElementById("js4-4totalBtn").onclick = function () {
    var mainMealOne = 20;
    var dessertOne = 10;
    var mainMeal = parseInt(document.getElementById("mainMeal").value * mainMealOne); //**// .value 提取值的方法, 也可改成提取其他東西 ex..type
    var dessert = parseInt(document.getElementById("dessert").value * dessertOne);
    document.getElementById("js4-4total").textContent = mainMeal + dessert;
}

//js4-5
function drinkPrice(Num) {
    var drinkPrice = 100;
    var total = 100 * Num;
    return total;
    //**// 遇到return後函式就會停止運行
    drinkPrice(1); //不會被讀取
    console.log(total); //不會被讀取
}
var Joyce = drinkPrice(2);
console.log(Joyce);

//練習題1
function sayHello(name) {
    console.log("你好");
    document.getElementById("greet").textContent = name + "你好";
}
sayHello("Joyce"); //需運用字串帶出文字

//陣列 Array , 物件 object ======================================================================

//js5-1 
var cornField = [8, 9, 5];
console.log("第一個玉米田共產出" + cornField[0] + "個玉米");
var cornField2 = cornField[1];
console.log(cornField2);

var cornFieldNew = [];
cornFieldNew.push(9); //**// .push() 新增到陣列的方式
cornFieldNew.push(12);
cornFieldNew.push(2);
cornFieldNew[0] = 10; //**//修改與新增陣列的方式 
cornFieldNew[3] = 20;
console.log(cornFieldNew);
console.log(cornFieldNew.length); //**// .length 計算數量

//js5-2
var family = {
    room: 6,
    population: 5,
    appleTree: 2,
    orangeTree: 4,
    dad: "john",
    mom: "elsa",
    kids: ["tom", "grace", "joyce"],
    //js5-3
    treeNum: function () {
        var Num = family.appleTree + family.orangeTree;
        console.log("總共種了" + Num + "顆植物");
    },
};
family.pet = "dog"; //**// 修改與新增物件的方式
family.room = 8;
console.log(family);
console.log(family.population);
//js5-3
family.treeNum(); //**//執行函式的方法

//js5-4
var familys = [{
    room: 6,
    population: 5,
    appleTree: 2,
    orangeTree: 4,
    dad: "john",
    mom: "elsa",
    kids: ["tom", "grace", "joyce"],
}, {
    room: 3,
    population: 2,
    appleTree: 1,
    orangeTree: 1,
    name:["david","joyce"],
}];

console.log(familys[1].name);
console.log(familys[1].name[0]);

//控制判斷(運算子、if、 switch) ======================================================================

//**// "=" (賦予)。  
//**// 比較運算子(比較)-- "=="等於, "!=="不等於, 布林Boolean. "==="嚴謹的確認方式(先檢查型別，在檢查內容)...>, < , >=, <=
// false == 0; ture (會自動轉換)
// false === 0; false
// true == 1; ture
// true == 1; false
// 1 == "1"; ture

//js6-1
var myBirthday = 2;
var thisMonth = 3;
var checkMonth = myBirthday == thisMonth;
console.log(checkMonth);
document.getElementById("monthBirthday").textContent = checkMonth;

var herePeople = 2;
var myReservationPeople = 3;
var checkPeople = myReservationPeople !== herePeople;
console.log(checkPeople);
document.getElementById("herePeople").textContent = checkPeople;

//js6-2
//**// 邏輯運算子-- "&&"and, "||"or, "!"NOT
var airTicket = false;
var pasport = true;
var boarding = airTicket == true && pasport == true;
console.log("我有機票與護照可以出國嗎？" + boarding);

var birthday = true;
var Xmas = false;
var getGift = birthday == true || Xmas == true;
console.log("如果是生日或聖誕節就可以拿到禮物！那現有禮物可以拿嗎？" + getGift);

//js6-3
var hungry = "不餓"
if(hungry == "餓"){
    console.log("我要吃飯");
}else{
    console.log("還不餓～");
}

//js6-4
var dinnerHungry = 3;//1~10
function eat(food) {
    console.log("我想要吃" + food);
}
if (dinnerHungry < 3){
    eat("pizza");
} else if (dinnerHungry == 7) {
    eat("水果");
} else if (dinnerHungry <= 6 && dinnerHungry >=3){
    eat("水餃");
}else{
    console.log("不餓！");
}

//js6-5 //**// switch(){}適合用來套入當你有確認的內容時(需要使用 && || 比較適合用 if else)
var light = "red";
function action(reply) {
    console.log("目前燈號是：" + reply + "燈")
};
switch (light) {
    case "red":
        action("紅");
        break;
    case "orange":
        action("橘");
        break;
    case "green":
        action("綠");
        break;

    default:
        console.log("號誌燈有問題");
        break;
}
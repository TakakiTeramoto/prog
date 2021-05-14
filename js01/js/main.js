//結果を取得する変数を定義する
let result =document.getElementById('result');

//モスバーガーのハンバーガーのメニューのオブジェクトに名前と価格のプロパティーを用意する
var menu = {
    "クリームチーズベジ～北海道産コーンのソース" : 440,
    "ダブル クリームチーズベジ～北海道産コーンのソース" : 570,
    "グリーンバーガー GREEN BURGER" : 580,
    "モスバーガー" : 390,
    "モスチーズバーガー" : 420,
    "テリヤキバーガー" : 380,
    "テリヤキチキンバーガー" : 380,
    "モス野菜バーガー" : 380,
    "フィッシュバーガー" : 360,
    "ロースカツバーガー" : 400,
    "海老カツバーガー" : 410,
    "チキンバーガー" : 550,
    "ハンバーガー" : 220,
    "チーズバーガー" : 250,
    "ダブルモスバーガー" : 520,
    "ダブルモスチーズバーガー" : 550,
    "タブルテリヤキバーガー" : 510,
    "ダブルモス野菜バーガー" : 510,
    "ダブルハンバーガー" : 350,
    "ダブルチーズバーガー" : 380,
    "スパイシーモスバーガー" : 420,
    "スパイシーモスチーズバーガー" : 450,
    "スパイシータブルモスバーガー" : 550,
    "スパイシータブルモスチーズバーガー" : 580,
}

//モスバーガーのハンバーガーのメニューのオブジェクトに名前とカロリーのプロパティーを用意する
var menucalorie = {
    "クリームチーズベジ～北海道産コーンのソース" : 400,
    "ダブル クリームチーズベジ～北海道産コーンのソース" : 548,
    "グリーンバーガー GREEN BURGER" : 299,
    "モスバーガー" : 367,
    "モスチーズバーガー" : 420,
    "テリヤキバーガー" : 377,
    "テリヤキチキンバーガー" : 380,
    "モス野菜バーガー" : 351,
    "フィッシュバーガー" : 385,
    "ロースカツバーガー" : 414,
    "海老カツバーガー" : 405,
    "チキンバーガー" : 383,
    "ハンバーガー" : 308,
    "チーズバーガー" : 361,
    "ダブルモスバーガー" : 516,
    "ダブルモスチーズバーガー" : 569,
    "タブルテリヤキバーガー" : 539,
    "ダブルモス野菜バーガー" : 489,
    "ダブルハンバーガー" : 350,
    "ダブルチーズバーガー" : 499,
    "スパイシーモスバーガー" : 368,
    "スパイシーモスチーズバーガー" : 421,
    "スパイシータブルモスバーガー" : 517,
    "スパイシータブルモスチーズバーガー" : 570,
}

var menupict = {
    "クリームチーズベジ～北海道産コーンのソース" : "img0.jpg",
    "ダブル クリームチーズベジ～北海道産コーンのソース" : "img1.jpg",
    "グリーンバーガー GREEN BURGER" : "img2.jpg",
    "モスバーガー" : "img3.jpg",
    "モスチーズバーガー" : "img4.jpg",
    "テリヤキバーガー" : "img5.jpg",
    "テリヤキチキンバーガー" : "img6.jpg",
    "モス野菜バーガー" : "img7.jpg",
    "フィッシュバーガー" : "img8.jpg",
    "ロースカツバーガー" : "img9.jpg",
    "海老カツバーガー" : "img10.jpg",
    "チキンバーガー" : "img11.jpg",
    "ハンバーガー" : "img12.jpg",
    "チーズバーガー" : "img13.jpg",
    "ダブルモスバーガー" : "img14.jpg",
    "ダブルモスチーズバーガー" : "img15.jpg",
    "タブルテリヤキバーガー" : "img16.jpg",
    "ダブルモス野菜バーガー" : "img17.jpg",
    "ダブルハンバーガー" : "img18.jpg",
    "ダブルチーズバーガー" : "img19.jpg",
    "スパイシーモスバーガー" : "img20.jpg",
    "スパイシーモスチーズバーガー" : "img21.jpg",
    "スパイシータブルモスバーガー" : "img22.jpg",
    "スパイシータブルモスチーズバーガー" : "img23.jpg",
}

// console.log(menucalorie[0]);
// console.log(menupict[0]);

//初期値を設定する
var menulength = 0;
var menucalorielength = 0;
var menupictlength = 0;

//価格とカロリーは入る配列を用意する
var ary = [];
var arycalorie = [];
var arypict = [];

//menuオブジェクトの配列にプロパンティを追加する
for(i in menu){
    menulength++;
    ary.push(menu[i]);
}
//menucalorieオブジェクトの配列にプロパンティを追加する
for(i in menucalorie){
    menucalorielength++;
    arycalorie.push(menucalorie[i]);
}
//menupictオブジェクトの配列にプロパティーを追加する
for(i in menupict){
    menupictlength++;
    arypict.push(menupict[i]);
}
//メニューの○○番目の乱数を定義する
var rand = Math.floor(Math.random() * menulength);
//オブジェクトが持つプロパティの名前の変数を定義する
var key = Object.keys(menu);

console.log(arycalorie[rand]);
console.log(arypict[rand]);

//メニューの（rand）番目の名前・価格・カロリーを表示する
result.innerHTML =  '<p style="text-align: center"><h2>ガチャ結果</h2></p><p><strong style="font-size: large">' + key[rand] + '</strong>：'+ ary[rand] + '円　' + arycalorie[rand] + 'kcal</p>'+ '<img src="img/' +arypict[rand]+ '">';
// result.appendChild(arypict[rand]); //表示したい画像

//トータル金額を定義する
let total = ary[rand];
//トータルカロリーを定義する
let totalcalorie = arycalorie[rand];
//一つ目に取り出されるメニューを定義する
var key1 = key[rand];

//1000円以下の時に、取得を繰り返す処理を記述する
while (total <= 1000){
    var rand2 = Math.floor(Math.random() * menulength);
    total = total + ary[rand2];
    totalcalorie = totalcalorie + arycalorie[rand2];
    key1 = key1 + '%0a' + key[rand2];
    //ハンバーガーの最低金額が220円なので、780円以下なら繰り返す。
    //1000円以下になったらストップする
    //最後に追加した商品のトータルの値段を引き，replaceで名前を削除することです．
    if (total <= 780) {
        document.getElementById('result').innerHTML += '<p re><strong style="font-size: large">' + key[rand2] + '</strong>：'+ ary[rand2] + '円　' + arycalorie[rand2] + 'kcal</p>'+ '<img src="img/' +arypict[rand2]+ '">';
    } else if (total <= 1000){
        document.getElementById('result').innerHTML += '<p><strong style="font-size: large">' + key[rand2] + '</strong>：'+ ary[rand2] + '円　' + arycalorie[rand2] + 'kcal</p>'+ '<img src="img/' +arypict[rand2]+ '">';
        break;
    } else {
        total = total - ary[rand2];
        totalcalorie = totalcalorie - arycalorie[rand2];
        key1 = key1.replace('%0a' + key[rand2], '');
    }
}
result.innerHTML += '<br><p style="text-align: center">税込合計：' + total + '円' + '<br>カロリー合計：' + totalcalorie + 'kcal </b></p>';
    
getResult.addEventListener('click',function twitText() {
    var s, url;
    s = "モスバーガー1000円ガチャの結果は…%0a %0a" +key1 + "%0a%0a税込合計" + Math.floor(total) + "円。カロリー合計は" + totalcalorie + "kcal です。";
    url = 'http://with-food.babyblue.jp/js_teramoto_22/index.html';
    if (s != "") {
        if (s.length > 140) {
            //文字数制限
            alert("テキストが140字を超えています");
        } else {
            //投稿画面を開く
            url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
            window.open(url, "_blank", "width=600,height=300");
        }
    }
}
                          )




    

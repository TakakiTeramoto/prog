<?php
session_start();
$id = $_GET['id'];
//1.  DB接続します
try {
  $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
} catch (PDOException $e) {
  exit('DbConnectError:'.$e->getMessage());
}


//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM ec2_table where item like '%$id%'");
// $stmt->bindValue(':*****', $*****, PDO::PARAM_INT);
$status = $stmt->execute();


//３．データ表示
$view="";
if($status==false) {
  //execute（SQL実行時にエラーがある場合）
  $error = $stmt->errorInfo();
  exit("ErrorQuery:".$error[2]);

} else {
  //Selectデータの数だけ自動でループしてくれる
  while( $result = $stmt->fetch(PDO::FETCH_ASSOC)){
    $view .= '<li class="products-item">';
    $view .= '<a href="item.php?id='.$result["id"].'">';
    $view .= '<p class="pruducts-thumb"><img src="./img/'.$result["fname"].'" width="200"></p>';
    $view .= '<h3 class="products-title">'.$result["item"].'</h3>';
    $view .= '<p class="products-price">'.$result["value"].'</p>';
    $view .= '</a>';
    $view .= '</li>';
  }
}
?>




<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/jquery.bxslider.css">
</head>
<body>
  <header class="header">
    <h1 class="site-title"><a href="index.php"><img src="images/common/logo.png" alt="G's Academy Tokyo"></a></h1>
    <a href="cart.php" class="btn btn-cart"><img src="images/common/icon-cart.png" alt="G's Academy Tokyo"></a>
    <a href="index.php" class="btn btn-menu">TOPページ</a>

  </header>


  <div>
    <ul class="bxslider">
      <li><img src="images/index/slide1.jpg" alt=""></li>
      <li><img src="images/index/slide2.jpg" alt=""></li>
      <li><img src="images/index/slide3.png" alt=""></li>
      <li><img src="images/index/slide4.png" alt=""></li>
      <li><img src="images/index/slide5.jpg" alt=""></li>
    </ul>
  </div>

  <div class="outer">
    <!--メインカテゴリー-->
    <div class="list-outer">
      <ul class="list">
        <li class="list-item"><a href="./index_scotch.php">スコッチ</a></li>
        <li class="list-item"><a href="./index_irish.php">アイリッシュ</a></li>
        <li class="list-item"><a href="./index_american.php">アメリカン</a></li>
        <li class="list-item"><a href="./index_canadian.php">カナディアン</a></li>
        <li class="list-item"><a href="./index_japanese.php">ジャパニーズ</a></li>
        <li class="list-item"><a href="./index_world.php">ワールドウィスキー</a></li>
      </ul>
    </div>
    <!--end メインカテゴリー-->

    <div class="wrapper wrapper-main flex-parent">

      <aside class="sidebar">
        <!--form-->
        <div class="widget">
          <form action="kensaku.php" method="get" class="search-form">
            <div>
              <input type="text" name="id" placeholder="アイテムを探す" class="search-box">
              <input type="submit" value="送信" class="search-submit">
            </div>
          </form>
        </div>
        <!--end form-->

        <!--category-->
        <div class="widget">
          <h3 class="widget-title"><a href="./index.php">All products</a></h3>
          <ul class="category-list">
            <li class="category-item"><a href="./index_scotch.php">スコッチ</a></li>
            <li class="category-item"><a href="./index_irish.php">アイリッシュ</a></li>
            <li class="category-item"><a href="./index_american.php">アメリカン</a></li>
            <li class="category-item"><a href="./index_canadian.php">カナディアン</a></li>
            <li class="category-item"><a href="./index_japanese.php">ジャパニーズ</a></li>
            <li class="category-item"><a href="./index_wolrd.php">ワールドウィスキー</a></li>
          </ul>
        </div>
        <!--end category-->
      </aside>

      <main class="wrapper-main">
        <!--並び替えボタン-->
        <div class="sort-area">
          <a href="index.php" class="sort-all">全てを見る</a>

          <div class="sort-detail">
            <p class="sort-text">並べ替え:</p>
            <ul class="sort-list flex-parent">
              <li class="sort-item"><a href="index_aiue.php">名前順</a></li>
              <li class="sort-item"><a href="index_kakaku.php">価格の安い順</a></li>
            </ul>
          </div>
        </div>
        <!--end 並び替えボタン-->

        <!--商品リスト-->
        <ul class="products-list">
            <?php echo $view; ?>
        </ul>
        <!--end 商品リスト-->

        <!--ページャー-->
        <ul class="pager clearfix">
          <li class="pager-item"><a href="#">1</a></li>
          <li class="pager-item"><a href="#">2</a></li>
          <li class="pager-item"><a href="#">3</a></li>
          <li class="pager-item"><a href="#">4</a></li>
          <li class="pager-item"><a href="#">5</a></li>
          <li class="pager-item"><a href="#">最後へ</a></li>
        </ul>
        <!--end ページャー-->
      </main>
    </div>
  </div>

  <!--footer-->
  <footer class="footer">
    <div class="wrapper wrapper-footer">

      <div class="footer-widget__long">
        <p><a href="#"><img src="images/common/logo.png" alt="LOVE Whisley"></a></p>
      </div>

      <div class="footer-widget">
        <ul class="nav-footer">
          <li class="nav-footer__item"><a href="./index_scotch.php">スコッチ</a></li>
          <li class="nav-footer__item"><a href="./index_irish.php">アイリッシュ</a></li>
          <li class="nav-footer__item"><a href="./index_american.php">アメリカン</a></li>
          <li class="nav-footer__item"><a href="./index_canadian.php">カナディアン</a></li>
          <li class="nav-footer__item"><a href="./index_japanese.php">ジャパニーズ</a></li>
          <li class="nav-footer__item"><a href="./index_world.php">ワールドウィスキー</a></li>
        </ul>
      </div>

      <div class="footer-widget">
        <ul class="nav-footer">
          <li class="nav-footer__item"><a href="#">LOVE Whiskey??</a></li>
          <li class="nav-footer__item"><a href="#">Contact Us</a></li>
          <li class="nav-footer__item"><a href="#">Cart</a></li>
          <li class="nav-footer__item"><a href="#">Member Page</a></li>
        </ul>
      </div>

      <div class="footer-widget">
        <ul class="social-list">
          <li class="social-item"><a href="#"><img src="images/common/facebook.png" alt=""></a></li>
          <li class="social-item"><a href="#"><img src="images/common/instagram.png" alt=""></a></li>
          <li class="social-item"><a href="#"><img src="images/common/twitter.png" alt=""></a></li>
        </ul>
      </div>

    </div>
    <p class="copyrights"><small>Copyrights Takaki Teramoto All Rights Reserved.</small></p>
  </footer>
  <!--end footer-->

<script src="http://code.jquery.com/jquery-3.0.0.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script>
  $(".bxslider").bxSlider({auto:true,options:3000});
</script>
</body>
</html>

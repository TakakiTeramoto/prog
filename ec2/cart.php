<?php
session_start();
//----------------------------------------------------
//1．SESSIONからカートを取得
//※カートSESSION: array([0]=item,[1]=value,[2]=num,[3]=fname);
//----------------------------------------------------
$view ='';
//$_SESSION["cart"]のデータを取得
foreach($_SESSION["cart"] as $key => $value){
      $view .='<li class="cart-list">';
      $view .='<p class="cart-thumb"><img src="./img/'.$value[3].'" width="200"></p>';
      $view .='<h2 class="cart-title">'.$value[0].'</h2>';
      $view .='<p class="cart-price">'.$value[1].'</p>';
      $view .='<p class="cart-number">'.$value[2].'</p>';
      $view .='<a href="cartremove.php?id='.$key.'" class="btn-delete">削除</a>'; //$key
      $view .='</li>';
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
  <!--header-->
  <header class="header">
    <p class="site-title"><a href="#"><img src="images/common/logo.png" alt="G's Academy Tokyo"></a></p>
    <a href="cart.php" class="btn btn-cart"><img src="images/common/icon-cart.png" alt="G's Academy Tokyo"></a>
    <a href="#" class="btn btn-menu"><img src="images/common/icon-menu.png" alt=""></a>
  </header>
  <!--end header  -->

  <div class="outer">
    <h1 class="page-title">Cart</h1>
    <div class="wrapper wrapper-main flex-parent">
      <main class="wrapper-main">
        <!-- <ul class="label-list">
          <li class="label-item">商品写真</li>
          <li class="label-item">商品名</li>
          <li class="label-item">金額</li>
          <li class="label-item">数量</li>
          <li class="label-item">削除</li>
        </ul> -->
        <ul class="cart-products">
        <?php
          //表示
          echo $view;
        ?>
        </ul>
        <ul class="btn-list">
          <li class="btn-item btn-buy"><a href="index.php">買い物を続ける</a></li>
          <li class="btn-item btn-calculate"><a onclick="alert('外部決済サイトに移動...');">注文手続きへ</a></li>
        </ul>
      </main>
    </div>
  </div>

  <footer class="footer">
    <div class="wrapper wrapper-footer">

      <div class="footer-widget__long">
        <p><a href="#"><img src="images/common/logo.png" alt="LOVE Whisley"></a></p>
      </div>

      <div class="footer-widget">
        <ul class="nav-footer">
          <li class="nav-footer__item"><a href="#">スコッチ</a></li>
          <li class="nav-footer__item"><a href="#">アイリッシュ</a></li>
          <li class="nav-footer__item"><a href="#">アメリカン</a></li>
          <li class="nav-footer__item"><a href="#">カナディアン</a></li>
          <li class="nav-footer__item"><a href="#">ジャパニーズ</a></li>
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
</body>
</html>

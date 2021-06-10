
<?php


// じゃんけんの手を配列に代入
$hands = ['グー', 'チョキ', 'パー'];

// プレイヤーの手がPOSTされたら
if (isset($_POST['playerHand'])) {
    // プレイヤーの手を代入
    $playerHand = $_POST['playerHand'];

    // PCの手をランダムで選択
    $key = array_rand($hands);
    $pcHand = $hands[$key];

    // 勝敗を判定
    if ($playerHand == $pcHand) {
        $result ='あいこ';
    } elseif ($playerHand == 'グー' && $pcHand == 'チョキ') {
        $result = '勝ち';
    } elseif ($playerHand == 'チョキ' && $pcHand == 'パー') {
        $result = '勝ち';
    } elseif ($playerHand == 'パー' && $pcHand == 'グー') {
        $result = '勝ち';
    } else {
        $result = '負け';

   }
}

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf8">
    <title>じゃんけん</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="wrapper">
    <header>
        <div class="header-logo">じゃんけん練習</div>
    </header>
    <main>
     <!-- <form method="post" action="login_update.php"> -->
        <h1>結果は・・・</h1>
        <div class="result-box">
            <p class="result-word"><?= $result ?>！</p>

            あなた：<?= $playerHand ?><br>
            コンピューター：<?= $pcHand ?><br>

            <p><a class="red" href="practice2.php">>>もう一回勝負する</a></p>
        </div>
     </form>
    </main>
    <footer>
        <small>&copy;Takaki　Teramoto</small>
    </footer>
</div>
</body>
</html>
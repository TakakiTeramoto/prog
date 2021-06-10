
<?php
//1.  DB接続します
try {
    $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
  } catch (PDOException $e) {
    exit('データベースに接続できませんでした。'.$e->getMessage());
  }

//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM gs_user_table");
$status = $stmt->execute();

//３．データ表示
session_start();

// ログイン状態チェック
if (!isset($_SESSION["name"])) {
    header("Location: logout.php");
    exit;
  }

  
 ?>


<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>じゃんけん</title>
</head>
<body>

<main>
    <h1>じゃんけん</h1>
    <h2>コンピューターとじゃんけんをしよう！</h2>
    <p>ようこそ<u><?php echo htmlspecialchars($_SESSION["name"], ENT_QUOTES); ?></u>さん</p> 
    <form action="practice2_kekka.php" method="post">
      <label>
         <input type="radio" title="playerHand" name="playerHand" value="グー" checked>グー
      </label>
      <label>
         <input type="radio" title="playerHand" name="playerHand" value="チョキ">チョキ
      </label>
      <label>
         <input type="radio" title="playerHand" name="playerHand" value="パー">パー
      </label>
      <button type="submit" class="battle-button">勝負する！</button>
   </form>
</main>

<footer></footer>
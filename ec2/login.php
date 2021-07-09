<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ログイン</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>
<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header"><a class="navbar-brand" href="select.php">データ一覧</a></div>
    </div>
  </nav>
</header>
<!-- Head[End] -->
<!-- Main[Start] -->
<!-- login_act.phpにデータを送ります -->
<form  action="login_act.php" method="post">
  <div class="jumbotron">
   <fieldset>
    <legend>ログインページ</legend>
     <label>ID<input type="text" name="lid"></label><br>
     <label>PW<input type="text" name="lpw"></label><br>
     <input type="submit" value="LOGIN" />
    </fieldset>
  </div>
</form>
<!-- Main[End] -->
</body>
</html>
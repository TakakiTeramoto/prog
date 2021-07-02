<h1>①課題内容（どんな作品か）</h1>
<h1>phpを活用し、更新／削除ができる</h1>
<h1>内容：五大ウィスキーが楽しめる通販サイト</h3>
<h1>名称：LOVE Whiskey</h1>

<a href="http://with-food.site/ec2/index.php" target="_blank">リンク</a>
<h6>確認方法</h6>
<p>C:\xampp\htdocs 以下にフォルダごとコピー</p>
<p>xamppを起動</P>
<p>PHPMyAdminから、DB：gs_db／table：ec2_tableを作成</p>
<p>テーブル内に枠を用意（id, country, category, item, value, description, fname, indate）</p>
<p>index.phpを開く<p>
<br>
                                                      
<h1>②工夫した点・こだわった点</h1>
<h2>更新・削除</h2>
<p>ウィスキーの画像・原産国・カテゴリー・商品名・価格・特徴・画像・追加した時間を更新・削除できるようにした</p>
<p>検索機能を加えた</p>
<p>SQLで"SELECT * FROM ec2_table where item like '%$id%'"で検索した言葉が入っているitemを登録</p>
<p>アイウエオ順で並べる機能を加えた</p>
<p>SQLで"SELECT * FROM ec2_table order by item"で降順にitemを登録</p>
<p>価格の安い順で並べる機能を加えた</p>
<p>"SELECT * FROM ec2_table order by value"で降順にitemを登録</p>
<br>
                                                      
<h1>③質問・疑問（あれば）</h1>
<p>更新・削除に加えいて、データベースから抽出の仕方を学んだ。PHPの基礎ができたので今後はいかにLaravelで効率化できるかを努力したい</p>
<br>
                                                      
  

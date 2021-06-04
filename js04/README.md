■実装したこと

①Line Developersの利用登録
https://developers.line.biz/ja/
https://developers.line.biz/ja/docs/messaging-api/overview/#how-messaging-api-works
-Line Developersに個人のｌINEアカウントでログインする
-Line Developersでプロバイダーを作成する
-Line Developersでチャネルを登録する
　今回は、
　ア、最寄り駅BOT
　イ、天気予報BOT
　の二つを登録
-MessagingAPIを選択して上記の二つのチャンネルを作成し、チャネルアクセストークンを発行する
-今回はMessagingAPIの設定で以下が3つの作業をおこなった
　A、Webhook URLの発行
　B、利用チェック
　C、応答メッセージの無効化
　D、あいさつメッセージの無効化

（補足：Messaging APIの仕組み）
Messaging APIを使って、ボットサーバーとLINEプラットフォームの間でデータを交換できます。リクエストは、JSON形式でHTTPSを使って送信されます。ユーザーが、LINE公式アカウントにメッセージを送信します。
LINEプラットフォームからボットサーバーのWebhook URLに、Webhookイベントが送信されます。
Webhookイベントに応じて、ボットサーバーからユーザーにLINEプラットフォームを介して応答します。

②-ア：Google Apps Scriptでコードを書く
-発行したチャンネルアクセストークンを変数に入れる
-line_endpointという変数にReply送信のAPIが提供されているURLを入れる
-送信されたメッセージからリプレイトークンと緯度・経度を取得する
-LINEで取得した経度・緯度を最寄り駅APIに送信することで、指定した情報を受け取る
-FlexMessgeで取得したデータをLINEで表示する

②-イ：Google Apps Scriptでコードを書く
-発行したチャンネルアクセストークンを変数に入れる
-line_endpointという変数にReply送信のAPIが提供されているURLを入れる
-送信されたメッセージからリプレイトークンと緯度・経度を取得する
-LINEで取得した経度・緯度を天気予報APIに送信することで、指定した情報を受け取る
-FlexMessgeで取得したデータをLINEで表示する

（補足：Google Apps Script（GAS））
Google Apps Script（GAS）とは、Googleが開発・提供しているプログラミング言語です。
JavaScriptというWebブラウザ上で動作するプログラミング言語をベースに作成されています。

③-ア：各APIについて
　　　-HeartRails Express（最寄り駅API）の利用準備
　　　https://express.heartrails.com/
③-イ：各APIについて
　　　-OpenWeather（天気予報API）の利用準備
　　　https://openweathermap.org/

④LINEで情報が取得できるているか確認する


■工夫したこと
・わかりやすいAPIを探したこと
・サーバレスで最も簡単そうなGoogleAppsScript(GAS)でサーバーサイドの設定などを省いた
・LINEはUI・UX及びなんといっても最もユーザーが多いSNSなので誰でも使えるアプリということとUIはLINEのFlexMessgeでおしゃれに
違和感なく実装できたこと

■今後やりたいこと
・本当は出す情報などをもっと趣味趣向に特化したコアなものしたいが、APIを作るのにはまだ技術が足りないのでサーバーサイドの勉強とともの習得したいと思った



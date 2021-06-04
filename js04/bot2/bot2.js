//アクセストークンの記述箇所：チャネルアクセストークンはセキュリティーの観点からローカル保存しております。差し支えあればおっしゃってください。
<script src="env/line_init.js"></script>
//Reply送信のAPIが提供されているURLを変数に定義する
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';

function doPost(e) {

  var json = JSON.parse(e.postData.contents);

  //返信するためのトークン取得
  var reply_token= json.events[0].replyToken;
  //送られたメッセージ内容を取得
  var longitude = json.events[0].message.longitude;
  var latitude = json.events[0].message.latitude;

    var urlresponse = getStation(longitude,latitude);
    var length = Object.keys(urlresponse.response.station).length;

        var name = [],
            line = [],
            encodename = [],
            abc = [],
            distance = [];

        for (var i = 0; i <= length-1; i++) {
            name.push(urlresponse.response.station[i].name);
            line.push(urlresponse.response.station[i].line);
            var encode = name[i]+"駅"+line[i];
            encodename.push(encodeURI(encode));
            distance.push(urlresponse.response.station[i].distance);
        }
        var label1;
        var text1;
        var uri1;
        if (name[0] === undefined) {
          label1 = "該当なし";
          text1 = "0m";
          uri1 = "https://maps.google.co.jp/maps?q=";
        }else{
          label1 = name[0]+"駅("+line[0]+")";
          text1 = distance[0] + "⇒";
          uri1 = "https://maps.google.co.jp/maps?q="+encodename[0];
        }
        var label2;
        var text2;
        var uri2;
        if (name[1] === undefined) {
          label2 = "該当なし";
          text2 = "0m";
          uri2 = "https://maps.google.co.jp/maps?q=";
        }else{
          label2 = name[1]+"駅("+line[1]+")";
          text2 = distance[1] + "⇒";
          uri2 = "https://maps.google.co.jp/maps?q="+encodename[1];
        }
        var label3;
        var text3;
        var uri3;
        if (name[2] === undefined) {
          label3 = "該当なし";
          text3 = "0m";
          uri3 = "https://maps.google.co.jp/maps?q=";
        }else{
          label3 = name[2]+"駅("+line[2]+")";
          text3 = distance[2] + "⇒";
          uri3 = "https://maps.google.co.jp/maps?q="+encodename[2];
        }

        var message = {
            "replyToken": reply_token,
            "messages": [
              {
                "type": "flex",
                "altText": "Flex Message",
                "contents": {
                  "type": "bubble",
                  "direction": "ltr",
                  "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "text": "現在地からの置最寄駅一覧",
                        "align": "center",
                        "weight": "bold"
                      },
                      {
                        "type": "text",
                        "text": "駅名をクリックでGoogleMap",
                        "size": "sm",
                        "align": "center"
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "text": text1,
                        "align": "center"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": label1,
                          "uri": uri1
                        }
                      },
                      {
                        "type": "text",
                        "text": text2,
                        "align": "center"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": label2,
                          "uri": uri2
                        }
                      },
                      {
                        "type": "text",
                        "text": text3,
                        "align": "center"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": label3,
                          "uri": uri3
                        }
                      }
                    ]
                  }
                }
              }
                        ]
                    }

    var replyData = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token
        },
        "payload": JSON.stringify(message)
    };
    try {
        UrlFetchApp.fetch(line_endpoint, replyData);
    } catch (e) {
        return "error";
    }
}

function getStation(longitude,latitude) {
    try {
        var url = 'http://express.heartrails.com/api/json?method=getStations&' + 'x=' + longitude + '&y=' + latitude;
        var urlresponse = UrlFetchApp.fetch(url);
        return JSON.parse(urlresponse);
    } catch (e) {
        return "error";
    }
}
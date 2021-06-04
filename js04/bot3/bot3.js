//LINEアクセストークンの記述箇所：チャネルアクセストークンはセキュリティーの観点からローカル保存しております。ご確認時に差し支えあればおっしゃってください。
//天気予報APIのKeyの記述箇所：セキュリティーの観点からローカル保存しております。ご確認時に差し支えあればおっしゃってください。
<script src="env/line_init.js"></script>
//Reply送信のAPIが提供されているURLを変数に定義する
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';var apiKey = '4f61da7968ffa7a9c15c1bbc49b489b8';

function doPost(e) {

  var json = JSON.parse(e.postData.contents);

  //返信するためのトークン取得
  var reply_token= json.events[0].replyToken;
  //送られたメッセージ内容を取得
  var message = json.events[0].message.address;
  var zip = message.match(/\d{3}-\d{4}/g);

    var response = getWeather(zip[0]);

        var country = response.city.country,
            cityName = response.city.name;
        var date = [],
            weather = [],
            icon = [],
            temperature = [];

        for (var i = 3; i <= 11; i++) {
            date.push(Number(response.list[i].dt_txt.slice(11, 13))) ;
            weather.push(response.list[i].weather[0].description);
            icon.push(response.list[i].weather[0].icon);
            temperature.push((Math.round((Number(response.list[i].main.temp) - 273.15) * 10) / 10).toString() + '℃');
        }
        var message = {
            "replyToken": reply_token,
            "messages": [{
                "type": "flex",
                "altText": '天気予報',
                "contents": {
                    "type": "bubble",
                    "styles": {
                        "footer": {
                            "separator": true
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "天気予報",
                                "weight": "bold",
                                "size": "xxl",
                                "margin": "md"
                            },
                            {
                                "type": "text",
                                "text": country + '.' + cityName,
                                "size": "md",
                                "color": "#aaaaaa",
                                "wrap": true
                            },
                            {
                                "type": "separator",
                                "margin": "xxl"
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "xxl",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[0] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[0],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[0] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[0],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[1] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[1],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[1] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[1],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[2] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[2],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[2] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[2],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[3] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[3],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[3] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[3],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[4] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[4],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[4] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[4],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[5] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[5],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[5] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[5],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[6] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[6],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[6] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[6],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[7] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[7],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[7] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[7],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[8] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[8],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[8] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[8],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "xxl"
                            }
                        ]
                    }
                }
            }]
        };

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

    }
}

function getWeather(e) {
    try {
        var url = 'http://api.openweathermap.org/data/2.5/forecast' + '?zip=' + e + ',jp&lang=ja&APPID=' + apiKey;
        var response = UrlFetchApp.fetch(url);
        return JSON.parse(response);
        Logger.log(response.list[0])
    } catch (e) {
        return "error";
    }
}

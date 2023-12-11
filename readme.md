# Data URL と console.log への画像出力のデモ

## Data URL の作成 (シェルスクリプト)

コンソールに出力
```
echo -n "data:image/png;base64," && cat web/nas-monkey.png | base64 --wrap 0
```

テキストファイル (out.txt) に出力
```
echo -n "data:image/png;base64," > out.txt
cat web/nas-monkey.png | base64 --wrap 0 >> out.txt
```

## デモ

### [web/demo1.html](web/demo1.html)
img タグで Data URL を使用する

### [web/demo2.html](web/demo2.html)
canvas タグで Data URL を使用する

### [web/demo3.html](web/demo3.html)
canvas の画像を console.log に出力 (fillRect)

### [web/demo4.html](web/demo4.html)
canvas の画像を console.log に出力 (画像ファイル)


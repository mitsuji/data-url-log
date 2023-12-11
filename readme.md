
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


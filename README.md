# js-rotation-banner

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/appleple/document-outliner/master/LICENSE)

複数のバナー画像を指定した規則通りに並び替えてくれるjsライブラリ

## Usage
distの中にあるrotation-banner.bundle.js,rotationbanner.cssを使用したいフォルダに設置して、使用するHTMLファイルのhead要素内にJavaScriptファイルとCSSファイルの読み込みを記述してください。
```html
<script src="/path/to/js/rotation-banner.bundle.js"></script>
```
```html
<link rel="stylesheet" href="/path/to/js/rotationbanner.css">
```
photocollage.js
```js
document.addEventListener("DOMContentLoaded",  () => {
    new RotationBanner({
              url: "sampleUrl",
              rel: "sponsored",
              aTagclass: "banner",
              loading: "lazy",
          });
});
```

### Basic Standalone Usage
一セット三枚のバナーを計九枚表示させるとき
```html
<p>サンプルです</p>
<div class="js-rotation-banner" data-quantity="3" data-offset="1" data-id="1"></div>
<p>サンプルです</p>
<div class="js-rotation-banner" data-quantity="3" data-offset="1" data-id="2"></div>
<p>サンプルです</p>
<div class="js-rotation-banner" data-quantity="3" data-offset="1" data-id="3"></div>
```

### Option

<table>
	<tr>
		<th>variable</th>
		<th>description</th>
		<th>default</th>
	</tr>
	<tr>
		<td>url</td>
		<td>用意した画像データをAPIで持ってくる為に必要なurl</td>
		<td>初期値無し</td>
	</tr>
	<tr>
		<td>rel</td>
		<td>スポンサーさんからの情報にはつけなきゃいけない決まり事</td>
		<td>初期値無し</td>
	</tr>
	<tr>
		<td>aTagclass</td>
		<td>aタグのクラス</td>
		<td>banner</td>
	</tr>
	<tr>
		<td>loading</td>
		<td>遅延読み込み</td>
		<td>lazy</td>
	</tr>
</table>

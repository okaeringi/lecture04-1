
//アニメーションを終了させ、初期状態に戻す関数
var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");//画像を取得し変数化させる

	foxkeh.setAttribute("class", "");//setAttributeでimageオブジェクトからslideinクラスを削除
};
//アニメーションをさせる関数
var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");//画像を取得し変数化させる
	foxkeh.setAttribute("class", "slidein");//setAttributeでimageオブジェクトにslideinクラスを追加

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);//イベントリスナーを用いてアニメーション終了後にendSlideinFoxkeh関数を呼び出しアニメーションを終了させる。	
};
//アニメーションを起動させるイベントを設定する関数
var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");//ボタンのオブジェクトを取得
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);//イベントリスナーを用いてクリックした際にアニメーションを起動させるstartSlideinFoxkeh関数を呼び出す

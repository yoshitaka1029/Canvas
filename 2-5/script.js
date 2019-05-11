var context

window.onload = function(){
	//htmlのタブのidからcanvas要素を取得
	var canvas = document.getElementById('canvas')
	//canvasの2dコンテキストを取得（他のオブジェクトでも使用するためグローバル変数）
	context = canvas.getContext('2d')
	//描画する処理の呼び出し
	draw()
}

function draw(){
	//塗りつぶし色を指定（デフォルトはblack）し描画
	context.fillStyle = 'blue'
	context.fillRect(30,30,200,200)

	context.strokeStyle = 'red'
	context.strokeRect(130,130,50,50)

	//指定された短形のピクセルをクリアする（背景が透けて見える）	
	context.clearRect(50,50,60,60)
}

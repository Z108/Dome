let file = document.querySelector('.file') //获取input file 节点
let Img = document.querySelector('img')
getBackgroundColor()



file.addEventListener('change', (e) => { //添加事件监听 change事件 上传文件
	let img = e.target.files[0] //获取文件对象信息
	if (!img) return //判断文件是否存在
	if (!(img.type.indexOf('image') == 0 && img.type && /\.(?:jpg|png|gif)$/.test(img.name))) { //判断文件类型
		alert('图片只能是jpg、gif、png格式！')
		return
	}
	// createObjectURL 方法
	// 只在当前页面查看
	// 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
	let url = null
	if (window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(img);
	} else if (window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(img);
	} else if (window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(img);
	}
	Img.src = url;
	getBackgroundColor()

	// FileReader 方法
	// let reader = new FileReader();
	// reader.readAsDataURL(img);
	// reader.onload = function(e) {
	// 	Img.src = this.result;
	// 	getBackgroundColor()
	// 	console.log(this.result)
	// };
})

function getBackgroundColor() {
	let canvas = document.createElement('canvas') //创建canvas节点
	let context = canvas.getContext('2d') //
	let img = new Image() //创建img对象
	img.src = Img.src //图片路径
	img.onload = function() {
		let imgWith = this.width //获取图片宽、高
		let imgHeight = this.height
		canvas.width = imgWith //给canvas赋予图片宽、高
		canvas.height = imgHeight
		context.drawImage(this, 0, 0, imgWith, imgHeight) //通过canvas绘制图片
		let ColorDate = context.getImageData(imgWith / 2, imgHeight / 2, 1, 1).data //获取图片中心点1像素颜色数据
		// console.log(ColorDate)
		// console.log(gethex(ColorDate[0], ColorDate[1], ColorDate[2]))
		let rgba = `rgba(${ColorDate[0]},${ColorDate[1]},${ColorDate[2]},${ColorDate[3]})` //颜色 rgba值
		// document.querySelector('#warp').style.background = rgba	//将颜色赋予最外层盒子
		document.querySelector('#warp').style.background = gethex(ColorDate[0], ColorDate[1], ColorDate[2]) //将颜色赋予最外层盒子
	}
}



function gethex(r, g, b) { //rgb=>16进制颜色
	r = r.toString(16)
	g = g.toString(16)
	b = b.toString(16)

	r.length == 1 ? r = '0' + r : ''
	g.length == 1 ? g = '0' + g : ''
	b.length == 1 ? b = '0' + b : ''
	let hex = r + g + b

	if (r.slice(0, 1) == r.slice(1, 1) && g.slice(0, 1) == g.slice(1, 1) && b.slice(0, 1) == b.slice(1, 1)) {
		hex = r.slice(0, 1) + g.slice(0, 1) + b.slice(0, 1)
	}
	return '#' + hex
}

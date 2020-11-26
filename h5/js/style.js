let move = document.querySelector('.box')
let image = document.querySelector('.smallImg')
let img = document.querySelector('.bigImg')
let warp = document.querySelector('#warp')
let show = document.querySelector('#show')
warp.addEventListener('mousemove', function(e) {
	let X = e.clientX
	let Y = e.clientY
	let Box_Width = move.getBoundingClientRect().width
	let Box_Height = move.getBoundingClientRect().height
	
	console.log()
	move.style.top = (Y > Box_Width / 2 ? Y < image.height - Box_Width ? Y - Box_Width / 2 : image.height - Box_Width :
		0) + 'px'
	move.style.left = (X > Box_Height / 2 ? X < image.width - Box_Height ? X - Box_Height / 2 : image.width - Box_Height :
		0) + 'px'
	img.style.top = -(Y >Box_Width / 2 ? Y < image.height - Box_Width ? Y - Box_Width / 2 : image.height - Box_Height : 0) *
		4 + 'px'
	img.style.left = -(X >Box_Width / 2 ? X < image.width - Box_Width ? X - Box_Width / 2 : image.width - Box_Height : 0) *
		4 + 'px'
})

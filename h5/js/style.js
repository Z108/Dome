let banner = document.querySelector('#banner')
let dote = document.querySelector('.dote')
let next = document.querySelectorAll('#warp>span')
var count = 0
getData()
async function getData() {
	let {
		data
	} = await Ajax({
		method: "get",
		url: './js/data.json',
		bool: 'false'
	})
	console.log(data)
	writeDom(data)
}

function writeDom(data) {
	let str = ''
	let liList=''
	data.forEach((v, i) => {
		str += `<img src="${v.img}" alt="${v.name}">`
		liList+='<li></li>'
	})
	banner.innerHTML = str
	dote.innerHTML = liList
	swiper()

}

function swiper() {
	let img = document.querySelectorAll('img')
	let liList = document.querySelectorAll('.dote>li')
	setInterval(() => {
		count = count >= 0 ? count < img.length ? +count+1 :0: 0
		for(let i=0;i<img.length;i++){
			img[i].style.display = "none";
		}
		img[count].style.display = "block";
	}, 3000)
	for(let i=0;i<next.length;i++){
	next[i].addEventListener('click',()=>{
		if(i==0){
			count = count > 0 ? count-- :img.length
		}else{
			count = count >= 0 ? count < img.length ? +count+1 :0: 0
		}
		for(let i=0;i<img.length;i++){
			img[i].style.display = "none";
		}
		img[count].style.display = "block";
		
	})
}
}


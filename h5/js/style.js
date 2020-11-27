let banner = document.querySelector('#banner')

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
	data.forEach((v, i) => {
		str += `<img src="${v.img}" alt="${v.name}">`
	})
	banner.innerHTML = str
	swiper()

}

function swiper() {
	let img = document.querySelectorAll('img')
	var count = 0
	setInterval(() => {
		count = count >= 0 ? count < img.length ? +count+1 :0: 0
		for(let i=0;i<img.length;i++){
			img[i].style.display = "none";
		}
		
		console.log(count)
		img[count].style.display = "block";
	}, 3000)

}

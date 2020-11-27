function Ajax(obj){
	return new Promise((resolve,reject)=>{
		var xhr
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest()
		}else{
			xhr=new ActiveXObject('Microsoft.XMLHTTP')
		}
		if(obj.method.toLowerCase()=='post'){
			xhr.open(obj.method,obj.url,obj.bool)
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
			xhr.send(obj.data)
		}else{
			if(obj.url.indexOf('?')!=-1){
				obj.url=obj.url+'&'+obj.data
			}else{
				obj.url=obj.url+'?'+obj.data
			}
			xhr.open(obj.method,obj.url,obj.bool)
			xhr.send(obj.data)
		}
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					resolve(JSON.parse(xhr.responseText))
				}else{
					reject(xhr)
				}
			}
		}
		
	})
}
 
	var $ = function(){
		var  obj = new myjp()
		  return obj
		
	}




 function myjp(){
 	this.arr=[]
 	this.myId = function(secter){
 		
 		this.arr.push(document.getElementById(secter))
 		return this

 	}
 	this.myName = function(secter){
 		var dom = document.getElementsByTagName(secter)
 		for(var i = 0;i<dom.length;i++){

 		     this.arr.push(dom[i])
 		}

 		return this
 	}

 }

	 myjp.prototype.css = function(secter,val){
	 	for(var i = 0;i<this.arr.length;i++){
		 	if(arguments.length==1){
		 		return this.arr[i].style[secter]

		 	}else if(arguments.length==2){

		 	   this.arr[i].style[secter]=val
		 	      
		 	 }
	 	}
	 	return this
	 	
	}

	myjp.prototype.eq = function(num){

		var jiedia = this.arr[num]
		 this.arr=[]
		 this.arr[0] = jiedia
		 return this

	}
	myjp.prototype.frist = function(){
		 var  brr = this.arr[0]
		  this.arr=[]
		  this.arr[0] = brr
		 return this
	}
	myjp.prototype.last = function(){
		var num = this.arr.length-1
		 var  brr = this.arr[num]
		 this.arr=[];
		 this.arr[0] = brr
		 return this
	}

	myjp.prototype.hover = function(over,out){
		for(var i = 0;i<this.arr.length;i++){
		  this.arr[i].onmouseover = over;
		  this.arr[i].onmouseout = out;
	     }

		return this;
	}
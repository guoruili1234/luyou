(function(window,undefined){

	function MarkArray(dom,result){

		 var brr=  || []
		if(brr!=null){
			for(var i = 0;i<dom.length;i++){
				brr[i]=dom[i]
			}


			brr.length = dom.length
		}


	} 

	
	window.jQuery = window.$ = jQuery

	 var jQuery =   function(selector){
	    return 	new jQuery.fn.init(selector) 
	            
	  }

	  
	jQuery.fn = jQuery.prototype = {
		init:function(selector){
			var dom = document.querySelectorAll(selector)
			
			MarkArray(dom,this)
		},
		css:function(selector,val){
			this.each(function(){
				this.style[selector]=val
			})
				
			
			return this
			

		},
		html:function(val){

			this.each(function(){
				this.innerHTML=val
			})
				
			
		},

		each:function(callback){
			for(var i = 0;i<this.length;i++){
				callback.call(this[i],this)
			}
		}
	}

	 jQuery.fn.init.prototype = jQuery.fn
	  window.jQuery = window.$ = jQuery

})(window)	












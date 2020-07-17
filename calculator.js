var display=document.getElementById('results')
var op=document.getElementsByClassName('operator');
var number=document.getElementById('operands');
var operator=document.getElementById('op');
var a,b,c;
for(let i=0;i<number.children.length;i++){
	number.children[i].addEventListener('click',function(){
		display.innerHTML=display.innerHTML+number.children[i].innerHTML;
	})
}
for(let i=0;i<op.length;i++){
	op[i].addEventListener('click',function(){
		operator.innerHTML=op[i].innerHTML;
		if(!a){
			a=display.innerHTML;
			display.innerHTML="";
		}else{
			if(c=="+"){
				display.innerHTML=Number(a)+Number(display.innerHTML);
			}else if(c=="-"){
				display.innerHTML=Number(a)-Number(display.innerHTML);
			}else if(c=="*"){
				display.innerHTML=Number(a)*Number(display.innerHTML);
			}else if(c=="/"){
				display.innerHTML=Number(a)/Number(display.innerHTML);
			}else if(c=="%"){
				display.innerHTML=(Number(display.innerHTML)/Number(a))*100;
			}else{
				display.innerHTML="Error"
			}
			operator.innerHTML="=";
			a=undefined;
			return;
		}
		c=op[i].innerHTML;

	});
}
var clr=document.getElementsByClassName('clear-btn');
clr[0].addEventListener('click',function(){
	display.innerHTML="";
	operator.innerHTML=".";
	a=undefined;
	b=undefined;
	c=undefined;
});
clr[1].addEventListener('click',function(){
	var str=display.innerHTML;
	var disStr="";
	for(var i=0;i<str.length-1;i++){
		disStr=disStr+str[i];
	}
	display.innerHTML=disStr;
})


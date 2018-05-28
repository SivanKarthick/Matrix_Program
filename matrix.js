var d = document,$=this,z=5;

function createElement() {
	$.arr1 = [5,1,15];
	$.arr2 = [25,35,11,2];
}

function create(arrval,clname) {
	$.arrval = arrval;
	var parele = d.createElement("div");
	parele.setAttribute("class","row "+clname);
	for(i=0;i<$.arrval.length;i++) {
		childiv = d.createElement("div");
		childiv.innerHTML = $.arrval[i];
		arrvali = $.arrval[i]*z;
		childiv.setAttribute("style", "width:"+arrvali+"px");
		childiv.className = "child";
		parele.appendChild(childiv);
	}
	return parele;
}

function ClearBoth(elem) {
	myelem = d.createElement(elem);
	myelem.setAttribute("class","clearfix");
	return myelem;
}


createElement.prototype.ArrangElements = function() {
	var firstdiv = create($.arr1,"fArray");
	var secnddiv = create($.arr2,"sArray");
	var clearboth = ClearBoth("div");
	d.body.appendChild(firstdiv);
	d.body.appendChild(clearboth);
	d.body.appendChild(secnddiv);
}

createElement.prototype.CheckingWidthValues = function() {
	var fVal = $.arr1.map(function(element) {
		return element*z;
	});	
	var sVal = $.arr2.map(function(element) {
		return element*z;
	});	
	fVal = eval(fVal.join("+"));
	sVal = eval(sVal.join("+"));
	var maxVal = Math.max(sVal, fVal);
	if(maxVal == sVal) {
		fTot = maxVal - fVal;
		AssignWidthValues($.arr1, fTot, "fArray");
	} else {
		sTot = maxVal - sVal;
		AssignWidthValues($.arr2, sTot, "sArray");
	}
}


function AssignWidthValues(arrVal,totVal,clname) {
	//debugger;
	var ttval = totVal / arrVal.length;
	changArrLen = d.querySelectorAll("."+clname+" .child").length;
	for(i=0;i<changArrLen;i++) {
		var mywidth = d.querySelectorAll("."+clname+" .child")[i].style.width;
		mywidthmywidth = parseInt(mywidth) + ttval;
		
		d.querySelectorAll("."+clname+" .child")[i].style.width = Math.round(mywidthmywidth)+"px";
	}
}


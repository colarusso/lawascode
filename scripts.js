var d = new Date();         //timestamp
var da = d.getDate();       //day
var mon = d.getMonth() + 1; //month
var yr = d.getFullYear();   //year
var today = yr + onedigi(mon) + onedigi(da);
    
function cursor_on() {
	time=setInterval(function(){
		clearInterval(time);
		$('#icon').html('QnA:\\>_');
		cursor_off();
	//your code
	},900);
}

function cursor_off() {
	time=setInterval(function(){
		clearInterval(time);
		$('#icon').html('QnA:\\><font color="black">_</font>');
		cursor_on();
	//your code
	},900);
}

function onedigi (num) {
	if (num < 10) {
		num = "0"+num;
	}
	return num;
}

function loadXMLDoc(dname) {
	if (window.XMLHttpRequest) {
		xhttp=new XMLHttpRequest();
	} else {
  	xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",dname,false);
	xhttp.send("");
	return xhttp.responseXML;
}

function list (target,xml_call,xsl_call) {
	var resultDocument;	
	// code for IE
	if (window.ActiveXObject) {
		var xslt = new ActiveXObject("Msxml2.XSLTemplate.6.0");
		var xsldoc = new ActiveXObject("Msxml2.FreeThreadedDOMDocument.6.0");		
		var xslproc;
		xsldoc.async = false;
		xsldoc.load(xsl_call);
		if (xsldoc.parseError.errorCode != 0) {
		   var myErr = xsldoc.parseError;
		   //WScript.Echo("You have error " + myErr.reason);
		} else {
		   xslt.stylesheet = xsldoc;
		   var xmldoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
		   xmldoc.async = false;
		   xmldoc.load(xml_call);
		   if (xmldoc.parseError.errorCode != 0) {
			  var myErr = xmldoc.parseError;
			  //WScript.Echo("You have error " + myErr.reason);
			  resultDocument = "You have error " + myErr.reason	;
		  } else {
			  xslproc = xslt.createProcessor();
			  xslproc.input = xmldoc;
  			  xslproc.addParameter("today", today); // add parameter
			  xslproc.transform();
			  resultDocument = xslproc.output;
		  }

		}
	}
	// code for Mozilla, Firefox, Opera, etc.
	else if (document.implementation && document.implementation.createDocument) {
		xml=loadXMLDoc(xml_call);
		xsl=loadXMLDoc(xsl_call);
		xsltProcessor=new XSLTProcessor();
		// add parameter
		xsltProcessor.getParameter(null, "today");
		xsltProcessor.setParameter(null, "today", today);
		xsltProcessor.importStylesheet(xsl);
		resultDocument = xsltProcessor.transformToFragment(xml,document);
	}
	//document.getElementById(target).innerHTML = resultDocument;
	$('#'+target).html(resultDocument)
}


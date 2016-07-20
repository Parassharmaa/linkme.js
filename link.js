
a = document.querySelectorAll('[href]');
ext = ".php"
String.prototype.insertAt=function(index, string) { 
  return this.substr(0, index) + string + this.substr(index);
}
for(i=0;i<a.length;i++) {
	value = a[i].getAttribute('href');
	
	if(value.indexOf('.') == -1 && value.indexOf('?')==-1 && value.indexOf('#')==-1) {
		
		a[i].href+= ext;
	}
	
	else if(value.indexOf('?')>-1 && value.indexOf('.')==-1) {	
		var inat = value.indexOf('?');
		var pstring = a[i].getAttribute('href');
		var nstring = pstring.insertAt(inat,ext);
		a[i].setAttribute('href',nstring);
	}
	
	else if(value.indexOf('#')>-1 && value.indexOf('.')==-1) {	
		var inat = value.indexOf('#');
		var pstring = a[i].getAttribute('href');
		var nstring = pstring.insertAt(inat,ext);
		a[i].setAttribute('href',nstring);
	}
}
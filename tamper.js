/* 
* ###################################################################
* ##### https://github.com/ttodua/Tamper-Request-Javascript-Tool ####
* ### Don't put comments inside body when using the script inline ### 
* ###################################################################
*/

var AjaxMonitoringSample = 
{
	manualSumbission		: false,
	monitoring_status 		: true,
	responseOutput_status	: true,
	lastHeaders 			: {},
	allowed_requests		: [],
	mainDivId				: "AjaxMonitoringSample",
	
	init(){
		this.createDiv();
		this.initXHR();
	},
	
	resetAllowedRequests(){	 this.allowed_requests = [];	},
	
	createDiv(){
		var div= document.createElement("div");
		div.id= this.mainDivId;  if (document.getElementById(this.mainDivId)) document.getElementById(this.mainDivId).remove(); 
		div.innerHTML=
		`<style>#`+this.mainDivId+`{ z-index:99999; position:fixed; bottom:0px; left:0px; width: 90%; left:5%; margin:0 auto; border:2px solid red; background:orange; border-radius:7px; opacity:0.9; } #`+this.mainDivId+` > *{padding:5px;}</style> 
		<div>
			<textarea id="`+this.mainDivId+`_params" style="width:100%; height:40px;" placeholder="{key1:&quot;value1&quot;}"></textarea>
			<textarea id="`+this.mainDivId+`_headers" style="width:100%; height:40px;" placeholder="{headersArray}"></textarea>
			<input type="text" value="" id="`+this.mainDivId+`_url" style="width:100%;" placeholder="http://example.com" /> 
			<button onclick="`+this.mainDivId+`.submitClicked();">resend</button>  <button id="`+this.mainDivId+`_status" onclick="`+this.mainDivId+`.toggleMonitoring(null);">ON/OFF</button> <input type="checkbox" id="`+this.mainDivId+`_autodisable" /> Disable automatically after first request (to avoid concurrent calls)
			<div style="display:flex;height:40px;">Response: <textarea disabled id="`+this.mainDivId+`_response" style="width:100%; height:100%;"></textarea></div>
		</div>`;
		document.body.appendChild(div);
		this.statusColorize();
	},
	
	initXHR(){
		var this_ = this;
		if(typeof AjaxMonitoring_notfired == "undefined") var AjaxMonitoring_notfired=false; if (!AjaxMonitoring_notfired) 
		{ 
			AjaxMonitoring_notfired=true;
 
			
			/* NOTE: XMLHttpRequest actions happen in this sequence: at first "open"[readyState=1] happens, then "setRequestHeader", then "send", then "open"[readyState=2] */

			var XHR_SendOriginal = XMLHttpRequest.prototype.send;
			XMLHttpRequest.prototype.send = function(data){
 
				if (! this_.manualSumbission) 
				{
					if (this_.monitoring_status)
					{
						document.getElementById(this_.mainDivId+"_params").value = data; 
					}
				}
			    XHR_SendOriginal.apply(this, arguments);
			};

			var XHR_OpenOriginal = XMLHttpRequest.prototype.open;
			XMLHttpRequest.prototype.open = function(method, uri, async, user, pass) {

				if (! this_.manualSumbission)
				{
					this.addEventListener("readystatechange", function(event) { 

						if(this.readyState == 1)
						{
							event.target.uniqueID = Math.floor( (Math.random() * 99999999) + 1 );
							if (this_.monitoring_status) 
							{
								if (method.toLowerCase()!="post_get_or_whatever") {
									document.getElementById(this_.mainDivId+"_url").value = uri;
								}
								
								if(this_.shouldBeDisabledAfterFirstTrigger()) {
									this_.allowed_requests.push(event.target.uniqueID);
									this_.toggleMonitoring(false);
									return;
								}
								this_.allowed_requests.push(event.target.uniqueID);
							}
						} 
						if(this.readyState == 4){
							if ( "uniqueID" in event.target &&  this_.allowed_requests.includes(event.target.uniqueID) )
							{ 
								this_.setResponse(this.responseText);
								document.getElementById(this_.mainDivId+"_headers").value = JSON.stringify(this_.lastHeaders);
							}
						}
					}, false); 
				}
				XHR_OpenOriginal.apply(this, arguments);
			};

			var XHR_SetRequestHeaderOriginal = XMLHttpRequest.prototype.setRequestHeader;
			XMLHttpRequest.prototype.setRequestHeader = function(a, b) {
				if (! this_.manualSumbission)
				{
					if (this_.monitoring_status) 
					{
						this_.lastHeaders[a]=b;
					}
				}
				XHR_SetRequestHeaderOriginal.apply(this, arguments);
			};

		}
	},
	
	statusColorize() { 
		document.getElementById(this.mainDivId+"_status").style.background=this.monitoring_status?"green":"red"; 
	},

	submitClicked()
	{
		var this_ = this;
		this.manualSumbission = true;
		var params = JSON.stringify(JSON.parse(document.getElementById(this.mainDivId+"_params").value));  
		var url = document.getElementById(this.mainDivId+"_url").value;

		var http = new XMLHttpRequest();
		http.open('POST', url, true);
		
		var headers = JSON.parse(document.getElementById(this.mainDivId+"_headers").value); var notUseHeaders= this.lastHeaders;
		for (var prop in headers) {
			if (Object.prototype.hasOwnProperty.call(this.lastHeaders, prop)) {
				http.setRequestHeader(prop, this.lastHeaders[prop] ); 
			}
		}
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status != 999)  
			{
				this_.setResponse(http.responseText);
				this_.manualSumbission =false;
			}
		};
		http.send(params);
	},
	
	toggleMonitoring(enable_disable) { 
		this.monitoring_status = enable_disable != null? enable_disable : !this.monitoring_status;
		this.statusColorize(); 
		if(this.monitoring_status)
			this.allowedByAutoDisabling=true;
	}, 
	
	setResponse(text){
		document.getElementById(this.mainDivId+"_response").value=text;
	},
	shouldBeDisabledAfterFirstTrigger(){ 
		this.shouldBeDisabledAfterResponse = document.getElementById(this.mainDivId+"_autodisable").checked;
		return this.shouldBeDisabledAfterResponse; 
	} 
};

AjaxMonitoringSample.init();

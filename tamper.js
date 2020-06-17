/*
// ########################################################### //
// https://github.com/ttodua/Tamper-Request-Javascript-Tool    //
// Don't put comments inside body when using the script inline //
// ########################################################### //
*/

var AjaxMonitoringSample = 
{
	manualSumbission : false, 
	allowedByAutoDisabling : true,
	monitoring_status : true,
	mainDivId : "AjaxMonitoringSample",
	
	init(){
		this.createDiv();
		this.initXHR();
	},
	
	createDiv(){
		var div= document.createElement("div");
		div.id= this.mainDivId;  if (document.getElementById(this.mainDivId)) document.getElementById(this.mainDivId).remove(); 
		div.innerHTML=
		`<style>#`+this.mainDivId+`{ z-index:99999; position:fixed; bottom:0px; left:0px; width: 90%; left:5%; margin:0 auto; border:2px solid red; background:orange; border-radius:7px; opacity:0.9; } #`+this.mainDivId+` > *{padding:5px;}</style> 
		<div>
			<textarea id="`+this.mainDivId+`_params" style="width:100%; height:40px;" placeholder="{key1:&quot;value1&quot;}"></textarea>
			<input type="text" value="" id="`+this.mainDivId+`_url" style="width:100%;" placeholder="http://example.com" /> 
			<button onclick="`+this.mainDivId+`.submitClicked();">resend</button>  <button id="`+this.mainDivId+`_status" onclick="`+this.mainDivId+`.toggleMonitoring();">ON/OFF</button> <input type="checkbox" id="`+this.mainDivId+`_autodisable" /> Disable automatically after first request (to avoid concurrent calls)
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
			var XHR_SendOriginal = XMLHttpRequest.prototype.send;
			XMLHttpRequest.prototype.send = function(data){
				if (! this_.manualSumbission) 
				{
					if (this_.allowedByAutoDisabling) 
					{
						if (this_.monitoring_status)
						{
							document.getElementById(this_.mainDivId+"_params").value = data;
						}
					}
				}
			    XHR_SendOriginal.apply(this, arguments);
			};

			var XHR_OpenOriginal = XMLHttpRequest.prototype.open;
			XMLHttpRequest.prototype.open = function(method, uri, async, user, pass) {
				if (! this_.manualSumbission)
				{
					if (this_.allowedByAutoDisabling) 
					{
						if (this_.monitoring_status) 
						{
							this.addEventListener("readystatechange", function(event) {   
								if(this.readyState == 1){
									if (method.toLowerCase()!="post_get_or_whatever") {
										document.getElementById(this_.mainDivId+"_url").value = uri;
									}
								}
								if(this.readyState == 4){
									if(this_.ifDisableAfterFirstExecution()) 
										this_.toggleMonitoring();
									this_.setResponse(this.responseText);
								}
						  }, false);
						}
					}
				}
				XHR_OpenOriginal.apply(this, arguments);
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
		http.setRequestHeader("Content-Type", (true ? "application/json;charset=UTF-8" : "application/x-www-form-urlencoded") ); 

		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status != 999)  
			{
				this_.setResponse(http.responseText);
				this_.manualSumbission =false;
			}
		};
		http.send(params);
	},
	
	toggleMonitoring() { 
		this.monitoring_status = !this.monitoring_status; 
		if(this.monitoring_status)
			this.allowedByAutoDisabling=true;
		this.statusColorize();
	},
	setResponse(text){
		document.getElementById(this.mainDivId+"_response").value=text;
	},
	ifDisableAfterFirstExecution(){ return document.getElementById(this.mainDivId+"_autodisable").checked; } 
};

AjaxMonitoringSample.init();

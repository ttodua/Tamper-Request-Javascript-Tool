This is a pure Javascript tool (browser agnostic) and doesn't need to install any Browser-Extensions.

This tool/script hooks into AJAX (POST) requests and you can tamper/modify/replay requests.

Installation
=
Can be used in console or as a browser-snippet.
 
1) Just select the code and drag into your browser toolbar to save it as a browser-bookmark (snippet).
![example](https://i.imgur.com/qYNQCCY.png)
2) Right-click > Edit > add the `javascript:` prefix in front of the code (and optionally change the name of snippet to whatever you like, i.e. `Tamper`).

Usage
=
* Open any target website where you want to tamper the ajax-request (like "button-click", form-submission or etc...)
* Click the browser-bookmark to activate the code and you will see the primitive window.
![example](https://i.imgur.com/145np9J.png)
* Make any AJAX request on the target website and you will see the request tampered and filled. Then you can modify & replay it.

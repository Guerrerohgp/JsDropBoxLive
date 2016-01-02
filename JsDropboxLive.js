var JsDropboxLive = (function () {

  var Instance;

  function create () {

	    function load(files) {
	      // code to load and transfor  images
	      console.log("Loading");
	    }

	    function upload() {
	      // code to upload directly to dropbox
	      console.log("Uploading");
	    }

	    return { load: load, upload: upload };
  }

  return {
	    	getInstance: function() {
			      if(!Instance) {
			        	Instance = create();
			      }
			      return Instance;
		    }
  		};
})();
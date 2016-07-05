;(function(win){
	
	win.JSON.read = function(json_string){
		return read(JSON.parse(json_string));
	}

	var read = function(json){
		for(var k in json){
			if(typeof json[k] == "string"){
				switch(json[k]){
					case "NaN": 	  json[k] = NaN; 	   break;
					case "null": 	  json[k] = null;      break;
					case "true": 	  json[k] = true; 	   break;
					case "false": 	  json[k] = false;     break;
					case "Infinity":  json[k] = Infinity;  break;
					case "-Infinity": json[k] = -Infinity; break;
					default:
						var n = parseInt(json[k]);
						(!isNaN(n))? json[k] = n: json[k];
						break;
				}
				console.log(json[k]);
			} else {
				read(json[k]);
			}
		}
		return json;
	}

})(window);
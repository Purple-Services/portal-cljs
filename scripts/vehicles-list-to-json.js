var fs = require('fs');

var vehiclesList;
var vehicles_list_filename = process.env.HOME + '/Purple-Services/portal-cljs/vehiclesList.js';
var vehicles_list_json = process.env.HOME + '/Purple-Services/portal-cljs/vehiclesList.json';
fs.readFile(vehicles_list_filename, 'utf8', function (err,data) {
    if (err) {
	return console.log(err);
    }
    eval(data);
    fs.writeFile(vehicles_list_json,JSON.stringify(vehiclesList),
		 function(err) {
		     if(err) {
			 return console.log(err);
		     }});
});

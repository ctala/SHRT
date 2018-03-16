const Users = global.models.users;
const Url = global.models.url;
const short = require("../../system/short.js")
module.exports = function(input, output) {

	console.log("ACA",input.input)
	let data = input.input
		Url.create({url:data.url,user_id:input.user}).then((url)=>{
				output.send({status:true,msg:"Short Link creado",short:short.encode(url.dataValues.id)})
				output.end()
				
			})
}
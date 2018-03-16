const Records = global.models.records;
const Url = global.models.url;
module.exports = function(input, output) {
		Url.findAll({where:{user_id:input.user},attributes:["id","url","createdAt","updatedAt"],

			include: [
      {
        model: Records,
        as: "records"
      }
    ]
	}).then((urls) => { 
		output.send(urls)
		output.end()

	})
}
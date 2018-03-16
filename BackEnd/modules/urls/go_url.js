const Records = global.models.records;
const Url = global.models.url;
const short = require("../../system/short.js")
module.exports = function(input, output) {
    console.log(input);
  let data = input.input
  let user_agent = input.headers['user-agent']
  let origin_ip  = input.headers['x-forwarded-for'] || input.connection.remoteAddress;

  let short_url = short.decode(data.short)
  console.log(data,short_url)

  Url.find({where:{id:short_url},attributes:["id","url"],
      }).then(url => {
        if (url == null){
            output.redirect("http://ca.ca")
            output.end()
        }
        else{+        output.redirect(url.url)
            output.end()

        Records.create({url_id:url.dataValues.id,ip:origin_ip,user_agent:user_agent,origin:input.headers.referer}).then((records)=>{
    
      }
      );
      }
  })
}
const express = require("express");

const app= express();
const https=require("https");


app.get("/",function(req,res){
   
  const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=432374fe0007216560ded01642a5e9c3";
   https.get(url,function(response){
   console.log(response.statusCode);
  

   response.on("data",function(data){

  const weatherData=JSON.parse(data)
  const temp=weatherData.main.temp
  const weatherDescription=weatherData.weather[0].description
  res.send("<h1>The temperature in London is  "+ temp +" degrees celcius</h1>" );

})

 
   
   })
	
})

app.listen(3000,function (req , res){

	console.log("Server is running on prot 3000");
	console.log("san");
})
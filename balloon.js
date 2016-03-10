function hello(){
		return "Hello World";
};

// var balloonString = ("4 sets of red, 3 sets of blue, and 3 sets of yellow.");

function findBalloonSets(balloonString){
  	var balloonSets = balloonString.split(",");
//   		return (balloonSets);
  
      var setsList = [];
    		for(var i=0; i<balloonSets.length; i++){
        	var setsNewString = balloonSets[i];
        
            var colorString = setsNewString
                  .replace("and", "")
                  .trim();
          
            var colorParts = colorString
                  .split("sets of");
          
              
        var colorName = colorParts[0];
        if (isNaN(colorParts[1])){
            colorName = colorParts[0] + colorParts[1];
        }
          
          var fish = colorName
        	    	.split(" ");
				
				  var set = Number(fish[0]);
                  
          var colorNameString = fish[2];
          
                    setsList.push({
						            set:set,
                        colorNameString:colorNameString,
					});
          
      
       }
       return setsList;
      // console.log(setsList);
}


findBalloonSets("4 sets of red, 3 sets of blue, and 3 sets of yellow.");








// function findAvoDeals(avoString){
//   	var avoDeals = avoString.split(",");
//   	// return avoDeals;
			 
// 	var avoDealsList = [];
//     		for(var i=0; i<avoDeals.length; i++){
//         	var avoDealsString = avoDeals[i];
        	
//         	    var fish = avoDealsString
//         	    	.split("for");
				
// 				var quantity = Number(fish[0]);
                  

//                 var pricenumber = fish[1]
//                 	.replace("R","");

//                 var prices = Number(pricenumber);
//                     avoDealsList.push({
// 						quantity:quantity,
//                         prices:prices,
// 					});
				
        		        	    


// 	}
// 	return avoDealsList;
// 	// console.log(avoDealsList);
// };
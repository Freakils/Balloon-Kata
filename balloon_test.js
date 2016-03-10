QUnit.test( "testing hello function", function( assert ) {
		var result = hello();
			assert.equal( "Hello World", result, "testing hello function");
});

QUnit.test("findBalloonSets", function( assert ) {
		var result = findBalloonSets("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
			assert.deepEqual(["4 sets of red", " 3 sets of blue", " and 3 sets of yellow."], result);

});

QUnit.test("colorString", function( assert ) {
		var result = findBalloonSets("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
		var expectedArray = ["4 ", " red"]
["3 ", " blue"]
["3 ", " yellow."]
			assert.deepEqual(expectedArray, result);
});

QUnit.test("Balloon Sets and Colors", function( assert ) {
		var result = findBalloonSets("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
		var expectedArrayTwo = [ {
  colorNameString: "red",
  set: 4
},  {
  colorNameString: "blue",
  set: 3
},  {
  colorNameString: "yellow.",
  set: 3
}]
			assert.deepEqual(expectedArrayTwo, result);
});
$.getJSON( "people.json", function( data ) {
	 
	$.each(data, function(i){
		console.log(data[i]);
		
		$('.table').append("<tr>" +
					  	"<td>" + data[i].name + "</td><td>" + data[i].surname + "</td>" +
						"<td>" + data[i].age + "</td><td>" + data[i].location + "</td>" +
					 "</tr>")
	})
});
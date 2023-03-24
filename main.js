	
const place = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];	

let name=place.map(function(l)
	{
	return `${l.first_name} lives in ${l.location}`;
	});
	console.log(name);
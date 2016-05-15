var text = '{"employees":[' +
      '{"firstName":"Adam","lastName":"Parker" },' +
      '{"firstName":"Anna","lastName":"Smith" },' +
      '{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
console.log(  obj.employees[2].firstName + " " + obj.employees[2].lastName);
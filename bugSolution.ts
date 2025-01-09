function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return persons.map(person => greeter(person)).join(', ');
}

let user = ["Jane Doe", "John Smith"];
console.log(greeterArray(user)); // This will now work correctly
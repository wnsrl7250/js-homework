function getValueAtObject(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    console.error(`${key}값이 존재하지 않습니다.`);
    return;
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name"));
console.log(getValueAtObject(person, "age"));
console.log(getValueAtObject(person, "city"));
console.log(getValueAtObject(person, "country"));

// Object destructuring

const person = {
    name: 'Andrew',
    age: 14,
    location: {
        city: 'New York',
        temp: 72
    }
};

const { name, age } = person;
console.log(`This is ${name}. He is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    author: 'Ryan Holiday',
    name: 'Ego is the Enemy',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self Publish' } = book.publisher;
console.log(publisherName);

// Array destructuring

const item = ['Coffee (cold)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice] = item;
console.log(`${coffee} of medium size costs ${mediumPrice}.`);
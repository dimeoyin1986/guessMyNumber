"use strict"

const oneWord = str => str.replace(/ /g, "").toLowerCase()
const upperCaseFirstWord = str => {
    const [firstWord, ...otherWords] = str.split(" ");
    return [firstWord.toUpperCase(), ...otherWords].join(" ")
}

// THE HIGHER ORDER FUNCTION
const transformer = (str, fn) => {
    console.log(`${str}`)
    console.log(`The transformed string : ${fn(str)}`)
    console.log(`transformed by:${fn.name}`)
}

transformer("muhammad is the prophet of ALlaah", upperCaseFirstWord)
transformer("muhammad is the prophet of ALlaah", oneWord)


const greet = greeting => (name) => console.log(`${greeting} ${name}`)



greet("Asalam Alaykum waramotuLlaahi wabarakatu")("AbduLlaah")
const teslim = greet("Asalam Alaykum waramotuLlaahi wabarakatu")
teslim("Ismail");
teslim("Jeleelah");


const lufthansa = {
    airline: "lufthansa",
    iatacode: "DIMEOYIN",
    bookings: [],
    book(flighNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flighNum}`)
        // this.bookings.push({
        //     flight: `${this.iatacode}${flighNum}`,
        //     name
        // })
    }
}


lufthansa.book(1986, "Oladokun Ismail")
lufthansa.book(1988, "Abdulazeez Jeleelah")
console.log(lufthansa)


const ismail = {
    airline: "ismail",
    iatacode: "DIMEOYIN",
    booking: []

}

const myBook = lufthansa.book
// does not work
// myBook(2015, "Oladokun AbduLlaah")
lufthansa.book.call(ismail, 2015, "AbduLlaah")

const secureBooking = () => {
    let passengercount = 0
    return () => console.log(passengercount++)
}
const p = secureBooking()
p()
p()
p()
p()
p()


const booking = [];

const creatingBook = (fligthNum, numPassengers = 1, price = 200 * numPassengers) => {
    // numPassengers = numPassengers || 1;
    // price = price || 200;

    const book = {
        fligthNum,
        numPassengers,
        price

    }
    console.log(book)
    booking.push(book)

}

creatingBook("dimeoyin1982")
creatingBook("dimeoyin1988", 4, 19000)
creatingBook("dimeoyin1982", 5)
creatingBook("dimeoyin1982", 10)
creatingBook("dimeoyin1982", undefined, 8000)

const flight = "DIMEOYIN1982";
const AbduLlaah = {
    name: "Oladokun AbduLlaah",
    passport: 123456778,
}


const checkIn = (flighNum, myName) => {
    flighNum = "lh123",
        myName.name = `Mr. ${myName.name}`
    myName.passport === 123456778 ? alert(`check in`) : alert(`you are not check in`)
}

checkIn(flight, AbduLlaah)


const btn = document.querySelector(".poll-answer")
console.log(btn)

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(write option number)`))
        console.log(answer)
        typeof answer === "number" && answer < this.answers.length && this.answers[answer]++
        console.log(this.answers)
    }
};

btn.addEventListener("click", poll.registerNewAnswer.bind(poll))




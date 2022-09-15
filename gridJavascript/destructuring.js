"use strict"

// destructuring is the act of unpacking values from array or properties from  an object in distinct variables.

//Destructuring of object
const restaurant = {
    name: "dimeoyin classical",
    location: "fatokun Maniya",
    categories: ["ijebu", "oyo", "osun", "ogun", "ekiti", "lagos"],
    startMenu: ["ogi", "bread", "eko", "isu"],
    mainMenu: ["iyan", "amala", "eba", "semo"],
    order: function (startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ time = "20:00", startIndex = 1, mainIndex = 0, address }) {
        console.log(`Order received at ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will deliver to ${address} at ${time}`)
        return `Order received at ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will deliver to ${address} at ${time}`;

    },

    orderAmala: function (ing1, ing2, ing3) {
        console.log(`kindly get the  following ingridient ${ing1},${ing2} and ${ing3}`)
    },

    orderOgi: function (mainIngridient, ...otherIngridients) {
        console.log(mainIngridient)
        console.log(otherIngridients)
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    }
}
restaurant.orderDelivery({
    time: "2:30 PM",
    address: "Fatokun Moniya Ibadan",
    startIndex: 2,
    mainIndex: 1
})

restaurant.orderDelivery({

    address: "Fatokun Moniya Ibadan",
    startIndex: 2,

})

'Order received at eko and amala will deliver to Fatokun Moniya Ibadan at 2:30 PM'

const [a, b] = restaurant.order(2, 3)
console.log(a, b)




// destructuring object
const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

const {
    name: restaurantName,
    openingHours: hours,
    categories:
    tags
} = restaurant;
console.log(restaurantName, hours, tags)

// accessing properties from third api that may not exist
const { menu: myMenu = [], startMenu: starter = [], mainMenu: main = [] } = restaurant;
console.log(myMenu, starter, main)

//mutating variable $ does not work

// let p = 56;
// let q = 777;
// const object = { p: 23, q: 75, g: 45 }
//     ({ p, q } = object)
// console.log(a, b)




const { fri: { open: o, close: c } } = hours
console.log(o, c)


const ingridient = [/*prompt('Let\'s makes Amala! ingridient1?'), prompt('Let\'s makes Amala! ingridient2?'), prompt('Let\'s makes Amala! ingridient3?')*/]
console.log(ingridient)

restaurant.orderAmala(...ingridient)


// spread operator is use create a new copy of an array or or pass values of an array into a function
const sum = (a, c, d) => {
    return a + c + d;
}
const p = [2, 4, 5]
console.log(sum(...p))

// spread on object
const newRestaurant = { foundedInYear: 2015, ...restaurant, founder: "AbduLlaah Oladokun" }
console.log(newRestaurant)
const restaurantCopy = { ...restaurant }
restaurantCopy.name = "jeleelah restaurant";
console.log(restaurant)
console.log(restaurantCopy)

const arr = [7, 8, 9, 14]
const mySpread = [12, 56, ...arr]
console.log(mySpread)
//spread operator on right or because you are scattering the elements of the array
const [x, y, ...z] = mySpread

console.log(x, y, z)
// rest parameter  gather the elements or pack the element

const [n, , , t, ...others] = [...restaurant.startMenu, ...restaurant.mainMenu]

console.log(n, t, others)


const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays)


function add(...rests) {
    return rests.reduce((acc, cur) => acc + cur)
}

console.log(add(2, 3, 5, 7, 8, 9))



function add2(...rests) {
    let sum = 0
    for (let i = 0; i < rests.length; i++) {
        sum += rests[i]

    }
    return sum;
}

console.log(add2(2, 3, 5, 7, 8, 9))

restaurant.orderOgi("sugar", "cocumber", "date", "onion")



/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.


*/


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2)
//2.
const [gk, ...fieldPlayers] = players1

console.log(gk, fieldPlayers)

//3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

//.4
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1]
console.log(players1Final)

// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2)


const printGoals = (...players) => {
    console.log(players)
    console.log(`${players.length} number of goals were scored`)
}

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels')
printGoals(...game.scored)

team1 < team2 && console.log(`team1 is likely going to win`)
team1 > team2 && console.log(`team2 is likely going to win`)



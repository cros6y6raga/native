// users => copy users => change copy => use copy users with changes

const user = {// #567
    name: 'bob',
    age: 23
}
const user2 = user // #567

user2.name = 'alex'
console.log(user.name) //'alex'

// {}, new Object(), Object.create()

const copyUser = {...user} // #999 // Object.assign(), JSON.stringify -> JSON.parse()

// copyUser.name = user.name
// copyUser.age = user.age

console.log(copyUser)
console.log(copyUser === user) //false
console.log({} === {}) //false
console.log([] === []) //false
console.log(2 === 2) //true
console.log(0 == false) //true
console.log([] == false) //true

const array = [1, 2, 3, 4, 5]
const copyArray = [...array]

const state = [
    {
        id:1,
        name: 'bob',
        isStudent: true,
        address: {},
    },
    {
        id:2,
        name: 'alex',
        isStudent: true,
        address: {},
    },
    {
        id:3,
        name: 'ann',
        isStudent: true,
        address: {},
    },
    {
        id:4,
        name: 'donald',
        isStudent: true,
        address: {},
    },
]
// const copyState = [ // полная копия
//     {...state[0]},
//     {...state[1]},
//     {...state[2]},
//     {...state[3]},
// ]
//const copyState = state.map(st => ({...st, address:{...st.address}}))
//
// id === 3, 'ann' => 'anne'
const copyState = state.map(st => st.id === 3 ? {...st, name:'anne'} : st)
const person = {
    name: 'kodom ali', 
    job: 'badam khai',
    oli:{
        name: 'oli',
        profetion:'student'
    },
    3:'third',
    'add-dress': 'kochu khet'
}
const prop = 'job'
console.log(person.job)
console.log(person['job'])
console.log(person[prop])
console.log(person['3'])
console.log(person["add-dress"])
console.log(person.oli.profetion)
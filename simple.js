const prayer = require('./prayer')
const date = () => new Date()

console.log(date(), 'System opened!')

setTimeout(async () => {
    const information = await prayer.times({ place: 'Kocaeli' })
    console.log(information)
}, 1000);
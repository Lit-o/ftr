
// возвращает boolean прокнул ли шанс из 100 процентов кратный целому числу
const isChance = percent => (Math.floor(Math.random() * 100) + 1) <= percent
console.log(isChance(90))


// прогрессия lvlUp
const lvlCupTo = (lvl) => {
    return ((lvl+1)*((lvl+1)-1)/2) * 100
}
console.log(lvlCupTo(3))
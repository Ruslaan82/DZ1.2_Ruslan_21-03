let month = prompt('Enter month of birth');
let day = Number(prompt('Enter date of birth'));
// let day = +prompt('Enter date of birth'); - смена number

if ((month === 'декабрь' && day >= 22 && day <= 31) || (month === 'январь' && day <= 19 && day >= 1)) {
    console.log('Козерог')
    alert('Wow! I am a Capricorn too!')
} else if ((month === 'январь' && day >= 20 && day <= 31) || (month === 'февраль' && day <= 18 && day >= 1)) {
    console.log('Водолей')
    alert('Wow! I am a Aquarius too!')
} else if ((month === 'февраль' && day >= 19 && day <= 28) || (month === 'март' && day <= 20 && day >= 1)) {
    console.log('Рыба')
    alert('Wow! I am a Fish too!')
} else if ((month === 'март' && day >= 21 && day <= 31) || (month === 'апрель' && day <= 19 && day >= 1)) {
    console.log('Овен')
    alert('Wow! I am a Aries too!')
} else if ((month === 'апрель' && day >= 20 && day <= 30) || (month === 'май' && day <= 20 && day >= 1)) {
    console.log('Телец')
    alert('Wow! I am a Taurus too!')
} else if ((month === 'май' && day >= 21 && day <= 31) || (month === 'июнь' && day <= 20 && day >= 1)) {
    console.log('Близнецы')
    alert('Wow! I am a Twins too!')
} else if ((month === 'июнь' && day >= 21 && day <= 30) || (month === 'июль' && day <= 22 && day >= 1)) {
    console.log('Рак')
    alert('Wow! I am a Crayfish too!')
} else if ((month === 'июль' && day >= 23 && day <= 31) || (month === 'август' && day <= 22 && day >= 1)) {
    console.log('Лев')
    alert('Wow! I am a Lion too!')
} else if ((month === 'август' && day >= 23 && day <= 31) || (month === 'сентябрь' && day <= 22 && day >= 1)) {
    console.log('Дева')
    alert('Wow! I am a Virgo too!')
} else if ((month === 'сентябрь' && day >= 23 && day <= 30) || (month === 'октябрь' && day <= 22 && day >= 1)) {
    console.log('Весы')
    alert('Wow! I am a Scales too!')
} else if ((month === 'октябрь' && day >= 23 && day <= 31) || (month === 'ноябрь' && day <= 21 && day >= 1)) {
    console.log('Скорпион')
    alert('Wow! I am a Scorpion too!')
} else if ((month === 'ноябрь' && day >= 22 && day <= 30) || (month === 'декабрь' && day <= 21 && day >= 1)) {
    console.log('Стрелец')
    alert('Wow! I am a Sagittarius too!')
} else {
    console.log("Thank you! You're the best !!!")
    alert("Nice!")
}
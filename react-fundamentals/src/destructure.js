const user1 = {
    name: 'Ana Betancourt',
    username: 'anabc56',
    country: 'México',
    social: {
        facebook: 'facebook.com/anarocio7',
        twitter: 'twitter.com/anabc56'
    }
}

const greeting = (user) => {
    const { name, country, social: { twitter } } = user
    console.log(`Hi, this is ${name} and I live in ${country}. My twitter username is ${twitter}`)
}

greeting(user1)
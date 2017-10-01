import Faker from 'faker'

function getData(parameters) {
    let data = [];
    for (let i = 0; i < 5; i++) {
        let obj = {};
        for (let n = 0; n < parameters.length; n++) {
            obj[parameters[n]] = Faker.company.bsNoun().replace(/\s+/g, '-').toLowerCase();
        }
        data.push(obj);
    }
    return data;
}

export default (parameters) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(getData(parameters)), 2000);
    });
}

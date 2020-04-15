const hbs = require('hbs');

hbs.registerHelper('getYear', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (text) => {
    const arr = text.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        const s = arr[i];
        arr[i] = s.charAt(0).toUpperCase() + s.substring(1);
    }
    return arr.join(' ');
});

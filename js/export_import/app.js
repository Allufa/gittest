async function load() {
    let say = await
    import ('./modules.js');
    say.hi(); // Привет!
    say.bye(); // Пока!
    say.default(); // Модуль загружен (экспорт по умолчанию)!
}
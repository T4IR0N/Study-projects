/*  
Есть массив со сломанными ссылками brokenLinks. Задача превратить ссылки в работающие: (https://someLink)
Создать функцию, которая в качестве параметра принимает массив brokeLinks,
создает новый массив с исправленными ссылками и возвращает его
*/

const brokenLinks = ['vk', 'facebook', 'youtube', 'spotify'];

let fixLinks = (links) => {
    let fixedLinks = [];
    links.forEach((link) =>
        fixedLinks.push('https://' + link + '.com')
    );
    return fixedLinks;
};


console.log(fixLinks(brokenLinks));
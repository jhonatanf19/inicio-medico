const languages = {
    "es": {
        'title': 'Bienvenido',
        'content': 'Este es un sitio web multilingüe de ejemplo.'
    },
    "en": {
        'title': 'Welcome',
        'content': 'This is a sample multilingual website.'
    },
    "fr":{
        "title" : "Bienvenue",
        'content': 'Ceci est un exemple de site Web multilingue.'
    }
    
};
function changeLanguage(lang) {
    document.documentElement.lang = lang; 
    document.getElementById('title').textContent = languages[lang]['title'];
    document.getElementById('content').textContent = languages[lang]['content'];
}
changeLanguage('es'); 
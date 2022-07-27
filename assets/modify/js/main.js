if (window.matchMedia !== undefined) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark-mode");
        halfmoon.darkModeOn = true;
        halfmoon.createCookie("halfmoon_preferredMode", "dark-mode", 365);
    }
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
            if (event.matches) {
                document.body.classList.add("dark-mode");
                halfmoon.darkModeOn = true;
                halfmoon.createCookie("halfmoon_preferredMode", "dark-mode", 365);
            } else {
                document.body.classList.remove("dark-mode");
                halfmoon.darkModeOn = false;
                halfmoon.createCookie("halfmoon_preferredMode", "light-mode", 365);
            }
        })
} else {
    let modeCookie = halfmoon.readCookie('halfmoon_preferredMode');
    if(modeCookie === 'light'){
        document.body.classList.remove("dark-mode");
        halfmoon.darkModeOn = false;
        halfmoon.createCookie("halfmoon_preferredMode", "light-mode", 365);
    } else {
        document.body.classList.add("dark-mode");
        halfmoon.darkModeOn = true;
        halfmoon.createCookie("halfmoon_preferredMode", "dark-mode", 365);
    }
}
function setThemeOnload(){
    if(
        localStorage.theme === 'dark' || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)"))
    ){
        document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }
}

function switchTheme(){
    if(
        localStorage.theme === 'dark' || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)"))
    ){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    }else{
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    }
}

export { setThemeOnload, switchTheme }

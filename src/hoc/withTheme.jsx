// Переменная с именем темы
let theme;

// Функция, принимающая компонент и возвращает новый функциональный компонент:
export const withTheme = (Component) => (props) => {
    
    // метод установки дефолтной темы при рендере App
    const setThemeFromStore = () => {
        theme = localStorage.getItem("theme") || "dark"; // забираем из LocalStorage или ставим дефолтное значение dark
        document.body.setAttribute("data-theme", theme); // указываем тему в body
    }

    // Функция переключения темы
    const toggleTheme = () => {
        let newTheme = theme === "dark" ? "light" : "dark";
        // console.log(newTheme);
        document.body.setAttribute("data-theme", newTheme);
        theme = newTheme;
        localStorage.setItem("theme", theme); // сохраняем нашу выбранную тему с ее значением в LocalStorage
    }

    return (
        <Component setThemeFromStore={setThemeFromStore} toggleTheme={toggleTheme} {...props}/>
    )
}
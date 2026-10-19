
const languageToggle = document.getElementById("languageToggle");

let currentLanguage = "en";

function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.body.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
        element.textContent = element.dataset[language];
    });

    languageToggle.textContent = language === "en" ? "العربية" : "English";
}

languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "ar" : "en";
    setLanguage(nextLanguage);
});

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

setLanguage("en");

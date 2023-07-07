import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                text: ["Hind", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#EF2ED0",
                secondary: "#661ED6",
            },
            boxShadow: {
                custom: ["4px 4px 0px 0px #EF2ED0;"],
            },
        },
    },

    plugins: [forms],
};

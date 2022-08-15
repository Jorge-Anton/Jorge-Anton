module.exports = {
    theme: {
        container: {
            center: true,
            padding: "2rem"
        },
        fontFamily: {
            'roboto': ['Roboto', 'Arial'],
            'montserrat': ['Montserrat', 'Roboto', 'Arial']
        },
        extend: {
            boxShadow: {
                '3xl': '0px 0px 8px rgba(0, 0, 0, 0.5)'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
    purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
};
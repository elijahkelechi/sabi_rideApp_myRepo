// tailwind.config.js
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0088CD",
            },
            fontFamily: {
                "baloo-400": "Baloo-2-400",
                "baloo-500": "Baloo-2-500",
                "baloo-600": "Baloo-2-600",
                "baloo-700": "Baloo-2-700",
            },
            boxShadow: {
                custom: "0 10px 10px rgba(0, 0, 0, 1)",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};

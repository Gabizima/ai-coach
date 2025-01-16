module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#3AB0FF",
          secondary: "#2B3467",
          success: "#10B981", // emerald-500
          background: {
            DEFAULT: "#111827", // gray-900
            secondary: "#1F2937", // gray-800
          }
        },
      },
    },
    plugins: [],
  }
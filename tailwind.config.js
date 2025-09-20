/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];

export const theme = {
  extend: {
    screens: {
      xs: "370px",
    },
     colors: {
        myPurple: "oklch(67.3% .182 276.935)",
      },
  },
};

export const plugins = [];


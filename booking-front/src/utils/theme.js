// theme.js

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightTheme : darkTheme),
  },
});

export default getDesignTokens;

export const lightTheme = {
  white: {
    main: "rgba(255, 255, 255, 1)",
    mainHover: "rgba(240, 240, 240, 1)",
  },
  black: {
    main: "rgba(0, 0, 0, 1)",
    mainHover: "rgba(50, 50, 50, 1)",
  },
  background: {
    default: "rgba(240, 248, 255, 1)",
    card: "rgba(255, 255, 255, 0.95)",
    input: "rgba(255, 255, 255, 1)",
  },
  text: {
    primary: "rgba(33, 37, 41, 1)",
    secondary: "rgba(100, 100, 100, 0.8)",
  },
  border: {
    input: "rgba(30, 144, 255, 0.3)",
  },
  button: {
    primary: "rgba(30, 144, 255, 1)",
    primaryHover: "rgba(25, 130, 230, 1)",
    secondary: "rgba(100, 149, 237, 0.8)",
  },
  feedback: {
    error: "rgba(220, 20, 60, 0.9)",
    success: "rgba(46, 204, 113, 0.9)",
  },
  link: {
    main: "rgba(60, 179, 113, 1)",
  },
};

export const darkTheme = {
  background: {
    default: "rgba(18, 18, 18, 1)",
    card: "rgba(28, 28, 30, 0.95)",
    input: "rgba(40, 40, 40, 1)",
  },
  text: {
    primary: "rgba(245, 245, 245, 1)",
    secondary: "rgba(180, 180, 180, 0.8)",
  },
  border: {
    input: "rgba(30, 144, 255, 0.4)",
  },
  button: {
    primary: "rgba(30, 144, 255, 1)",
    primaryHover: "rgba(25, 130, 230, 1)",
    secondary: "rgba(70, 130, 180, 0.8)",
  },
  feedback: {
    error: "rgba(255, 99, 132, 0.9)",
    success: "rgba(50, 205, 50, 0.9)",
  },
  link: {
    main: "rgba(144, 238, 144, 1)",
  },
};

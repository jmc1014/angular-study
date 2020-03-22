module.exports = {
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    colors: {
      transparent: "transparent",

      black: "#22292f", //22292f
      white: "#ffffff",

      "red-lightest": "#FED7D7",
      "red-lighter": "#FEB2B2",
      "red-light": "#FC8181",
      red: "#F56565",
      "red-dark": "#E53E3E",
      "red-darker": "#C53030",
      "red-darkest": "#9B2C2C",

      "green-lightest": "#C6F6D5",
      "green-lighter": "#9AE6B4",
      "green-light": "#68D391",
      green: "#48BB78",
      "green-dark": "#38A169",
      "green-darker": "#2F855A",
      "green-darkest": "#276749",

      "gray-lightest": "#f3f3f3",
      "gray-lighter": "#b6b6b6",
      "gray-light": "#797979",
      gray: "#3c3c3c",
      "gray-dark": "#718096",
      "gray-darker": "#4a5568",
      "gray-darkest": "#1a202c",

      "pink-darkest": "#2f001e",
      "pink-darker": "#5e003d",
      "pink-dark": "#8d015b",
      pink: "#eb0299",
      "pink-light": "#ef34ad",
      "pink-lighter": "#f367c1",
      "pink-lightest": "#f799d6",

      "orange-darkest": "#3b1a0b",
      "orange-darker": "#793b12",
      "orange-dark": "#b5591a",
      orange: "#ee7520",
      "orange-light": "#f4914e",
      "orange-lighter": "#f6ad7a",
      "orange-lightest": "#FCE3D4",

      "apple-darkest": "#2f3310",
      "apple-darker": "#616822",
      "apple-dark": "#909b32",
      apple: "#c1ce43",
      "apple-light": "#cdd969",
      "apple-lighter": "#d9e192",
      "apple-lightest": "#e7ecb4",

      "blue-darkest": "#02262b",
      "blue-darker": "#004e52",
      "blue-dark": "#00757a",
      blue: "#019ca1",
      "blue-light": "#34afb4",
      "blue-lighter": "#67c5c7",
      "blue-lightest": "#99d6d9"
    },

    fontSize: {
      xxs: ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    borderColor: theme => ({
      ...theme("colors"),
      default: theme("colors.gray.light", "currentColor")
    }),
    opacity: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "60": ".60",
      "70": ".70",
      "80": ".80",
      "90": ".90",
      "100": "1"
    }
  },
  variants: {
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "group-hover", "focus", "last"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: [],
    borderColor: ["responsive", "hover", "focus", "group-hover"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive", "hover"],
    borderWidth: ["responsive", "first", "hover"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive"],
    display: ["responsive", "last", "group-hover"],
    fill: [],
    flex: ["responsive", "last"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus", "group-hover"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive", "last"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: false,
    objectPosition: false,
    opacity: ["responsive", "hover", "group-hover"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: [],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "group-hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive", "group-hover"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"],
    gradients: ["responsive"]
  },
  plugins: []
};

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I amd the Heading tag"),
    React.createElement("h2", {}, "I am  the Heading tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I amd the Heading tag"),
    React.createElement("h2", {}, "I am  the Heading tag"),
  ])]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/*
ReactElement(object) => HTML(Browser understands)
*/
const heading = React.createElement("div",
    { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello from H1 tag"), React.createElement("h2", {}, "Hello from H2 tag")]), React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello from H1 tag"), React.createElement("h2", {}, "Hello from H2 tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(heading);
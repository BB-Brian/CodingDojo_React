// const helloReact = React.createElement("h1", null, "Hello React");

// React's createElement() function takes 3 arguments/parameters. 
// 1st parameter: The type of HTML element it will be (what you want it to be) --> example, an <h1> tag will be defined as "h1" in the createElement function. 
// 2nd parameter: what properties the element will contain (can be null). 
// 3rd: What children it will have --> such as an h1 tag will likely have "string text in it"


const helloReact = React.createElement("h1", {style: {color: "blue"}, className:"Header"}, "Hello React");
// Focusing on the second parameter of the createElement() function, you can pass things like "style" properties as the second parameter. Defining classes for HTML elements uses the syntax: "className", instead of just "class", this avoids confusion between HTML classes and React classes. Also take note of the parenthesis and curly bracket syntax, where the createElement function has it's parameters in parentheses, (), and has the properties parameter inside containing curly brackets --> createElement.("parameter1", {parameter2="property1", {property2: ""}}, "parameter3")


const helloReactDiv = React.createElement("div", {className:"body"}, 
    React.createElement("h1", null, "Hello React Div."),
    React.createElement("p", null, "React is an awesome UI library!")
);
// In React, you can define multiple elements to create within one variable to pass through the ReactDOM.render() function. This is how we can create our virutally our entire HTML document only using React --> defining the HTML elements in our react javascript file. You can still have HTML elements on the HTML page and they will coexist with the React elements you create, but it's common to create the majority of HTML elements using React and just having the HTML document house the React elements, script tags, and HTML boilerplate info.


ReactDOM.render(helloReact, document.getElementById("root"));
// NOTE, using ReactDOM.render() will only render the LAST element you created, you cannot rener two different createElement()'s through two different ReactDOM.render() functions. Essentially the last render() function to run will overwrite the previous one.

ReactDOM.render(helloReactDiv, document.getElementById("root"));
// ReactDom.render() function takes in an element to render, followed by where to render it on the html. In this case we have a div with the ID "root" placed inside the body of an html document and we'll render the "helloReact" element we defined above (which uses the React.createElement() function to actually create the element to render.) The document.getElementById references the document in which the created element will render --> in this case the document is the HTML doc, the getElementById is where we will render the react element we created --> which is the div with the ID "root".



// To simplify creating HTML elements in React, you can use JSX syntax, which lets you write raw HTML in the React .js file. Refer to the app.js file for examples. 
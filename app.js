const myButton = React.createElement('button', null, 'Click Me');
console.log(JSON.stringify(myButton));
/* 
    Prints the following:
    {
        "type":"button",
        "key":null,
        "ref":null,
        "props":{
            "children":"Click Me"
        },
        "_owner":null,
        "_store":{}
    }

*/


ReactDOM.render(myButton, document.getElementById('app'));
// We are rendering two different root nodes on the HTML document, one from index.js and one from app.js.

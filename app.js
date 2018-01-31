// TODO
var GroceryList = () => (
    <ul>
       <Milk />
        <Eggs />
    </ul>
);

var Milk = () => (
    <li>Milk</li>
);

var Eggs = () => (
    <li>Eggs</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
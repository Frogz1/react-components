// TODO

var GroceryListItem = (props) => (
    <ul>
        <li>{props.items[0]}</li>
        <li>{props.items[1]}</li>
    </ul>
);
var GroceryList = () => (
    <ul>
        <GroceryListItem items={['Milk', 'Eggs']}/>
    </ul>
);

var Milk = () => (
    <li>Milk</li>
);

var Eggs = () => (
    <li>Eggs</li>
);
ReactDOM.render(<GroceryList />, document.getElementById("app"));
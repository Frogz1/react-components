// TODO

// var GroceryListItem = (props) => (
//     <ul>
//         <li>{props.items[0]}</li>
//         <li>{props.items[1]}</li>
//     </ul>
// );
class GroceryListItem extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }
    onListItemHover() {
        this.setState({
            done: !this.state.done,
            isHovered: !this.state.isHovered
        });
    }

    render() {
        var style = {
            fontWeight: this.state.isHovered ? 'bold' : ''
        };
        return (
            <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)} >{this.props.item}</li>
        )
    }
}

var GroceryList = (props) => (
    <ul>
        {props.items.map(item =>
        <GroceryListItem item={item} />
        )}
    </ul>
);

var App = () => (
    <ul>
        <GroceryList items={['Milk', 'Eggs', 'Bread', 'Cereal']}/>
    </ul>
);
ReactDOM.render(<App />, document.getElementById("app"));
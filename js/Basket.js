class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBasketItem = this.deleteBasketItem.bind(this);
        this.getIndexById = this.getIndexById.bind(this);
    }
    deleteBasketItem(e) {
        e.preventDefault();
        this.props.handleRemoveBasket(e.target.getAttribute('data-id'));
    }

    getIndexById(id) {
        for (let i in this.props.dataBook) {
            if (this.props.dataBook[i].id == id) {
                return i;
            }
        }
    }

    render() {
        let items = [], j, sum = 0;

        for (let i in this.props.items) {
            j = this.getIndexById(i);
            sum += this.props.items[i] * this.props.dataBook[j]['price'];
            items.push(<div className="basket-item">
                <a href="#" >&laquo;{this.props.dataBook[j]['title']}&raquo;</a>
                <span>{this.props.items[i]}шт.</span>
                <span>{this.props.dataBook[j]['price']}руб.</span>
                <a href="#" onClick={this.deleteBasketItem} data-id={this.props.dataBook[j]['id']}>Удалить</a>
            </div>);
        }

        items.push(<div className="basket-item">
            <span>Всего <b>{sum}</b>руб.</span>
        </div>);

        return (<div className="basket">
            <h3>Корзина</h3>
            {items}
        </div>
        )
    }
}
// const Book = (props) => {
//     const h3Style = {
//         color: "#369",
//         fontfamily: "sans-serif",
//     }

//     let { title, author, price } = props;
//     const formatPrice = price => price ? <b>{price}</b> : <del> </del>;

//     return (
//         <div className="book">
//             <h3 style={h3Style}>{title}</h3>
//             <p>Автор: {author}</p>
//             <p>Цена: {formatPrice(price)} руб.</p>
//         </div>
//     )

// }

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        }
    }
    render() {
        const h3Style = {
            color: "#369",
            fontfamily: "sans-serif",
        }

        let { title, author, price } = this.props;
        const formatPrice = price => price ? <b>{price}</b> : <del> </del>;
        const statusBook = (this.state.selected ? 'book-selected' : 'book-default');
        return (
            <div className={"book " + statusBook}>
                <h3 style={h3Style}>{title}</h3>
                <p>Автор: {author}</p>
                <p>Цена: {formatPrice(price)} руб.</p>
                <a href="#" className="btn btn-success" onClick={()=>{this.setState({selected: !this.state.selected})}}>Сравнить</a> &nbsp;
                <a href="#" className="btn btn-success">В корзину</a>
            </div>
        )

    }
}
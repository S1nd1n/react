class BookWithoutPrice extends React.Component {

    render() {
        const h3Style = {
            color: "#369",
            fontfamily: "sans-serif",
        }

        let { title, author } = this.props;

        return (
            <div className={"book "}>
                <h3 style={h3Style}>{title}</h3>
                <p>Автор: {author}</p>
                <p>Цена: <del>&nbsp;</del> руб.</p>
            </div>
        )

    }
}


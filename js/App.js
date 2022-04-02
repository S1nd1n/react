// const App = (props) => {
// return (<div className="app">
//     <Welcome name="Василий" />

//     {books}
//     <ul>
//         {names}
//     </ul>
//     <p>{new Date().toLocaleTimeString()}</p>
// </div>
//     )
// }

class App extends React.Component {
    render() {
        // const books = dataBook.map((book, index) => <Book key={index} {...book} />);
        const books = dataBook.map((book, index) => <Book
            key={index}
            title={book.title}
            author={book.author}
            price={book.price}
        />);
        return (
            <div className="app">
                <Button value="Кнопка" counter={1} />

                <Welcome name="Василий" />

                {books}
            </div>
        )
    }
}
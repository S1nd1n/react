class AddBookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            author: '',
            price: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(this.state)
    }
    handleChange(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    render() {
        return (<form action="" onSubmit={this.handleSubmit}>
            <div>id <input name="id" onChange={this.handleChange} /></div>
            <div>Название <input name="title" onChange={this.handleChange} /></div>
            <div>Авторы <input name="author" onChange={this.handleChange} /></div>
            <div>Цена <input name="price" onChange={this.handleChange} /></div>
            <div><input type="submit" className="btn btn-success" value="Добавить" /></div>
        </form>
        )
    }
}
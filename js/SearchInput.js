// class SearchInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(e) {
//         this.setState({ text: e.target.value });
//     }
//     render() {
//         return (<div>
//                 <input onChange={this.handleChange} defaultValue={this.state.text} />
//                 <p>Длина: {this.state.text.length}</p>
//             </div>
//         )
//     }
// }

function SearchInput(props) {
    let [text, setText] = React.useState('');

    return (<div>
        <input onChange={(e) => { setText(e.target.value) }} defaultValue={text} />
        <p>Длина: {text.length}</p>
    </div>
    )
}
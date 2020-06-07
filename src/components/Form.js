import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        addArticle : article => dispatch(addArticle(article))
    };
}

const mapStateToProps = state => {
    return { error: state.error }
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id] : event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({title});
        this.setState({title: ""});
    }

    render() {
        const { title } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text"
                           id="title"
                           value={title}
                           onChange={this.handleChange}/>
                </div>
                <button type="submit">SAVE</button>
                <h4>{this.props.error}</h4>
            </form>
        );
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
) (ConnectedForm);
 
export default Form;
import React from 'react';
import { connect } from 'react-redux';
import { clearList } from '../actions'

const mapStateToProps = state => {
    return { articles: state.articles };
}

const mapDispatchToProps = dispatch => {
    return {
        clearList: () => dispatch(clearList())
    };
}

const ConnectedList = ({ articles, clearList }) => (
    <div>
        <ul>
            {articles.map(e1 => (
                <li key={e1.id}>{e1.title}</li>
            ))}
        </ul>
        <button type="submit" onClick={clearList}>CLEAR</button>
    </div>
);

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
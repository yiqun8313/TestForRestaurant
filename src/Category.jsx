import React from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import TablePage from './Table';

class CategoryPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios
      .get('http://stream-restaurant-menu-svc.herokuapp.com/category')
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="category-page">
        <div className="side-menu">
          <h4>Menu Categories</h4>
          <ul>
            {this.state.categories &&
              this.state.categories.map(cate => (
                <li key={cate.short_name}>
                  <Link to={`/categories/items/${cate.short_name}`}>
                    {`${cate.name} - ${cate.short_name}`}{' '}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="cate-table">
          <Route path="/categories/items/:cate" render = {(props) => (<TablePage {...props} key={props.match.params.cate}/>)} />
        </div>
      </div>
    );
  }
}

export default CategoryPage;

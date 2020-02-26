import React from 'react';
import axios from 'axios';

class TablePage extends React.Component {
  constructor() {
    super();
    this.state = {
      detail: null
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.cate);
    axios
      .get(
        `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${this.props.match.params.cate}`
      )
      .then(res => this.setState({ detail: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="cate-table">
        Items in Category: {this.props.match.params.cate}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.detail &&
              this.state.detail.map(item => (
                <tr key={`${item.id}-${item.name}`}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablePage;

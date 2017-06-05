import React from 'react';
// import './App.css';
import { Table } from "@myob/myob-widgets";
var request = require('superagent-bluebird-promise');

const initialState = {
  payruns: []
};

class PayrunTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  payrunData = () => {
    request.get('http://localhost:4000/manage/payruns')
      .then((result) => {
        this.setState({
          payruns: result.body
        })
      })
      .catch((error) => {
        console.log(error)
      });
  };

  toggleHover = hover => () => {
    this.setState({hover});
  };

  componentDidMount() {
    this.payrunData();
  }

  payrunToRow = (payrun) => {
    return {id: payrun.id, dateperiod: `${payrun.start_date} to ${payrun.end_date}`, payondate: payrun.pay_on_date};
  };


  render() {
    const data = this.state.payruns.map(this.payrunToRow);

    const columns = [
      { key: 'dateperiod', description: 'Pay period' },
      { key: 'payondate', description: 'Pay on date' },
      { key: 'view', description: '' }
    ];

    return (
      <div>
        <Table
          data={data}
          columns={columns}
          onRowSelect={() => {}}
          width='auto'
          canSelectMultiple
         />

      </div>
    );
  };
}

export default PayrunTable;

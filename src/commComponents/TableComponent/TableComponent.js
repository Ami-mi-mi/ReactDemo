import React from 'react';
import { Table } from 'antd';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Table
            columns={this.props.columns}
            dataSource={this.props.data}
        />
        );
    }
}

export default TableComponent;
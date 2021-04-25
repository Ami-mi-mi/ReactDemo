import React from 'react';
import { Table } from 'antd';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: []
        }
    }

    static getDerivedStateFromProps(props, state) {
       return {
            dataSource: props.data
       };
    }


    render() {
        return(
            <Table
            columns={this.props.columns}
            dataSource={this.state.dataSource}
            scroll={{ y: 400 }}
        />
        );
    }
}

export default TableComponent;
import React from 'react';
import { Table } from 'antd';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            type: props.type || '',
            selectedRowKeys: []
        }
    }

    static getDerivedStateFromProps(props, state) {
       return {
            dataSource: props.data
       };
    }

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };


    render() {
        const { selectedRowKeys, type } = this.state;
        let rowSelection;

        if(type) {
            rowSelection = {
                selectedRowKeys,
                onChange: this.onSelectChange
            };
        }
        
        return(
            <Table
            rowSelection={rowSelection}
            rowKey={row => row.id}
            columns={this.props.columns}
            dataSource={this.state.dataSource}
            scroll={{ y: 400 }}
        />
        );
    }
}

export default TableComponent;
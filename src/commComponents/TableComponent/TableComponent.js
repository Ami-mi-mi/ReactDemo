import React from 'react';
import { Table } from 'antd';

class TableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            type: props.type || '',
            selectedRowKeys: [],
            pagination: {
                current: 1,
                pageSize: 10,
                showTotal: (total) => `共${total}条`,
                onChange: this.handleChange
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props)
       return {
            dataSource: props.data.rows || [],
            pagination: {
                ...state.pagination,
                total: props.data.total
            }
       };
    }

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    handleChange = (page, pageSize) => {
        this.setState({ 
            pagination: {
                ...this.state.pagination,
                current: page,
                pageSize
            }
        });

        this.props.onChange(page, pageSize);
    }


    render() {
        const { selectedRowKeys, type, pagination } = this.state;
        console.log(pagination)
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
            pagination={pagination}
            dataSource={this.state.dataSource}
            scroll={{ y: 700 }}
        />
        );
    }
}

export default TableComponent;
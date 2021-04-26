import React from 'react';
import { Table } from 'antd';
/**
 * 父组件调用需要传入的参数：
 * columns 需要展示的字段
 * data    数据列表
 * type    checkbox/radio/null type不传时，不展示选择按钮
 * onchange 事件，分页，当页面和size改变时，出触发的事件，会回传参数（page, pageSize）到父组件事件中
 * **/
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
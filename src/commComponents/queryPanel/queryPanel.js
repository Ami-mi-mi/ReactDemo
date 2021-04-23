import React from 'react';
import { Row, Col, Button } from 'antd';
import './queryPanel.css';

class QueryPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wrapperHeight: 'auto',
            isOpen: false,
            closeHeight: '64'
        }

        this.queryPanelRef = React.createRef();
    }

    componentDidMount() {
        if(!this.state.isOpen) {
            this.setState({
                wrapperHeight: this.state.closeHeight + 'px'
            })
        }
    }

    handleToggle = () => {
        if(this.state.isOpen) { //当前展开
            this.setState({
                wrapperHeight: this.state.closeHeight + 'px'
            })
        }else {//当前收起
            this.setState({
                wrapperHeight: this.queryPanelRef.current.clientHeight + 10 + 'px'
            })
        }

        this.setState({
            isOpen: !this.state.isOpen
        })

    }

    clear = () => {
        this.props.clear();
    }

    query = () => {
        this.props.query();
    }

    render() {
        let toggleButton = this.props.isShowToggleBtn ? <Button type="text" size='small' onClick={this.handleToggle}>{this.state.isOpen ? '收起' : '展开'}</Button> : '';
       
        return (
            <div className="query-panel__root" style={{'height': this.state.wrapperHeight}}>
                 <Row>
                     <Col span={20} ref={this.queryPanelRef}>
                         {this.props.children}
                     </Col>
                     <Col span={4} className="query-panel__btn-group">
                        {toggleButton}

                        <Button onClick={this.clear} size='small' className="query-panel__btn">重置</Button>

                        <Button type="primary" size='small' onClick={this.query} className="query-panel__btn">
                            查询
                        </Button>
                     </Col>
                 </Row>
            </div>
        );
    }
}

export default QueryPanel;
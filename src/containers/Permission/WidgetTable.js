import React, { Component } from 'react';
import { Switch, Icon, Table, Spin } from 'antd';



class WidgetTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            baseConfig: [
                {
                    title: 'Bệnh viện / Phòng khám',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <span>{text}</span>,
                },
                {
                    title: 'Phân quyền',
                    key: 'permissioned',
                    dataIndex: 'permissioned',
                    render: (permissioned, record) => (
                        <Switch
                            onChange={(e)=>this.changeSwitch(e,record.orgName, permissioned)}
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            defaultChecked={permissioned}
                        />
                    ),
                }
            ]
        }
    }

    changeSwitch = (e, orgName, permissioned) => {
    }

    render() {
        const { data, isLoading } = this.props;
        return (
            <React.Fragment>
                <Spin spinning={isLoading} tip="Đang tải dữ liệu..." size="large">
                    <Table dataSource={data} columns={this.state.baseConfig} />;
                </Spin>
            </React.Fragment>
        );
    }
}

export default WidgetTable;
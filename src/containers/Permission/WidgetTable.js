import React, { Component } from 'react';
import { Switch, Icon, Table, Spin, message } from 'antd';
import { USER_INFO } from '../../constants/constants';

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
                            disabled={permissioned}
                        />
                    ),
                }
            ]
        }
    }

    changeSwitch = (e, orgName, permissioned) => {
        if(!permissioned) {
            const { addPermission } = this.props;
            const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
            const { phoneNumber } = userInfo;
            addPermission(orgName.toLowerCase(), phoneNumber);
        } else {
            message.error('Chưa hỗ trợ chức năng revoke phân quyền');
        }
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
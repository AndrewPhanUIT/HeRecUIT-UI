import React from 'react';
import { useState } from 'react';
import { Switch, Icon, Table } from 'antd';

const baseConfig = [
    {
        title: 'Bệnh viện / Phòng khám',
        dataIndex: 'organization',
        key: 'organization',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Phân quyền',
        key: 'permission',
        dataIndex: 'permission',
        render: permission => (
            <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                defaultChecked={permission}
            />
        ),
    }
];

const dataSource = [
    {
        organization: 'Bệnh viện quận 12',
        permission: true
    },
    {
        organization: 'Bệnh viện quận Tân Phú',
        permission: false
    }
  ];

function WidgetTable ({
    
}) {

    const { state, setState } = useState({});

    return (
        <React.Fragment>
            <Table dataSource={dataSource} columns={baseConfig} />;
        </React.Fragment>
    );
}

export default WidgetTable;
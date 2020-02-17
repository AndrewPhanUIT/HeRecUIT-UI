import React, { Component } from 'react';
import { PILL_ICON } from '../../images/static';
import Summary from '../../components/Sumamry';
import { selectDiagnosisLoading, selectDiagnosis } from '../App/selectors';
import { createStructuredSelector } from 'reselect'; 
import { queryDiagnosis } from '../App/actions';
import { connect } from 'react-redux';
import { USER_INFO } from '../../constants/constants';
import { Spin } from 'antd';
import { formatDate } from '../../constants/AppUtils';
import {isEmpty} from 'lodash';

const tempData = [
    {
        src: PILL_ICON,
        title: 'Kết quả khám bệnh ngày 16/12/2019',
        createdAt: '16/12/2019',
        hospital: {
            title: 'Bệnh viện: ',
            text: 'Bệnh viện quận Tân Phú'
        },
        docter: {
            title: 'Bác sĩ: ',
            text: 'Huỳnh Ngọc Anh Yến'
        }
    },
    {
        src: PILL_ICON,
        title: 'Kết quả khám bệnh ngày 08/01/2020',
        createdAt: '08/01/2020',
        hospital: {
            title: 'Bệnh viện: ',
            text: 'Bệnh viện Trưng Vương'
        },
        docter: {
            title: 'Bác sĩ: ',
            text: 'Bùi Nguyễn Minh Tâm'
        }
    },
]

class Diagnosis extends Component {

    componentDidMount() {
        const {queryDiagnosis} = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
        queryDiagnosis(userInfo.hyperledgerName);
    }

    transferInfo = (diagnosis) => {
        const result = [];
        if (!isEmpty(diagnosis)) {
            diagnosis.forEach(d => {
                const createdAt = formatDate(d.diagnosis.createdAt);
                const tmp = {
                    src: PILL_ICON,
                    title: 'Kết quả khám bệnh ngày ' + createdAt,
                    createdAt,
                    hospital: {
                        title: 'Bệnh viện: ',
                        text: d.diagnosis.organization
                    },
                    docter: {
                        title: 'Bác sĩ: ',
                        text: d.diagnosis.clincian
                    }
                }
                result.push(tmp);
            });
        }
        return result;
    }
    
    render() {
        const {diagnosis, diagnosisLoading} = this.props;
        const diagnosisSummaries = this.transferInfo(diagnosis);
        return (
            <Spin
                spinning={diagnosisLoading}
                tip="Đang tải dữ liệu..."
                size="large"
            >
                <div>
                    {
                        diagnosisSummaries.map((val, index) => {
                            return (<Summary key={index} data={val}/>)
                        })
                    }
                </div>
            </Spin>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    diagnosis: selectDiagnosis(),
    diagnosisLoading: selectDiagnosisLoading(),
});

const mapDispathToProps = (dispatch) => {
    return {
        queryDiagnosis(hyperledgerName) {
            dispatch(queryDiagnosis(hyperledgerName));
        },
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Diagnosis);
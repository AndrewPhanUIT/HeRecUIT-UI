import React, {Component} from 'react';
import {PILL_ICON} from '../../images/static';
import Summary from '../../components/Sumamry';
import {selectDiagnosisLoading, selectDiagnosis} from '../App/selectors';
import {createStructuredSelector} from 'reselect';
import {queryDiagnosis} from '../App/actions';
import {connect} from 'react-redux';
import {USER_INFO} from '../../constants/constants';
import {formatDate} from '../../constants/AppUtils';
import {isEmpty} from 'lodash';

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
                    },
                    type: 'diagnosis',
                    key: d.key,
                }
                result.push(tmp);
            });
        }
        return result;
    }

    render() {
        const {diagnosis} = this.props;
        const diagnosisSummaries = this.transferInfo(diagnosis);
        return (
            <div>
                {diagnosisSummaries.map((val, index) => {
                    return (<Summary key={index} data={val}/>)
                })
}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({diagnosis: selectDiagnosis(), diagnosisLoading: selectDiagnosisLoading()});

const mapDispathToProps = (dispatch) => {
    return {
        queryDiagnosis(hyperledgerName) {
            dispatch(queryDiagnosis(hyperledgerName));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Diagnosis);
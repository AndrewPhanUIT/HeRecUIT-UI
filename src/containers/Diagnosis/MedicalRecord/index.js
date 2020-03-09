import React, {Component} from 'react';
import Hospital from './Hospital';
import Diagnostic from './Diagnostic';
import Prescription from './Prescription';
import { connect } from 'react-redux';
import {queryDiagnosisDetail} from '../../App/actions';
import { selectDiagnosisDetail, selectDiagnosisDetailLoading, selectSelectedItem } from '../../App/selectors';
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';
import { USER_INFO } from '../../../constants/constants';
import { formatDate } from '../../../constants/AppUtils';
import { isEmpty } from 'lodash';

class MedicalRecord extends Component{

    componentDidMount() {
        const { queryDiagnosisDetail, selectedItem } = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
        queryDiagnosisDetail(userInfo.hyperledgerName, selectedItem.key);
    }

    transformDiagnosis = (diagnosisDetail) => {
        if (isEmpty(diagnosisDetail)) {
            return {hospitalDetail: null, diagnosticDetail: null, prescriptionDetail: null};
        }
        const { diagnosis } = diagnosisDetail;
        const clincian = diagnosis.clincian.split('@');
        const hospitalDetail = {
            createdAt: formatDate(diagnosis.createdAt),
            hospitalId: '',
            hospitalName: diagnosis.organization,
            docter: clincian[0],
            note: ''
        };

        const diagnosticDetail = {
            dateTime: formatDate(diagnosis.createdAt),
            docter: {
                id: clincian.length > 1 ? clincian[1] : '',
                name: clincian[0]
            },
            symptom: diagnosis.symptons,
            allergy: diagnosis.allergies,
        };

        const prescriptionDetail = {
            pharmacist: clincian[0],
            data: diagnosis.medications,
        };

        return {hospitalDetail, diagnosticDetail, prescriptionDetail};
    }

    render() {
        const { diagnosisDetail, diagnosisDetailLoading } = this.props;
        if (diagnosisDetailLoading || isEmpty(diagnosisDetail)) return <div></div>;
        const { hospitalDetail, diagnosticDetail, prescriptionDetail } = this.transformDiagnosis(diagnosisDetail);
        return (
            <section className="container-fluid">
                <Hospital hospitalDetail={hospitalDetail}/>
                <Diagnostic diagnosticDetail={diagnosticDetail}/>
                <Prescription prescriptionDetail={prescriptionDetail}/>
            </section>
        )
    }
}

MedicalRecord.propTypes = {
    key: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
    diagnosisDetail: selectDiagnosisDetail(),
    diagnosisDetailLoading: selectDiagnosisDetailLoading(),
    selectedItem: selectSelectedItem(),
});

const mapDispatchToProps = dispatch => {
    return {
        queryDiagnosisDetail(hyperledgerName, key) {
            dispatch(queryDiagnosisDetail(hyperledgerName, key));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalRecord);
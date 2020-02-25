import React, {Component} from 'react';
import {PILL_ICON, PHONE_ICON} from '../../images/static';
import Summary from '../../components/Sumamry';
import PropTypes from 'prop-types';
import {selectDiagnosis, selectDiagnosisLoading, selectAppointments, selectAppointmentsLoading, selectUserInfo} from '../App/selectors';
import {query} from '../App/actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {USER_INFO} from '../../constants/constants';
import {isEmpty} from 'lodash';
import {formatDate, isExpired} from '../../constants/AppUtils';

class AllDetail extends Component {

    componentDidMount() {
        const {query} = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
        query(userInfo.hyperledgerName);
    }

    transferInfo = (diagnosis, appointments) => {
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
        if (!isEmpty(appointments)) {
            appointments.forEach(d => {
                const createdAt = formatDate(d.appointment.createdAt);
                const appointmentDate = formatDate(d.appointment.appointmentDate);
                const expired = isExpired(d.appointment.appointmentDate);
                const tmp = {
                    src: PHONE_ICON,
                    title: 'Phiếu hẹn khám bệnh ngày ' + createdAt,
                    createdAt,
                    isExpired: expired,
                    location: {
                        title: 'Địa điểm: ',
                        text: d.appointment.organization
                    },
                    docter: {
                        title: 'Bác sĩ: ',
                        text: d.appointment.clincian
                    },
                    appointmentDate: {
                        title: 'Ngày hẹn: ',
                        text: appointmentDate
                    },
                    type: 'appointment',
                    key: d.key,
                };
                result.push(tmp);
            });
        }
        return result;
    }

    renderList = (dianosisAndAppointments) => {
        return dianosisAndAppointments.map((val, index) => {
            return (<Summary key={index} data={val} />)
        });
    }

    render() {
        const {diagnosis, appointments} = this.props;
        const dianosisAndAppointments = this.transferInfo(diagnosis, appointments);
        return <div>{this.renderList(dianosisAndAppointments)}</div>;
    }
}

AllDetail.propTypes = {
    diagnosis: PropTypes.array,
    diagnosisLoading: PropTypes.bool,
    appointments: PropTypes.array,
    appointmentsLoading: PropTypes.bool,
    userInfo: PropTypes.object
};

const mapStateToProps = createStructuredSelector({diagnosis: selectDiagnosis(), diagnosisLoading: selectDiagnosisLoading(), appointments: selectAppointments(), appointmentsLoading: selectAppointmentsLoading(), userInfo: selectUserInfo()});

const mapDispatchToProps = (dispatch) => {
    return {
        query(hyperledgerName) {
            dispatch(query(hyperledgerName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllDetail);
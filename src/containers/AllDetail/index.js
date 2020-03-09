import React, {Component} from 'react';
import {PILL_ICON, PHONE_ICON} from '../../images/static';
import Summary from '../../components/Sumamry';
import PropTypes from 'prop-types';
import {
    selectDiagnosis,
    selectDiagnosisLoading, 
    selectAppointments, 
    selectAppointmentsLoading, 
    selectUserInfo, 
    selectQuery,
} from '../App/selectors';
import {
    query,
    changeQuery,
} from '../App/actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {USER_INFO} from '../../constants/constants';
import {isEmpty} from 'lodash';
import {formatDate, isExpired} from '../../constants/AppUtils';

class AllDetail extends Component {

    componentDidMount() {
        const { query } = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
        query(userInfo.hyperledgerName);
    }

    transferInfo = (diagnosis, appointments) => {
        const { queryString } = this.props;
        const result = [];
        if (!isEmpty(diagnosis)) {
            diagnosis.forEach(d => {
                if (d.diagnosis) {
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
                }
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
        result.sort((a, b) => {
            const arrDate1 = a.createdAt.split('/');
            const arrDate2 = b.createdAt.split('/');
            const date1 = new Date(arrDate1[2], arrDate1[1], arrDate1[0]);
            const date2 = new Date(arrDate2[2], arrDate2[1], arrDate2[0]);
            return date2.getTime() - date1.getTime();
        });
        return result.filter(res => isEmpty(queryString) || (res && res.title && res.title.includes(queryString)));
    }

    renderList = (dianosisAndAppointments) => {
        return dianosisAndAppointments.map((val, index) => {
            return (<Summary key={index} data={val} />)
        });
    }

    render() {
        const {diagnosis, appointments} = this.props;
        const dianosisAndAppointments = this.transferInfo(diagnosis, appointments);
        if (isEmpty(dianosisAndAppointments)) {
            return <div>Không có dữ liệu phù hợp</div>;
        }
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

const mapStateToProps = createStructuredSelector({
    diagnosis: selectDiagnosis(),
    diagnosisLoading: selectDiagnosisLoading(),
    appointments: selectAppointments(),
    appointmentsLoading: selectAppointmentsLoading(),
    userInfo: selectUserInfo(),
    queryString: selectQuery(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        query(hyperledgerName) {
            dispatch(query(hyperledgerName));
        },
        resetQueryString() {
            dispatch(changeQuery(""));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllDetail);
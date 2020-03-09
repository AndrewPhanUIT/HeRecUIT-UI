import React, {Component} from 'react';
import {PHONE_ICON} from '../../images/static';
import Summary from '../../components/Sumamry';
import {createStructuredSelector} from 'reselect';
import {selectAppointments, selectAppointmentsLoading, selectQuery } from '../App/selectors';
import {queryAppointments} from '../App/actions';
import {connect} from 'react-redux';
import {USER_INFO} from '../../constants/constants';
import {isEmpty} from 'lodash';
import {formatDate, isExpired} from '../../constants/AppUtils';

class Appointment extends Component {

    componentDidMount() {
        const {queryAppointments} = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
        queryAppointments(userInfo.hyperledgerName);
    }

    transferInfo = (appointments) => {
        const { queryString } = this.props;
        const result = [];
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
        })
        return result.filter(res => isEmpty(queryString) || (res && res.title && res.title.includes(queryString)));
    }

    render() {
        const {appointments} = this.props;
        const appointmentSummaries = this.transferInfo(appointments);
        return (

            <div>
                {appointmentSummaries.map((val, index) => {
                    return (<Summary key={index} data={val}/>)
                })
}
            </div>

        )
    }
}

const mapStateToProps = createStructuredSelector({appointments: selectAppointments(), appointmentsLoading: selectAppointmentsLoading(), queryString: selectQuery(),})

const mapDispatchToProps = (dispatch) => {
    return {
        queryAppointments(hyperledgerName) {
            dispatch(queryAppointments(hyperledgerName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { queryAppointmentDetail } from '../../App/actions';
import { connect } from 'react-redux';
import {
    selectAppointmentDetail,
    selectAppointmentDetailLoading,
    selectSelectedItem,
} from '../../App/selectors';
import { USER_INFO } from '../../../constants/constants';
import TitleRectangle from '../../../components/TitleRectangle';
import { formatDate, isExpired } from '../../../constants/AppUtils';
import TextArea from 'antd/lib/input/TextArea';
import BlueTitle from '../../../components/BlueTitle';
import {Input, Tag} from 'antd';
import { isEmpty } from 'lodash';

class AppointmentDetail extends Component {
    
    componentDidMount() {
        const { queryAppointmentDetail, selectedItem } = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
        queryAppointmentDetail(userInfo.hyperledgerName, selectedItem.key);
    }

    render() {
        const { appointmentDetail, appointmentDetailLoading } = this.props;
        if (appointmentDetailLoading || isEmpty(appointmentDetail)) return <div></div>
        const { appointment } = appointmentDetail;
        const transformedAppointment = { ...appointment };
        Object.keys(appointment).forEach(key => {
            transformedAppointment[key] = appointment[key] ? appointment[key].split('#').join(' ') : '';
        });
        return (
            <React.Fragment>
                <section className="container-fluid">
                    <section className="row">
                        <TitleRectangle text="Chi tiết lịch hẹn"/>
                    </section>
                    <section className="row mb-3">
                        <section className="col-6">
                            <BlueTitle>- Ngày tạo:
                            </BlueTitle>
                            <Input className="mx-3 mt-1" value={formatDate(transformedAppointment.createdAt)}/>
                        </section>

                        <section className="col-6">
                            <BlueTitle>- Bác sĩ đảm nhận:
                            </BlueTitle>
                            <Input className="mx-3 mt-1" value={transformedAppointment.clincian}/>
                        </section>
                    </section>
                    <section className="row mb-3">
                        <section className="col-12">
                            <BlueTitle>- Nơi khám bệnh:
                            </BlueTitle>
                            <Input className="mx-3 mt-1" value={transformedAppointment.organization}/>
                        </section>
                    </section>
                    <section className="row mb-3">
                        <section className="col-6">
                            <BlueTitle>- Ngày hẹn:
                            </BlueTitle>
                            <Input className="mx-3 mt-1" value={formatDate(transformedAppointment.appointmentDate)}/>
                        </section>
                        <section className="col-6 align-self-center">
                            <BlueTitle>- Tình trạng
                            </BlueTitle> <br/>
                            <Tag color="red"> {isExpired(transformedAppointment.appointmentDate) ? 'Đã hết hạn' : ''}
                            </Tag>
                        </section>
                    </section>
                    <section className="row mb-3">
                        <section className="col-12">
                            <BlueTitle>- Ghi chú:
                            </BlueTitle>
                            <TextArea rows='4' className="mx-3 mt-1" value={transformedAppointment.note ? transformedAppointment.note : 'Vui lòng đến vào giờ hành chính'}/>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

AppointmentDetail.propTypes = {
    key: PropTypes.string,
    appointmentDetail: PropTypes.object,
    appointmentDetailLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
    appointmentDetail: selectAppointmentDetail(),
    appointmentDetailLoading: selectAppointmentDetailLoading(),
    selectedItem: selectSelectedItem(),
});

const mapDispatchToProps = dispatch => {
    return {
        queryAppointmentDetail(hyperledgerName, key) {
            dispatch(queryAppointmentDetail(hyperledgerName, key));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetail);
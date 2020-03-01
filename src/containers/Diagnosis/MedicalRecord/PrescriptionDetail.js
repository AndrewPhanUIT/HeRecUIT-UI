import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Input } from 'antd';
import BlueTitle from '../../../components/BlueTitle';
import { diffDay } from '../../../constants/AppUtils';

const {TextArea} = Input;

function PrescriptionDetail({
    name, doseQuantity, quantity, note, endDate, startDate,
}) {
    const totalDay = diffDay(startDate, endDate);
    return (
        <React.Fragment>
            <Divider/>

            <section className="row mb-3">
                <section className="col-12">
                    <BlueTitle>- Tên thuốc:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={name ? name.split('#').join(' ') : ''}/>
                </section>
            </section>

            <section className="row mb-3">
                <section className="col-6">
                    <BlueTitle>- Số lượng/thời gian:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={doseQuantity ? doseQuantity.split('#').join(' ') : ''}/>
                </section>

                <section className="col-6">
                    <BlueTitle>- Thời gian uống:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={totalDay}/>
                </section>
            </section>

            <section className="row mb-3">

                <section className="col-12">
                    <BlueTitle>- Ghi chú:
                    </BlueTitle>
                    <TextArea rows='3' className="mx-3 mt-1" value={note ? note.split('#').join(' ') : ''}/>
                </section>
            </section>
        </React.Fragment>

    )
}

PrescriptionDetail.propTypes = {
    name: PropTypes.string.isRequired,
    quantityPerDay: PropTypes.string.isRequired,
    totalDay: PropTypes.string.isRequired,
    note: PropTypes.string
}

PrescriptionDetail.defaultProps = {
    name: 'Paracetamon',
    quantityPerDay: '2 viên / ngày',
    totalDay: '3 ngày',
}

export default PrescriptionDetail;
import React from 'react';
import TitleRectangle from '../../components/TitleRectangle';
import BlueTitle from '../../components/BlueTitle';
import {Input} from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

function Hospital({
    createdAt,
    hospitalId,
    hospitalName,
    docter,
    note
}) {
    return (
        <React.Fragment>
            <section className="row">
                <TitleRectangle text="Nơi khám bệnh"/>
            </section>
            <section className="row mb-3">
                <section className="col-6">
                    <BlueTitle>- Ngày tạo:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={createdAt}/>
                </section>

                <section className="col-6">
                    <BlueTitle>- ID:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={hospitalId}/>
                </section>
            </section>

            <section className="row mb-3">
                <section className="col-12">
                    <BlueTitle>- Tên bệnh viện:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={hospitalName}/>
                </section>
            </section>

            <section className="row mb-3">

                <section className="col-12">
                    <BlueTitle>- Bác sĩ:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={docter}/>
                </section>
            </section>

            <section className="row mb-3">

                <section className="col-12">
                    <BlueTitle>- Ghi chú:
                    </BlueTitle>
                    <TextArea rows='4' className="mx-3 mt-1" value={note}/>
                </section>
            </section>
        </React.Fragment>
    )
}

Hospital.propTypes = {
    createdAt: PropTypes.string.isRequired,
    hospitalId: PropTypes.string.isRequired,
    hospitalName: PropTypes.string.isRequired,
    docter: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
}

Hospital.defaultProps = {
    createdAt: '31/12/2019',
    hospitalId: 'BV190197',
    hospitalName: 'Bệnh viện quận Tân Phú',
    docter: 'Phan Thế Anh',
    note:''
}

export default Hospital;
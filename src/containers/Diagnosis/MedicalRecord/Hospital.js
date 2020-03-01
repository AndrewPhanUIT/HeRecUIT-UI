import React from 'react';
import TitleRectangle from '../../../components/TitleRectangle';
import BlueTitle from '../../../components/BlueTitle';
import {Input} from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

function Hospital({
    hospitalDetail
}) {
    const transformedHospitalDetail = { ...hospitalDetail };
    Object.keys(hospitalDetail).forEach(key => {
        transformedHospitalDetail[key] = hospitalDetail[key] ? hospitalDetail[key].split('#').join(' ') : '';
    });
    return (
        <React.Fragment>
            <section className="row">
                <TitleRectangle text="Nơi khám bệnh"/>
            </section>
            <section className="row mb-3">
                <section className="col-6">
                    <BlueTitle>- Ngày tạo:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={transformedHospitalDetail.createdAt}/>
                </section>

                <section className="col-6">
                    <BlueTitle>- ID:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={transformedHospitalDetail.hospitalId}/>
                </section>
            </section>

            <section className="row mb-3">
                <section className="col-12">
                    <BlueTitle>- Tên bệnh viện:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={transformedHospitalDetail.hospitalName}/>
                </section>
            </section>

            <section className="row mb-3">

                <section className="col-12">
                    <BlueTitle>- Bác sĩ:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={transformedHospitalDetail.docter}/>
                </section>
            </section>

            <section className="row mb-3">
                <section className="col-12">
                    <BlueTitle>- Ghi chú:
                    </BlueTitle>
                    <TextArea rows='4' className="mx-3 mt-1" value={transformedHospitalDetail.note}/>
                </section>
            </section>
        </React.Fragment>
    )
}

Hospital.propTypes = {
    hospitalDetail: PropTypes.object,
}

Hospital.defaultProps = {
    hospitalDetail: {}
}

export default Hospital;
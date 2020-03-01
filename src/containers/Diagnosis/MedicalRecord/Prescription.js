import React from 'react';
import TitleRectangle from '../../../components/TitleRectangle';
import BlueTitle from '../../../components/BlueTitle';
import {Input} from 'antd';
import PropTypes from 'prop-types';
import PrescriptionDetail from './PrescriptionDetail';

function Prescription({
    prescriptionDetail
}) {
    const { pharmacist, data } = prescriptionDetail;

    const lstMedicine = data.map((val,index)=>
        <PrescriptionDetail
            key={index} 
            {...val}
        />
    )

    return (
        <React.Fragment>
            <section className="row">
                <TitleRectangle text="Thông tin thuốc"/>
            </section>
            
            <section className="row mb-3">
                <section className="col-12">
                    <BlueTitle>- Người cấp thuốc:
                    </BlueTitle>
                    <Input className="mx-3 mt-1" value={pharmacist ? pharmacist.split('#').join(' ') : ''}/>
                </section>
            </section>
            {lstMedicine}
        </React.Fragment>
    )
}

Prescription.propTypes = {
    prescriptionDetail: PropTypes.object,
}

Prescription.defaultProps = {
    prescriptionDetail: {}
}

export default Prescription;
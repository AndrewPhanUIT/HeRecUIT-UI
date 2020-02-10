import React from 'react';
import { PHONE_ICON } from '../../images/static';
import Summary from '../../components/Sumamry';

const tempData = [
    {
        src: PHONE_ICON,
        title: 'Phiếu hẹn thực hiện phẫu thuật',
        createdAt: '04/1/2020',
        isExpired: true,
        location: {
            title: 'Địa điểm: ',
            text: 'Khoa Tai Mũi Họng - Bệnh viện quận Tân Phú'
        },
        docter: {
            title: 'Bác sĩ: ',
            text: 'Khoa Tai Mũi Họng'
        },
        appointmentDate: {
            title: 'Ngày hẹn: ',
            text: '20/01/2020'
        }
    },
]

function Appointment() {
    return (
        <div>
            {
                tempData.map((val, index) => {
                     return (<Summary key={index} data={val}/>)
                 })
            }
        </div>
    )
}

export default Appointment;
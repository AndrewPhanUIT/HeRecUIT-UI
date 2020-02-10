import React from 'react';
import { PILL_ICON, PHONE_ICON } from '../../images/static';
import Summary from '../../components/Sumamry';

const tempData = [
    {
        src: PILL_ICON,
        title: 'Kết quả khám bệnh ngày 16/12/2019',
        createdAt: '16/12/2019',
        hospital: {
            title: 'Bệnh viện: ',
            text: 'Bệnh viện quận Tân Phú'
        },
        docter: {
            title: 'Bác sĩ: ',
            text: 'Huỳnh Ngọc Anh Yến'
        }
    },
    {
        src: PILL_ICON,
        title: 'Kết quả khám bệnh ngày 08/01/2020',
        createdAt: '08/01/2020',
        hospital: {
            title: 'Bệnh viện: ',
            text: 'Bệnh viện Trưng Vương'
        },
        docter: {
            title: 'Bác sĩ: ',
            text: 'Bùi Nguyễn Minh Tâm'
        }
    },
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

function AllDetail() {
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

export default AllDetail;
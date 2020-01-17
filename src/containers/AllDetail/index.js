import React from 'react';
import { LIST_ICON, PILL_ICON } from '../../images/static';
import Summary from '../../components/Sumamry';

const tempData = [
    {
        src: PILL_ICON,
        title: 'Đặt lịch hẹn tái khám tai, mũi, họng',
        createdAt: '25/12/2019',
        location: {
            title: 'Địa điểm: ',
            text: 'Bệnh viện Thủ Đức, khoa Tai Mũi Họng'
        },
        docter: {
            title: 'Bác sĩ: ',
            text: 'Phan Thế Anh'
        }
    },
    {
        src: PILL_ICON,
        title: 'Kết quả khám bệnh ngày 26/12/2019',
        createdAt: '26/12/2019',
        hospital: {
            title: 'Bệnh viện: ',
            text: 'Bệnh viện thủ đức, khoa Tai Mũi Họng'
        },
        docter: {
            title: 'Bác sĩ: ',
            text: 'Phan Thế Anh'
        }
    },
    {
        src: LIST_ICON,
        title: 'Đăng ký hệ thống',
        createdAt: '26/12/2019',
        createdBy: {
            title: '',
            text: 'Được đăng ký bởi Phan Thế Anh'
        }
    }
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
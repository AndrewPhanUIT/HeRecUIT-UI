import React from 'react';
import { PILL_ICON } from '../../images/static';
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
]

function Diagnosis() {
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

export default Diagnosis;
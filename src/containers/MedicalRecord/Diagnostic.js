import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleRectangle from '../../components/TitleRectangle';
import BlueTitle from '../../components/BlueTitle';
import {Input} from 'antd';

const {TextArea} = Input;

const defaultDocter = {
    id: 'TP001',
    name: 'Phan Thế Anh'
};

const defaultSymptom = ["Ho nhẹ", "Phát ban đỏ"];

const Wrapper = styled.section `

`;

function Diagnostic({dateTime, docter, symptom, allergy}) {

    const lstSympton = symptom.map(val=>"- " + val).join('\n');

    return (
        <React.Fragment>
            <section className="row">
                    <TitleRectangle text="Thông tin chi tiết chuẩn đoán"/>
                </section>

            <Wrapper>
                

                <section className="row mb-3">
                    <section className="col-6">
                        <BlueTitle>- Mã bác sĩ:
                        </BlueTitle>
                        <Input className="mx-3 mt-1" value={docter.id}/>
                    </section>

                    <section className="col-6">
                        <BlueTitle>- Tên bác sĩ:
                        </BlueTitle>
                        <Input className="mx-3 mt-1" value={docter.name}/>
                    </section>
                </section>

                <section className="row mb-3">
                    <section className="col-12">
                        <BlueTitle>- Thời gian chuẩn đoán:
                        </BlueTitle>
                        <Input className="mx-3 mt-1" value={dateTime}/>
                    </section>
                </section>

                <section className="row mb-3">
                    <section className="col-12">
                        <BlueTitle>- Triệu chứng:
                        </BlueTitle>
                        <TextArea rows='6' className="mx-3 mt-1" value={lstSympton}/>
                    </section>
                </section>

                <section className="row mb-3">
                    <section className="col-12">
                        <BlueTitle>- Tình trạng dị ứng:
                        </BlueTitle>
                        <TextArea rows='6' className="mx-3 mt-1" value={''}/>
                    </section>
                </section>
            </Wrapper>
        </React.Fragment>
    )
}

Diagnostic.propTypes = {
    dateTime: PropTypes.string.isRequired,
    docter: PropTypes.object.isRequired,
    symptom: PropTypes.array.isRequired,
    allergy: PropTypes.array
}

Diagnostic.defaultProps = {
    dateTime: '31/12/2019',
    docter: defaultDocter,
    symptom: defaultSymptom
}

export default Diagnostic;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Input} from 'antd';
import TitleRectangle from '../../../components/TitleRectangle';
import BlueTitle from '../../../components/BlueTitle';
const {TextArea} = Input;

const Wrapper = styled.section `

`;

function Diagnostic({ diagnosticDetail }) {
    const {dateTime, docter, symptom, allergy} = diagnosticDetail;
    console.log('symptom', symptom);
    const lstSympton = symptom.map(val=>{
        console.log('val', val);
        return "- " + (val ? val.split('#').join(' ') : '');
    }).join('\n');
    // const lstSympton = '';
    const lstAllergy = allergy.map(val => {
        return '- ' + Object.keys(val).reduce((result, item) => {
            return [...result, val[item].split('#').join(' ')];
        }, []).join(' + ');
    }).join('\n');

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
                        <Input className="mx-3 mt-1" value={docter.name ? docter.name.split('#').join(' ') : ''}/>
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
                        <TextArea rows='6' className="mx-3 mt-1" value={lstAllergy}/>
                    </section>
                </section>
            </Wrapper>
        </React.Fragment>
    )
}

Diagnostic.propTypes = {
    diagnosticDetail: PropTypes.object,
}

Diagnostic.defaultProps = {
    diagnosticDetail: {}
}

export default Diagnostic;
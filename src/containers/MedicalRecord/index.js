import React from 'react';
import Hospital from './Hospital';
import Diagnostic from './Diagnostic';
import Prescription from './Prescription';


function MedicalRecord() {
    return (
        <section className="container-fluid">
            <Hospital />
            <Diagnostic />
            <Prescription />
        </section>
    )
}

export default MedicalRecord;
export const API_BASE_URL = 'http://localhost:8080';
export const SOCKET_PREFIX = '/herec';

export const API_PUBLIC_URL = {
    login: '/api/auth/login',
    register: '/api/auth/register',
    query: '/api/hyperledger?hyperledgerName=',
    queryDiagnosis: '/api/hyperledger/all/diagnosis?hyperledgerName=',
    queryAppointments: '/api/hyperledger/all/appointment?hyperledgerName=',
    test: '/api/auth/test',
    queryPermission: '/api/hyperledger/permission?phoneNumber=',
    queryDiagnosisDetail: '/api/hyperledger/diagnosis?',
    queryAppointmentDetail: '/api/hyperledger/appointment?',
    addNewDiagnosis: '/api/hyperledger/add/diagnosis',
    addNewAppointment: '/api/hyperledger/add/appointment',
    addPermission: '/api/hyperledger/add/permission',
}

export const API_SECUSE_URL = {

}
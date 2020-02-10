export const QUAN12_DIAGNOSIS = `{
    "code": "quan12",
    "patientPhoneNumber": "0783550324",
    "createdAt": "20200201",
    "data": {
        "clincian": "Vũ Mạnh Cường @DT001",
        "allergies": [],
        "symptons": [
            "Ho",
            "Sốt cao"
        ],
        "medications": [
            {
                "quantity": 6,
                "doseQuantity": "2 lần / ngày",
                "name": "Thuốc ho cho bé",
                "note": "Uống vào buổi sáng và tối",
                "endDate": "20200101",
                "startDate": "20200103"
            }
        ]
    }
}`;

export const TANPHU_DIAGNOSIS = `{
    "code": "tanphu",
    "patientPhoneNumber": "0783550324",
    "createdAt": "20200201",
    "data": {
        "clincian": {
    		"id": "DT001",
        	"name": "Vu Manh Cuong"
        },
        "allergies": [],
        "symptons": "Ho,Sốt cao",
        "medications": [
            {
                "quantity": 6,
                "doseQuantity": "2 lần / ngày",
                "name": "Thuốc ho cho bé",
                "note": "Uống vào buổi sáng và tối",
                "endDate": "20200101",
                "startDate": "20200103"
            }
        ]
    }
}`;

export const QUAN12_APPOINTMENT = `{
    "code": "quan12",
    "patientPhoneNumber": "0783550324",
    "data": {
        "clincian": "Vũ Mạnh Cường@DT001",
        "createdAt": "20200101",
        "appointmentDate": "20200120"
    }
}`;

export const TANPHU_APPOINTMENT = `{
    "code": "tanphu",
    "patientPhoneNumber": "0783550324",
    "data": {
        "clincian": "Vũ Mạnh Cường@DT001",
        "createdAt": "20200101",
        "appointmentDate": "20200120"
    }
}`;
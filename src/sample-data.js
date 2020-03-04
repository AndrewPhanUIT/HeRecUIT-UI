const appoinment = [`{
    "code": "quan12",
    "patientPhoneNumber": "0783550324",
    "data": {
        "clinician": "Khoa tai mũi họng",
        "createdAt": "20191224",
        "appointmentDate": "20200105"
    }
}`];

const diagnosis_quan12 = [
    `{
        "code": "quan12",
        "patientPhoneNumber": "0783550324",
        "createdAt": "20200108",
        "data": {
            "clinician": "Bs. Nguyễn Văn Trung",
            "allergies": [],
            "symptons": [
                "Bệnh trào ngược dạ dày - thực quản",
                "Viêm dạ dày và tá tràng",
                "Chèn ép rễ thần kinh",
            ],
            "medications": [
                {
                    "quantity": 14,
                    "doseQuantity": "1 lần / ngày",
                    "name": "Lansoprazol Stada 30mg",
                    "note": "Mỗi lần uống 1 viên, Sáng (trước ăn 30 phút)",
                    "endDate": "20200123",
                    "startDate": "20200109"
                },
                {
                    "quantity": 42,
                    "doseQuantity": "3 lần / ngày",
                    "name": "Fumagate - Fort",
                    "note": "Mỗi lần 1 gói, Sáng, trưa, chiều (trước ăn 30 phút)",
                    "endDate": "20200123",
                    "startDate": "20200109"
                },
                {
                    "quantity": 21,
                    "doseQuantity": "3 lần / ngày",
                    "name": "Fumagate - Fort",
                    "note": "Mỗi lần 1 viên, Sáng, trưa, chiều (trước ăn 30 phút)",
                    "endDate": "20200123",
                    "startDate": "20200109"
                }
            ]
        }
    }`
];

const diagnosis_tanphu = [
    `{
        "code": "tanphu",
        "patientPhoneNumber": "0783550324",
        "createdAt": "20200216",
        "data": {
            "clinician": {
                "id": "",
                "name": "Bs.CKI. Huỳnh Ngọc Anh Yến"
            },
            "allergies": [],
            "symptons": "Viêm họng cấp, Viêm mũi dị ứng",
            "medications": [
                {
                    "quantity": 10,
                    "doseQuantity": "2 lần / ngày",
                    "name": "Cefdinir 300mg",
                    "note": "Mỗi lần 1 viên, Sáng - chiều",
                    "endDate": "20200221",
                    "startDate": "20200216"
                },
                {
                    "quantity": 20,
                    "doseQuantity": "4 lần / ngày",
                    "name": "Dorithricin (Tyrothricin + benzocain + benzalkonium)",
                    "note": "Mỗi lần ngậm 1 viên",
                    "endDate": "20200221",
                    "startDate": "20200216"
                },
                {
                    "quantity": 10,
                    "doseQuantity": "2 lần / ngày",
                    "name": "Neo-codion",
                    "note": "Mỗi lần 1 viên, Sáng - chiều",
                    "endDate": "20200221",
                    "startDate": "20200216"
                }
            ]
        }
    }`
];
export const ACCESS_TOKEN = 'tf_token';

export const BASE_LINK = 'http://localhost:3000';
export const SPLASH = '/';

export const APP_LINK = {
    homePage: [
        '/', ''
    ],
    authCandidate: '/auth/ung-vien/',
    authRecruitment: '/auth/nha-tuyen-dung/',
    searchCompany: '/tim-kiem/cong-ty/',
    forgotPasswordUser: '/auth/quen-mat-khau/ung-vien',
    forgotPasswordRecruitment: '/auth/quen-mat-khau/nha-tuyen-dung',
    listJobs: '/danh-sach-cong-viec',
    jobDetail: '/thong-tin-cong-viec?id=',
    processEvalution: '/danh-gia-nang-luc/:id/:session',
    listEvalutions: '/danh-gia-nang-luc/danh-sach'
}

export const REGEX = {
    email: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,20})/,
    username: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,15})/
}

export const LOCAL_STORAGE_KEY = {
    searchKeywords: 'search-keywords',
    accessToken: 'tf-token'
}

export const MONTH_NAME = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
];

export const SELECT_CITIES = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Tất cả'];

export const LOGIN_DRAWER = [
    {
        title: 'Bạn là ứng viên?',
        quote: 'Chưa ai có thể viết được phần mềm hoàn hảo, bạn cũng vậy',
        buttonText: 'Đăng nhập',
        redirectUrl: APP_LINK.authCandidate + 'dang-nhap',
        smallUrl: APP_LINK.authCandidate + 'dang-ky'
    }, {
        title: 'Bạn là nhà tuyển dụng?',
        quote: 'Tôi không trả lương cao (cho nhân viên) bởi vì tôi có nhiều tiền. Tôi có nhiều t' +
                'iền vì tôi trả lương cao nhân viên.',
        buttonText: 'Đăng nhập',
        redirectUrl: APP_LINK.authRecruitment + 'dang-nhap',
        smallUrl: APP_LINK.authRecruitment + 'dang-ky'
    }
];

export const REGISTER_DRAWER = [
    {
        title: 'Bạn là ứng viên?',
        quote: 'Chưa ai có thể viết được phần mềm hoàn hảo, bạn cũng vậy',
        buttonText: 'Đăng ký',
        redirectUrl: APP_LINK.authCandidate + 'dang-ky',
        smallUrl: APP_LINK.authCandidate + 'dang-nhap'
    }, {
        title: 'Bạn là nhà tuyển dụng?',
        quote: 'Tôi không trả lương cao (cho nhân viên) bởi vì tôi có nhiều tiền. Tôi có nhiều t' +
                'iền vì tôi trả lương cao nhân viên.',
        buttonText: 'Đăng ký',
        redirectUrl: APP_LINK.authRecruitment + 'dang-ky',
        smallUrl: APP_LINK.authRecruitment + 'dang-nhap'
    }
]

export const LEFT_PANEL_CANDIDATE = {
    title: 'ỨNG VIÊN',
    subTitle: 'TopFactors cung cấp hàng ngàn công việc phù hợp với trình độ của bạn'
}

export const LEFT_PANEL_RECRUITMENT = {
    title: 'NHÀ TUYỂN DỤNG',
    subTitle: 'Hàng ngàn ứng viên đáng giá đang sẵn sàng gia nhập cùng với bạn '
}

export const RADIO_INDEXS_EVALUTION_DETAIL = [
    '1', '2', '3', '4'
];
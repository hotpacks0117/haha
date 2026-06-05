// 모든 DMR 부착물 수치를 정의 (AR 및 SR 파츠 호환)
const DMR_PARTS_DATA = {
    muzzle: {
        '보정기(AR)': { 
            v: 15, h: 10, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/ar_보정기.webp', 
            txt: '수직+15%, 수평+10%, 반동 패턴-25%, 탄퍼짐-10%' 
        },
        '제동기(AR)': { 
            v: 10, h: 8, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/ar_제동기.webp', 
            txt: '수직+10%, 수평+8%, 사격 흔들림 및 총구 들림 제어+35%' 
        },
        '소염기(AR)': { 
            v: 10, h: 10, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/ar_소염기.webp', 
            txt: '수직+10%, 수평+10%, 총구 화염 제거' 
        },
        '소음기(AR)': { 
            v: 0, h: 0, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/ar_소음기.webp', 
            txt: '편차-5%, 발사음 대폭 감소, 총구 화염 제거,' 
        },
        '보정기(SR)': { 
            v: 20, h: 20, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/sr_보정기.webp',
            txt: '수직+20%, 수평+20%, 반동 패턴-25%',
            overrides: {
                'mini14': { v: 20, h: 10, txt: '수직+20%, 수평+10%' },
                'qbu': { v: 20, h: 10, txt: '수직+20%, 수평+10%' },
                'slr': { v: 20, h: 10, txt: '수직+20%, 수평+10%' },
                'sks': { v: 20, txt: '수직+20%' },
                'mk14': { v: 20, txt: '수직+20%' },
                'mk12': { v: 20, txt: '수직+20%' }
            }
        }, 
        '소염기(SR)': { 
            v: 10, h: 10, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/sr_소염기.webp', 
            txt: '수직+10%, 수평+10%, 총구 화염 제거' 
        },
        '소음기(SR)': { 
            v: 0, h: 0, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/sr_소음기.webp', 
            txt: '편차-5%, 발사음 대폭 감소, 총구 화염 제거,' 
        }
    }, 

    grip: {
        '수직 손잡이': { 
            v: 15, h: 0, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/수직손잡이.webp', 
            txt: '수직+15%' 
        },
        '앵글 손잡이': { 
            v: 0, h: 15, rec: 0, ads: 10, r: 0, ammo: 0, 
            img: '../img/앵글손잡이.webp', 
            txt: '수평+15%, 조준 속도+10%, 호흡 흔들림 제어-10' 
        },
        '하프 그립': { 
            v: 8, h: 8, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/하프그립.webp', 
            txt: '수직/수평+8%, 단발 사격 반동 회복+10%, 호흡 흔들림 제어-10%' 
        },
        '엄지 그립': { 
            v: 10, h: 0, rec: 10, ads: 40, r: 0, ammo: 0, 
            img: '../img/엄지그립.webp', 
            txt: '수직+10%, 조준속도+40%, 단발 사격 반동 회복+10%, 호흡 흔들림 제어+20%' 
        },
        '라이트 그립': { 
            v: 0, h: 0, rec: 20, ads: 0, r: 0, ammo: 0, 
            img: '../img/라이트그립.webp', 
            txt: '단발 사격 반동 회복+20%, 호흡 흔들림 제어+20%, 총구 들림 제어+10%, 초탄 반동 제어+30%' 
        }
    }, 

    mag: {
        '대용량 탄창(AR)': { 
            v: 0, h: 0, r: 0, 
            img: '../img/ar_대탄.webp',
            txt: '장탄수 최대 증가',
            overrides: {
                 'mini14': { ammo: 32, txt: '장탄수+12'},
                 'mk12': { ammo: 32, txt: '장탄수+12' },
                 'qbu': { ammo: 22, txt: '장탄수+12' },
                 'slr': { ammo: 22, txt: '장탄수+12'},
                 'mk14': { ammo: 22, txt: '장탄수+12' },
                 'sks': { ammo: 22, txt: '장탄수+12' },
                 'vss': { ammo: 22, txt: '장탄수+12' },
                 'dragunov': { ammo: 20, txt: '장탄수+10' }
            }
        },
        '퀵드로우 탄창(AR)': { 
            v: 0, h: 0, rec: 0, ads: 0, r: 0.6, ammo: 0, 
            img: '../img/ar_퀵드.webp', 
            txt: '장전 시간 60% 단축' 
        },
        '대용량 퀵드로우(AR)': { 
            v: 0, h: 0, r: 0.15,
            img: '../img/ar_대퀵.webp',
            txt: '장탄수 증가 + 장전 속도 감소',
            overrides: {
                'mini14': { ammo: 30, txt: '장탄수+10' },
                'mk12': { ammo: 30, txt: '장탄수+10' },
                'qbu': { ammo: 20, txt: '장탄수+10' },
                'slr': { ammo: 20, txt: '장탄수+10' },
                'mk14': { ammo: 20, txt: '장탄수+10' },
                'sks': { ammo: 20, txt: '장탄수+10' },
                'vss': { ammo: 20, txt: '장탄수+10' },
                'dragunov': { ammo: 18, txt: '장탄수+8' }
            }
        },
        '대용량 탄창(SR)': { 
            v: 0, h: 0, r: 0, 
            img: '../img/sr_대탄.webp',
            txt: '장탄수 최대 증가',
            overrides: {
                'mini14': { ammo: 32, txt: '장탄수+12' },
                'mk12': { ammo: 32, txt: '장탄수+12' },
                'qbu': { ammo: 22, txt: '장탄수+12' },
                'slr': { ammo: 22, txt: '장탄수+12' },
                'mk14': { ammo: 22, txt: '장탄수+12' },
                'sks': { ammo: 22, txt: '장탄수+12' },
                'vss': { ammo: 22, txt: '장탄수+12' },
                'dragunov': { ammo: 20, txt: '장탄수+10' }
            }
        },
        '퀵드로우 탄창(SR)': { 
            v: 0, h: 0, rec: 0, ads: 0, r: 0.6, ammo: 0, 
            img: '../img/sr_퀵드.webp', 
            txt: '장전 시간 60% 단축' 
        },
        '대용량 퀵드로우(SR)': { 
            v: 0, h: 0, r: 0.15,
            img: '../img/sr_대퀵.webp',
            txt: '장탄수 증가 + 장전 속도 감소',
            overrides: {
                'mini14': { ammo: 30, txt: '장탄수+10' },
                'mk12': { ammo: 30, txt: '장탄수+10' },
                'qbu': { ammo: 20, txt: '장탄수+10' },
                'slr': { ammo: 20, txt: '장탄수+10' },
                'mk14': { ammo: 20, txt: '장탄수+10' },
                'sks': { ammo: 20, txt: '장탄수+10' },
                'vss': { ammo: 20, txt: '장탄수+10' },
                'dragunov': { ammo: 18, txt: '장탄수+8' }
            }
        }
    }, 

    stock: {
        '칙패드': { 
            v: 20, h: 0, 
            img: '../img/칙패드.webp', 
            txt: '총기별 스탯 상이',
            overrides: {
                'vss': { v: 20, h: 0, txt: '수직+20%, 호흡 흔들림-20%' },
                'sks': { v: 10, h: 0, rec: 10, txt: '수직+10%, 반동 회복+10%' },
                'mk14': { v: 20, h: 10, txt: '수직+20%, 수평+10%' },
                'slr': { v: 20, h: 10, txt: '수직+20%, 수평+10%' }
            }
        } 
    } 
};
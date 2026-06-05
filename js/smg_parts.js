const SMG_PARTS_DATA = {
    muzzle: {
        '보정기(SMG)': { 
            v: 25, h: 20, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/smg_보정기.webp', 
            txt: '수직 반동 제어+25%, 수평 반동 제어+20%, 총기 반동 패턴-25%' 
        },
        '소염기(SMG)': { 
            v: 10, h: 10, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/smg_소염기.webp', 
            txt: '수직 반동 제어+10%, 수평 반동 제어+10%, 총구 화염 제거',
            overrides: {
                'uzi': { v: 10, h: 10, rec: 0, txt: '수직 반동 제어+10%, 수평 반동 제어+10%, 총기 반동 패턴-25%, 총구 화염 감소' }
            }
        },
        '소음기(SMG)': { 
            v: 0, h: 0, rec: 0, ads: 0, r: 0, ammo: 0, 
            img: '../img/smg_소음기.webp', 
            txt: '편차-5%, 발사음 대폭 감소, 총구 화염 제거',
            overrides: {
                'vector': { v: 0, h: 0, rec: 0, r: 0, txt: '편차-3%, 총구 화염 제거, 발사음 대폭 감소' }
            }
        }
    }, 

    grip: {
        '수직 손잡이': { v: 15, h: 0, rec: 0, ads: 0, r: 0, ammo: 0, img: '../img/수직손잡이.webp', txt: '수직+15%' },
        '앵글 손잡이': { v: 0, h: 15, rec: 0, ads: 10, r: 0, ammo: 0, img: '../img/앵글손잡이.webp', txt: '수평+15%, 조준 속도+10%, 호흡 흔들림 제어-10' },
        '하프 그립': { v: 8, h: 8, rec: 0, ads: 0, r: 0, ammo: 0, img: '../img/하프그립.webp', txt: '수직/수평+8%, 단발 사격 반동 회복+10%, 호흡 흔들림 제어-10%' },
        '엄지 그립': { v: 10, h: 0, rec: 10, ads: 40, r: 0, ammo: 0, img: '../img/엄지그립.webp', txt: '수직+10%, 조준속도+40%, 단발 사격 반동 회복+10%, 호흡 흔들림 제어+20%' },
        '라이트 그립': { v: 0, h: 0, rec: 20, ads: 0, r: 0, ammo: 0, img: '../img/라이트그립.webp', txt: '단발 사격 반동 회복+20%, 호흡 흔들림 제어+20%, 총구 들림 제어+10%, 초탄 반동 제어+30%' }
    },

    mag: {
        '대용량 탄창(SMG)': { 
            v: 0, h: 0, r: 0, 
            img: '../img/smg_대탄.webp',
            txt: '장탄수 증가',
            overrides: {
                 'uzi': { ammo: 37 }, 
                 'vector': { ammo: 35 }, 
                 'ump45': { ammo: 37 }, 
                 'mp5k': { ammo: 42 }, 
                 'tommy_gun': { ammo: 55 } 
            }
        },
        '퀵드로우 탄창(SMG)': { 
             v: 0, h: 0, rec: 0, ads: 0, r: 0.6, ammo: 30, // 30발 명시
             img: '../img/smg_퀵드.webp', 
             txt: '장전 시간 60% 단축' 
        },
        '대용량 퀵드로우(SMG)': { 
            v: 0, h: 0, r: 0.15,
            img: '../img/smg_대퀵.webp',
            txt: '장탄수 증가',
            overrides: {
                'uzi': { ammo: 35 }, 
                'vector': { ammo: 33 }, 
                'ump45': { ammo: 35 }, 
                'mp5k': { ammo: 40 }, 
                'tommy_gun': { ammo: 50 } 
            }
        }
    },

    stock: {
        '전술 개머리판': { 
            v: 0, h: 0, rec: 0, ads: 10, r: 0, ammo: 0, 
            img: '../img/전술.webp', 
            txt: '조준속도+10%, 호흡 흔들림 제어+10%, 총구 들림 제어+10%, 초탄 반동 제어+5%' 
        },
        '중량형 개머리판': { 
            v: 10, h: 10, rec: 5, ads: -10, r: 0, ammo: 0, 
            img: '../img/중량형.webp', 
            txt: '수직/수평+10%, 조준속도-10%, 단발 사격 반동 회복+5%, 비조준 사격 정확도-10%' 
        }
    }
};
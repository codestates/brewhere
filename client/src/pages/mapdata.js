const dummydata = [
  {
    id: 1,
    title: '서울한남브루어리 한남점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/localfiy/searchregister_1540711267',
    img: 'http://t1.daumcdn.net/localfiy/searchregister_1540711267',
    address: '서울특별시 용산구 한남대로18길 18',
    contacts: '070 - 8832 - 0915',
    tags: '#수제맥주 #분위기좋은',
    coords: {
      lat: '37.5343289',
      lng: '127.008363',
    },
  },
  {
    id: 2,
    title: '아톤브루어리',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.kakaocdn.net/fiy_reboot/place/6535F4626C5C44538D34E89119A7169B',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F6535F4626C5C44538D34E89119A7169B',
    address: '서울특별시 용산구 장문로 23',
    contacts: '070-4009-5849',
    tags: '#데이트코스 #분위기좋은 #앤틱한 #이국적인',
    coords: {
      lat: '37.52853',
      lng: '126.99310',
    },
  },
  {
    id: 3,
    title: '브루어리304',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/localfiy/searchregister_1829038127',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2Fsearchregister_1829038127',
    address: '서울특별시 서대문구 통일로11길 7',
    contacts: '02-363-7304',
    tags: '#독립문맛집 #서대문맛집',
    coords: {
      lat: '37.56925',
      lng: '126.96262',
    },
  },
  {
    id: 4,
    title: '독립맥주공장',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/localfiy/searchregister_1531821665',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2Fsearchregister_1531821665',
    address: '서울특별시 중구 정동길 17',
    contacts: '02-3789-2890',
    tags: '#수제맥주 #프랑스음식',
    coords: {
      lat: '37.56707',
      lng: '126.97053',
    },
  },
  {
    id: 5,
    title: '브루독 이태원',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/place/BB55E793DB674C7A8FE1A415F86388D7',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Fpostfiles13.naver.net%2FMjAxOTExMjhfMTQ4%2FMDAxNTc0OTA0MDc0NDkw.nV97Ro9hJVzVXWBS2GHPJLUPVnW2iHTC66Ak70R9pZcg.63Mhk8jL3itEssmuR7xI5DmItSGXqgZF7u5EZcyb4oYg.JPEG.caroline96%2FIMG_1670.JPG%3Ftype%3Dw773',
    address: '서울 용산구 이태원로27나길 40 준아트빌 B401호',
    contacts: '02-797-1240',
    tags: '#데이트코스 #버맥 #비건푸드 #세계맥주 #수제맥주 #피맥',
    coords: {
      lat: '37.5349778',
      lng: '126.996880',
    },
  },
  {
    id: 6,
    title: '더부스 경리단점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2247053853FC15A117',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F2247053853FC15A117',
    address: '서울 용산구 녹사평대로54길 7 1층',
    contacts: '070-4324-4723',
    tags: '#가맥 #보드게임카페 #피자펍',
    coords: {
      lat: '37.5393829',
      lng: '126.987680',
    },
  },
  {
    id: 7,
    title: '가로수브루잉컴퍼니',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/267D803B5530CA3911',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F267D803B5530CA3911',
    address: '서울 강남구 도산대로11길 31-4',
    contacts: '02-515-8962',
    tags: '#수제맥주 #피맥',
    coords: {
      lat: '37.5195150',
      lng: '127.021959',
    },
  },
  {
    id: 8,
    title: '크래프트한스 이태원점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/place/3A4DD3A84F744D48AF267CA51B9CB11B',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Fpostfiles10.naver.net%2FMjAxOTEwMjRfMjQg%2FMDAxNTcxODg2NDgyMTAx.NLFC6Dl7cXVpBgBHI0MH8RpHxSeS8F8gzjZ4eF6ohHwg.Ane-k9KWCw_eYJYjPTw0ndqFFgA_VXGEjH38uJxHJ9Yg.JPEG.kkm961220%2FIMG_9630.jpg%3Ftype%3Dw966',
    address: '서울 용산구 이태원로19길 6-5',
    contacts: '',
    tags: '#수제맥주 #피맥',
    coords: {
      lat: '37.5347973',
      lng: '126.992207',
    },
  },
  {
    id: 9,
    title: '데블스도어 센트럴시티점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/22465F37547FC9742A',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F22465F37547FC9742A',
    address: '서울 서초구 사평대로 205',
    contacts: '02-6282-4466',
    tags: '#수제맥주 #신세계푸드',
    coords: {
      lat: '37.5033257',
      lng: '127.004866',
    },
  },
  {
    id: 10,
    title: '어메이징브루잉컴퍼니 성수브루펍',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/22254F3F56C6BA2E05',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F176F1FDAEDDD40448942B2A0EEE6F9CD',
    address: '서울 성동구 성수일로4길 4 1층',
    contacts: '02-465-5208',
    tags: '#수제맥주 #피맥',
    coords: {
      lat: '37.5428698',
      lng: '127.049382',
    },
  },
  {
    id: 11,
    title: '브로이하우스바네하임',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.kakaocdn.net/fiy_reboot/place/AF5D4D2C0F804AD080B462BB2705EDE0',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FAF5D4D2C0F804AD080B462BB2705EDE0',
    address: '서울 노원구 공릉로32길 54 고려빌딩 1,2층',
    contacts: '02-948-8003',
    tags: '#낮술하기좋은 #수제맥주',
    coords: {
      lat: '37.6216884',
      lng: '127.082112',
    },
  },
  {
    id: 12,
    title: '슈타인도르프',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/place/ABA93D55EAC14E61BD505AE725267284',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Fpostfiles8.naver.net%2FMjAyMDA3MjNfNTAg%2FMDAxNTk1NDkzMTgwNDU2.p2GUu_oDJ9qbvUuFfqJDhnN0zG5WVovt5fzPCcNlcLIg.16O0WB58wMEsg3UOFXLquDH9x1LlHWWEbCXUZh6j71Ag.JPEG.lycossue%2F4AFFE55C-A6BD-4DE9-957D-47C95828DBA3.jpg%3Ftype%3Dw580',
    address: '서울 송파구 오금로15길 11',
    contacts: '02-422-9000',
    tags: '#수제맥주 #석촌호수',
    coords: {
      lat: '37.5129442',
      lng: '127.109356',
    },
  },
  {
    id: 13,
    title: '아크펍',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/place/78998D6523E14DC781A1CCCC6B569B54',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F78998D6523E14DC781A1CCCC6B569B54',
    address: '서울 서초구 서초대로74길 29 서초파라곤 104호',
    contacts: '02-3472-2977',
    tags: '#탭룸 #세계맥주 #수제맥주',
    coords: {
      lat: '37.4949256',
      lng: '127.027403',
    },
  },
  {
    id: 14,
    title: '카브루 브루펍',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.kakaocdn.net/mystore/710E192B4D524177A1361366DE39707A',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F4285EBC3C61B42198AFF65FCCDB23DB7',
    address: '서울 강남구 압구정로79길 19 레인애비뉴 101호',
    contacts: '02-511-4082',
    tags: '#청담핫플 #데이트코스',
    coords: {
      lat: '37.5253097',
      lng: '127.048760',
    },
  },
  {
    id: 15,
    title: '낙타브루잉 강남점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/localfiy/searchregister_2048265270',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocal%2FkakaomapPhoto%2Freview%2F6de0b8e5eb45b7af1fe372b343e061281e098dc2%3Foriginal',
    address: '서울 강남구 강남대로106길 14 지하1층',
    contacts: '02-6015-8500',
    tags: '#피맥 #혼술 #데이트코스',
    coords: {
      lat: '37.5028906',
      lng: '127.026648',
    },
  },
  {
    id: 16,
    title: '펑키탭하우스',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/245A1438554207910B',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMjA2MjdfMTAx%2FMDAxNjU2MzM1NTA0MTE4.RANs4XGoqaGASBm-3CV1OF3F3_N-sPT9M6NYPBbdiiwg.cVDClKXdTP2ieXokggocUBXGCVoY2RdeXZbnLuO6DQwg.JPEG.chohaej%2F1656335442974.jpg%3Ftype%3Dw773',
    address: '서울 서초구 강남대로55길 9-7 2층',
    contacts: '02-588-4156',
    tags: '#이국적인 #캐주얼한분위기',
    coords: {
      lat: '37.4954211',
      lng: '127.027550',
    },
  },
  {
    id: 17,
    title: '옥토버훼스트 종로점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/174D0F484F6ADE9B03',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F163CD0484F6ADE961A',
    address: '서울 종로구 종로5길 13 삼공빌딩 1층',
    contacts: '02-738-8881',
    tags: '#독일식요리 #수제맥주',
    coords: {
      lat: '37.5710157',
      lng: '126.980475',
    },
  },
  {
    id: 18,
    title: '히든트랙 안암점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.kakaocdn.net/mystore/F4B9FA337C124D8FB811C73F7DA54DC8',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F0A41DAC2A71342DCA7C79979EFFA2A54',
    address: '서울 동대문구 약령시로 6 수운빌딩 지하 1층',
    contacts: '070-8801-9744',
    tags: '#수제맥주 #엘리제',
    coords: {
      lat: '37.5824836',
      lng: '127.030456',
    },
  },
  {
    id: 19,
    title: '핸드앤몰트탭룸 경복궁점',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/localfiy/33EC0E0B1F44437489B6F3BF1CECE11E',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2F48285E290A094B5AAD906DF180E50455',
    address: '서울 종로구 사직로12길 12-2',
    contacts: '02-720-6258',
    tags: '#수제맥주 #청평하베스트페일에일',
    coords: {
      lat: '37.5755006',
      lng: '126.970942',
    },
  },
  {
    id: 20,
    title: '미스터리브루잉컴퍼니',
    thumbnail:
      '//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.kakaocdn.net/fiy_reboot/place/F7E72BEDC448401A8123F3C239C45040',
    img: 'https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F47AA4F1E0BF544FC9721D87D08CF3D35',
    address: '서울 마포구 독막로 311 재화스퀘어 1층',
    contacts: '02-3272-6337',
    tags: '#미스터시리즈 #뉴잉글랜드IPA',
    coords: {
      lat: '37.5439755',
      lng: '126.947509',
    },
  },
];

export { dummydata };

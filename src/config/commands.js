import * as API from './api';

// search 명령 입력시 실행 함수
export const search = (val) => {
  if (val.length < 1) {
    // return [{'message': 'error : please type stock name'}]
    return [{ message: { title: 'error', tbody: 'please type stock name' } }];
  } else {
    let apiRes = API.postApi('endpoint^^', 'body^^');
    return [
      {
        message: {
          title: apiRes.title,
          tbody: apiRes.tbody,
        },
      },
    ];
  }
};

// search 명령 입력시 실행 함수
export const help = (val) => {
  return [
    { message: { title: 'help', tbody: '도움말' } },
    {
      message: {
        title: 'search',
        tbody: '간략 종목 검색 ex) search 삼성전자',
      },
    },
    {
      message: {
        title: 'detail',
        tbody: '상세 종목 검색 ex) detail 삼성전자',
      },
    },
    {
      message: {
        title: 'jtb',
        tbody: '네이버 종토방 내용 검색 ex) jtb 삼성전자',
      },
    },
    {
      message: {
        title: 'news',
        tbody: '구글 최신 기사 내용 검색 ex) news 삼성전자',
      },
    },
  ];
};

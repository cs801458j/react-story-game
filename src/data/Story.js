// 메인 게임 스토리 라인
export const gameStory = [
  {
    stageId: 0,
    stageTitle: '어느날 눈 떠보니 내가 다람쥐?',
    contents: [
      {
        character: '',
        sentence: '큰일이다… 내일은 내 생일이라 팬들도 만나야 하구..ㅜ 어쩌면 좋지',
      },
      {
        character: '',
        sentence: '멀리서 다가오는 어떤 .. 거대한 생명체.',
      },

      {
        character: '',
        sentence: '빛을 따라 가보니 그 곳엔 거대 버섯 요정이 있었다.',
      },
      {
        character: '????',
        sentence: '왔구나',
      },
      {
        character: '진혁',
        sentence: '넌 누구야?',
      },
      {
        character: '버섯요정',
        sentence: '난 버섯라면의 저주에 걸린 사람들만 만날 수 있다는 버섯요정이야',
      },
      {
        character: '진혁',
        sentence: '? 지금 니 말은 내가 저주에 걸렸다고?',
      },
      {
        character: '버섯요정',
        sentence: 'ㅇㅇ 넌 어젯밤에 버섯라면을 두 봉지나 끓여먹었기 때문에 버섯의 저주에 걸렸어.',
      },
      {
        character: '진혁',
        sentence: '아니 왜?? 내가 배고파서 먹을 수도 있지 ㅡㅡ 거 참 쪼잔하넹',
      },
      {
        character: '버섯요정',
        sentence: '맞아 그럴수도 있지.. 하지만 넌 엄마의 탈을 쓴 악마버섯 시험에 넘어간거야!',
      },
      {
        character: '진혁',
        sentence: '어젯밤.. 나랑 카톡을 한 사람이 엄마가 아니고 악마버섯이었다구?!',
      },
      {
        character: '버섯요정',
        sentence: '그래. 드디어 상황 파악이 됐구나? ',
      },
      {
        character: '진혁',
        sentence: '그러면 내가.. 사람으로 돌아가려면 어떻게 해야하니 버섯요정아ㅠㅠ',
      },
      {
        character: '버섯요정',
        sentence: '버: 지금부터 세가지 미션을 통과하면 널 다시 사람으로 돌려줄게.',
      },
      {
        character: '진혁',
        sentence: '좋아. 그 미션 완벽하게 클리어 하겠어!',
      },
    ],
  },
  {
    stageId: 1,
    stageTitle: '느나 만나기',
    contents: [
      {
        character: 'STAGE 1',
        sentence: '그래! 일단 친한 누나를 만나서 상황을 어떻게 해결해야할지 물어보자.',
      },
      {
        character: '',
        sentence: '근데 어떤 누나한테 가지?',
      },
      {
        character: '선택',
        sentence: '골라보자',
      },
    ],
  },
];

//  게임 선택지
export const gameSelection = [
  {
    stageId: 1,
    selections: [
      '주접이풍년 미선누나 만나기',
      'sbs 라디오 소현누나 만나기',
      '왜 오수재인가 서현진 누나 만나기',
    ],
    answer: 1,
  },
  {
    stageId: 2,
    selections: ['헬스장에 간다', '작업실에 간다', '회사로 간다'],
    answer: 1,
  },
  {
    stageId: 3,
    selections: ['콘서트장', '버블', '브이앱'],
    answer: 0,
  },
];

// 1단계 스토리
export const stageStory = [
  [
    {
      stageId: 1,
      subStageId: 0,
      index: 0,
      result: 'fail',
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 미선느나를 만나러 주접이풍년으로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 주접이풍년 촬영장으로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 미선느나 지금 어디에 계신가요?',
        },
        {
          character: '스탭',
          sentence: '여 마침 잘 왔다.',
        },
        {
          character: '스탭',
          sentence:
            '안그래도 오늘 미선누님이 몸이 안 좋아서 MC 대타가 급하게 필요했는데 너가 하면 되겠다',
        },
        {
          character: '진람쥐',
          sentence: '??? 저 지금 다람쥔데요???',
        },
        {
          character: '스탭',
          sentence: '그게 중요한게 아니야 지금 .. 빨리 스탠바이 하자',
        },
        {
          character: '',
          sentence: '그렇게 .. 진람쥐는 다람쥐인채로 주접리포터로 주접이 풍년에 나가게 되었다.',
        },
        {
          character: '',
          sentence: '다람쥐리포터는 특유의 귀여움으로 소소한 화제가 되었다.',
        },
        {
          character: '',
          sentence: '하지만 미선느나를 만나지 못해 결국 조언을 얻지 못했다.',
        },
        {
          character: '',
          sentence: 'MISSION FAIL',
        },
      ],
    },
    {
      stageId: 1,
      subStageId: 1,
      index: 1,
      result: 'success',
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 소현느나를 만나러 SBS 라디오로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 목동 SBS로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 소현느나 지금 있나요?',
        },
        {
          character: '소현누나',
          sentence: '어머! 혹시 너 진혁이니?',
        },
        {
          character: '진람쥐',
          sentence:
            '녜 누나 ... 저 어떡하죠 자고 일어나보니 다람쥐가 됐어요ㅠㅠ 이런 몸으로 방송을 할 수 있을까요? ㅠㅠ',
        },
        {
          character: '소현누나',
          sentence: '진람.. 아니 진혁아 괜찮아 다람쥐면 어때? 너라는 사실이 중요한거지',
        },
        {
          character: '진람쥐',
          sentence: '정말인가요ㅠㅠ 저 다람쥐여도 괜찮을까요? 팬들이 싫어하면 어쩌죠',
        },
        {
          character: '소현누나',
          sentence:
            '다람쥐인 지금도 충분히 귀엽고 사랑스러운걸! 오늘 찾아온김에 같이 게스트로 이야기 하다갈래?',
        },
        {
          character: '진람쥐',
          sentence: '조금 부끄럽지만 ... 좋아요!',
        },
        {
          character: '',
          sentence: '그렇게 진람쥐는 러브게임 최초의 다람쥐 게스트가 되었다.',
        },
        {
          character: '',
          sentence:
            '다람쥐로 변해도 즐겁고 유쾌한 진람쥐의 토크는 107.7mHz과 고릴라를 통해 전국으로 퍼져갔다.',
        },
        {
          character: '',
          sentence: 'MISSION SUCCESS',
        },
        {
          character: '소현누나',
          sentence: '축하해. 미션을 통과했구나. ',
        },
        {
          character: '소현누나',
          sentence:
            '너는 다람쥐인 모습으로도 용기있게 라디오에 출연했기 때문에 이 버섯을 받을 자격이 있어. ',
        },
        {
          character: '획득',
          sentence: "진람쥐는 '용기의 버섯'을(를) 획득했다 !",
        },
      ],
    },
    {
      stageId: 1,
      subStageId: 2,
      index: 2,
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 현진느나를 만나러 왜 오수재인가 촬영장으로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 왜 오수재인가 촬영장으로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 현진느나 지금 현장에 계신가요?',
        },
        {
          character: '스탭',
          sentence: '오늘은 학교씬이 아니고 법정씬이여서 여기는 없을텐데.. ',
        },
        {
          character: '스탭',
          sentence: '마침 잘됐다. 추가 컷으로 찍어야 할 부분 온 김에 찍고 가자.',
        },
        {
          character: '진람쥐',
          sentence: '??? 저 지금 다람쥔데요???',
        },
        {
          character: '스탭',
          sentence: '됐고 일단 빨리 대기하자.',
        },
        {
          character: '',
          sentence: '그렇게 .. 진람쥐는 다람쥐인채로 왜 오수재인가를 촬영했다.',
        },
        {
          character: '',
          sentence: '진람쥐는 람춘풍으로 로스쿨 최초 다람쥐 대학생설정이 되어버렸다 .',
        },
        {
          character: '',
          sentence: '하지만 다람쥐 대학생은 한국사회의 정서상 시청자들이 받아들이기 어려웠다... ',
        },
        {
          character: '',
          sentence: 'MISSION FAIL',
        },
      ],
    },
  ],
  [
    {
      stageId: 2,
      subStageId: 0,
      index: 0,
      result: 'fail',
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 미선느나를 만나러 주접이풍년으로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 주접이풍년 촬영장으로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 미선느나 지금 어디에 계신가요?',
        },
        {
          character: '스탭',
          sentence: '여 마침 잘 왔다.',
        },
        {
          character: '스탭',
          sentence:
            '안그래도 오늘 미선누님이 몸이 안 좋아서 MC 대타가 급하게 필요했는데 너가 하면 되겠다',
        },
        {
          character: '진람쥐',
          sentence: '??? 저 지금 다람쥔데요???',
        },
        {
          character: '스탭',
          sentence: '그게 중요한게 아니야 지금 .. 빨리 스탠바이 하자',
        },
        {
          character: '',
          sentence: '그렇게 .. 진람쥐는 다람쥐인채로 주접리포터로 주접이 풍년에 나가게 되었다.',
        },
        {
          character: '',
          sentence: '다람쥐리포터는 특유의 귀여움으로 소소한 화제가 되었다.',
        },
        {
          character: '',
          sentence: '하지만 미선느나를 만나지 못해 결국 조언을 얻지 못했다.',
        },
        {
          character: '',
          sentence: 'MISSION FAIL',
        },
      ],
    },
    {
      stageId: 2,
      subStageId: 1,
      index: 1,
      result: 'success',
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 소현느나를 만나러 SBS 라디오로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 목동 SBS로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 소현느나 지금 있나요?',
        },
        {
          character: '소현누나',
          sentence: '어머! 혹시 너 진혁이니?',
        },
        {
          character: '진람쥐',
          sentence:
            '녜 누나 ... 저 어떡하죠 자고 일어나보니 다람쥐가 됐어요ㅠㅠ 이런 몸으로 방송을 할 수 있을까요? ㅠㅠ',
        },
        {
          character: '소현누나',
          sentence: '진람.. 아니 진혁아 괜찮아 다람쥐면 어때? 너라는 사실이 중요한거지',
        },
        {
          character: '진람쥐',
          sentence: '정말인가요ㅠㅠ 저 다람쥐여도 괜찮을까요? 팬들이 싫어하면 어쩌죠',
        },
        {
          character: '소현누나',
          sentence:
            '다람쥐인 지금도 충분히 귀엽고 사랑스러운걸! 오늘 찾아온김에 같이 게스트로 이야기 하다갈래?',
        },
        {
          character: '진람쥐',
          sentence: '조금 부끄럽지만 ... 좋아요!',
        },
        {
          character: '',
          sentence: '그렇게 진람쥐는 러브게임 최초의 다람쥐 게스트가 되었다.',
        },
        {
          character: '',
          sentence:
            '다람쥐로 변해도 즐겁고 유쾌한 진람쥐의 토크는 107.7mHz과 고릴라를 통해 전국으로 퍼져갔다.',
        },
        {
          character: '',
          sentence: 'MISSION SUCCESS',
        },
        {
          character: '소현누나',
          sentence: '축하해. 미션을 통과했구나. ',
        },
        {
          character: '소현누나',
          sentence:
            '너는 다람쥐인 모습으로도 용기있게 라디오에 출연했기 때문에 이 버섯을 받을 자격이 있어. ',
        },
        {
          character: '획득',
          sentence: "진람쥐는 '용기의 버섯'을(를) 획득했다 !",
        },
      ],
    },
    {
      stageId: 2,
      subStageId: 2,
      index: 2,
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 현진느나를 만나러 왜 오수재인가 촬영장으로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 왜 오수재인가 촬영장으로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 현진느나 지금 현장에 계신가요?',
        },
        {
          character: '스탭',
          sentence: '오늘은 학교씬이 아니고 법정씬이여서 여기는 없을텐데.. ',
        },
        {
          character: '스탭',
          sentence: '마침 잘됐다. 추가 컷으로 찍어야 할 부분 온 김에 찍고 가자.',
        },
        {
          character: '진람쥐',
          sentence: '??? 저 지금 다람쥔데요???',
        },
        {
          character: '스탭',
          sentence: '됐고 일단 빨리 대기하자.',
        },
        {
          character: '',
          sentence: '그렇게 .. 진람쥐는 다람쥐인채로 왜 오수재인가를 촬영했다.',
        },
        {
          character: '',
          sentence: '진람쥐는 람춘풍으로 로스쿨 최초 다람쥐 대학생설정이 되어버렸다 .',
        },
        {
          character: '',
          sentence: '하지만 다람쥐 대학생은 한국사회의 정서상 시청자들이 받아들이기 어려웠다... ',
        },
        {
          character: '',
          sentence: 'MISSION FAIL',
        },
      ],
    },
  ],
  [
    {
      stageId: 1,
      subStageId: 0,
      index: 0,
      result: 'fail',
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 미선느나를 만나러 주접이풍년으로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 주접이풍년 촬영장으로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 미선느나 지금 어디에 계신가요?',
        },
        {
          character: '스탭',
          sentence: '여 마침 잘 왔다.',
        },
        {
          character: '스탭',
          sentence:
            '안그래도 오늘 미선누님이 몸이 안 좋아서 MC 대타가 급하게 필요했는데 너가 하면 되겠다',
        },
        {
          character: '진람쥐',
          sentence: '??? 저 지금 다람쥔데요???',
        },
        {
          character: '스탭',
          sentence: '그게 중요한게 아니야 지금 .. 빨리 스탠바이 하자',
        },
        {
          character: '',
          sentence: '그렇게 .. 진람쥐는 다람쥐인채로 주접리포터로 주접이 풍년에 나가게 되었다.',
        },
        {
          character: '',
          sentence: '다람쥐리포터는 특유의 귀여움으로 소소한 화제가 되었다.',
        },
        {
          character: '',
          sentence: '하지만 미선느나를 만나지 못해 결국 조언을 얻지 못했다.',
        },
        {
          character: '',
          sentence: 'MISSION FAIL',
        },
      ],
    },
    {
      stageId: 1,
      subStageId: 1,
      index: 1,
      result: 'success',
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 소현느나를 만나러 SBS 라디오로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 목동 SBS로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 소현느나 지금 있나요?',
        },
        {
          character: '소현누나',
          sentence: '어머! 혹시 너 진혁이니?',
        },
        {
          character: '진람쥐',
          sentence:
            '녜 누나 ... 저 어떡하죠 자고 일어나보니 다람쥐가 됐어요ㅠㅠ 이런 몸으로 방송을 할 수 있을까요? ㅠㅠ',
        },
        {
          character: '소현누나',
          sentence: '진람.. 아니 진혁아 괜찮아 다람쥐면 어때? 너라는 사실이 중요한거지',
        },
        {
          character: '진람쥐',
          sentence: '정말인가요ㅠㅠ 저 다람쥐여도 괜찮을까요? 팬들이 싫어하면 어쩌죠',
        },
        {
          character: '소현누나',
          sentence:
            '다람쥐인 지금도 충분히 귀엽고 사랑스러운걸! 오늘 찾아온김에 같이 게스트로 이야기 하다갈래?',
        },
        {
          character: '진람쥐',
          sentence: '조금 부끄럽지만 ... 좋아요!',
        },
        {
          character: '',
          sentence: '그렇게 진람쥐는 러브게임 최초의 다람쥐 게스트가 되었다.',
        },
        {
          character: '',
          sentence:
            '다람쥐로 변해도 즐겁고 유쾌한 진람쥐의 토크는 107.7mHz과 고릴라를 통해 전국으로 퍼져갔다.',
        },
        {
          character: '',
          sentence: 'MISSION SUCCESS',
        },
        {
          character: '소현누나',
          sentence: '축하해. 미션을 통과했구나. ',
        },
        {
          character: '소현누나',
          sentence:
            '너는 다람쥐인 모습으로도 용기있게 라디오에 출연했기 때문에 이 버섯을 받을 자격이 있어. ',
        },
        {
          character: '획득',
          sentence: "진람쥐는 '용기의 버섯'을(를) 획득했다 !",
        },
      ],
    },
    {
      stageId: 3,
      subStageId: 2,
      index: 2,
      contents: [
        {
          character: '진람쥐',
          sentence: '그래. 현진느나를 만나러 왜 오수재인가 촬영장으로 가자!',
        },
        {
          character: '',
          sentence: '그렇게 왜 오수재인가 촬영장으로 찾아간 진람쥐.',
        },
        {
          character: '진람쥐',
          sentence: '안녕하세요~ 혹시 현진느나 지금 현장에 계신가요?',
        },
        {
          character: '스탭',
          sentence: '오늘은 학교씬이 아니고 법정씬이여서 여기는 없을텐데.. ',
        },
        {
          character: '스탭',
          sentence: '마침 잘됐다. 추가 컷으로 찍어야 할 부분 온 김에 찍고 가자.',
        },
        {
          character: '진람쥐',
          sentence: '??? 저 지금 다람쥔데요???',
        },
        {
          character: '스탭',
          sentence: '됐고 일단 빨리 대기하자.',
        },
        {
          character: '',
          sentence: '그렇게 .. 진람쥐는 다람쥐인채로 왜 오수재인가를 촬영했다.',
        },
        {
          character: '',
          sentence: '진람쥐는 람춘풍으로 로스쿨 최초 다람쥐 대학생설정이 되어버렸다 .',
        },
        {
          character: '',
          sentence: '하지만 다람쥐 대학생은 한국사회의 정서상 시청자들이 받아들이기 어려웠다... ',
        },
        {
          character: '',
          sentence: 'MISSION FAIL',
        },
      ],
    },
  ],
];

// 첫 번째 선택지 스토리 라인

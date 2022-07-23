monogatari.characters ({
  'female_employee1': {
		name: '여직원1',
		color: '#F4FFFF',
    directory: 'sub_characters',
		sprites: {
			normal_R: 'etc04_R.png',
			normal_L: 'etc04_L.png',
		}
	},
  'female_employee2': {
		name: '여직원2',
		color: '#F4FFFF',
    directory: 'sub_characters',
		sprites: {
			normal_R: 'etc04_R_moreCenter.png',
			normal_L: 'etc04_L_moreCenter.png'
		}
	},
  'male_employee1': {
		name: '남직원1',
		color: '#F4FFFF',
    directory: 'sub_characters',
		sprites: {
			normal_R: 'etc05_R.png',
			normal_L: 'etc05_L.png'
		}
	},
  'male_employee2': {
		name: '남직원2',
		color: '#F4FFFF',
    directory: 'sub_characters',
		sprites: {
			normal_R: 'etc05_R_moreCenter.png',
			normal_L: 'etc05_L_moreCenter.png'
		}
	},
  'han_manager': {
		name: '한과장',
		color: '#F4FFFF',
    directory: 'sub_characters',
		sprites: {
			normal_R: 'etc04_R_moreCenter.png',
			normal_L: 'etc04_L_moreCenter.png'
		}
	},
})

monogatari.assets ('voices', {
	//한여름
	//강성찬
  //이연호
  'S005_001(Lee)' : 'S005/S005_001(Lee).mp3',
  'S005_001(Lee0)' : 'S005/S005_001(Lee0).mp3',
  'S005_002(Lee)' : 'S005/S005_002(Lee).mp3',
  'S005_002(Lee0)' : 'S005/S005_002(Lee0).mp3',
  'S005_003(Lee)' : 'S005/S005_003(Lee).mp3',
  'S005_003(Lee0)' : 'S005/S005_003(Lee0).mp3',
  'S005_004(Lee)' : 'S005/S005_004(Lee).mp3',
  'S005_005(Lee)' : 'S005/S005_005(Lee).mp3',
  'S005_006(Lee)' : 'S005/S005_006(Lee).mp3',
  'S005_007(Lee)' : 'S005/S005_007(Lee).mp3',
  'S005_008(Lee)' : 'S005/S005_008(Lee).mp3',
  'S005_009(Lee)' : 'S005/S005_009(Lee).mp3',
  'S005_010(Lee)' : 'S005/S005_010(Lee).mp3',
	//엑스트라
	'S004_001(Staff1)' : 'S004/S004_001(Staff1).mp3',
  'S004_002(Staff1)' : 'S004/S004_002(Staff1).mp3',
  'S005_001(Msteff1)' : 'S005/S005_001(Msteff1).mp3',
  'S005_001(Msteff2)' : 'S005/S005_001(Msteff2).mp3',
});

monogatari.script ({
  // ----------------- 씬4 주석 -----------------
  'S4' : [
    'show scene elevator_front',
		'show scene elevator_front with fadeOut',
		'show scene interview_front with fadeIn duration 3s',
    'S4 책임 / 면접실 층 입구 / 오전10시경 / INT',
    
    
    'show character kang normal_R fadeIn with duration 2s',
    'kang 들어가세요. 저희측 실수이니, 책임은 지겠습니다.',
		{
			'Choice': {
				'yes': {
					'Text': '책임이요?',
					'Do': 'jump S4_yes'
				},
				'no': {
					'Text': '책임 안지셔도 돼요. 제가 지각한 것도 있는 걸요.',
					'Do': 'jump S4_no'
				},
			}
		},
  ],
  'S4_yes':[
    'me 		책임이요?',
    'kang 		예.',
    'me 		(T.H) 책임..? 무슨 책임??',

    '내가 어리둥절한 표정으로 그를 바라보고 있자, 그는 조용히 고개를 끄덕였다. ',

    // 'E. 달칵, 문이 여닫히는 소리 ',
    // 'E. 뚜벅뚜벅, 걸어나오는 소리 ',

    'show character male_employee1 normal_L at left with fadeIn',
    'play voice S004_001(Staff1)',
    'male_employee1 		헉. 대표님!',
    
    '그때였다.',
    '이제 곧 면접이 끝날 무렵이었는 지, 아니면 다음 면접자를 데리러 가는 참이었는 지, ',
    '문을 열고 나온 직원이 그의 얼굴을 확인하고는 황급히 고개를 숙였다. ',
    '나는 숨을 크게 들이켰다. 대표라고? 나는 눈 앞이 아찔해졌다. ',

    'me 		(T.H) 나 지금 대표 앞에서 접수번호 어쩌고라고 한거야? 맙소사. ',
    '쪽팔릴 것이라면 직원이었으면 했으나, 대표라니.',

    '넋이 나간 표정을 하고 있는 나를 뒤로하고, 남자는 직원에게 말했다.',

    'kang 		확인도 안 하고, 카드를 발송하시면 어떡합니까? ',
    '문제없이 면접 치르게 하세요.',
    'play voice S004_002(Staff1)',
    'male_employee1 		네, 네! 이쪽으로 오시죠.',
    'me 		아..네. 감사합니다.',

    '남자가 명령하자, 직원은 남자의 눈치를 보며 나를 안내했다.',

    'me 		아니야. 좋게 생각하자. 면접을 치르게 해준다고 했지, 합격시켜준다고는 안 했잖아? ',
    '회사생활을 한다고 한들, 내가 저 대표를 살면서 몇 번이나 마주치겠어. ',
    '좋게 생각하자. 좋은 게 좋은 것 아니겠어?',

    '나는 자기 최면을 걸며 좋은 게 좋은거라며 스스로를 다독였다. ',
    '직원은 내게 인적사항을 몇 가지 물은 후, 잠시만 앉아서 기다려달라 청했다. ',

    'jump S5'
  ],
  'S4_no' :[
    'me 안그러셔도 돼요. 제가 지각한 것도 있고, 어쩔 수 없는거죠. ',
    'kang 아아, 그렇습니까. ',
    
    '내가 머리를 긁적이며 어쩔 수 없는 것이 아니냐고 하자, ',
    '그는 눈을 가늘게 뜨고 나를 바라보았다. ',

    // 'E. 달칵, 문 여닫히는 소리 ',
    // 'E. 뚜벅뚜벅, 걸어나오는 소리 ',
    
    'show character male_employee1 normal_L at left with fadeIn',
    'play voice S004_001(Staff1)',
    'male_employee1 헉, 대표님!?',

    ' 그때였다. 이제 곧 면접이 끝날 무렵이었는 지, ',
    '아니면 다음 면접자를 데리러 가는 참이었는 지, ',
    '문을 열고 나온 직원이 그의 얼굴을 확인하고는 황급히 고개를 숙였다. ',
    '나는 숨을 크게 들이켰다. 대표라고?',
    '그의 정체를 깨닫고 크게 놀라자, 그는 차가운 목소리로 명령하듯 말했다. ',
    
    'kang 그렇다면 제가 굳이 도와드릴 필요는 없는 것 같군요. 이대로 돌아가보셔도 좋습니다. 접수번호 98번. 한여름양.',

    'me 네?! (FO) ',
    
    '(echo) 도와주는 줄 알았는데, 아니였냐구! ',

    'show scene interview_front',
		'show scene interview_front with fadeOut',
		'show scene my_room with fadeIn duration 3s',
    '어쩔 수 없이 터덜터덜 집으로 돌아온 나는, 배게를 세게 던졌다. ',

    // 'E. 퍽, 베개가 벽을 맞고 구르는 소리 ', 

    '그 후, 또 다시 잔소리쟁이 녀석의 공격이 시작되었다. ',
    '으으! 그 재수없는 싸가지자식이 아니었더라면!! ',

    '(BAD END2)',
    'end'
  ],

// ----------------- 씬5 주석 -----------------
  'S5' : [
    'show scene interview_front',
		'show scene interview_front with fadeOut',
		'show scene office with fadeIn duration 3s',
    'S5 회사생활(1) / 사무실 / 9시 / INT ',

    // 'E. 위잉, 커피머신 돌아가는 소리 ',
    // 'E. 철컥,철컥, 수십장 프린트하는 소리 ',
    // 'E. 달그락, 잔 꺼내는 소리 ',

    '내 업무는 특별할 건 없었다. ',
    '커피타주기, 프린트하기, 서류정리하기 잡심부름.',
    '신입인 내게 중책을 맡기겠냐마는.. 나는 깊은 한숨을 내쉬며 커피기계를 노려보았다. ',

    'me 		(깊은 한숨) ',

    '매일 아침 아홉 시, 팀원의 수만큼 진한 커피를 내려 각자의 자리에 놓아주는 것이 나의 업무. ',
    '회사생활만 시작한다면 내 능력을 인정받아, 잔소리쟁이 연호의 코를 납작하게 눌러주리라 생각했는데.',
    '나는 쟁반에 커피를 담아 사무실로 향했다. ',

    'me 		(밝게 인사하며) 좋은 아침입니다. 모닝커피 가져왔습니다!',

    '언제까지 풀이 죽어있을 순 없다. ',
    '나는 활기차게 인사와 함께 팀원들에게 차례로 커피를 건낸 후, ',
    '연호와 내 몫의 커피를 들고 자리에 앉았다. ',

    'show character lee normal_R fadeIn with duration 2s',
    'me 		연호, 커피. ',
    
    'play voice S005_001(Lee)',
    'lee 		아, 어어. 고마워. 거기다 대충 둬. ',
    {
			'Choice': {
				'yes': {
					'Text': '안쪽에 둔다.',
					'Do': 'jump S5_in'
				},
				'no': {
					'Text': '바깥쪽에 둔다.',
					'Do': 'jump S5_out'
				},
			}
		},
  ],
  'S5_in' :[
    '연호의 책상에 커피를 올려두자, 나를 흘깃 보더니 대충 고맙다며 인사를 건낸다. ',
    '나는 가만히 연호를 바라보고 있다, 조심스럽게 물었다.',

    'me      난 오늘은 뭐하면 돼?',

    '멀뚱히 시간을 부수는 것은 내게 어울리지 않는다. ',
    '뭐라도 하고 싶었던 탓에 물었던 질문이었는데, ',
    '곤란한 지 머리를 긁적이다 분주하게 무언가를 업무메신저를 통해 보내왔다. ',
    '그리곤 조심스럽게, 속삭였다. ',
    'play voice S005_002(Lee)',
    'lee 		메신저 확인해.',
    'play voice S005_003(Lee)',
    '(E.C) 파일 다운로드 해서 출력하고, 동료들 이름이랑 직급 먼저 외우고 있어. ',
    'play voice S005_004(Lee)',
    '(E.C) 그리고 여기 회사야. 직급 외우고 호칭 제대로 불러. ',

    '연호의 직급이 뭐더라? ',
    '어떻게 불러야하나 고민하던 나는, 연호의 이름 뒤에 직급을 붙여 불렀다. ',

    'me 		(고민하는 호) 음... 연호대리님?',

    '그러자, 연호가 한숨쉬며 대꾸했다.',

    'play voice S005_005(Lee)',
    'lee 		이대리님. 성이랑 직급을 같이 부르는 거야. ',
    'me 		(뾰루퉁해하며) 그치만, 이대리님은 반말 하시잖아요.',
    'play voice S005_006(Lee)',
    'lee 		(으쓱이며) 나는 상관이니까. ',

    '연호가 어깨를 으쓱이며 재수없게 말했다. 그놈의 상관. ',
    '나이도 같은데, 무슨 상관타령이람. ',
    '그리고, 이 수많은 사람들을 외우라는 게 무슨 말이야. ',
    '나는 불만스럽게 입술을 내밀며 투덜거렸다. ',

    'me 		(불만스럽게) 이 많은 걸 언제 다 외워요?',

    'play voice S005_007(Lee)',
    'lee 		한 명 한 명 인사시켜드리기는 다들 너무 바쁘시니까 네가 외우는 게 좋아. ',
    'play voice S005_008(Lee)',
    'lee 오늘 대표님 오신다고 다들 바쁘거든.',

    '대표님이라면, 면접날에 나를 도와주었던 그 싸가지였다. ',

    'me (T.H) 대표씩이나 되는 사람이, 사원들이 있는 곳에 내려오기도 하나? ',

    '나는 갸우뚱 거리다, 이내 생각하길 포기하고 고개를 끄덕이며 연호가 보내준 자료를 프린트를 하기 위해 자리에서 일어났다. ',
    '그러자, 연호가 내게 말했다.',

    'play voice S005_009(Lee)',
    'lee 		거기 책상은 앞으로 네 공간이니까, 네가 알아서 꾸며. 필요한 거 놓던지. 방해 안되게 하고.',
    'me 		알겠어. ',

    '심드렁하게 평소대로 대꾸하자, 연호는 눈썹을 올리며 나를 바라보았다.',

    'play voice S005_010(Lee)',
    'lee 		알겠어?',
    'me 		(짜증섞은 한숨) 후..., 네.',

    '아무래도 지적인 듯 싶었다. 나는 다시 대답한 후, 프린트기가 있는 탕비실로 향했다.',
  ],
  'S5_out' :[
    '연호가 건성으로 나를 쳐다도 보지 않고 말했다. ',

    'me       (T.H) 아무리 바빠도 그렇지, 이 한여름님이 커피를 손수 가져다줬는데! ',
    '감히 건성으로!!  골탕 좀 먹어봐라.',

    '나는 연호를 골탕먹이겠다는 생각에 커피를 바깥쪽에 두었다. ',
    '그리곤 모르는 척 시치미를 떼듯한 표정으로 연호를 다정하게 불렀다.',
    
    'me      연호야~ 이연호오~',

    '그러자, 연호가 뜨악한 표정으로 나를 돌아보며 몸을 돌렸다. ',

    'play voice S005_001(Lee0)',
    'show character lee normal_R with shakeX',
    'lee      (뜨악한 표정으로) 너 왜그래? 미쳤..앗 뜨거!!',

    '계획한대로 커피잔이 깨지며 연호의 손을 젃셨다. ',

    // 'E. 와장창, 커피잔 깨지는 소리 ',

    'me     푸하하하! 이연호, 꼴 좋다! ',
    
    '크게 웃으며 자지러지는 나와 달리, 연호의 표정이 심상치않다. ',
    '큰 소리가 나며 연호의 비명소리가 들리자, 사무실에서 일하던 직원들이 하나둘씩 일어나며 우리쪽으로 다가오기 시작했다. ',

    // 'E. 드르륵, 의자 끌리는 소리 ',
    // 'E. 뚜벅뚜벅 여직원2가 뛰어오듯 걸어오는 소리 ',

    'show character female_employee1 normal_L at left with fadeIn',
    'female_employee1    뭐야? ',
    'female_employee2   이대리, 괜찮아?!',
    'play voice S005_001(Msteff1)',
    'show character male_employee1 normal_R at right with fadeIn',
    'male_employee1    뭐야, 무슨 일이야? ',
    'play voice S005_002(Lee0)',
    'lee      아.. 괜찮습니다.',

    '뭔가가 잘못 돌아가는 것 같다. 뒤늦게 나도 연호를 걱정하며 입을 열었다. ',

    'me      여,연호야. 미안해. ',

    'play voice S005_001(Msteff2)',
    'male_employee2    (다그치며) 한여름씨. 호칭 정정 안합니까? 여기가 놀이턴 줄 아세요?! ',
    // 'show character han_manager normal_R at right with fadeIn',
    // 이거 하려고 했는데 막상 넣어보니 비율이 이상함
    'han_maneger 이대리, 세상에 손 빨간 것 좀 봐. 누가 얼음 좀 가져와! ',

    // 'E. 타다닥, 뛰어오는 소리 ',
    // 'E. 바스락, 얼음이 든 봉지 쓸리는 소리 ',

    'female_employee2    한과장님! 얼음 가져왔습니다! ',
    'han_manager    이대리, 이것 좀 대고 있어. ',

    // 'E. 걸그럭, 봉지 안에 든 얼음이 부딪히는 소리' ,
    'han_manager     한여름씨, 갑자기 이게 어떻게 된 일이에요? ',

    'play voice S005_003(Lee0)',
    'lee      과장님, 이건 그냥 제 실수로..',

    'han_manager      (O.L) 내가 이대리한테 물은 건 아니잖아. ',

    '상황이 이상하게 돌아간다. 내가 원했던 건 이게 아닌데.. 그냥 날 거들떠도 보지 않는 게 괘씸했을 뿐인데.. ',

    'me      아, 그게… 그냥 장난 좀 쳤을..',
    'han_manager     (O.L) 회사에서 장난이요?!!',

    '한과장이 버럭 소리쳤다. 나는 질끈 눈을 감았다. ',
    'hide character lee with fadeOut',
    'hide character female_employee1 with fadeOut',
    'hide character male_employee1 with fadeOut',
    
    'show scene office',
		'show scene office with fadeOut',
		'show scene my_room with fadeIn duration 3s',
    '그대로 퇴근 지시를 받은 나는  터덜터덜 집으로 돌아와, 배게를 세게 던졌다. ',
    

    // 'E. 퍽, 베개가 벽을 맞고 구르는 소리 ',

    '연호에게 사과하고 싶었지만, 그녀석에게서도 연락 한통 오지 않았다. ',
    '그대로 나는 직장도 잃고, 친구도 잃은 백수가 되고 말았다. ',

    '(BAD END2)',
    'end'
  ]
})
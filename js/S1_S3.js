monogatari.assets ('music', {
	//S001
	'bgm_moonlight-swing': 'bgm_40326002_moonlight-swing.mp3',
	//S002
	'bgm_energy': 'bgm_40708001_energy.mp3',
});

monogatari.assets ('sounds', {
	//S001
	'wetbarefoottap': 'S001/eff_10706001_wetbarefoottap.mp3',
	'glassdoor': 'S001/eff_30708001_glassdoor.mp3',
	'bedsitting': 'S001/eff_30708002_bedsitting.mp3',
	'quietroom_fade5s': 'S001/eff_90706002_quietroom_fade5s.mp3',
	
	//S002
	'bedsmalldrr': 'S002/eff_40708001_bedsmalldrr.mp3',
	'bedbigdrr': 'S002/eff_40708002_bedbigdrr.mp3',
	'alarmpipipipi': 'S002/eff_50708001_alarmpipipipi.mp3',
	'alertdrrr': 'S002/eff_50708002_alertdrrr.mp3',
	'birdpipipi': 'S002/eff_90708001_birdpipipi.mp3',
});

monogatari.assets ('voices', {
	//한여름
	//강성찬
	//이연호
	'S002_001(Lee)' : 'S002/S002_001(Lee).mp3',
	'S002_002(Lee)' : 'S002/S002_002(Lee).mp3',
	'S002_003(Lee)' : 'S002/S002_003(Lee).mp3',
	'S002_004(Lee)' : 'S002/S002_004(Lee).mp3',
	//엑스트라
	
});

monogatari.script ({
// ----------------- 씬1 주석 -----------------
	'S1': [
		'show scene hotel_sweetroom with fadeIn 2s',
		'S1 꿈 / 호텔 스위트룸 / 자정 / INT (C.N)',
		'gallery unlock sugo',

		'play music bgm_moonlight-swing with loop',
		'기분좋은 꿈을 꾸는 한여름은, 핸드폰 알람소리에 잠에서 깨어난다.' ,
		
		// 'P. 스위트룸 욕실 유리문 배경 일러스트 (C.N)',
		
		
		'play sound quietroom_fade5s',
		'play sound glassdoor',
		'끼익, 조심스럽게 욕실 문이 열리는 소리가 들려온다.',
		
		// 'P. 스위트룸 욕실 유리문 배경 일러스트 (cut)',
		// 'P. 스위트룸 침실 배경 일러스트 [침실>욕실] (C.N)',
		// 'E. (V) 한여름 작게 놀란 소리 ',
		
		'play sound wetbarefoottap',
		'차박차박. 예쁘게 꾸며진 스위트룸. 은은하게 퍼진 조명. ',
		'뻣뻣하게 굳은 내 몸은, 누가봐도 바짝 긴장한 티가 나 보인다. ',

		'me (잔뜩 긴장한 호)',

		'잔뜩 굳어있는 내 모습에 피식, 작게 웃는 소리가 어깨 너머로 들려온다. ',
		
		// 'P. (C.O) 잘생긴 남자 턱밑 일러스트 (C.N)',
		'play sound wetbarefoottap',
		'sexy_guy 여름아. ',
		
		'나는 두 눈을 질끈 감았다. 내가 선택한 가장 매력있는 남자. ',
		'내가 설마 이 남자와 연애하게 되리라고는 눈꼽만큼도 생각해본 적 없었다. ',
		'내가 아무런 대답도 하지 않자, 그는 재촉하듯 내 이름을 불렀다. 	',
		
		'play sound bedsitting',
		'sexy_guy 여름아. ',
		
		'그리고는 바짝 긴장해 굳어버린 내 두 팔을 두 손으로 부드럽게 감싸쥐며 속삭인다.',

		'sexy_guy ....해.',

		' 뿌옇게 무언가가 덮혀진 듯 먹먹한 소리가 들려왔다. ',

		'me (T.H) 뭐라고? 잘 안들려..',
		
		// 'P. 잘생긴 남자 턱밑 일러스트 (cut)',
		// 'M. 브릿지 (C.O – 일그러뜨림)',
		'stop music bgm_moonlight-swing with fade 3',
		'jump S2'
	],

// ----------------- 씬2 주석 -----------------
	'S2': [
		'show scene my_room with fadeIn duration 3s',
		'S2 지각 / 한여름의 침실 / 오전 8시경 / INT (C.N)',
		
		'4월 18일. 면접날 지각을 하게 된 한여름은, 소꿉친구 연호의 전화를 받고 정신을 차린다.',
		
		// 'P. 한여름의 침실 배경 일러스트 (C.N)',
		// 'I. 핸드폰 컷툰 샷 일러스트 (C.N)',

		'play sound birdpipipi',
		'play sound alarmpipipipi',
		' 삐비빅. 요란하게 울리며 아침을 알리는 핸드폰 알람소리가 나를 깨웠다.',
		
		'me (뒤척이는 호)',

		'play sound bedsmalldrr',
		'me 아...',
		' 나는 알람소리에 고통스러워하며 몸을 뒤척이곤 배게에 얼굴을 파묻었다. ',
		'me (Na) 오랜만에 단꿈이었는데.. 으으. ',
		'혹시라도 다시 눈 감는다면, 꿈이 이어지지 않을까? ',
		'me 그래. 그럴지도 몰라!',
		
		' 나는 다시 꿈을 꾸기 위해 자세를 바로 하곤 두 눈을 감았다.',
		

		'play sound alertdrrr',
		// 'I. 핸드폰 컷툰 샷 일러스트 (C.O)',
		// 'I. 핸드폰 전화벨 컷툰 샷 일러스트 (C.N)',
		'show image handphone with headShake',
		'띠리링, 그러자 이번엔 요란한 내 핸드폰 벨소리가 들려왔다.',
		'hide image handphone',
		'show image handphone with wobble',
		
		'play sound bedbigdrr',
		'me 아 진짜!',
		{
			'Choice': {
				'Dialog': '어떻게 할까?',
				'yes': {
					'Text': '전화를 받는다.',
					'Do': 'jump S2_yes'
				},
				'no': {
					'Text': '전화를 거절한다.',
					'Do': 'jump S2_no'
				},
			}
		}
	],
	'S2_no':[
		'play sound alertdrrr',
		'hide image handphone',
		'show image handphone with wobble',
		{
			'Choice': {
				'Dialog': '또 전화가 왔다.',
				'yes': {
					'Text': '전화를 받는다.',
					'Do': 'jump S2_yes'
				},
				'no': {
					'Text': '다시 전화를 거절한다.',
					'Do': 'jump S2_no'
				},
			}
		}
	],
	'S2_yes':[
		'hide image handphone with backOutDown',
		'play music bgm_energy with loop',
		
		' 짜증이 난 나는 미간을 잔뜩　찌푸리며 머리맡의 허공을 더듬어 고철덩어리를 집어들었다.',
		' 발신자를 확인하니, ‘웬수’라는 이름이 두 눈에 들어온다. 	내 이 녀석을 그냥!',
		
		'me (짜증스럽게 한숨)',
		
		// 'I. 핸드폰 전화벨 컷툰 샷 일러스트 (cut)',
		// 'E. 톡, 핸드폰 터치 소리 ',
		
		// *이부분 컷이라서 아예 없애거나 효과음 중간에 끊는게 좋을 듯
		'play sound alertdrrr',
		'me 왜!',

		'play voice S002_001(Lee)',
		'lee (P) 야 한여름! 너 어디야?',

		' 이연호. 이 녀석은 오래된 내 소꿉친구로 오랜 세월동안 나를 도와준 고마운 녀석이다.',
		' 하지만 아침부터 내게 전화를 걸 사람은 아닌데? 	나는 평소와 다른 다급한 연호의 목소리에, 조심스럽게 물었다.',

		'me (이상하다는 듯) ...집인데 왜?',

		'play voice S002_002(Lee)',
		'lee (P) 왜긴 왜야?　너 오늘 면접보는 날이잖아! 아직도 집이면 어떡해?',

		'me 면접?',

		'면접? ‘면접보는 날’이라는 소리가 들리자, 나는 황급히 오늘 날짜를 확인했다. ',
		
		// 'I. 4월 18일 동그라미, 별표 체크되어있는 캘린더 컷툰 일러스트 (C.N)',
		
		' 4월 18일. 방에도 대문짝만하게 걸려있는 종이 달력에 빨간 색연필로 동그라미를 수십 개를 그려놓았는데..!',
		
		// 'I. 4월 18일 동그라미, 별표 체크되어있는 캘린더 컷툰 일러스트 (cut)',
		
		'me (T.H) 망했다. / ...어떡하지?',

		'play voice S002_003(Lee)',
		'lee (P) 택시부터 불러! 30분 전에 도착해야 한다고 일찍 일어나야한다고 내가 그렇~게 얘기했는데, 또 제대로 안 들었지?',

		' 앗. 트리거를 건드려버렸다. 트리거를 건들자, 연호 몬스터가 평소처럼 잔소리공격을 해대기 시작한다.',
		'연호는 항상 이렇게 잔소리를 시작하면 끝이 없다. ',
		'그의 잔소리는 엄마의 잔소리와 매우 흡사한 공격력을 가지고 있으며, ',
		'지속딜까지 있어 장시간 공격에 노출된다면 정신이 버티질 못할 것이 분명하다. ',
		
		'me 아.. 그, 연호야! 내가 지금 바쁘거든? 이따 보자!!',
		
		'play voice S002_004(Lee)',
		'lee (P) 야..! 야!!! 한여..(O.T)',
		
		// 'E. 톡,톡,톡, 핸드폰 터치 소리 ',
		
		'나는 멋쩍게 웃으며 황급히 전화를 끊은 후, 빛의 속도로 단장을 시작했다. ',
		'서두른다면, 그 녀석도 조금은 용서해주지 않을까?',
		
		// 'M. 브릿지 (점멸)',

		'jump S3'
	],

// ----------------- 씬3 주석 -----------------
	'S3': [
		'show scene subway_front with fadeIn duration 3s',
		'S3 면접(1) / 지하철 출구 앞 / 오전9시경 / EXT',
		
		'역에 아슬아슬하게 도착하게 된 여름은, 더 늦지 않기 위해 다급히 뛰고 있다. ',
		
		// 'P. 지하철 출구 앞 배경일러스트 (C.N) ',
		// 'E. 야외 환경음 (C.N)',
		// 'E. (오전) 차 지나다니는 소리 E. (오전) 출근하는 사람들 소리 ',
		// 'E. 타닥, 힐을 신고 보도블럭을 뛰어다니는 소리  ',
		// 'E. 한여름 헉헉 거리는 거친 숨소리 (C.N)',
		
		' 화창한 아침. 여유로운 멋진 언니, 원더우먼이 되고 싶었던 나는', 
		'면접에 늦지 않기 위해 힐을 신고 서울 강남 한복판을 죽도록 뛰어다니고 있다.',
				
		// 'E. 사락, 주머니에서 핸드폰을 꺼내는 소리 ',
		
		' 나는 핸드폰을 꺼내 들어 시간을 확인했다.',
		'어찌저찌 시간에 맞게는 온 것 같다. 학교 다닐 적에도 이렇게 뛰어본 적은 없던 것 같은데.',
		'내 26년 인생에 이렇게 열심히 뛰는 날이 있다니. 	세상 오래 살고 볼 일이다. ',
		'나는 서둘러 가방에서 우편으로 미리 받아둔 임시 카드키를 꺼내든 후, ',
		'머리카락을 흔들어 땀을 식히고, 정신을 환기시켰다. ',
		
		// 'E. 한여름 헉헉 거리는 거친 숨소리 (cut)',
		
		'me (호흡을 가다듬는 호)',
		
		// 'E. 찰싹찰싹, 두 뺨을 때리는 소리 ',
		
		'me (두뺨을 때리며) 아자아자, 할 수 있다. 한여름! 넌 최고야!!',
		
		// 'E. 또각또각, 구두를 신고 들어가는 발소리 (C.N)',
		// 'P. 지하철 출구 앞 배경 일러스트 (cut)',
		// 'E. 실내 환경음 (C.N)',
		// 'P. 회사 1층 로비 배경 일러스트 (C.N)',
		// 'E. 위잉, 자동문 열리는 소리 ',

		'show scene company_loby with fadeIn duration 3s',
		' 나는 두 뺨을 찰싹 때리곤 비장한 표정으로 건물에 들어섰다. ',
		
		// 'E. 또각또각, 구두를 신고 들어가는 발소리 (cut)',
		
		' 건물 안으로 들어서자, 차갑게 식은 주변 공기를 느끼며 나는 ',
		'서둘러 이전에 안내받았던 핸드폰 문자를 확인했다. ',
		
		// 'E. 톡톡, 핸드폰 터치 소리 ',
		// 'I. 핸드폰 안내문자 컷툰 일러스트 (CN)',
		
		' ‘9시까지 15층, 제1 회의실로 방문해주시기 바랍니다.’라는 텍스트를 읽음과 동시에, ',
		
		// 'I. 핸드폰 안내문자 위 9시 05분 시계부분 확대 (CN)',
		
		' 내 두 눈에는 9시 05분이라는 숫자가 더 크게 들어왔다. ',
		'정말로 망했다. 이대로라면 합격은 물 건너간 데다,  	연호의 잔소리공격에 내 두 귀가 남아나지 않을 것이 분명했다.',
		'me (T.H, 한숨섞어) 아, 또 연호가 잔소리 해대겠네.',
		' 아니야. 벌써부터 불합격이라고 생각하지 말고, 긍정적으로 생각해보자. ',
		'비록 아주 ‘조금’ 지각을 하긴 했지만, 면접자가 이 건물의 구조를 알 리가 없지 않은가? ',
		'처음 방문한 사람이라는 것을 고려해, 아주 살짝 지각한 것으로 불합격을 줄 리는 없겠지? ',
		'만일 이 회사가 그런 곳이라면 내 쪽에서 사양이다. ',
		
		// 'E. 사락, 주변을 돌아보는 소리 (옷자락 소리)',
		// 'E. 또각또각, 대리석 구두로 밟아 걸어가는 소리 (C.N)',
		
		' 나는 주변을 돌아보며 엘리베이터를 향해 발걸음을 옮겼다.',
		
		// 'P. 엘리베이터 앞 배경 일러스트 (C.N)',
		// 'E. 톡톡, 핸드폰 터치 소리 ',
		// 'I. 핸드폰 배경화면 시계 일러스트 (09:08)',
		
		'핸드폰 시계를 확인하자, 불안으로 가득 찬 내 마음이, 시끄러워졌다. ',
		
		// 'E. 또각또각, 대리석 구두로 밟아 걸어가는 소리 (cut)',
		// 'E. (out) 지이잉, 엘리베이터 올라가는 소리 ',
		
		' 엘리베이터를 기다리던 나는, 결국 가만히 있지 못하고 문에 비친 내 모습을 바라보며',
		' 옷매무새를 정돈하고, 목소리를 가다듬었다.',
		'me (목소리를 가다듬으며) 크흠. 아아. (쉬고) 접수번호 98번. 한여름입니다.',
		'(T.H) 아, 목소리 가라앉았네. ',
		' 목소리가 조금 가라앉은 것 같다. 일어난 지 얼마 되지 않았다는 게 티가 나진 않겠지? ',
		'나는 다시 한번 목소리를 가다듬어보았다.',
		'me (목소리를 가다듬으며) 크흠! 접수번호 98번. 한여름입니다. ',
		
		// 'E. (off) 뚜벅뚜벅, 누군가 걸어오는 발소리 ',
		
		'me (숨을 길게 내쉬며) 음... 조금 더 부드럽게 말해볼까?',
		'kang 그래요. 접수번호 98번. 한여름양. 우리 회사는 목소리로 사람을 뽑진 않는데 말이죠.',
		'me (화들짝 놀란 호) ',
		' 어느샌가 내 옆에 서 있었는지, 낯선 남자 목소리가 들려왔다.	',
		'화들짝 놀란 나는, 두 눈을 동그랗게 뜨고 고개를 돌려 시선을 옮겼다.',
		
		// 'P. 엘리베이터 앞, kang 흉상 전체 화면 일러스트 ',
		
		' 그러자, 구김없는 깔끔한 수트. / 정갈한 머리스타일. / 반쯤 내놓은 훤한 이마. ',
		'/ 학창시절 여심을 많이 울렸을 것 같은 수려한 생김새와 훤칠한 키. ',
		'이상한 것이라도 바라보는 양, 대수롭지 않은 표정으로 나를 바라보고 있는 남자가 눈에 들어왔다.',
		'이런 완벽한 남자가 이 회사에 있다고? 나도 모르게 마른 침이 꿀꺽 넘어갔다. ',
		'내가 아무말도 않고 바라보고 있자, 남자는 작게 웃으며 말했다.',
		
		// 'I. kang 캐릭터 일러스트  ',
		
		'kang (작게 웃으며) 목소린 우렁차니 됐고, 서류부터 체크해보세요.',
		'me (T.H) ...뭐?',
		
		// 'I. 엘리베이터 도착한 만화 컷툰 일러스트 (1층)',
		// 'E. 띵, 엘리베이터 도착한 소리 ',
		
		' 남자의 말이 끝나자, 엘리베이터가 도착했음을 알리며 문이 열렸다. ',
		
		// 'E. 지잉, 엘리베이터 문 열리는 소리 ',
		// 'E. 뚜벅뚜벅, kang 엘리베이터 타는 소리 ',
		
		' 아주 잠깐 많은 생각이 스쳐지나갔지만, 이내 금방 알아차릴 수 있었다. ',
		'길게 생각할 필요도 없었다.',
		'me (T.H) 지금 내 행동보고 하는 소리야?',
		
		// 'I. kang 캐릭터 일러스트  (C.N)',
		
		'kang 안 탑니까? ',
		{
			'Choice': {
				'Dialog': '어떻게 할까?',
				'yes': {
					'Text': '엘리베이터를 타지 않는다.',
					'Do': 'jump S3_no'
				},
				'no': {
					'Text': '엘리베이터를 탄다.',
					'Do': 'jump S3_yes'
				},
			}
		}
	],
	'S3_yes': [
		'me 타,타요!',
		
		// 'P. 엘리베이터 앞 배경 일러스트 (cut)',
		// 'P. 엘리베이터 안 배경 일러스트 (C.N)',
		// 'E. 또각또각, 엘리베이터에 오르는 발소리' ,
		
		
		' 빨갛게 얼굴이 달아오른 나는 반쯤 나간 정신을 붙잡고 엘리베이터에 올랐다.',
		'그러자, 남자가 나를 보며 놀리듯 말했다. ',
		'kang 15층 가시죠? ',
		
		// 'E. 삑, 엘리베이터 누르는 소리 ',
		
		' 그리고는 내 대답을 듣기도 전에 15층을 눌러버린다.',
		'kang 접수번호 98번 한여름양?',
		'me (T.H) 쪽팔려, 쪽팔려, 쪽팔려!',
		' 가까이에 접시라도 있다면 코라도 콱 박고, 저세상까지 들이박아 죽어버리고 싶은 심정이다. ',
		'me 가,감사합니다..',
		' 나는 작게 고개를 끄덕이며 목례로 감사 인사를 전했다. 그러자, 남자도 따라 고개를 까딱인다. ',
		'그리고 따라오는 짧은 정적. 남자로 인해 화해졌던 공기가 다시 차갑게 내려앉았다.',
		'어깨가 무거워지는 것 같아. 나는 하나씩 올라가는 숫자를 멍하니 바라보며 빨리 15층에 도착하기를	 바랐다.',
		
		// 'I. kang 캐릭터 일러스트  (cut)',
		'jump S3_after'
	],
	'S3_no': [
		'뭐지 이사람? 기분이 좋지 않다. 처음 보는 사람에게 이렇게 막말을 하다니. ',
		'me 아... 먼저 가세요. ',  
		'kang (빤히 바라보다가) 늦었을텐데. 뭐, 알겠습니다. ',

		// 'E.  지잉, 엘리베이터 닫히는 소리 ',

		'어차피 늦은 면접. 몇분 더 늦는다고 바뀌는 건 없을테지. 나는 방금 전 무례하던 남자를 떠올렸다. ',
		
		'me (kang을 떠올리며) 뭐? 서류나 보라고? 웃기지도 않아, 진짜! 이씨. ',
		
		// 'M. 브릿지 (hold-F.O)',
		'jump S3_after'
	],
	'S3_after' :[
		// 'I. 엘리베이터 도착한 만화 컷툰 일러스트 (15층)',
		// 'E. 띵, 엘리베이터 도착한 소리 ',
		
		' 내 바람이 통한 것인지 어느새 도착한 엘리베이터의 문이 열렸고, ',
		'나는 퍼뜩 정신을 차리며 엘리베이터를 벗어났다. ',
		
		// 'E. 지잉, 엘리베이터 문 열리는 소리 ',
		// 'E. 타닥, 서둘러 엘리베이터에서 내리는 소리 ',
		// 'E. 또각또각, 면접장으로 향하는 발소리 ',
		// 'P. 엘리베이터 안 배경 일러스트 (cut)',
		// 'P. 보안센서가 달린 문이 비치는 배경 일러스트 (C.N)',
		
		' 15층에 도착한 나는 손에 쥐고 있던 임시 카드키를 대고 문이 열리길 기다렸다. ',
		
		// 'E. 띡, 카드키 입력하는 소리 ',
		// 'E. 삐삐삐, 경고음 소리 ',
		
		' 그러자 오류를 알리는 경고음이 세 번 울려퍼졌다. ',
		'나는 고개를 갸우뚱거리며 카드키를 다시 한번 문에 대었다. ',
		
		// 'E. 띡, 카드키 입력하는 소리 ',
		// 'E. 삐삐삐, 경고음 소리 ',
		
		'me (초조해하며) 아씨.. 왜 안되는거야. 어떡하지? 30분은 벌써 지난 것 같은데..',
		' 이대로라면 불합격 확정이다. 불안함이 확신이 되어가자, 나는 황급히 핸드폰을 열어보았다. ',
		
		// 'E. 사락, 옷자락 소리 ',
		// 'I. 핸드폰 배경화면 시계 일러스트 (09:16)',
		
		' 9시 16분. 일분일초가 지나는 순간순간이 피가 마르는 느낌이 들자, ',
		'나는 발을 동동 구르며 카드키를 계속해서 입구 문에 들이밀었다.',
		
		// 'E. 뚜벅뚜벅, 남자가 다가오는 발소리 (C.N)',
		// 'E. 띡, 카드키 입력하는 소리 ',
		// 'E. 삐삐삐, 경고음 소리 ',
		// 'I. kang 캐릭터 일러스트 (C.N)',
		
		'me 아씨...',
		
		// 'E. 뚜벅뚜벅, 남자가 다가오는 발소리 (cut)',
		' 똑같은 경고음이 올리자, 구세주와 같이 등 너머로 방금 전에 만난, 남자의 목소리가 들려왔다. ',
		'kang 카드키, 언제 받으신거죠?',
		'me 아..저.., 몇 주 전에 우편으로 왔었는데..',
		'kang (살짝 짜증난 투) 몇 주 전이요?',
		' 남자의 눈이 조금 차갑게 식었다. 왠지모를 불신의 표정이 눈에 비쳤다. ',
		'그 차가운 눈빛에 울 것 같은 표정을 짓자, 남자는 나를 빤히 내려다본다.',
		'그리고는 깊게 한숨을 내쉬었다.',
		'kang (한숨) 저희측 실수인 것 같네요. 이쪽으로 잠시 나오세요. 열어드리겠습니다.',
		'me 네?',
		' 아직까지 창피함과 다급함이 가시지 않아, 얼굴이 붉어져있던 나는, 남자의 말에 멍청하게 되묻고 말았다. ',
		'그러자, 남자는 비키지않고 무얼 하느냐는 눈빛으로 나를 내려다보고 있다. ',
		'me 아... 아네..',
		
		// 'E. 사락, 옷자락 소리',
		// 'E. 또각, 옆으로 살짝 물러나는 발소리 ',
		// 'E. 뚜벅, 카드키 앞에 다가가는 발소리 ',
		// 'E. 띡, 지문 인식 시키는 소리 ',
		
		' 그제서야 나는 “아..네.”라며 뒤로 물러났고, 내가 뒤로 물러서자, 남자는 자신의 지문을 인식시켰다. ',
		'남자의 지문이 인식된 후, 나를 거부했었던 카드키는 얄밉게도 방긋 웃으며',
		'AI (밝은 톤) 인증되었습니다. 문이 열립니다.',
		' 라며 밝은 톤의 목소리와 함께 문을 활짝 열어주었다.',
		
		// 'E. 지잉, 자동문 열리는 소리',
		
		' 내가 문을 한참동안 노려보고 있자, 남자는 먼저 문 안으로 들어서며 말했다.',

		// 'E. 뚜벅뚜벅, 걸어들어가는 발소리 ',

		'kang 따라오세요.',
		'me 아! 네,넷!',
		
		// 'E. 또각또각, 걸어들어가는 발소리',
		
		' 남자는 따르라는 말과는 달리, 나를 기다리지 않고 빠른 걸음으로 먼저 내부로 들어가버렸고,',
		'나는 그런 그를 서둘러 후다닥 따라갔다. ',
	]

});
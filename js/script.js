/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
	'sugo' : 'sugo.png',
});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	//Public Places
	'company_loby':'company_loby.jpg',
	'elevator_front':'elevator_front.jpg',
	'subway_front':'subway_front.jpg',

	//Room
	'hotel_sweetroom':'hotel_sweetroom.jpg',
	'my_room':'my_room.png',
});


// Define the Characters
monogatari.characters ({
	// 메인 캐릭터들
	'me': {
		name: '{{player.name}}',
		color: '#FF82FF',
	},
	'kang': {
		name: '강성찬',
		color: '#14D3FF',
		directory: 'kang',
		sprites: {
			normal_R: 'kang_001_R.png',
			normal2_R: 'kang_002_R.png',
			smile1_R: 'kang_101_R.png',
			shy1_R: 'kang_201_R.png',
			angry1_R: 'kang_301_R.png',
		}
	},
	'lee': {
		name: '이연호',
		color: '#FFC314',
		directory: 'lee',
		sprites: {
			normal_R: 'lee_001_R.png',
			normal2_R: 'lee_002_R.png',
			smile1_R: 'lee_101_R.png',
			shy1_R: 'lee_201_R.png',
			angry1_R: 'lee_301_R.png',
		}
	},
	'han': {
		name: '한도율',
		color: '#5AD18F',
		directory: 'han',
	},
	'sa': {
		name: '사예찬',
		color: '#CD3861',
		directory: 'sa',
	},

	// 서브 캐릭터들 사용 방법
	// 'waiter': {
	// 	name: '웨이터',
	// 	color: '#482954',
	// 	directory: 'sub_characters',
	// 	sprites: {
	// 		normal_R: 'etc01_R.png',
	// 		normal_L: 'etc01_L.png'
	// 	}
	// },
	// 'girl': {
	// 	name: '소녀',
	// 	color: '#482954',
	// 	directory: 'sub_characters',
	// 	sprites: {
	// 		normal_R: 'etc02_R.png',
	// 		normal_L: 'etc02_L.png'
	// 	}
	// },
	// 'boy': {
	// 	name: '소년',
	// 	color: '#482954',
	// 	directory: 'sub_characters',
	// 	sprites: {
	// 		normal_R: 'etc03.png',
	// 		normal_L: 'etc03.png'
	// 	}
	// },
	// 'woman': {
	// 	name: '여자',
	// 	color: '#482954',
	// 	directory: 'sub_characters',
	// 	sprites: {
	// 		normal_R: 'etc04_R.png',
	// 		normal_L: 'etc04_L.png'
	// 	}
	// },
	// 'man': {
	// 	name: '남자',
	// 	color: '#482954',
	// 	directory: 'sub_characters',
	// 	sprites: {
	// 		normal_R: 'etc05_R.png',
	// 		normal_L: 'etc05_L.png'
	// 	}
	// },
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		{
			'Choice': {
				'Dialog': 'me 내 이름은 {{player.name}}, 테스트씬을 골라쥬',
				'S1': {
					'Text': 'S1',
					'Do': 'jump S1'
				},
				'S2': {
					'Text': 'S2',
					'Do': 'jump S2'
				},
				'S3': {
					'Text': 'S3',
					'Do': 'jump S3'
				},
				'S4': {
					'Text': 'S4',
					'Do': 'jump S4'
				},
				'S5': {
					'Text': 'S5',
					'Do': 'jump S5'
				}
			}
		}
	],
});
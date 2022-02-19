import IRenderTree from './IRenderTree';

export const data: IRenderTree = {
	id: 'root',
	name: 'Услуги',
	children: [
		{
			id: '1',
			name: 'Настройка базы данных',
		},
		{
			id: '3',
			name: 'Профиль ПФХ',
			children: [
				{
					id: '4',
					name: 'Настройка фурнитуры',
				},
				{
					id: '5',
					name: 'Настройка профиля',
				},
			],
		},
	],
}
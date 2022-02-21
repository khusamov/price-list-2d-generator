import INode from './INode';

export const data: INode = {
	id: 'root',
	label: 'Услуги',
	children: [
		{
			id: '1',
			label: 'Настройка базы данных',
		},
		{
			id: '3',
			label: 'Профиль ПФХ',
			children: [
				{
					id: '4',
					label: 'Настройка фурнитуры',
				},
				{
					id: '5',
					label: 'Настройка профиля',
				},
			],
		},
	],
}
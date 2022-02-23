import {Node} from '../../components/TreeEditor';

const node = (label: string, children: readonly Node[] = []) => new Node(label, children)

export default function generateDataSample() {
	return (
		node('Услуги', [
			node('Профиль ПВХ', [
				node('Настройка системы профиля'),
				node('Внесение цен на систему профиля')
			]),
			node('Фурнитура оконная', [
				node('Настройка системы фурнитуры'),
				node('Настройка деталей фурнитуры'),
				node('Внесение цен на оконную систему фурнитуры')
			])
		])
	)
}
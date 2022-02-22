import Node from './Node';

type TChildren = Array<Node>
type TSetParentNode = (node: Node) => {}

/**
 * Создание прокси для свойства Node.children с возможностью перехватывать
 * изменения дочерних узлов для установки у них родительского узла.
 * @param children Ссылка на дочерние узлы.
 * @param setParentNode Функция для установки родительского узла извне.
 */
export default function createChildrenProxy(children: TChildren, setParentNode: TSetParentNode): TChildren {
	return new Proxy(children, {
		get(target: TChildren, propertyName: string | symbol): any {
			switch (propertyName) {
				case 'push':
					return (
						function push(...nodes: TChildren) {
							nodes.forEach(setParentNode)
							target.push(...nodes)
						}
					)
				case 'pop':
				case 'concat':
				case 'join':
				case 'unshift':
					throw new Error(`Метод ${propertyName} не реализован`)
				default:
					return target[propertyName as keyof TChildren]
			}
		}
	})
}
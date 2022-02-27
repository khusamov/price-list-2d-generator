import Node from './Node';

type TChildren = Array<Node>

/**
 * Создание прокси для свойства Node.children с возможностью перехватывать
 * изменения дочерних узлов для установки у них родительского узла.
 * @param children Ссылка на дочерние узлы.
 * @param parent Ссылка на родительский узел.
 */
export default function createChildrenProxy(children: TChildren, parent: Node): TChildren {
	return new Proxy(children, {
		get(target: TChildren, propertyName: string | symbol): any {
			switch (propertyName) {
				case 'push':
					return (
						function push(...nodes: TChildren) {
							nodes.forEach(node => node.parent = parent)
							target.push(...nodes)
						}
					)
				case 'splice':
					return (
						function splice(start: number, deleteCount: number, ...items: TChildren): TChildren {
							const removed = target.splice(start, deleteCount, ...items)
							removed.forEach(node => node.parent === null) // unsetParentNode
							return removed
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
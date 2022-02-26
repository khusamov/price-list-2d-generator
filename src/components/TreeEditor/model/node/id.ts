import Node, {TKey} from './Node';

const ROOT_ID: TKey = 'root'

/**
 * Алгоритм вычисления уникального идентификатора узла.
 * Он включается только в случае, если не задан внешний идентификатор узла.
 * @param node Ссылка на узел.
 * @param externalId Внешний идентификатор узла.
 */
export default function id(node: Node, externalId: TKey | null): TKey {
	return (
		externalId ? externalId : (
			node.parent
				? prefixId(node) + localId(node)
				: ROOT_ID
		)
	)
}

function prefixId(node: Node) {
	return (
		!node.parent ? '' : (
			node.parent.id === ROOT_ID
				? ''
				: node.parent.id + '-'
		)
	)
}

function localId(node: Node) {
	return (
		!node.parent ? '' : (
			node.parent.children.indexOf(node) + 1
		)
	)
}
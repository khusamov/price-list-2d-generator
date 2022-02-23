import Node, {TKey} from './Node';

const ROOT_ID: TKey = 'root'

/**
 * Алгоритм вычисления уникального идентификатора узла.
 */
export default function id(node: Node, id: TKey | null): TKey {
	return (
		id ? id : (
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
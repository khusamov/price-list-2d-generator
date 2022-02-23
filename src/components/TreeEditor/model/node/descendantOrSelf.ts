import Node from './Node'

export default function descendantOrSelf(node: Node): Node[] {
	return node.children.reduce<Node[]>(
		(result, node) => [...result, ...descendantOrSelf(node)],
		[node]
	)
}
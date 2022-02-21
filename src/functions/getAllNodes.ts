import {INode} from '../components/TreeEditor';

export default function getAllNodes(node: INode): INode[] {
	return node.children.reduce<INode[]>(
		(result, node) => [...result, ...getAllNodes(node)],
		[node]
	)
}
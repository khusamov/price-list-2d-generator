export default interface INode {
	id: string
	label: string
	parent: INode | null
	children: INode[]
	descendantOrSelf: INode[]
	isRoot: boolean
}
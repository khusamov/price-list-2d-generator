export default interface INode {
	id: string
	label?: string
	parent?: INode
	children: INode[]
	descendantOrSelf: INode[]
	isRoot: boolean
}
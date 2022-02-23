export default interface INode {
	id: string
	label: string
	children: INode[]
	descendantOrSelf: INode[]
	isRoot: boolean
}
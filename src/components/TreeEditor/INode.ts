export default interface INode {
	id: string;
	name: string;
	children?: readonly INode[];
}
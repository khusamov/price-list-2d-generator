export default interface IRenderTree {
	id: string;
	name: string;
	children?: readonly IRenderTree[];
}
import {makeObservable, observable} from 'mobx';
import Node from './node/Node';
import INode from './node/INode';

export default class TreeEditorModel {
	data: INode = new Node('empty-tree-data')
	selectedNode: INode | null = null
	expandedNodes: INode[] = []

	constructor() {
		makeObservable(this, {
			data: observable,
			selectedNode: observable,
			expandedNodes: observable
		})
	}
}
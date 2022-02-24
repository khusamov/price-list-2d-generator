import {makeObservable, observable} from 'mobx';
import INode from './node/INode';

export default class TreeEditorModel {
	data: INode | null = null
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
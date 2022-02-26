import {action, computed, makeObservable, observable} from 'mobx';
import INode from './node/INode';

export default class TreeEditorModel {
	private _data: INode | null = null
	private _selectedNode: INode | null = null
	private _expandedNodes: INode[] = []

	constructor() {
		this._makeObservable()
	}

	get data(): INode | null {
		return this._data
	}

	set data(data: INode | null) {
		this._data = data
		const all = data?.descendantOrSelf.map(node => node)
		if (all) {
			this.expandedNodes = all
		}
	}

	get selectedNode(): INode | null {
		return this._selectedNode
	}

	set selectedNode(selectedNode: INode | null) {
		this._selectedNode = selectedNode
	}

	get expandedNodes(): INode[] {
		return this._expandedNodes
	}

	set expandedNodes(expandedNodes: INode[]) {
		this._expandedNodes = expandedNodes
	}

	private _makeObservable() {
		type TPrivates = '_data' | '_selectedNode' | '_expandedNodes'
		makeObservable<this, TPrivates>(this, {
			_data: observable,
			_selectedNode: observable,
			_expandedNodes: observable,
			data: computed,
			selectedNode: computed,
			expandedNodes: computed
		})
	}
}
import {makeObservable, observable, computed} from 'mobx'
import {INode} from '../../index';
import id from './id';
import descendantOrSelf from './descendantOrSelf';
import constructorParams from './constructorParams';
import createChildrenProxy from './createChildrenProxy';

export type TKey = string
export type TLabel = string

export default class Node implements INode {
	private _id: TKey | null = null
	private _parent: Node | null = null
	private _label: string
	private readonly _children: Node[] = []

	/**
	 * Конструктор узла древовидных данных.
	 * Возможны вызовы:
	 *  - new Node(label)
	 *  - new Node(id, label)
	 *  - new Node(label, children)
	 *  - new Node(id, label, children)
	 */
	constructor(label: TLabel)
	constructor(id: TKey, label: TLabel)
	constructor(label: TLabel, children: readonly Node[])
	constructor(id: TKey, label: TLabel, children: readonly Node[])
	constructor(idOrLabel: TKey | TLabel, labelOrChildren?: TLabel | readonly Node[], childrenOrUndefined?: readonly Node[]) {
		const {id, label, children} = constructorParams(idOrLabel, labelOrChildren, childrenOrUndefined)
		if (id) this._id = id
		this._label = label
		this.children.push(...children)
		this._makeObservable()
	}

	public get id(): TKey {
		return id(this, this._id)
	}

	public set id(id: TKey) {
		this._id = id
	}

	public get label(): string {
		return this._label
	}

	public set label(label: string) {
		this._label = label
	}

	public get parent(): Node | null {
		return this._parent
	}

	public set parent(parent: Node | null) {
		this._parent = parent
	}

	public get children(): Node[] {
		return createChildrenProxy(this._children, this)
	}

	public get isRoot(): boolean {
		return this.parent === null
	}

	public get descendantOrSelf(): Node[] {
		return descendantOrSelf(this)
	}

	private _makeObservable() {
		type TPrivates = '_id' | '_label' | '_parent' | '_children'
		makeObservable<this, TPrivates>(this, {
			_id: observable,
			_parent: observable,
			_label: observable,
			_children: observable,
			id: computed,
			label: computed,
			parent: computed,
			children: computed,
			isRoot: computed,
			descendantOrSelf: computed
		})
	}
}
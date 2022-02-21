import {makeObservable, observable, computed} from 'mobx'
import {INode} from '../../components/TreeEditor';

type TKey = string
type TParent = Node | null

export default class Node implements INode {
	private _parent: TParent = null
	private _label: string
	private readonly _children: Node[] = []

	constructor(label: string, children: readonly Node[] = []) {
		this._label = label
		this.children.push(...children)
		this._makeObservable()
	}

	public get id(): TKey {
		return (
			this.parent
				? this.prefixId + this.localId
				: 'root'
		)
	}

	public get label(): string {
		return this._label
	}

	public set label(label: string) {
		this._label = label
	}

	public get parent(): TParent {
		return this._parent
	}

	protected set parent(parent: TParent) {
		this._parent = parent
	}

	/**
	 * Внимание, пока реализован только метод push.
	 */
	public get children(): Node[] {
		const self = this
		return new Proxy(this._children, {
			get(target: Node[], propertyName: string | symbol): any {
				if (propertyName === 'push') {
					return function push(...nodes: Node[]) {
						nodes.forEach(node => node.parent = self)
						target.push(...nodes)
					}
				}
				return target[propertyName as keyof Node[]]
			}
		})
	}

	private get prefixId() {
		return (
			this.parent
				? this.parent.id === 'root' ? '' : this.parent.id + '-'
				: ''
		)
	}

	private get localId() {
		return this.parent ? this.parent.children.indexOf(this) + 1 : ''
	}

	private _makeObservable() {
		type TPrivates = '_label' | '_parent' | '_children' | 'prefixId' | 'localId'
		makeObservable<this, TPrivates>(this, {
			_parent: observable,
			_label: observable,
			_children: observable,
			id: computed,
			label: computed,
			parent: computed,
			children: computed,
			prefixId: computed,
			localId: computed
		})
	}
}
import {INode} from '../../components/TreeEditor';

type TKey = string

export default class DataItem implements INode {
	readonly #label: string
	#parent?: DataItem
	readonly #children: DataItem[] = []

	constructor(label: string, children: readonly DataItem[] = []) {
		this.#label = label
		this.children.push(...children)
	}

	public get id(): TKey {
		return (
			this.parent
				? this.prefixId + this.localId
				: 'root'
		)
	}

	public get label(): string {
		return this.#label
	}

	public get parent(): DataItem | undefined {
		return this.#parent
	}

	protected set parent(parent: DataItem | undefined) {
		this.#parent = parent
	}

	/**
	 * Внимание, пока реализован только метод push.
	 */
	public get children(): DataItem[] {
		const self = this
		return new Proxy(this.#children, {
			get(target: DataItem[], propertyName: string | symbol): any {
				if (propertyName === 'push') {
					return function push(...nodes: DataItem[]) {
						nodes.forEach(node => node.parent = self)
						target.push(...nodes)
					}
				}
				return target[propertyName as keyof DataItem[]]
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
}
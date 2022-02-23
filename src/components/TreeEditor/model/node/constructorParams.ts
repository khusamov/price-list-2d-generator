import Node, {TKey, TLabel} from './Node';

/**
 * Обработка аргументов конструктора класса Node.
 */
export default (
	idOrLabel: TKey | TLabel,
	labelOrChildren?: TLabel | readonly Node[],
	childrenOrUndefined?: readonly Node[]
) => ({
	children: childrenOrUndefined || [],
	...(
		typeof labelOrChildren === 'string'
			? {
				id: idOrLabel,
				label: labelOrChildren
			}
			: {
				id: undefined,
				label: idOrLabel,
				children: labelOrChildren || []
			}
	)
})
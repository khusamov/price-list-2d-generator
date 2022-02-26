import {observer} from 'mobx-react-lite';
import INode from '../model/node/INode';

interface ILabelProps {
	node: INode
}

export default observer(
	function Label({node: {label}}: ILabelProps) {
		return (
			<div style={{padding: '5px 15px 5px 0'}}>
				{label || '<Без названия>'}
			</div>
		)
	}
)
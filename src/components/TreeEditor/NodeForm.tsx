import {observer} from 'mobx-react-lite';
import {Box, TextField} from '@mui/material';
import {InputProps as StandardInputProps} from '@mui/material/Input/Input';
import INode from './model/node/INode';

interface INodeFormProps {
	node: INode
	onLabelTextFieldChange?: StandardInputProps['onChange']
}

export default observer(
	function NodeForm({node, onLabelTextFieldChange}: INodeFormProps) {
		// Внимание! Ссылка на node должна быть внутри компонента NodeForm,
		// иначе он не будет observer с точки зрения mobx.
		const value: string = node.label || ''

		return (
			<Box sx={{height: '100%', width: 400, paddingLeft: 2, paddingRight: 2, borderLeft: '1px dashed silver'}}>
				<TextField
					label='Название узла'
					value={value}
					onChange={onLabelTextFieldChange}
					sx={{width: '100%'}}
				/>
			</Box>
		)
	}
)
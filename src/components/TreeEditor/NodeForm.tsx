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
		return (
			<Box sx={{width: 400}}>
				<TextField
					label='Название узла'
					value={node.label}
					onChange={onLabelTextFieldChange}
					sx={{width: '100%'}}
				/>
			</Box>
		)
	}
)
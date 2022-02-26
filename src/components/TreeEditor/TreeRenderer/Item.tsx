import {observer} from 'mobx-react-lite';
import {TreeItemProps} from '@mui/lab/TreeItem/TreeItem';
import TreeItem from '@mui/lab/TreeItem';
import INode from '../model/node/INode';
import Label from './Label';

interface IItemProps {
	node: INode
}

export default observer(
	function Item({node}: IItemProps) {
		const treeItemProps: TreeItemProps = {
			nodeId: node.id,
			label: <Label node={node}/>
		}
		return (
			<TreeItem {...treeItemProps}>
				{node.children.map(node => <Item key={node.id} node={node}/>)}
			</TreeItem>
		)
	}
)
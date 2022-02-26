import {Fragment} from 'react'
import {observer} from 'mobx-react-lite';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import TreeView, {TreeViewProps} from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import INode from '../model/node/INode';
import Item from './Item';

export interface ITreeRendererProps {
	/**
	 * Древовидные данные для отрисовки.
	 * Ссылка на корневой узел.
	 */
	data: INode

	rootNodeHidden?: boolean,
	treeViewProps?: TreeViewProps
	sx?: SxProps<Theme>
}

const SecondLevelRenderer = observer(
	({data}: {data: INode}) => (
		<Fragment>
			{data.children.map(node => <Item key={node.id} node={node}/>)}
		</Fragment>
	)
)

export default (
	function TreeRenderer({data, treeViewProps, sx, rootNodeHidden = true}: ITreeRendererProps) {
		treeViewProps = {
			...treeViewProps,
			defaultCollapseIcon: <ExpandMoreIcon/>,
			defaultExpandIcon: <ChevronRightIcon/>,
			sx
		}
		return (
			<TreeView {...treeViewProps}>
				{
					rootNodeHidden
						? <SecondLevelRenderer data={data}/>
						: <Item node={data}/>
				}
			</TreeView>
		)
	}
)
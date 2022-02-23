import INode from '../model/node/INode';
import {TreeViewProps} from '@mui/lab/TreeView';
import Root from './Root';
import Item from './Item';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

export interface ITreeRendererProps {
	/**
	 * Древовидные данные для отрисовки.
	 * Ссылка на корневой узел.
	 */
	data: INode

	treeViewProps?: TreeViewProps
	sx?: SxProps<Theme>
}

export default function TreeRenderer({data, treeViewProps, sx}: ITreeRendererProps) {
	return (
		treeViewProps
			? <Root node={data} treeViewProps={treeViewProps} sx={sx}/>
			: <Item node={data}/>
	)
}
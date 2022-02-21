import {SyntheticEvent, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Box, CssBaseline, GlobalStyles} from '@mui/material';
import generateDataSample from '../../samples/tree-data/generateDataSample';
import getAllNodes from '../../functions/getAllNodes';
import ApplicationBar from '../ApplicationBar';
import TreeEditor from '../TreeEditor';
import {styles} from './globalStyles';

const siteTitle = 'Генератор прайс-листов'

export default function Application() {
	const data = generateDataSample()
	const [expandedNodeIds, setExpandedNodeIds] = useState(getAllNodes(data).map(node => node.id))
	const onNodeToggle = (event: SyntheticEvent, nodeIds: string[]) => {
		setExpandedNodeIds(nodeIds)
	}
	return (
		<Box sx={{flexGrow: 1}}>
			<CssBaseline/>
			<GlobalStyles styles={styles}/>
			<Helmet defaultTitle={siteTitle}/>
			<ApplicationBar/>
			<Box sx={{padding: 2}}>
				<TreeEditor
					data={data}
					expanded={expandedNodeIds}
					onNodeToggle={onNodeToggle}
				/>
			</Box>
		</Box>
	)
}
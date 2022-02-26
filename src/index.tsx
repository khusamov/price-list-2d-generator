import {render} from 'react-dom'
import {configure} from 'mobx'
import Application from './components/Application'

configure({
	enforceActions: 'always',
	computedRequiresReaction: true,
	reactionRequiresObservable: true,
	observableRequiresReaction: false,
	disableErrorBoundaries: false
})

render(
	<Application/>,
	document.getElementById('application')
);
import {AppBar, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

export default function ApplicationBar() {
	return (
		<AppBar position='static'>
			<Toolbar>
				<MenuIcon sx={{mr: 2}}/>
				<Typography variant='h6' component='div' sx={{flexGrow: 1}}>
					Генератор прайс-листов
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
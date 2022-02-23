interface ILabelProps {
	label: string
}

export default function Label({label}: ILabelProps) {
	return (
		<div style={{padding: '5px 15px 5px 0'}}>
			{label}
		</div>
	)
}
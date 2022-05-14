import React from "react";
import {View, Text} from 'react-native'

const styles = {
	container: {
		backgroundColor: '#fafbfc',
		alignItems: 'center',
		paddingTop: 4,
		borderBottomColor: '#dedede',
		borderBottomWidth: 2
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 8
	}
}

const Header = (props)=>{
	return <React.Fragment>
		<View style={styles.container}>
			<Text style={styles.text}>{props.title}</Text>
		</View>
	</React.Fragment>
}

export default Header;
import React from 'react'
import {Image, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = {
	container: {
		margin: 8
	},
	thumbnail: {
		width: 48,
		height: 48,
		borderRadius: 24
	},
	userContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 8
	},
	imageMeta: {
		flexDirection: 'row'
	},
	username: {
		fontWeight: 'bold',
		paddingLeft: 8,
		paddingRight: 8
	}
}

const PhotoSection = ()=>{
	return <View style={styles.container}>
		<View style={styles.userContainer}>
			<Image
				source={{uri:"https://cdn-icons-png.flaticon.com/128/145/145843.png"}}
				style={styles.thumbnail}
			/>
			<Text style={styles.username}>username</Text>
		</View>
		<View>
			<Image
				source={{uri:"https://wallpaper.dog/large/20516065.jpg"}}
				style={{width:null, height:320}}
			/>
		</View>
		<View>
			<Ionicons name='heart-outline' size={24}/>
		</View>
		<View style={styles.imageMeta}>
			<Text style={styles.username}>username</Text>
			<Text>#caption</Text>
		</View>
	</View>
}

export default PhotoSection;
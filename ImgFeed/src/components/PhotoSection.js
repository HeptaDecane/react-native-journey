import React from 'react'
import {Image, Text, View, TouchableNativeFeedback} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = {
	container: {
		margin: 8,
		marginBottom: 32
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

const PhotoSection = (props)=>{
	const {post} = props
	const [liked, setLiked] = React.useState(false)

	return <View style={styles.container}>
		<View style={styles.userContainer}>
			<Image
				source={{uri:post.avatar}}
				style={styles.thumbnail}
			/>
			<Text style={styles.username}>{post.username}</Text>
		</View>
		<View>
			<Image
				source={{uri:post.photo}}
				style={{width:null, height:320}}
			/>
		</View>
		<View>
			<TouchableNativeFeedback onPress={() => setLiked(!liked)}>
				{liked ?
					<Ionicons name='heart' size={24} color='red'/>
					:
					<Ionicons name='heart-outline' size={24}/>
				}

			</TouchableNativeFeedback>
		</View>
		<View style={styles.imageMeta}>
			<Text style={styles.username}>{post.username}</Text>
			<Text>{post.caption}</Text>
		</View>
	</View>
}

export default PhotoSection;
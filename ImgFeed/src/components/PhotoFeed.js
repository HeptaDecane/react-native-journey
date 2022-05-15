import React from "react";
import {View} from "react-native";
import axios from "axios";

const PhotoFeed = ()=>{
	const [feed, setFeed] = React.useState([])

	React.useEffect(()=>{
		axios.get('https://raw.githubusercontent.com/HeptaDecane/react-native-journey/main/ImgFeed/db.json')
			.then(res=>setFeed(res.data.feeds))
			.catch(console.log)
	},[])

	return <View>

	</View>
}

export default PhotoFeed;
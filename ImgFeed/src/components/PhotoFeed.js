import React from "react";
import {ScrollView} from "react-native";
import axios from "axios";
import PhotoSection from "./PhotoSection";

const PhotoFeed = ()=>{
	const [feed, setFeed] = React.useState([])

	React.useEffect(()=>{
		axios.get('https://raw.githubusercontent.com/HeptaDecane/react-native-journey/main/ImgFeed/db.json')
			.then(res=>setFeed(res.data.feed))
			.catch(console.log)
	},[])

	return <ScrollView>
		{
			feed.map(post => <PhotoSection post={post} key={post.id}/>)
		}
	</ScrollView>
}

export default PhotoFeed;
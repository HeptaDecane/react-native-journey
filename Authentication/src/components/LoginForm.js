import React from "react";
import {View} from "react-native";
import {Button} from "@rneui/base";
import { Input } from "@rneui/themed";

const styles = {
	container: {
		margin: 8,
		alignItems: 'center',
		justifyContent: 'center'
	}
}

const LoginForm = ()=>{
	return <View style={styles.container}>
		<Input placeholder="Email"/>
		<Input placeholder="Password" secureTextEntry={true}/>
		<View style={{width:"100%"}}>
			<Button title="Login"/>
		</View>
	</View>
}

export default LoginForm;
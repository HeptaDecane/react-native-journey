import React from "react";
import {View} from "react-native";
import {Button, Text} from "@rneui/base";
import { Input } from "@rneui/themed";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

import {
	handleAuthInput,
	loginRequest,
	loginSuccess,
	loginFailure
} from "../actions";
import {useSelector, useDispatch} from "react-redux";

const styles = {
	container: {
		margin: 8,
		alignItems: 'center',
		justifyContent: 'center'
	},
	message: {
		marginTop: 16,
	}
}

const LoginForm = ()=>{
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const firebaseAuth = getAuth()

	const login = ()=>{
		dispatch(loginRequest())
		signInWithEmailAndPassword(firebaseAuth, auth.email, auth.password)
			.then(userCredential=>{
				console.log(userCredential)
				const user = userCredential.user
				dispatch(loginSuccess(user))
			})
			.catch(error=>{
				console.log(error.code, error.message)
				dispatch(loginFailure(error))
			})
	}

	return <View style={styles.container}>
		<Input placeholder="Email"
			onChangeText={
				text => dispatch(handleAuthInput({'field': 'email', 'value': text}))
			}
	  	value={auth.email}
		/>
		<Input placeholder="Password" secureTextEntry={true}
			onChangeText={
				text => dispatch(handleAuthInput({'field':'password', 'value': text}))
			}
		  value={auth.password}
		/>
		<View style={{width:"100%"}}>
			<Button title="Login" onPress={login} loading={auth.loading}/>
		</View>

		<View style={styles.message}>
			{auth.user && <Text style={{color:'green'}}>Login Success: {auth.user.email}</Text>}
			{auth.error && <Text style={{color:'red'}}>{auth.error.message}</Text>}
		</View>
	</View>
}

export default LoginForm;
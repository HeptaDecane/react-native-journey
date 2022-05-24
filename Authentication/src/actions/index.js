export const handleAuthInput = ({field, value})=>{
	return {
		type: 'HANDLE_AUTH_INPUT',
		payload: {field, value}
	}
}

export const loginRequest = ()=>{
	return {
		type: 'LOGIN_REQUEST'
	}

}

export const loginSuccess = (user)=>{
	return {
		type: 'LOGIN_SUCCESS',
		payload: user
	}
}

export const loginFailure = (error)=>{
	return {
		type: 'LOGIN_FAILURE',
		payload: error
	}
}

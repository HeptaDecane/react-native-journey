const initialState = {
	email: '',
	password: '',
	user: null,
	error: null,
	loading: false
}

const authReducer = (state=initialState, action)=>{
	switch (action.type){
		case 'HANDLE_AUTH_INPUT':
			return {
				...state,
				[action.payload.field]: action.payload.value
			}

		case 'LOGIN_REQUEST':
			return {
				...state,
				loading: true
			}

		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: action.payload,
				loading: false,
				error: null
			}

		case 'LOGIN_FAILURE':
			return {
				...state,
				error: action.payload,
				loading: false,
				user: null
			}

		default:
			return state
	}
}

export default authReducer;
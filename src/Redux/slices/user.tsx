import { createAsyncThunk, createSlice, unwrapResult } from '@reduxjs/toolkit'
import Firebase from '../../../config/Firebase.js'
import { RootState } from '../index.js';


export const login = createAsyncThunk('users/login', async (userData:{email:string, password:string}, { rejectWithValue }: any) => {
    const {email, password} = userData;
    return Firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      return response.user
    }).catch(err => {
        return rejectWithValue(err.code)
    })
    
})

export const signup = createAsyncThunk('users/signup', async (userData:{email:string, password:string}, { rejectWithValue }: any) => {
    const {email, password} = userData;
    return Firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
      alert(response.user.email)
      return response.user
    }).catch(err => {
        return rejectWithValue(err.code)
    })
})


const initialState = {
  user: null as any,
  error: null as any,
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addCase(login.rejected, (state, action) => {
        console.log(action.payload)
        if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
        }
    })
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addCase(signup.rejected, (state, action) => {
        console.log(action.payload)
        if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
        }
    })
  },
})

export const selectUser = (state: RootState): any => state.user.user

export default usersSlice
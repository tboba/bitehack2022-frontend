import { MapItem } from './../components/map/MapItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'


interface PostsState {
    posts?: MapItem[];
    isFetching: boolean;
    error: any;
  }
  
  // Define the initial state using that type
  const initialState: PostsState = {
    posts: [],
    isFetching: false,
    error: null
  }
  

export const postsSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<MapItem[]>) => {
        
    return {
        ...state,
        posts: action.payload
    };

  },
}})

export const { fetchPosts } = postsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer
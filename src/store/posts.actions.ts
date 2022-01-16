import { MapItem } from "../components/map/MapItem";

export const PostsActions = {
    FETCH_POSTS: "[POSTS] Fetch posts",
    FETCH_ERROR: "[POSTS] Fetch error",
    FETCH_COMPLETED: "[POSTS] Fetch completed"
  };
  
  export const startFetchCatNames = () => ({
    type: PostsActions.FETCH_POSTS
  });

  export const failFetchCatNames = (error:any) => ({
    type: PostsActions.FETCH_ERROR,
    payload: error
  });

  export const finishFetchCatNames = (data: MapItem[]) => ({
    type: PostsActions.FETCH_COMPLETED,
    payload: data
  });
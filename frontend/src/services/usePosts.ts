import axios from "axios";


interface User {
    _id: string;
    userName: string,
    fullName: string,
}

export interface Post {
  _id: string;
  user: User;
  text: string;
  image: string,
  likes: string[];
  comments: string[];
  createdAr: string;
}

export const useGetPosts = async (): Promise<Post[]> => {
  const response = await axios
    .get("http://localhost:5000/api/posts/all")
    .then((res) => res.data.posts)
    .catch((err) => console.log(err.response.data));

  return response;
};


export const useDeletePost = async(postId: string) => {
  
  const response = axios.delete(`http://localhost:5000/api/posts/${postId}`).then((res) => res.data).catch((err) => console.log(err.response.data));
  return response
}
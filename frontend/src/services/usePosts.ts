import axios from "axios";


interface User {
    _id: string;
    userName: string,
    fullName: string,
}

interface Post {
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

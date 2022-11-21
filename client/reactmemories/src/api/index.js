import axios from "axios";

const url = "http://localhost:4000/posts";
const url2 = "http://localhost:4000/users";

const url_create = "http://localhost:4000/posts/create";

export const fetchPosts =async () => await axios.get(url);

export const createPost = async (postData) => {
  await axios.post(url_create, postData);
};

export const loginUser = async (loginData) => {
 return await axios.post(`${url2}/login`, loginData);
};

export const registerUser = async (registerData) => {
 return await axios.post(`${url2}/register`, registerData);
};

export const deletePost = (id) => {
  axios.delete(`${url}/${id}`);
};

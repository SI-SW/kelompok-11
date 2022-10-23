import { baseApi } from "@/plugins/axios";

const api = '/api/todo';

const list = () => baseApi.get(`${api}`);
const del = (id) => baseApi.delete(`${api}/${id}`);
const add = (body) => baseApi.post(`${api}`, body);

export { list, del, add };
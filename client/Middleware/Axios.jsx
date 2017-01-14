import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 1000,
	withCredentials: true,
	//transformRequest: [(data) => JSON.stringify(data.data)],
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export default api;
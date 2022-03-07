import axios from "axios";

const headers ={
	'Content-Type': 'application/json',
	Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJXYWx0ZXIgSmFyZGltIiwiYXVkaWVuY2UiOiJ3ZWIiLCJjcmVhdGVkIjoxNTIxMTQ5MTQ3NTU1LCJleHAiOjE4NjE4NDQ0MDAsImVtYWlsIjoicG9ydGFsQGNlcnMuY29tLmJyIiwiU1RVREVOVF9JRCI6MzE4OTM1fQ.sqLUKH2jYe_6zGZ9Yx_7maEGYalvs7F7J9UJZzuJjzkNjbRXzzGqxpS6VreXJDnfe-YDoriW_DrFOwed0cp8LQ'
}

let headersNoAxios = new Headers(headers)


const base = () => {
	return "http://localhost:8085/api";
}

const API = {
	get: async (path = '', params = {}) => {
		let url = base() + path;
		return axios.get(url, {
			timeout: 10000,
			headers: headers,
			params: params
		}).then(response => {
			let data = response.data;
			return data;
		}).catch(error => {
				return []
		})

	},

	post: async (path = '', params = {}) => {
		return await doRequest(path, async () => {

			const url = base() + path;
			const method = 'POST';
			const body = JSON.stringify(params);
			let result = null
			const response = await fetch(url, {
				method, headers: headersNoAxios, body
			})

			try {
				result = await response.text();
				return JSON.parse(result)
			} catch (e) {
				return result
			}

		});
	},

	patch: async (path = '', value = '') => {

			const url = base() + path;
			const method = 'PATCH';
			const body = JSON.stringify(value);
			let result = null

			const response = await fetch(url, {
				method, headers: headersNoAxios, body
			})

			try {
				if(response.status != 200){
					return response
				}
				result = await response.text();
				return JSON.parse(result)
			} catch (e) {
				return result
			}
	},

	delete: async(path = '', value = {}) =>{
		const url = base() + path;
		const method = "DELETE";
		const body = JSON.stringify(value);
		let result = null

		const response = await fetch(url, {
			method, headers: headersNoAxios, body
		})
		try {
			if(response.status != 200){
				return response
			}
			result = await response.text();
			return JSON.parse(result)
		} catch (e) {
			return result
		}
	},


	fetch: async (url = '', params = {}) => {
		return await doRequest(url, async () => {

			if (Object.values(params).length > 0) {
				url += '?' + new URLSearchParams(params);
			}

			const response = await fetch(url);
			try {
				return await response.json();
			} catch (e) {
				return await response.text();
			}

		});
	}
}

async function doRequest(url, callback) {

	try {

		const unknownStr = '[object Object]';
		if (url.includes(unknownStr))
			throw new Error('Unknown Object String');

		return await callback();

	} catch (e) {
		console.log("Error:", e.toString());
		return null;
	}

}

export default API

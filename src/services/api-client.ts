import axios from "axios";

export default axios.create({
		baseURL: 'https://api.rawg.io/api',
		params: {
		key: '91e5b347ba7f449f807b59fe684880d6'
	}
})
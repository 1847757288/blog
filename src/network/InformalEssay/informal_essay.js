import axios from './../request.js'

export function Get(){
	return axios('informal_essay/get.php')
}
export function Release(text){
	let params = new URLSearchParams()
	params.append('text', text)
	return axios.post("informal_essay/add.php", params)
}
import axios from './../request.js'

export function GetHistory(){
	return axios('history/get_history.php')
}
export function AddHistory(time,text){
	let params = new URLSearchParams()
	params.append('time', time)
	params.append('text', text)
	return axios.post('history/add_history.php',params)
}
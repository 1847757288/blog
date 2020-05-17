import axios from './../request.js'

export function RandStr1(){
	return axios('tool/rand_str.php')
}
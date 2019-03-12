import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

const apiPost = async (url, data) => await axios.post(`${apiUrl}${url}`, data);

const apiGet = async (url) => await axios.get(`${apiUrl}${url}`);

const getUserIP = (onNewIP) => {
	let myPeerConnection = window.RTCPeerConnection ||
		window.mozRTCPeerConnection ||
		window.webkitRTCPeerConnection;
	let pc = new myPeerConnection({
			iceServers: []
		}),
		noop = () => {
		},
		localIPs = {},
		ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

	function iterateIP(ip) {
		if (!localIPs[ip]) onNewIP(ip);
		localIPs[ip] = true;
	}

	//create a bogus data channel
	pc.createDataChannel('');
	// create offer and set local description
	pc.createOffer((sdp) => {
		sdp.sdp.split('\n').forEach((line) => {
			if (line.indexOf('candidate') < 0) return;
			line.match(ipRegex).forEach(iterateIP);
		});
		pc.setLocalDescription(sdp, noop, noop);
	}, noop);
	//listen for candidate events
	pc.onicecandidate = (ice) => {
		if (
			!ice ||
			!ice.candidate ||
			!ice.candidate.candidate ||
			!ice.candidate.candidate.match(ipRegex)
		) return;
		ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
	};
};

export {
	apiPost,
	apiGet,
	getUserIP
}

import React, { useEffect, useState } from 'react';

const WebrtcForCamera = () => {
	const [mediaStream, setmediaStream] = useState(null);

	const [Stream, setStream] = useState(false);

	const [videoBlob, setvideoBlob] = useState(null);

	const [mediaRecorder, SetmediaRecorder] = useState(null);

	const [Type, setType] = useState(false);

	useEffect(() => {}, []);

	const getUserMediaStream = (constraints, cb) => {
		const video = document.querySelector('#viodes');

		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: Type ? 'user' : 'environment' } }).then((stream) => {
				if ('srcObject' in video) {
					video.srcObject = stream;

					video.play();

					// onluzhis(stream)

					setStream(stream);
				} else {
					video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;

					console.log('第二種');
				}
			});
		} else if (navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
			// webkit內核瀏覽器

			if (navigator.mediaDevices === undefined) {
				navigator.mediaDevices = {};
			}

			console.log('我是webkit內核');
		}
	};

	const onClickzp = () => {
		const viodes = document.getElementById('viodes');

		const canvas = document.getElementById('canvas'); // canvas元素

		const context = canvas.getContext('2d');

		context.drawImage(viodes, 0, 0); // 將video在canvas上繪制出來

		canvas.toBlob((blob) => {
			// 將canvas轉換為blob

			console.log(blob);
		});
	};

	const updateVideo = (ctx, video, rate) => {
		ctx.drawImage(video, 0, 0, 600, 600 * rate); // 使用視頻幀(當前幀)繪制canvas

		video.requestVideoFrameCallback(updateVideo);
	};

	const onluzhis = () => {
		const options = {
			audioBitsPerSecond: 128000,

			videoBitsPerSecond: 2500000,

			mimeType: 'video/webm;codecs=vp8,opus', // webm類型一定要加codecs=vp8,opus，否則會導致錄制時候時而可以用時而不能用
		};

		const recorder = new MediaRecorder(Stream, options);

		SetmediaRecorder(recorder);

		recorder.ondataavailable = function (evt) {
			window.bobals = new Blob([evt.data], { type: evt.data.type });

			// setvideoBlob(bobal)
		};

		recorder.start();

		console.log('開始錄制');
	};

	const endsTartOnload = () => {
		mediaRecorder.stop();

		setTimeout(function () {
			console.log('錄像上傳', window.bobals);

			const blob = new Blob([window.bobals]);

			const downloadElement = document.createElement('a');

			const href = window.URL.createObjectURL(blob); // 創建下載的鏈接

			downloadElement.href = href;

			downloadElement.download = formatDateTime(new Date()) + '.webm'; // 下載後文件名

			document.body.appendChild(downloadElement);

			downloadElement.click(); // 點擊下載

			document.body.removeChild(downloadElement); // 下載完成移除元素

			window.URL.revokeObjectURL(href); // 釋放掉blob對象
		}, 1000);
	};

	const formatDateTime = function (date) {
		const y = date.getFullYear();

		let m = date.getMonth() + 1; // 注意這個“+1”

		m = m < 10 ? '0' + m : m;

		let d = date.getDate();

		d = d < 10 ? '0' + d : d;

		let h = date.getHours();

		h = h < 10 ? '0' + h : h;

		let minute = date.getMinutes();

		minute = minute < 10 ? '0' + minute : minute;

		let second = date.getSeconds();

		second = second < 10 ? '0' + second : second;

		return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
	};

	const qiehuan = () => {
		setType(!Type);

		stopCapture();
	};

	const stopCapture = () => {
		const video = document.getElementById('viodes');

		if (!video.srcObject) return;

		const stream = video.srcObject;

		const tracks = stream.getTracks();

		tracks.forEach((track) => {
			track.stop();

			getUserMediaStream();
		});
	};

	return (
		<div className='webrtc'>
			<div className='tops'>
				<video id='viodes'></video>

				<canvas id='canvas'></canvas>
			</div>

			<div>當前攝像頭：{Type ? '前置' : '後置'}</div>

			<div className='buttons'>
				<button onClick={getUserMediaStream}>獲取攝像頭</button>

				<button onClick={onClickzp}>點擊抓拍</button>

				<button onClick={onluzhis}>點擊錄制</button>

				<button onClick={endsTartOnload}>結束錄制並且下載視頻</button>

				<button onClick={qiehuan}>切換攝像頭</button>
			</div>
		</div>
	);
};

export default WebrtcForCamera;

function reset() {
			
	document.getElementById('Long-axis_diamater').value = '';
	document.getElementById('Texture').value = '';
	document.getElementById('Bubblelike_lucency').value = '';
	document.getElementById('Air bronchogram').value = '';
	document.getElementById('Vascular convergence').value = '';
	document.getElementById('Pleural retraction').value = '';
	document.getElementById('SEX').value = '';
	document.getElementById('Smoke history').value = '';
}
					
function predict() {
			
	let input = [];
	var Long = document.getElementById('Long-axis_diamater').value
	var texture = document.getElementById('Texture').value
	var Bubblelike_lucency = document.getElementById('Bubblelike_lucency').value
	var air = document.getElementById('Air bronchogram').value
	var Vascular = document.getElementById('Vascular convergence').value
	var Pleural = document.getElementById('Pleural retraction').value
	var sex = document.getElementById('SEX').value
	var smoke = document.getElementById('Smoke history').value
				
	if (Long.trim() != "" && texture.trim() != "" && Bubblelike_lucency.trim() != "" && air.trim() != "" && Vascular.trim() != "" && Pleural.trim() != "" && sex.trim() != "" && smoke.trim() != "") {
		input.push(parseFloat(Long))
		input.push(parseFloat(texture))
		input.push(parseFloat(Bubblelike_lucency))
		input.push(parseFloat(air))
		input.push(parseFloat(Vascular))
		input.push(parseFloat(Pleural))
		input.push(parseFloat(sex))
		input.push(parseFloat(smoke))
		fetch('http://127.0.0.1:5000/predict', {
			method: 'POST',
			headers: {
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data: input })
		})
		.then(response => response.json())
		.then(data => {
			
			document.getElementById('prediction').textContent = data.prediction;
		})
		.catch(error => {
			console.error('error:', error);
		});
	} else {
		alert("num error");
	}
}

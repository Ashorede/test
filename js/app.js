function reset() {

	document.getElementById('Long-axis_diamater').value = '';
	document.getElementById('Texture').value = '';
	document.getElementById('Bubblelike_lucency').value = '';
	document.getElementById('Air_bronchogram').value = '';
	document.getElementById('Vascular_convergence').value = '';
	document.getElementById('Pleural_retraction').value = '';
	document.getElementById('SEX').value = '';
	document.getElementById('Smoke_history').value = '';
}
		
function predict() {

    let input = [];
    input.push(parseFloat(document.getElementById('Long-axis_diamater').value));
    input.push(parseFloat(document.getElementById('Texture').value));
    input.push(parseFloat(document.getElementById('Bubblelike_lucency').value));
    input.push(parseFloat(document.getElementById('Air bronchogram').value));
    input.push(parseFloat(document.getElementById('Vascular convergence').value));
    input.push(parseFloat(document.getElementById('Pleural retraction').value));
    input.push(parseFloat(document.getElementById('SEX').value));
    input.push(parseFloat(document.getElementById('Smoke history').value));

    if (input.length === 8) {
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
        alert("num error！");
    }
}
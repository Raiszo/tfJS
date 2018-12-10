const tf = require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')

async function main() {
	const model = await tf.loadModel('file://./models/model.json');

	console.log(model)
	model.summary()
	
}

main()
	.then(() => console.log('alles gut'))
	.catch(e => console.log(e))
	.finally(() => console.log('termine :v'))

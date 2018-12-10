const tf = require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')


const e = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]),
			f = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);

const e_plus_f = e.add(f).square()

e_plus_f.print()

const model = tf.sequential();

// First layer must have an input shape defined.
model.add(tf.layers.dense({units: 32, inputShape: [50]}));
// Afterwards, TF.js does automatic shape inference.
model.add(tf.layers.dense({units: 4}));

// Inspect the inferred shape of the model's output, which equals
// `[null, 4]`. The 1st dimension is the undetermined batch dimension; the
// 2nd is the output size of the model's last layer.
model.summary()
console.log(JSON.stringify(model.outputs[0].shape));

const c = tf.ones([50])
console.log(c.shape)

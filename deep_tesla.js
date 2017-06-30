//added pooling layers and reduced stride from 3 to 1
//baseline forward pass (~2-3ms), backward pass (3-4ms)
//average error ~7.1
//input layer passes in a 200x66x3 image 
//l1 consists of 8 3x3 filters with relu activation
//Outputs 1 value between -20 degrees and 20 degrees
//trainer function (used to update weights)
//filters = feature maps
//failed
{
	"network" : [
		{ "type" : "input", "out_sx" : 200, "out_sy" : 66, "out_depth" : 3 }, 
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 1, "pad" : 2, "activation" : "relu" }, 
		{ "type" : "pool", "sx" : 4, "stride" : 2 },  		 
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 1, "pad" : 2, "activation" : "relu" },
		{ "type" : "pool", "sx" : 4, "stride" : 2 }, 
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 1, "pad" : 2, "activation" : "relu" },
		{ "type" : "pool", "sx" : 4, "stride" : 2 },
		{ "type" : "regression", "num_neurons" : 1 }
	],
	"trainer" : { "method" : "adadelta", "batch_size" : 1, "l2_decay" : 0.0001 } 
}

//	{ "type" :"lrn", "k":1, "n":3, "alpha":0.1, "beta":0.75},	 

//basic network
//exerimenting with params on one conv layer
{
	"network" : [
		{ "type" : "input", "out_sx" : 200, "out_sy" : 66, "out_depth" : 3 }, 
		{ "type" : "conv", "sx" : 4, "filters" : 16, "stride" : 1, "pad" : 1, "activation" : "relu" },
		{ "type" : "pool", "sx" : 4, "stride" : 2 },
		{ "type" : "regression", "num_neurons" : 1 }
	],
	"trainer" : { "method" : "adadelta", "batch_size" : 1, "l2_decay" : 0.0001 } 
}
//latency versus Avg error
//Goal is to miminize error while also minimizing latency 
//Two paradigms - small network with larger filters and larger network with smaller filters

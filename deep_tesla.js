{
	"network" : [
		{ "type" : "input", "out_sx" : 200, "out_sy" : 66, "out_depth" : 3 }, //input layer passes in a 200x66x3 image 
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 3, "pad" : 2, "activation" : "relu" }, //l1 consists of 8 3x3 filters with relu activation 
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 3, "pad" : 2, "activation" : "relu" }, //l2 consists of 
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 3, "pad" : 2, "activation" : "relu" },
		{ "type" : "pool", "sx" : 4, "stride" : 2 }, //Max pool 
		{ "type" : "regression", "num_neurons" : 1 } //Outputs 1 value between -20 degrees and 20 degrees
	],
	"trainer" : { "method" : "adadelta", "batch_size" : 4, "l2_decay" : 0.0001 } //trainer function (used to update weights)
}
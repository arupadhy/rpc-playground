// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var basic_pb = require('./basic_pb.js');

function serialize_helloworld_NumberReply(arg) {
  if (!(arg instanceof basic_pb.NumberReply)) {
    throw new Error('Expected argument of type helloworld.NumberReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_NumberReply(buffer_arg) {
  return basic_pb.NumberReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_NumberRequest(arg) {
  if (!(arg instanceof basic_pb.NumberRequest)) {
    throw new Error('Expected argument of type helloworld.NumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_NumberRequest(buffer_arg) {
  return basic_pb.NumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// service definition
var NumberGeneratorService = exports.NumberGeneratorService = {
  // generates a random number
generateNumber: {
    path: '/helloworld.NumberGenerator/GenerateNumber',
    requestStream: false,
    responseStream: false,
    requestType: basic_pb.NumberRequest,
    responseType: basic_pb.NumberReply,
    requestSerialize: serialize_helloworld_NumberRequest,
    requestDeserialize: deserialize_helloworld_NumberRequest,
    responseSerialize: serialize_helloworld_NumberReply,
    responseDeserialize: deserialize_helloworld_NumberReply,
  },
};

exports.NumberGeneratorClient = grpc.makeGenericClientConstructor(NumberGeneratorService);

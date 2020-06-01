const messages = require('../../proto/basic_pb');
const services = require('../../proto/basic_grpc_pb');

const grpc = require('grpc');

function generateNumber(call, cb) {
    console.log('Received a message from client');
    const reply = new messages.NumberReply();

    // extract data from inputMessage
    const base = call.request.getBase();

    // set data in the output message
    const number = Math.floor(Math.random() * 100 * base);
    reply.setResult(number);
    reply.setSource('grpc-playground');

    cb(null, reply);
}

function main() {

    const server = new grpc.Server();
    server.addService(services.NumberGeneratorService, {
        generateNumber: generateNumber
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();

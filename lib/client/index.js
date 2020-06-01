const messages = require('../../proto/basic_pb');
const services = require('../../proto/basic_grpc_pb');
const [HOST, PORT] = ['localhost', '50051'];
const grpc = require('grpc');

function main() {
    const client = new services.NumberGeneratorClient(`${HOST}:${PORT}`,
        grpc.credentials.createInsecure());

    const request = new messages.NumberRequest();
    request.setBase(10);

    client.generateNumber(request, (err, response) => {
        if (err) {
            console.log(err);
        }
        console.log('GOT REPLY FROM SERVER: ', `result: ${response.getResult()}, source: ${response.getSource()}`);
    })

}

main();

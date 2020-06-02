// CREATION OF CLIENT USING DYNAMIC LINKING FOR PROTO FILES
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('proto/todo.proto', {});

const grpcObj = grpc.loadPackageDefinition(packageDef);

const todoPackage = grpcObj.todoPackage;

console.log('-------- before creating a client ----------');
//console.log(todoPackage);

// create a client now
const client = new todoPackage.Todo("localhost:40000", grpc.credentials.createInsecure());


function makeCreateToDoRequest() {
  client.CreateToDo({
    "text": "Do Laundry"
  }, (err, response) => {
     console.log('received response from server');
     console.log(JSON.stringify(response));
     makeReadTodosRequest();
   }
  );
}

function makeReadTodosRequest() {
  client.ReadTodos({}, (err, response) => {
    console.log('recieved response from server for ReadTodos request');
    console.log(JSON.stringify(response));
    })
}

makeCreateToDoRequest(); 


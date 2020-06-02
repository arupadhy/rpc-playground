// CREATION OF SERVER USING DYNAMIC LINKING OF PROTO FILES
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// load the proto file with default options
const packageDef = protoLoader.loadSync("proto/todo.proto", {});

// from the top package, get the grpcObj
const grpcObj = grpc.loadPackageDefinition(packageDef);

// from grpcObj, get the todoPackage
const todoPackage = grpcObj.todoPackage;

const todos = [];
console.log('----- Before creating server ------');
// console.log(todoPackage);
// create a server
const server = new grpc.Server();
server.bind('0.0.0.0:40000', grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.Todo.service, {
  "CreateToDo": createTodo,
  "ReadTodos": readTodos
});

server.start();

function createTodo(call, callback) {
  console.log('Received create TODO request');
  console.log(JSON.stringify(call.request)); 
  const todoItem = {
    id: Math.floor(Math.random() * 1000),
    text: call.request.text
  };
  todos.push(todoItem);
  callback(null, todoItem);
}

function readTodos(call, callback) {
  console.log('Received readTodos request');
  console.log(todos);
  callback(null, { "items": todos});
}

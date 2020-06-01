# rpc-playground
basic grpc usage for async/sync calls in node

npm i -g grpc
npm i -g grpc-tools

Ran this command from the same folder where basic.proto exists

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` basic.proto

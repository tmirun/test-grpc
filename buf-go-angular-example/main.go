package main

import (
	commonv1 "buf-go-angular-example/gen/common/v1"
	"buf-go-angular-example/gen/common/v1/commonv1connect"
	"connectrpc.com/connect"
	"context"
	"fmt"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"net/http"
)

const address = "localhost:8080"

func main() {
	mux := http.NewServeMux()
	path, handler := commonv1connect.NewPersonServiceHandler(&personServiceServer{})
	mux.Handle(path, handler)
	fmt.Println("... Listening on", address)
	http.ListenAndServe(
		address,
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(mux, &http2.Server{}),
	)
}

type personServiceServer struct {
	commonv1connect.UnimplementedPersonServiceHandler
}

func (server *personServiceServer) Create(
	ctx context.Context,
	req *connect.Request[commonv1.CreateRequest],
) (*connect.Response[commonv1.CreateResponse], error) {

	return connect.NewResponse(&commonv1.CreateResponse{Id: 1}), nil
}

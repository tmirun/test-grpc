package main

import (
	"encoding/json"
	"github.com/golang/protobuf/proto"
	"go-grpc/proto/lib/pb"
)

func main() {
	person := &pb.User{
		Id:        0,
		Name:      "1",
		Email:     "1",
		Password:  "1",
		Avatar:    "1",
		Status:    0,
		Mobiles:   []string{"1", "2", "3"},
		MapFields: nil,
		Birthday:  nil,
	}
	pbPerson, _ := proto.Marshal(person)
	print(pbPerson)

	jsonPerson, _ := json.Marshal(person)
	print(jsonPerson)
}

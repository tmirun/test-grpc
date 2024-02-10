package main

import (
	"go-proto-todolist/lib/todo_item"
	"go-proto-todolist/lib/todo_list"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/encoding/prototext"
)

func main() {
	todoItem1 := todo_item.Item{
		Title:       "task1",
		Description: "some task description",
	}

	todoItem2 := todo_item.Item{
		Title:       "task2",
		Description: "some task description",
	}

	todoList := todo_list.List{
		Title: "Title",
		Items: []*todo_item.Item{
			&todoItem1,
			&todoItem2,
		},
		CreateAt: nil,
		UpdateAt: nil,
	}

	protoJsonMarshal, _ := protojson.Marshal(&todoList)
	print(string(protoJsonMarshal))
	marshal, _ := prototext.Marshal(&todoList)
	print(string(marshal))

}

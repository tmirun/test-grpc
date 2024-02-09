package person

import (
	"fmt"
	"google.golang.org/protobuf/proto"
	"log"
)

func main() {
	// 创建一个 AddressBook 实例
	addressBook := &AddressBook{}

	// 创建一个 Person 实例并添加到 AddressBook 中
	person1 := &Person{
		Name:  "John Doe",
		Id:    1234,
		Email: "johndoe@example.com",
	}
	addressBook.People = append(addressBook.People, person1)

	// 创建第二个 Person 实例并添加到 AddressBook 中
	person2 := &Person{
		Name:  "Jane Smith",
		Id:    5678,
		Email: "janesmith@example.com",
	}
	addressBook.People = append(addressBook.People, person2)

	// 将 AddressBook 实例序列化为字节切片
	data, err := proto.Marshal(addressBook)
	if err != nil {
		log.Fatal("marshaling error: ", err)
	}

	// 将字节切片反序列化为新的 AddressBook 实例
	newAddressBook := &AddressBook{}
	if err := proto.Unmarshal(data, newAddressBook); err != nil {
		log.Fatal("unmarshaling error: ", err)
	}

	// 打印新的 AddressBook 实例
	fmt.Println(newAddressBook)
}

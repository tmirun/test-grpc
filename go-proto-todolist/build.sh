#!/bin/sh
#add this option to ignore `optional go_package`-go_opt=paths=source_relative

protoc -I=./proto \
    --go_out=../ \
    proto/*.proto
#!/bin/bash

buf curl \
  --schema proto \
  --data '{"name": "pepe", "email": "example@example"}' \
  http://localhost:8080/common.v1.PersonService/Create
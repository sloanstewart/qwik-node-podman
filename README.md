# qwik-node-podman
Demo of js framework Qwik with Nod.js api containerized with Podman.

### Get Started

#### Prerequisites
1. node.js
2. podman
3. podman-compose

#### Clone Repository
`git clone git@github.com:sloanstewart/qwik-node-podman.git`

#### Install Dependencies
`npm --prefix ./client install && npm --prefix ./server install`

#### Build Client
`npm --prefix ./client run build`

#### Build images and run containers 
`podman-compose up -d --build`

#### Verify API is working
Navigate to `localhost:3000/sup`

### Stop podman
`podman-compose down`

# qwik-node-podman
Demo of js framework [Qwik](https://qwik.builder.io/) with [Node.js](https://nodejs.org/) api containerized with [Podman](https://podman.io/).

### Get Started

#### Prerequisites
1. node.js
2. podman
3. podman-compose

#### Clone Repository
`git clone git@github.com:sloanstewart/qwik-node-podman.git`

#### Get in that dir
`cd qwik-node-podman`

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

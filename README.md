# bbc-task

This repository includes a

- Node.js application that interacts with CasparCG servers (`/server`)
- web client for CasparCG Servers (`/client`)

The work is unfinished but left some thoughts here and in the form of code comments. 

## How to run

1. Clone the repository
2. Open a terminal and run `nc -l -p 5250` to simulate connection to a CasparCG server

### Launching the web client

Run `yarn start-web`

### Launching the server

Run `yarn start-server`

## Thoughts

### What was easy/more straightforward

- Understanding the flow
- Understanding what to do, but challenging in figuring out *how* to achieve it 
- Finding relevant documentation

### What was challenging 

- Getting the API to successfully run the commands
- Figuring out what "real world ready" would look like for this new system. This would influence what testing approaches to take and test cases to create. Assuming the system needs to achieve the below non-functional requirements, I'd focus testing around these (either in real life or if given more time)

  - availability
  - reliability
  - performance
  - recoverability
  - accuracy 
   
- Understanding how CasparCG works. I enjoyed familiarising myself with a new piece of software. I picked up what I needed to understand how to fulfill the requirements. I'd go beyond achieveing a surface-level of understanding and return back to the CasparCG Wiki e.g. learn more about producers and consumers.  

<!-- - Your work will be evaluated against four key criteria:
  - Design, Modularisation and Componentisation
  - Testing Approach and Scenarios
  - Performance
  - Style and Readability -->

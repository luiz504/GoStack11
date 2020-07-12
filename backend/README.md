## Model // Entity

it's the data structurure that some entity will be persisted, in a DB for example

## Repository

Persistence <-> Repository <-> Route

it's the way used to manipulate the persisted data like
_find_
_create_
_delete_
wtc...

Normally a repository per Model

## Service

This guys will deal with out bussness rules

- [x] Receive data
- [x] Erros/executions handling
- [x] Repository access

**SoC: Sepraration of Concerns**

**DTO: Data Transfer Object**

**SOLID**

**KISS - Keep It Simple and Stypid**

- Single Responsability Principle
- Dependency Invertion Principle

- Routes responsabilities =>
  // Route => receive Request, call the another file then return a response

### Infra

- Docker
- Postigres

#### Data Base Controllers

- TypeORM

### Tools

- VsCode - IDE
- Insomnia - Http Emulator
- Dbeaver (DB Monitor)

#### Migration

_Version controller to DataBase_

- Only available to change the migration file if this file still local, if this file has already been merged or shared to other devs you can't edit it directly

#### typeORM

- This tool alredy have some default Repository methods to manipulate the persisted Data, so if only need to create a Repository file to our entity if some built-in method doesn't fit out feature.

import {JsonApiResModel} from './json-api';


export class Location implements JsonApiResModel {
    constructor(
        public id: string,
        public name?: string
    ) {}
}


export class Person implements JsonApiResModel {
    constructor(
        public id: string,
        public firstName?: string,
        public lastName?: string,
        public twitter?: string,
        public location?: Location
    ) {}
}


export class Comment implements JsonApiResModel {
    constructor(
        public id: string,
        public body?: string,
        public author?: Person
    ) {}
}


export class Article implements JsonApiResModel {
    constructor(
        public id: string,
        public title?: string,
        public author?: Person,
        public comments: Comment[] = []
    ) {}
}

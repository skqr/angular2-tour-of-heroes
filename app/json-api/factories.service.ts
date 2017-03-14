import { Injectable } from '@angular/core';
import { ModelResource, ModelResMap,
         ResModelHydratorProvider, ResModelHydrator } from './json-api.service';
import { JsonApiResObj } from './json-api';
import { Location, Person, Article, Comment } from './models';
import * as _ from "lodash";


class PersonResMap implements ModelResource {
    public model: any = Person;

    public map: ModelResMap = {
        properties: {
            firstName: 'first-name',
            lastName: 'last-name',
            twitter: 'twitter'
        },
        relationships: {
            toOne: {
                location: 'location'
            }
        }
    };
}


class LocationResMap implements ModelResource {
    public model: any = Location;

    public map: ModelResMap = {
        properties: {
            name: 'name'
        }
    };
}


class CommentResMap implements ModelResource {
    public model: any = Comment;

    public map: ModelResMap = {
        properties: {
            body: 'body'
        },
        relationships: {
            toOne: {
                author: 'author'
            }
        }
    };
}


class ArticleResMap implements ModelResource {
    public model: any = Article;

    public map: ModelResMap = {
        properties: {
            title: 'title'
        },
        relationships: {
            toOne: {
                author: 'author'
            },
            toMany: {
                comments: 'comments'
            }
        }
    };
}


@Injectable()
export class HeroesResModelHydratorProvider implements ResModelHydratorProvider {
    private resources: {[resType: string]: ModelResource} = {
        'locations': new LocationResMap(),
        'people': new PersonResMap(),
        'articles': new ArticleResMap(),
        'comments': new CommentResMap()
    };

    public getHydrator(resType: string): ResModelHydrator {
        if (resType in this.resources) return new ResModelHydrator(this.resources[resType]);  // Or null.
    }
}

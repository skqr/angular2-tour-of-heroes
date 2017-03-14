import {Injectable} from '@angular/core';
import {ModelResource, ModelResMap,
        ResModelHydratorProvider, ResModelHydrator} from './json-api.service';
import {JsonApiResObj} from './json-api';
import {Location, Person} from './models';
import _ = require('lodash');


class PersonResMap implements ModelResource {
    public model: any = Person;

    public map: ModelResMap = {
        properties: {
            name: 'name'
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


@Injectable()
export class HeroesResModelHydratorProvider implements ResModelHydratorProvider {
    private resources: {[resType: string]: ModelResource} = {
        'person': new PersonResMap(),
        'location': new LocationResMap()
    };

    public getHydrator(resType: string): ResModelHydrator {
        if (resType in this.resources) return new ResModelHydrator(this.resources[resType]);  // Or null.
    }
}

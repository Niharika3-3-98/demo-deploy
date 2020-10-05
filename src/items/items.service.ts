import { Injectable } from '@nestjs/common';
import {Item} from './Interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items:Item[]= [
        {
            id:"1",
            name:"Item 1",
            qty : 10,
            desc : 'this is item 1',
        },
        {
            id:"2",
            name:"Item 2",
            qty : 20,
            desc : 'this is item 2',
        },
        {
            id:"3",
            name:"Item 3",
            qty : 30,
            desc : 'this is item 3',
        },
        {
            id:"4",
            name:"Item 4",
            qty : 50,
            desc : 'this is item 4',
        }
    ];

    findAll(): Item[]{
        return this.items;
    }

    findOne(id): Item{
        return this.items.find(item=> item.id === id);
    }
}

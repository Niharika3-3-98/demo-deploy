import { Controller,Get,Post,Put,Delete, Body,Param} from '@nestjs/common';
import {CreateItemDto } from './dto/create-item.dto'
import {ItemsService } from './items.service'
import {Item } from './Interfaces/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){}

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id){
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto : CreateItemDto) {
        return `Name : ${createItemDto.name} Desc:${createItemDto.desc} Quantity : ${createItemDto.qty}`;

    }

    @Delete(':id')
    delete(@Param('id') id){
        return `Item ${id} Deleted`

    }

    @Put(':id')
    update(@Body()updateItemDto: CreateItemDto, @Param('id') id){
        return `${updateItemDto.name} Updated`
    }
}

/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        
        makeObservable(this, {
            list : observable,
            length : observable,
            checkItem : action,
            addItem : action,
            editItem : action,
            deleteItem : action
        })

    }
    checkItem = (name) => {
        let item = this.list.find ( i => i.name === name)
        item.completed = !item.completed
        
    }
    addItem = (name) => {
        const newItem = new Item (name)
        this.list.push(newItem)
    }
    editItem = (name, newLocation) => {
        let itemToEdit = this.list.find ( i => i.name === name)
        if (itemToEdit) itemToEdit.location = newLocation

    }
    deleteItem = (name) => {
        this.list = this.list.filter ( i => i.name !== name)
        this.length = this.list.length
        
    }
}


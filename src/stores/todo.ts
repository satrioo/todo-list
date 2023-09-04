import { defineStore } from "pinia";

export interface Item{
    name: string,
    status: boolean,
}

export const todoStore = defineStore({
    id: 'todo',
    state: () => ({
        item: [] as Array<Item>,
        filter: 'all' as string,
    }),
    getters: {
        filtered() {
            let result =  [] as Array<Item>
            if(this.filter === 'all') {
                result = this.item
            } else if(this.filter === 'done') {
                result = this.item.filter((e) => e.status === true )
            } else {
                result = this.item.filter((e) => e.status === false )
            }
            return result
        }
    },
    actions: {
        addItem(item: string) {
            if (item !== '') {
                this.item.push({ name: item, status: false })
            }
        },
        changeStatus(idx: number) {
            this.item.splice(idx, 1, { name: this.item[idx].name, status: !this.item[idx].status })
        },
        changeFilter(value: string) {
            this.filter = value
        },
        removeItem(idx: number) {
            console.log('asdasd')
            if(this.item.length > 0)
                this.item.splice(idx, 1)
        }
    }
})
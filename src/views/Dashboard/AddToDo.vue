<template>
    <div class="py-4 px-3 container-fluid">
        <div class="row">
            <div class="col-9 position-absolute end-0 me-5">
                <div class="container rounded-3">
                    <h1 class="py-4 text-center">Add To Do</h1>
                    <form @submit.prevent="addTodo">
                        <div class="mb-3">
                            <label>Nama:</label>
                            <input class="form-control" type="text" v-model="input.name"/>
                        </div>
                        <div class="mb-3">
                            <label>Deskripsi:</label>
                            <input class="form-control" type="text" v-model="input.description"/>
                        </div>
                        <div class="mb-3">
                            <label>Status:</label>
                            <input class="form-control" type="text" v-model="input.category"/>
                        </div>
                        <button  class="btn btn-primary me-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import d$todo from '@/stores/dashboard/todo';


    export default {
        data: () => ({
            //Input
            input: {
                name: '',
                category: '',
                description: ''
            }
        }),
        methods: {
            ...mapActions(d$todo, ['addlist']),
            async addTodo() {
                try {
                    await this.addlist({...this.input});
                    this.$router.replace({name: 'Todo'});
                    console.log(this.input);
                } catch (e) {
                    console.error(e);
                    console.log(this.input);
                }
            },
        },
    }
</script>

<style>
.container{
    background-color:white;
}
</style>
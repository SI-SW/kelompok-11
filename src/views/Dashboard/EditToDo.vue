<template>
    <div class="py-4 px-3 container-fluid">
        <div class="row">
            <div class="col-9 position-absolute end-0 me-5">
                <div class="container rounded-3">
                    <h1 class="py-4 text-center">Edit To Do</h1>
                    <form class="container" @submit.prevent="editTodo">
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
                            <input class="form-control" type="text" v-model="input.status"/>
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
    import { useRoute } from 'vue-router';

    export default {
        setup() {
            const route = useRoute();
            return {
                id: route.params.id,
            };
        },
        data: () => ({
            //Input
            input: {
                name: '',
                status: '',
                description: ''
            }
        }),
        methods: {
            ...mapActions(d$todo, ['a$editlist']),
        async editTodo() {
            try {
                await this.a$editlist(this.id, this.input);
                this.$router.replace({ name: 'Todo' });
                console.log(this.input);
                console.log(this.id);
            } catch (e) {
                console.error(e);
                console.log(this.input);
            }
        },
    },
};
</script>

<style>
.container{
    background-color:white;
}
</style>
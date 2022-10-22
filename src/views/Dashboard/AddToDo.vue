<template>
    <div class="py-4 px-3 container-fluid">
        <div class="row">
            <div class="col-9 position-absolute end-0 me-5">
                <div class="container rounded-3">
                    <h1 class="py-4 text-center">Add To Do</h1>
                    <div class="container">
                        <div class="mb-3">
                            <label>Nama:</label>
                            <input class="form-control" type="text"/>
                        </div>
                        <div class="mb-3">
                            <label>Deskripsi:</label>
                            <input class="form-control" type="text"/>
                        </div>
                        <div class="mb-3">
                            <label>Status:</label>
                            <input class="form-control" type="text"/>
                        </div>
                        <button  class="btn btn-primary me-3" type="submit">Submit</button>
                        <button  class="btn btn-secondary me-3" type="submit">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.container{
    background-color:white;
}
</style>
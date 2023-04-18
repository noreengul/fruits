<template>
    <div>
        <h2 class="text-center">Fruits List</h2>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>carbohydrates</th>
                <th>fat</th>
                <th>sugar</th>
                <th>protein</th>
                <th>calories</th>
                <th>Order</th>
                <th>Family</th>
                <th>Genus</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody v-if="fruits && fruits.data.length > 0">
            <tr v-for="(fruit,index) in fruits.data" :key="index">
                <td>{{ fruit.id }}</td>
                <td>{{ fruit.name }}</td>
                <td>{{ fruit.carbohydrates }}</td>
                <td>{{ fruit.fat }}</td>
                <td>{{ fruit.sugar }}</td>
                <td>{{ fruit.protein }}</td>
                <td>{{ fruit.calories }}</td>
                <td>{{ fruit.order.name }}</td>
                <td>{{ fruit.family.name }}</td>
                <td>{{ fruit.genus.name }}</td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td align="center" colspan="3">No record found.</td>
            </tr>
            </tbody>
        </table>
        <Pagination :data="fruits" @pagination-change-page="getResults" />

    </div>
</template>

<script>
    import  LaravelVuePagination  from 'laravel-vue-pagination';

    export default {
        components:{
            'Pagination': LaravelVuePagination
        },
        data() {
            return {
                fruits: []
            }
        },
        created() {
            this.getResults();
        },
        methods: {
             getResults(page=1){
                 axios.get('/api/fruits?page=' + page)
                     .then(response => {
                         this.fruits = response.data;
                         console.log(this.fruits );
                 });
            }
        }
    }
</script>

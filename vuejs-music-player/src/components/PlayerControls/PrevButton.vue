<template>
    <div>
        <button v-on:click="pressPrev()">Previous</button>
    </div>
</template>

<script>

export default {
    name: "PrevButton",
    methods: {
        pressPrev() {
            console.log('You pressed Prev!')
        }
    }
}

</script>
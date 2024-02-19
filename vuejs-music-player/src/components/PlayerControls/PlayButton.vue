<template>
    <div>
        <button v-on:click="pressPlay()">Play</button>
    </div>
</template>

<script>

export default {
    name: "PlayButton",
    methods: {
        pressPlay() {
            console.log("You pressed play!")
        }
    }
}

</script>
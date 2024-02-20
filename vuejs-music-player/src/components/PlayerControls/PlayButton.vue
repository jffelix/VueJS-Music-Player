<template>
    <div>
        <button 
        v-on:click="pressPlay()"
        >Play</button>
    </div>
</template>

<script>

export default {
    name: "PlayButton",
    data() {
        return {
            isSongPlaying: false
        }
    },
    methods: {
        pressPlay() {
            this.isSongPlaying = !this.isSongPlaying
            console.log('isSongPlaying: ', this.isSongPlaying);
            console.log("You pressed Play!")
        }
    }
}

</script>
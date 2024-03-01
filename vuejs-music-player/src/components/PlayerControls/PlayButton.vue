<template>
    <div>
        <div v-if="isSongPlaying">
            <button v-on:click="pressPlay()">Pause</button>
        </div>
        <div v-else>
            <button v-on:click="pressPlay()">Play</button>
        </div>
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
    props: {
        songList: Array,
        songIndex: Number
    },
    methods: {
        pressPlay() {
            this.isSongPlaying = !this.isSongPlaying
            console.log("current song: ", this.songList[this.songIndex.currentIndex].song)
        }
    }
}

</script>
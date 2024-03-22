<template>
    <div>
        <div v-if="isSongPlaying">
            <button v-on:click="pressPause()">Stop</button>
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
            isSongPlaying: false,
            currentSong: null
            // selectedAudio
        }
    },
    props: {
        songList: Array,
        songIndex: Number
    },
    emits: ["addTime", "resetTime"],
    methods: {
        pressPlay() {
            // let audio = this.songList[this.songIndex.currentIndex].songFile
            const selectedAudio = require(`../../assets/sampleSongs/${this.songList[this.songIndex.currentIndex].songFile}`)
            
            this.currentSong = selectedAudio
            this.isSongPlaying = !this.isSongPlaying

            let audioFile = new Audio(this.currentSong);
            this.currentSong = audioFile

            if (this.isSongPlaying) {
                this.$emit("addTime");
                this.currentSong.play();
            }
        },
        // currently stops song. No pause
        pressPause() {
            this.isSongPlaying = !this.isSongPlaying
            this.$emit("resetTime");
            // may be able to emit currentsong to parent
            // this.$emit("resetTime", this.currentSong);
            
            // console.log("Song stopped");
            this.currentSong.pause();
        }
    }
}

</script>
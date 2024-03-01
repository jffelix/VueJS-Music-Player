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

// const selectedAudio = require("../assets/sampleSongs/FISHER x Kita Alexander - Atmosphere (Extended Mix).mp3")
// const selectedAudio = require(`../../assets/sampleSongs/${this.songList[this.songIndex.currentIndex].songFile}`)

export default {
    name: "PlayButton",
    data() {
        return {
            isSongPlaying: false
            // selectedAudio
        }
    },
    props: {
        songList: Array,
        songIndex: Number
    },
    methods: {
        pressPlay() {
            let audio = this.songList[this.songIndex.currentIndex].songFile

            console.log("audio file: ", audio);
            // console.log("selectedAudio: ", selectedAudio);

            this.isSongPlaying = !this.isSongPlaying
            // let audio = new Audio(this.selectedAudio);

            if (this.isSongPlaying) {
                // audio.addEventListener("canplaythrough", () => { 
                //     audio.play();
                // })
                // console.log("current song: ", this.songList[this.songIndex.currentIndex].song)
            } else {
                // audio.pause();
                // console.log("Song paused");
            }
        }
    }
}

</script>
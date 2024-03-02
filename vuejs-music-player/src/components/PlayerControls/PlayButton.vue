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

// const selectedAudio = require("../../assets/sampleSongs/FISHER x Kita Alexander - Atmosphere (Extended Mix).mp3")
// let selectedAudio = require(`../../assets/sampleSongs/${this.songList[this.songIndex.currentIndex].songFile}`)

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
    methods: {
        pressPlay() {
            // let audio = this.songList[this.songIndex.currentIndex].songFile
            const selectedAudio = require(`../../assets/sampleSongs/${this.songList[this.songIndex.currentIndex].songFile}`)
            
            this.currentSong = selectedAudio

            // console.log("audio file: ", audio);
            // console.log("selectedAudio: ", selectedAudio);

            this.isSongPlaying = !this.isSongPlaying
            // let audioFile = new Audio(selectedAudio);
            let audioFile = new Audio(this.currentSong);

            if (this.isSongPlaying) {
                audioFile.addEventListener("canplaythrough", () => { 
                    audioFile.play();
                })
                // console.log("current song: ", this.currentSong);
            } else {
                console.log("Song paused");
                // audioFile.addEventListener("canplaythrough", () => { 
                //     return audioFile.pause();
                // })
                // audioFile.pause();
                // pressPause(audioFile)
            }
        },
        pressPause(currentSong) {
            this.isSongPlaying = !this.isSongPlaying
            console.log("Song paused");

            // if (!this.isSongPlaying) {
            //     currentSong.pause();
            //     // audioFile.currentTime = 0;
            //     console.log("Song paused");
            // }
        }
    }
}

</script>
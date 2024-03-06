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
    methods: {
        pressPlay() {
            // let audio = this.songList[this.songIndex.currentIndex].songFile
            const selectedAudio = require(`../../assets/sampleSongs/${this.songList[this.songIndex.currentIndex].songFile}`)
            
            this.currentSong = selectedAudio
            this.isSongPlaying = !this.isSongPlaying

            let audioFile = new Audio(this.currentSong);
            this.currentSong = audioFile


            audioFile.onloadedmetadata = ()=> {
                console.log("song duration: ", audioFile.duration);
            }
            

            if (this.isSongPlaying) {
                this.currentSong.play();
            }
        },
        // currently stops song. No pause
        pressPause() {
            this.isSongPlaying = !this.isSongPlaying
            console.log("Song stopped");
            this.currentSong.pause();
        }
    }
}

</script>
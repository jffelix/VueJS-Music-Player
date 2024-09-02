<template>
    <div>
        <div v-if="isSongPlaying">
            <img 
                src="../../assets/playerControlButtons/StopButton.png"
                className="pauseButtonImage"
                v-on:click="pressPause()"
            />
        </div>
        <!-- <div v-else-if="isSongPlaying === false || checkIfSongAtZero() === true"> -->
        <div v-else>
            <img 
                src="../../assets/playerControlButtons/PlayButton.png"
                className="playButtonImage"
                v-on:click="pressPlay()"
            />
        </div>
        <!-- <div>{{checkIfSongAtZero()}}</div> -->
        <!-- <div>{{isSongPlaying}}</div> -->
    </div>
</template>

<script>

import "./PlayButton.scss"

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
        // songIndex: Number,
        songIndex: Object,
        songTime: Number
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
            // will need to link to song duration
            
            // console.log("songTime: ", this.songTime)

            // create a v-model in parent
                // prop drill to PlayButton
                    // when pressPlay is clicked
                        // change state
        },
        // currently stops song. No pause
        pressPause() {
            this.isSongPlaying = !this.isSongPlaying
            this.$emit("resetTime");
            // may be able to emit currentsong to parent
            // this.$emit("resetTime", this.currentSong);
            
            // console.log("Song stopped");
            this.currentSong.pause();
            
            // when song is over, icon is still at pause
                // need to switch to play when finished
                // need to auto play to next song
        }
        // checkIfSongAtZero() {
        //     console.log("songTime: ", this.songTime)
        //     if (this.songTime === 0) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    }
}

</script>
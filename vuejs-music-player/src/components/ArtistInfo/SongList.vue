<template>
    <div>
        <div>
            <img 
                className="albumCover"
                :src="getImage()"
            />
        </div>
        <div className="songInfo">
            <div className="songName">
                <p>{{songList[songIndex.currentIndex].song}}</p>
            </div>
            <div className="songArtist">
                <p>{{songList[songIndex.currentIndex].artist}}</p>
            </div>
        </div>
        <div className="songTime">
            <div className="currentSongTime">
                <p>{{getCurrentSongTime()}}</p>
            </div>
            <div className="seekBar">
                <input 
                    type="range" 
                    min="0" 
                    v-bind:max="this.audioDuration" 
                    v-bind:value="incrementSeekbarMarker()"
                />
            </div>
            <div className="audioDuration">
                <p>{{getAudioDuration()}}</p>
            </div>
        </div>
    </div>
</template>

<script>
// remember to delete AlbumCover.vue
// import AlbumCover from './AlbumCover.vue'
import "./SongList.scss"

export default {
    name: "SongList",
    components: {
    },
    data() {
        return {
            audioDuration: null,
            convertedTime: null
        }
    },
    props: {
        songList: Array,
        songIndex: Object,
        songTime: Number
    },
    emits: ["stopTime"],
    methods: {
        getImage() {
            let albumImage = require(`../../assets/sampleAlbumCovers/${this.songList[this.songIndex.currentIndex].albumCoverFile}`)

            // add placeholder image file
            // create conditional for placeholder image

            return albumImage;
        },
        getAudioDuration() {
            const selectedAudio = require(`../../assets/sampleSongs/${this.songList[this.songIndex.currentIndex].songFile}`)

            let audioFile = new Audio(selectedAudio);

            audioFile.onloadedmetadata = ()=> {
                this.audioDuration = audioFile.duration
            }

            return this.secondsToMinutes(this.audioDuration);
        },
        secondsToMinutes(s) {
            s = Number(s);
            var minutes = Math.floor(s % 3600 / 60);
            var seconds = Math.floor(s % 3600 % 60)

            if (seconds < 10) {
                return minutes.toString() + ":0" + seconds.toString();
            } else {
                return minutes.toString() + ":" + seconds.toString();
            }

        },
        getCurrentSongTime() {
            if (this.songTime > this.audioDuration) {
                // console.log("song completed");
                this.$emit("stopTime");
                // will need to change "stop" button to "play" after
            }
            return this.secondsToMinutes(this.songTime);
        },
        incrementSeekbarMarker() {
            // set the input max to songduration
            // invoke current song time in value
                // marker will constantly update relative to max
            // function should invoke similar to getCurrentSongtime
                // every 1000 in setTimeout
            // let songDuration = this.audioDuration;
            // console.log("songDuration: ", songDuration);
            // console.log("currentSongTime: ", currentSongTime);

            let currentSongTime = this.songTime;
            return currentSongTime;
        }
    }
}

</script>
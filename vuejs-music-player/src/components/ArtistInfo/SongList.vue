<template>
    <div>
        <div>
            <img :src="getImage()"/>
        </div>
        <div>
            <p>{{getAudioDuration()}}</p>
        </div>
        <div>
            <p>{{songList[songIndex.currentIndex].song}}</p>
            <p>{{songList[songIndex.currentIndex].artist}}</p>
        </div>
    </div>
</template>

<script>
// remember to delete AlbumCover.vue
// import AlbumCover from './AlbumCover.vue'

export default {
    name: "SongList",
    components: {
    },
    data() {
        return {
            audioDuration: null
        }
    },
    props: {
        songList: Array,
        songIndex: Number
    },
    methods: {
        getImage() {
            return require(`../../assets/sampleAlbumCovers/${this.songList[this.songIndex.currentIndex].albumCoverFile}`)
            // console.log("cover: ", cover)
        },
        getAudioDuration () {
            const selectedAudio = require(`../../assets/sampleSongs/${this.songList[this.songIndex.currentIndex].songFile}`)

            let audioFile = new Audio(selectedAudio);

            audioFile.onloadedmetadata = ()=> {
                this.audioDuration = audioFile.duration
            }

            // will need to convert to mm/ss form here

            // console.log("getAudioDuration: ", this.audioDuration);
            this.secondsToMinutes(this.audioDuration);

            return this.audioDuration;
        },
        secondsToMinutes(s) {
            s = Number(s);
            var minutes = Math.floor(s % 3600 / 60);
            var seconds = Math.floor(s % 3600 % 60)

            console.log(minutes + ":" + seconds);
        }
    }
}

</script>
<template>
    <div>
        <div>
            <img :src="getImage()"/>
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
    props: {
        songList: Array,
        songIndex: Number
    },
    methods: {
        getImage() {
            return require(`../../assets/sampleAlbumCovers/${this.songList[this.songIndex.currentIndex].albumCoverFile}`)
            // console.log("cover: ", cover)
        }
    }
}

</script>
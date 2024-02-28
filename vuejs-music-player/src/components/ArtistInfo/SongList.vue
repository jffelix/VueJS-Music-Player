<template>
    <div>
        <div>
            <p>{{songList[songIndex.currentIndex].song}}</p>
            <p>{{songList[songIndex.currentIndex].artist}}</p>
        </div>
    </div>
</template>

<script>
// import AlbumCover from './AlbumCover.vue'

export default {
    name: "SongList",
    components: {
    },
    props: {
        songList: Array,
        songIndex: Number
    }
}

</script>
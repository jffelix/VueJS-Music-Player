<template>
    <div>
        <h2>Song List Component</h2>
        <div v-for="(song, index) in songList">
            <p>{{song.song}}</p>
            <p>{{song.artist}}</p>
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
        songList: Array
    }
}

</script>
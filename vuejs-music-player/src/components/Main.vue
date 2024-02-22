<template>
    <div>
        <h1>VueJS Music Player</h1>
        <PlayerControls />
    </div>
</template>

<script>
import PlayerControls from './PlayerControls/PlayerControls.vue'
// import AlbumCover from './ArtistInfo/AlbumCover.vue'
import sampleData from '../assets/sampleData.js'

export default {
  name: 'Main',
  components: {
    AlbumCover,
    PlayerControls
  },
  data() {
    return {
      songList: []
    }
  },
  created() {
    this.songList = sampleData
  }
}
</script>
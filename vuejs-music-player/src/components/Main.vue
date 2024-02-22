<template>
    <div>
        <h1>VueJS Music Player</h1>
        <AlbumCover />
        <PlayerControls />
    </div>
</template>

<script>
import PlayerControls from './PlayerControls/PlayerControls.vue'
import AlbumCover from './ArtistInfo/AlbumCover.vue'
import sampleData from '../assets/sampleData.js'

export default {
  name: 'Main',
  components: {
    AlbumCover,
    PlayerControls
  },
  props: {
  },
  data() {
    return {
      songList: sampleData
    }
  }
}
</script>
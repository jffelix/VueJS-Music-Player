<template>
    <div>
        <h1>VueJS Music Player</h1>
        <SongList
          :songList="this.songList"
        />
        <PlayerControls />
    </div>
</template>

<script>
import PlayerControls from './PlayerControls/PlayerControls.vue'
import SongList from './ArtistInfo/SongList.vue'
import sampleData from '../assets/sampleData.js'

export default {
  name: 'Main',
  components: {
    SongList,
    PlayerControls
  },
  data() {
    return {
      songList: []
    }
  },
  // Need to check if data is successfully imported
  created() {
    this.songList = sampleData
  }
}
</script>
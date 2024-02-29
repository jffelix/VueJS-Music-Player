<template>
    <div>
        <h1>VueJS Music Player</h1>
        <SongList
          :songList="this.songList"
          :songIndex="this.songIndex"
        />
        <PlayerControls 
          v-on:addItem="addCounter"
          v-on:subtractItem="subtractCounter"
        />
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
      songList: sampleData,
      songIndex: {}
    }
  },
  created() {
    this.songIndex = {
      currentIndex: 0
    }
  },
  methods: {
    subtractCounter() {
      if (this.songIndex.currentIndex > 0) {
        this.songIndex.currentIndex--
      }
      console.log("songIndex: ", this.songIndex.currentIndex);
    },
    addCounter() {
      if (this.songIndex.currentIndex < this.songList.length - 1) {
        this.songIndex.currentIndex++
      }
      console.log("songIndex: ", this.songIndex.currentIndex);
    }
  }
}
</script>
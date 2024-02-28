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
        <!-- <button v-on:click="prevSong">Test Decrement Index</button>
        <button v-on:click="nextSong">Test Increment Index</button> -->
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
    this.songList = sampleData,
    this.songIndex = 0
    return {
      songList: []
    }
  },
  methods: {
    subtractCounter() {
      this.songIndex--
      console.log("songIndex: ", this.songIndex);
    },
    addCounter() {
      this.songIndex++
      console.log("songIndex: ", this.songIndex);
      // console.log("You clicked nextSong!")
    }
  }
}
</script>
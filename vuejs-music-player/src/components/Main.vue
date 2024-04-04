<template>
    <div className="main">
        <div className="mainTitle">
            <h1>VueJS Music Player</h1>
        </div>
        <SongList
          :songList="this.songList"
          :songIndex="this.songIndex"
          :songTime="this.songTime"
          v-on:stopTime="stopTime"          
        />
        <PlayerControls 
          v-on:addItem="addCounter"
          v-on:subtractItem="subtractCounter"
          v-on:startTimer="startTimer"
          v-on:stopTime="stopTime"
          :songList="this.songList"
          :songIndex="this.songIndex"
        />
    </div>
</template>

<script>
import PlayerControls from './PlayerControls/PlayerControls.vue'
import SongList from './ArtistInfo/SongList.vue'
import sampleData from '../assets/sampleData.js'
import './Main.scss'

export default {
  name: 'Main',
  components: {
    SongList,
    PlayerControls
  },
  data() {
    return {
      songList: sampleData,
      songIndex: {},
      songTime: 0,
      isTimeRunning: false,
      interval: null
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
      // console.log("songIndex: ", this.songIndex.currentIndex);
    },
    addCounter() {
      if (this.songIndex.currentIndex < this.songList.length - 1) {
        this.songIndex.currentIndex++
      }
      // console.log("songIndex: ", this.songIndex.currentIndex);
    },
    startTimer() {
      this.songTime++
      this.isTimeRunning = !this.isTimeRunning;
      this.interval = setInterval(this.incrementTime, 1000);

      // console.log("songTime: ", this.songTime);
      // console.log("isTimeRunning: ", this.isTimeRunning);
    },
    incrementTime() {
      this.songTime = parseInt(this.songTime) + 1;
      // possible to check if song is completed here
    },
    stopTime() {
      this.isTimeRunning = !this.isTimeRunning;

      // console.log("songTime before stop: ", this.songTime);
      this.songTime = 0

      clearInterval(this.interval);

      // console.log("songTime: ", this.songTime);
      // console.log("isTimeRunning: ", this.isTimeRunning);
    }
  }
}
</script>
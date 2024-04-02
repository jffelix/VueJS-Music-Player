<template>
    <div className="controlButtons">
        <div className="prevButton">
            <PrevButton v-on:click="prevSong"/>
        </div>
        <div className="playButton">
            <PlayButton 
                v-on:addTime="addTime"
                v-on:resetTime="resetTime"
                :songList="this.songList"
                :songIndex="this.songIndex"
            />
        </div>
        <div className="nextButton">
            <NextButton v-on:click="nextSong"/>
        </div>
    </div>
</template>

<script>
import NextButton from "./NextButton.vue"
import PlayButton from "./PlayButton.vue"
import PrevButton from "./PrevButton.vue"
import "./PlayerControls.scss"

export default {
    name: "PlayerControls",
    components: {
        PrevButton,
        PlayButton,
        NextButton
    },
    props: {
        songList: Array,
        songIndex: Number
    },
    emits: ["addItem", "subtractItem", "startTimer", "stopTime"],
    // mixins: [PlayButton],
    // mounted() {
    //     this.pressPause();
    // },
    methods: {
        prevSong() {
            this.$emit("subtractItem");
            this.$emit("stopTime");
        },
        nextSong() {
            this.$emit("addItem");
            this.$emit("stopTime");
            // console.log(this.pressPause)
        },
        addTime() {
            this.$emit("startTimer");
        },
        resetTime() {
            this.$emit("stopTime");
        }
    }
}
</script>
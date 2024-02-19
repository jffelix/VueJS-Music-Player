<template>
    <div>
        <h1>Main Component</h1>
        <PlayerControls />
    </div>
</template>

<script>
import PlayerControls from './PlayerControls/PlayerControls.vue'

export default {
  name: 'Main',
  components: {
    PlayerControls
  },
  props: {
  }
}
</script>
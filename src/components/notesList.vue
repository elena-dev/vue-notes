<template>
  <div>
    <ul>
      <li v-for="note in getNote" :key="note.id">
        <div>
          <p>{{ note.text }}</p>
          <p>{{ new Date(note.date).toDateString() }}</p>
          <p @click="deleteNote({id:note.id})">Remove</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "notesList",
  computed: {
    ...mapGetters('notes', ['getNote']),
  },
  methods: {
    ...mapActions('notes', ['deleteNote']),
  },
  beforeCreate() {
    this.$store.commit("notes/init")
  },
}
</script>

<style lang="scss">
ul, li {
  list-style: none;
}

ul {
  overflow: hidden;
  display: flex;
  justify-content: center;

  li {
    margin: 1em;
    float: left;

    div {
      text-decoration: none;
      color: #000;
      background: #ffc;
      display: block;
      height: 10em;
      width: 10em;
      padding: 1em;
    }
  }
}

</style>


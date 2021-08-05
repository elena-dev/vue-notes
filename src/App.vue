<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <div class="content__inpt">
          <textarea v-model="text" placeholder="Title..." class="title"></textarea>
          <button class="btn btn-primary" @click="save">
            add note +
          </button>
        </div>
        <notes-list/>
      </div>
    </div>
  </div>
</template>

<script>
import notesList from "@/components/notesList.vue"
import guid from '@/mixins/guid'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      text: '',
      date: ""
    }
  },
  components: {
    notesList
  },
  mixins: [guid],
  methods: {
    ...mapActions('notes', ['addNote']),
    async save() {
      let data = {
        id: this.guidGenerator(),
        text: this.text,
        date: this.date,
      }
      await this.addNote(data)
          .then(this.reset())
    },
    reset() {
      this.id = null
      this.text = null
      this.date = null
    }
  },
}
</script>
<style lang="scss">
$primary: #f4f140;
$primary-h: #eec704;

.wrapper {
  margin: 0 auto;
  padding: 0 15px;
  width: 1236px;
}

.content {
  display: flex;
  flex-direction: column;

  &__inpt {
    margin: 2px;
    display: flex;
    align-self: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 9px 12px;
    background: transparent;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    &-primary {
      width: 50%;
      background-color: $primary;

      &:hover {
        background-color: $primary-h;
      }
    }
  }

  textarea {
    padding: 10px;
    max-width: 100%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    margin-right: 5px;
    &:focus {
      border: cornsilk;
    }
  }


}
</style>

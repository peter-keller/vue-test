<template>
  <MediumEditor
    class="content-editable"
    :text="value"
    :options="options"
    @edit="updateHTML"
  />
</template>

<script>
import MediumEditor from 'vue2-medium-editor'

export default {
  name: 'ContentEditable',

  components: {
    MediumEditor
  },

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      options: {
        toolbar: { buttons: ['bold', 'italic', 'underline'] }
      }
    }
  },

  methods: {
    updateHTML (operation) {
      this.$emit('input', operation.api.origElements.innerHTML)
    }
  }
}
</script>

<style src='medium-editor/dist/css/medium-editor.css' />

<template>
  <Paginate
    :page-count="pageCount"
    :click-handler="handleClick"
    :prev-text="prevText"
    :next-text="nextText"
    :container-class="'pagination'"
  />
</template>

<script>
import Paginate from 'vuejs-paginate'

export default {
  name: 'Pagination',

  components: {
    Paginate
  },

  props: {
    pageCount: {
      type: Number,
      required: true
    },

    prevText: {
      type: String,
      default: 'Prev'
    },

    nextText: {
      type: String,
      default: 'Next'
    }
  },

  methods: {
    handleClick (index) {
      this.$emit('click', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  list-style: none;

  ::v-deep li {
    margin: 0 6px;
  }
}
</style>

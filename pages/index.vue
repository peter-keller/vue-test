<template>
  <div class="home">
    <Pagination :page-count="pageCount" @click="changePage" />
    <table class="table">
      <tr>
        <th class="table__heading">
          Name
        </th>
        <th class="table__heading">
          Age
        </th>
        <th class="table__heading">
          Gender
        </th>
        <th class="table__heading">
          Eye color
        </th>
        <th class="table__heading">
          Preferred pet
        </th>
        <th class="table__heading">
          Preferred fruit
        </th>
      </tr>
      <tr v-for="(user) in pageData" :key="user._id">
        <td><ContentEditable v-model="pageData[user._id].name" /></td>
        <td><ContentEditable v-model="pageData[user._id].age" /></td>
        <td><ContentEditable v-model="pageData[user._id].gender" /></td>
        <td><ContentEditable v-model="pageData[user._id].eyeColor" /></td>
        <td>
          <ContentEditable v-model="pageData[user._id].preferences.pet" />
        </td>
        <td>
          <ContentEditable v-model="pageData[user._id].preferences.fruit" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import Pagination from '~/components/pagination'
import ContentEditable from '~/components/content-editable'

const { mapActions, mapGetters } = createNamespacedHelpers('users')

export default {
  name: 'Home',

  components: {
    Pagination,
    ContentEditable
  },

  async fetch () {
    // Fetching all users on page load and setting "1" as the default page to be displayed
    await this.fetchUsers()

    this.pageData = await this.fetchPage(1)
  },

  data () {
    return {
      // Setting the users on the page level to enable discard unsaved changes on page leave
      // Ideally would be nice place to use websockets if multiple people can update the sheet
      // at the same time
      pageData: []
    }
  },

  computed: {
    ...mapGetters(['users']),

    pageCount () {
      // Used to display the total amount of pages available
      return Math.ceil(Object.keys(this.users).length / 10)
    }
  },

  methods: {
    ...mapActions(['fetchUsers', 'fetchPage']),

    async changePage (page) {
      this.pageData = await this.fetchPage(page)
    }
  }
}
</script>

<style lang="scss" scoped>
  .table {
    width: 100%;

    &__heading {
      text-align: left;
    }
  }
</style>

<template>
  <div>
    <h1>Hello world!</h1>
    <span>Pilih kelas</span>
    <select v-model="sekolah">
      <option value="SMP Assalam"> SMP Assalam </option>
    </select>
  </div>
</template>

<script>
import Api from '~/middleware/routes_api/routes'
import _ from 'lodash'

export default {
  data () {
    return {
      sekolah: null
    }
  },
  created() {
    this.getSiswa({ 'sekolah': 'SMP Assalam' })
    // console.log(this._.chunk(['a', 'b', 'c', 'd'], 2))
  },
  methods: {
    getSiswa: async (params) => {
      const response = await Api.getJsonSiswa(params)
      // console.log(_.find(response.data), { 'RFID': { 'serial_number': 'asdf' } })
      console.log(response.data[1])
    }
  }
}
</script>
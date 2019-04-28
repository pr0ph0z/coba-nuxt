import Api from '../api_service'

export default {
  getJsonSiswa(params) {
    return Api().get('/data/' + params.sekolah + '_siswa.json')
  }
}
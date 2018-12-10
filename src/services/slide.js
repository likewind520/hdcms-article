import util from '@/services/util'

const slide = {
  get: async (limit = 10) => {
    return await util.api({url: 'carousels', data: {limit: limit}})
  }
}
export default slide

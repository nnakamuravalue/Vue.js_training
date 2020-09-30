import { shallowMount } from '@vue/test-utils'
import ImagePlaceholder from '@/ImagePlaceholder.vue'

describe('ImagePlaceholder.vue', () => {
  it('renders the correct url for New York images', () => {
    const sut = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200, images: 'newyork' }
    })
    expect(
        sut.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/200/newyork')
  })

  it('renders the correct url for Random images if not specified', () => {
    const sut = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height: 200 }
    })
    expect(
        sut.findAll('img').at(0).attributes().src)
        .toEqual('https://loremflickr.com/500/200/random')
  })

  it('renders a square image if height is not specified', () => {
    const sut = shallowMount(ImagePlaceholder, {
      propsData: {width: 500}
    })
    expect(
        sut.findAll('img').at(0).attributes().src)
        .toEqual('https://loremflickr.com/500/500/random')
  })
})
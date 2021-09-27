export default {
  head() {
    const head = { meta: [] }
    if (this.meta.title) {
      const title = `${this.meta.title} | SODA Web Designer’s Portfolio`
      head.title = title
      head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
      head.meta.push({
        hid: 'og:title',
        property: 'og:title',
        content: title,
      })
    }
    if (this.meta.description) {
      head.meta.push({
        hid: 'description',
        name: 'description',
        content: this.meta.description,
      })
      head.meta.push({
        hid: 'og:description',
        property: 'og:description',
        content: this.meta.description,
      })
    }
    return head
  },
}

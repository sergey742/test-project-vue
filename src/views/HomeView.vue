<template>
  <div>
    <PageParagraph
      v-for="paragraph in paragraphs"
      :key="paragraph.title"
      :title="paragraph.title"
      :text="paragraph.text"
    />
  </div>
</template>

<script setup lang="ts">
import PageParagraph from '@/components/pageParagraph/PageParagraph.vue'

const paragraphs = [
  {
    title: 'Title 1',
    text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
  },
  {
    title: 'Title 2',
    text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
  },
  {
    title: 'Title 3',
    text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
  },
  {
    title: 'Title 4',
    text: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum',
  },
]
</script>

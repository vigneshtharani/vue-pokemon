<template>
<div class="language-wrapper-wrapper">
  <ul class="pagination">
    <li class="pagination-item" @click="onClickFirstPage" aria-label="Go to first page" :class="{ disabled: isInFirstPage  }">
      <fa icon="angle-double-left" class="icons"></fa>
    </li>
    <li class="pagination-item" @click="onClickPreviousPage" :class="{ disabled: isInFirstPage  }" aria-label="Go to previous page">
      <fa icon="angle-left" class="icons"></fa>
    </li>
    <li v-for="page in pages" :key="page.name" class="pagination-item" @click="onClickPage(page.name)" :class="{ active: isPageActive(page.name), disabled: page.isDisabled  }" :aria-label="`Go to page number ${page.name}`">
      {{ page.name }}
    </li>
    <li v-if="(totalPages > maxVisibleButtons) && !isInLastPage" class="pagination-item">
      <span>...</span>
    </li>
    <li v-if="(totalPages > maxVisibleButtons) && !isInLastPage" class="pagination-item" @click="onClickLastPageNumber" aria-label="Go to Last page number">
      <span>{{totalPages}}</span>
    </li>
    <li class="pagination-item" @click="onClickNextPage" :class="{disabled: isInLastPage}" aria-label="Go to next page">
      <fa icon="angle-right" class="icons"></fa>
    </li>
    <li class="pagination-item" @click="onClickLastPage" :class="{disabled: isInLastPage}" aria-label="Go to last page">
      <fa icon="angle-double-right" class="icons"></fa>
    </li>
  </ul>
</div>
</template>
<style lang="scss" src="./pagination.scss"></style>
<script lang="js" src="./pagination.ts"></script>

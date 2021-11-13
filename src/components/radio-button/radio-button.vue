<template>
<div class="radio-wrapper">
  <template v-for="item of radioValues" :key="item.value">
    <label class="radio">
      <input type="radio" :value="item.value" :name="item.name" v-model="selectedValue">
      <span>{{item.label}}</span>
    </label>
  </template>
</div>
</template>
<style lang="scss" src="./radio-button.scss"></style>
<script lang="js" src="./radio-button.ts"></script>

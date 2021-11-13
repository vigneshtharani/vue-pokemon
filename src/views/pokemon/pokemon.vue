<template>
<div class="pokemon-container">
  <div class="image-container">
    <img src="@/assets/images/logo.png">
  </div>
  <div class="detail-container">
    <template v-if="isLoaded">
      <div class="row-image">
        <img v-bind:src="pokemonDetail.sprites.other.dream_world.front_default" />
      </div>
      <div class="row-content">
        <div class="row-name">
          <label>Name: </label>
          <span>{{pokemonDetail.name}}</span>
        </div>
        <div class="row-height">
          <label>Height: </label>
          <span>{{pokemonDetail.height}}</span>
        </div>
        <div class="row-weight">
          <label>Weight: </label>
          <span>{{pokemonDetail.weight}}</span>
        </div>
      </div>
    </template>
  </div>
</div>
</template>
<style lang="scss" src="./pokemon.scss"></style>
<script lang="js" src="./pokemon.ts"></script>

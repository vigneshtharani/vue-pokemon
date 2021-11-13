<template>
<div ref="section" class="pokemon-list-container">
  <div class="image-container">
    <img src="@/assets/images/logo.png">
  </div>
  <div class="list-container">
    <ul class="pokemon-list">
      <li class="pokemon" v-for="pokemon of pokemonList" :key="pokemon.name">
        <router-link :to="{path: `/pokemons/${pokemon.name}`}">{{pokemon.name}}</router-link>
      </li>
    </ul>
  </div>
  <div class="navigation-container">
    <radio-button :radioValues="radioValues" @radioChanged="onRadioChanged"></radio-button>
    <div class="navigation-selected-container">
      <template v-if="isShowPagination">
        <pagination :total-pages="totalPages" :total="totalPokemonList" :per-page="perPage" :current-page="currentPage" @pagechanged="onPageChange" />
      </template>
      <template v-else>
        <button v-on:click="loadMore">
          <template v-if="isShowMoreLoad">
            <pulse-loader></pulse-loader>
          </template>
          <template v-else>
            Load More
          </template>
        </button>
      </template>
    </div>
  </div>
</div>
</template>
<style lang="scss" src="./pokemon-list.scss"></style>
<script lang="js" src="./pokemon-list.ts"></script>

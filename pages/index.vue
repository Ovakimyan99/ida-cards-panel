<template>
  <main ref="main" class="panel-wrapper container">
    <!--  Form  -->
    <visibility-wrapper ref="formModal" class="panel-modal">
      <aside class="panel-form-wrapper">
        <!--  Раздел добавления товаров  -->
        <div class="panel-form-picker">
          <div class="panel-form">
            <h2 class="panel-form__title">
              Добавление товара
            </h2>

            <!--  Форма добавления товаров  -->
            <panel-form @submit="submitForm" />
          </div>

          <panel-form-button class="panel-form-close-btn" @click="closeFormModal">
            Закрыть форму
          </panel-form-button>
        </div>
      </aside>
    </visibility-wrapper>

    <!--  Products  -->
    <div class="panel-products">
      <!--   Отображение фильтра   -->
      <app-filter
        class="panel-filter"
        :options="filterOptions"
        @selectedFilter="changeSelectedFilter"
      />

      <!--   Мобилка: Бургер открытия формы   -->
      <app-burger
        ref="formBurger"
        class="panel__form-show"
        @click="changeShowForm"
      />

      <!--   Список карт   -->
      <div class="cards-list-wrapper">
        <ul class="cards-list">
          <LazyPanelCard
            v-for="{id, imgLink, descr, name, price} of productsList"
            :key="id"
            :name="name"
            :img-url="imgLink"
            :description="descr"
            :price="price"
          />
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { PRODUCTS_LIST } from 'assets/js/constants'
import { storage } from '@/core/utils'

export default {
  name: 'IndexPage',
  data() {
    return {
      productsList: [],

      filterSelected: '',
      filterOptions: [
        { text: 'По цене min', value: 'min' },
        { text: 'По цене max', value: 'max' },
        { text: 'По наименованию', value: 'named' }
      ]
    }
  },
  watch: {
    filterSelected() {
      storage(PRODUCTS_LIST, this.productsList)
    }
  },
  mounted () {
    this.productsList = storage(PRODUCTS_LIST) || []
  },
  methods: {
    changeSelectedFilter(val) {
      // val
    },
    async changeShowForm() {
      const formModal = this.$refs.formModal
      this.$refs.formBurger.changeState()

      const modalResult = await formModal.open()
      this.$refs.formBurger.changeState()

      if (modalResult) {
        // add new card
      }
    },
    closeFormModal() {
      this.$refs.formModal.close()
    },
    submitForm (event) {
      this.$refs.formModal.success()
    }
  }
}
</script>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";
@use "@/assets/styles/_mixins.scss";

%flex-column-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

%sticky-menu {
  position: sticky;
  top: 20px;
}

.panel {
  &-wrapper {
    margin: 32px auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-modal {
    @media (min-width: 960px) {
      display: block !important;

      position: sticky;
      top: 32px;
    }
  }

  &-filter {
    @extend %sticky-menu;

    @media (min-width: 960px) {
      display: block;
      position: relative;
      top: 0;
      margin-left: auto;
    }
  }

  &-form-wrapper {
    position: fixed;
    @extend %flex-column-center;
    background-color: color.adjust(colors.$text, $alpha: -0.4);
    width: calc(100vw - 32px);
    height: calc(100vh - 20px);
    padding: 10px 16px;
    z-index: 5;
    top: 0;
    left: 0;

    @media (min-width: 960px) {
      position: relative;
      display: block;
      padding: 0;
      height: auto;
      width: auto;
      background-color: transparent;
    }
  }

  &-form {
    flex-shrink: 1;
    max-width: 288px;
    position: relative;
    z-index: 2;
    transition: margin-left 0.7s ease;
    transform: none;
    max-height: max-content;
    overflow-y: auto;
    border-radius: params.$substrate-border-radius;

    @media (min-width: 960px) {
      flex-shrink: 0;
      max-height: none;
      overflow: visible;
    }

    @media (min-width: 1256px) {
      max-width: 332px;
    }
  }

  &-form-picker {
    height: calc(100vh - 20px);
    @extend %flex-column-center;

    @media (min-width: 960px) {
      height: auto;
    }
  }

  &-form__title {
    display: none;
    font-weight: 600;
    line-height: 1.25;
    color: colors.$text;
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 16px;

    @media (min-width: 960px) {
      display: block;
    }
  }

  &__form-show {
    @extend %sticky-menu;
    box-shadow: colors.$input-shadow;
    background-color: colors.$substrate-fon;
    border-radius: params.$substrate-border-radius;
    float: right;
    z-index: 3;

    @media (min-width: 960px) {
      display: none;
    }
  }

  &-form-close-btn {
    margin-top: 10px;
    box-shadow: colors.$substrate-shadow;
    background-color: colors.$substrate-fon;
    color: colors.$text;

    @include mixins.events-btn-bg(colors.$substrate-fon, 10%, 10%);

    @media (min-width: 960px) {
      display: none;
    }
  }
}

.panel-products {
  position: relative;
  flex-basis: 100%;

  @media (min-width: 960px) {
    margin-left: 16px;
  }
}

.cards-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;
  flex: 1;
  z-index: 1;
  transition: margin-right 0.7s ease;

  @media (min-width: 860px) {
    flex-shrink: 1;
  }

  @media (min-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1256px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &-wrapper {
    display: flex;
    margin-top: 16px;
  }
}
</style>

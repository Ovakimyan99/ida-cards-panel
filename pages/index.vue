<template>
  <main ref="main" class="panel-wrapper container">
    <aside class="panel-form-wrapper">
      <div class="panel-form-picker">
        <!--  Раздел добавления товаров  -->
        <div class="panel-form">
          <h2 class="panel-form__title">
            Добавление товара
          </h2>
          <!--  Форма добавления товаров  -->
          <panel-form />
        </div>
        <panel-form-button class="panel-form-close-btn">
          Закрыть форму
        </panel-form-button>
      </div>
    </aside>
    <!--  Товары  -->
    <div class="panel-products">
      <!--   Отображение фильтра   -->
      <app-filter
        :options="filterOptions"
        @selectedFilter="changeSelectedFilter"
      />
      <!--   Мобилка: Бургер открытия формы   -->
      <app-burger
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
import { disableScroll, enablesScroll } from 'assets/js/windowScroll'

export default {
  name: 'IndexPage',
  data() {
    return {
      productsList: [
        {
          id: 1,
          imgLink: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
          name: 'Это котик',
          descr: 'Описание скоро сделаем длинным',
          price: 10000
        },
        {
          id: 2,
          imgLink: 'https://icdn.lenta.ru/images/2021/12/30/17/20211230175542538/square_1280_9852fabcde7147edee00deeafde2a2e0.jpg',
          name: 'Тигр',
          descr: 'ываджлдоыаволджыва вылдорлджыва',
          price: 10000
        },
        {
          id: 3,
          imgLink: 'https://meloman.ru/media/upload/photos/Bethoven_3.820x350.jpg',
          name: 'Бетховен',
          descr: '',
          price: 10000
        },
        {
          id: 4,
          imgLink: 'https://radior.lt/wp-content/uploads/2021/04/7-2.jpg',
          name: 'Муххамад Али',
          descr: '',
          price: 10000
        },
        {
          id: 5,
          imgLink: 'https://2bitcoins.ru/wp-content/uploads/2021/08/peterson1.jpg',
          name: 'Джордан Питерсон',
          descr: '',
          price: 10000
        },
        {
          id: 6,
          imgLink: 'https://neoclassica.ru/wp-content/uploads/2021/12/ludovico-einaudi-underwater-new-album-announce.jpeg',
          name: 'Людовико Эйнауди',
          descr: '',
          price: 10000
        },
        {
          id: 7,
          imgLink: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
          name: 'Это котик',
          descr: 'Описание скоро сделаем длинным',
          price: 10000
        },
        {
          id: 8,
          imgLink: 'https://icdn.lenta.ru/images/2021/12/30/17/20211230175542538/square_1280_9852fabcde7147edee00deeafde2a2e0.jpg',
          name: 'Тигр',
          descr: 'ываджлдоыаволджыва вылдорлджыва',
          price: 10000
        },
        {
          id: 9,
          imgLink: 'https://meloman.ru/media/upload/photos/Bethoven_3.820x350.jpg',
          name: 'Бетховен',
          descr: '',
          price: 10000
        },
        {
          id: 10,
          imgLink: 'https://radior.lt/wp-content/uploads/2021/04/7-2.jpg',
          name: 'Муххамад Али',
          descr: '',
          price: 10000
        },
        {
          id: 11,
          imgLink: 'https://2bitcoins.ru/wp-content/uploads/2021/08/peterson1.jpg',
          name: 'Джордан Питерсон',
          descr: '',
          price: 10000
        },
        {
          id: 12,
          imgLink: 'https://neoclassica.ru/wp-content/uploads/2021/12/ludovico-einaudi-underwater-new-album-announce.jpeg',
          name: 'Людовико Эйнауди',
          descr: '',
          price: 10000
        }
      ],

      filterSelected: '',
      filterOptions: [
        { text: 'По цене min', value: 'min' },
        { text: 'По цене max', value: 'max' },
        { text: 'По наименованию', value: 'named' }
      ],

      showForm: true
    }
  },
  watch: {
    filterSelected() {
      // this.filterSelected
    },
    showForm() {
      if (this.showForm) {
        enablesScroll()
      } else {
        disableScroll()
      }
    }
  },
  methods: {
    changeSelectedFilter(val) {
      // val
    },
    changeShowForm() {
      this.showForm = !this.showForm
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

.panel {
  &-wrapper {
    margin: 32px auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
      position: sticky;
      top: 32px;
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
    box-shadow: colors.$input-shadow;
    background-color: colors.$substrate-fon;
    border-radius: params.$substrate-border-radius;
    position: relative;
    float: right;

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

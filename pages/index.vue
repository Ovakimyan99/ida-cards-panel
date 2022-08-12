<template>
  <main class="panel-wrapper container">
    <!--  Раздел добавления товаров  -->
    <div class="panel-form">
      <h2 class="panel-form-title">
        Добавление товара
      </h2>
      <!--  Форма добавления товаров  -->
      <panel-form />
    </div>
    <div class="panel-products">
      <!--   Отображение фильтра   -->
      <app-filter
        :options="filterOptions"
        @selectedFilter="changeSelectedFilter"
      />
      <!--   Список карт   -->
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
  </main>
</template>

<script>
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
        }
      ],

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
      console.log(this.filterSelected)
    }
  },
  methods: {
    changeSelectedFilter(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";

.panel {
  &-wrapper {
    margin: 32px auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-products {
    margin-left: 16px;
    flex-basis: 100%;
  }

  &-form {
    position: sticky;
    flex-shrink: 0;
    max-width: 332px;
    top: 32px;

    &-title {
      font-weight: 600;
      font-size: 28px;
      line-height: 1.25;
      color: colors.$text;
      margin: 0 0 16px 0;
    }
  }
}

.cards-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  z-index: 1;
}
</style>

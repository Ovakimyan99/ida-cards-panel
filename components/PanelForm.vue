<template>
  <form class="form">
    <panel-form-field class="form-field" input-id="name-of-product" required>
      <template #label>Наименование товара</template>
      <template #input>
        <panel-form-input id="name-of-product" placeholder="Введите наименование товара" />
      </template>
    </panel-form-field>
    <panel-form-field class="form-field" input-id="product-description">
      <template #label>Описание товара</template>
      <template #input>
        <panel-form-input id="product-description" type="textarea" placeholder="Введите описание товара" />
      </template>
    </panel-form-field>
    <panel-form-field class="form-field" input-id="img-link" required>
      <template #label>Ссылка на изображение товара</template>
      <template #input>
        <panel-form-input id="img-link" placeholder="Введите ссылку" />
      </template>
    </panel-form-field>
    <panel-form-field class="form-field form-field--last" input-id="production-cost" required>
      <template #label>Цена товара</template>
      <template #input>
        <panel-form-input id="production-cost" placeholder="Введите цену" />
      </template>
    </panel-form-field>

    <panel-form-button class="form-button">
      Добавить товар
    </panel-form-button>
  </form>
</template>

<script>
export default {
  name: 'PanelForm'
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";

.form {
  padding: 24px;
  box-shadow: colors.$substrate-shadow;
  background-color: colors.$substrate-fon;
  border-radius: params.$substrate-border-radius;

  &-field {
    margin-bottom: 16px;

    &--last {
      margin-bottom: 0;
    }
  }

  &-button {
    margin-top: 24px;
  }
}
</style>

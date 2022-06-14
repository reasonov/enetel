<template>
  <div class="boost-card card" :style="'background-image:' +  'url(' + require('../../assets/img/' + cardData.image) + ')'">
    <div class="card__header">
      <h3 class="boost__title">{{ cardData.title }}</h3>
      <p class="boost__subtitle" v-if="cardData.subtitle">{{ cardData.subtitle }}</p>
    </div>
    <p class="boost__price">
      <span class="orange">{{ cardData.price }} ₽ &nbsp;</span>
      / месяц
    </p>
    <button class="boost__link link--main">Подключить</button>
  </div>
</template>

<script>
export default {
  name: "BoostCard",
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

  .boost-card {
    padding: 35px;

    background-position: top right;
    background-repeat: no-repeat;
  }

  .card__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 190px;
    height: 90px;
    margin-bottom: 20px;
  }

  .boost__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
  }

  .boost__subtitle {
    font-size: 24px;
    font-weight: 300;
    line-height: 26px;
  }

  .boost__price {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;

    font-size: 16px;
    line-height: 20px;
  }

  .orange {
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
    color: #EF7957;
  }
</style>
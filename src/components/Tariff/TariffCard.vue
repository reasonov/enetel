<template>
  <div class="card">
    <div :class="['card__header', color]">
      <h3 class="card__title">{{ cardData.title }}</h3>
    </div>
    <ul class="card__list">
      <li class="card__item" v-for="(item, index) in cardData.list" :key="index">
        <img src="../../assets/img/tick-icon.svg" alt="" v-if="item.state">
        <p class="card__text">{{ item.name }}</p>
      </li>
    </ul>
    <div class="card--bottom">
      <p class="card__price">
        {{ cardData.price }} ₽
        <span class="price__time"> / месяц</span>
      </p>
      <p class="price__year">
        <span class="price__bold">{{ cardData.yearPrice }} ₽</span>
        &nbsp; При оплате за год
      </p>
      <button class="card__link link--main">Подключить</button>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "TariffCard",
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  setup(props) {

    const color = computed(() => {
      if(props.cardData.title === 'Стандартный') {
        return 'green'
      } else if(props.cardData.title === 'Средний') {
        return 'blue'
      } else {
        return 'orange'
      }
    })

    return { color }

  }
}
</script>

<style scoped>

  .card__header {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
  }

  .card__title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }

  .card__list {
    padding: 40px 0;
    margin: 0 25px;

    border-bottom: 1px solid #D9D9D9;
  }

  .card__item {
    display: flex;
    align-items: flex-end;
  }

  .card__item:not(:last-child) {
    margin-bottom: 25px;
  }

  .card__item img {
    margin-bottom: 2px;
  }

  .card__text {
    margin-left: 10px;

    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .card--bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px 55px 50px 55px;
  }

  .card__price {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;

    font-size: 32px;
    font-weight: 800;
    line-height: 40px;
    color: #EF7957;
  }

  .price__time {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #333436;
  }

  .price__year {
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;

    font-size: 14px;
    line-height: 18px;
  }

  .price__bold {
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
  }

  .card__link {
    width: 100%;
  }

  .green {
    background: linear-gradient(94.71deg, rgba(100, 255, 134, 0.48) 11.75%, rgba(176, 231, 188, 0.48) 102.25%), #00BE90;
  }

  .orange {
    background: linear-gradient(273.26deg, #EA6D49 -22.82%, #FF8D6C 106.3%);
  }

  .blue {
    background: linear-gradient(95.49deg, #69D1FE -12.94%, #00A1E7 103.79%), #029ADF;
  }
</style>
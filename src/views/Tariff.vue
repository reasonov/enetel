<template>
  <div class="tariff-page">
    <h2 class="tariff__title title">Тарифные планы</h2>
    <div class="tariff__wrapper">
      <tariff-card :cardData="card" v-for="(card, index) in tariffList" :key="index" />
    </div>
    <h2 class="boost__title title">Продвижение</h2>
    <p class="boost__subtitle subtitle">Отличный способ привлечь клиентов</p>
    <div class="boost__wrapper">
      <boost-card :cardData="card" v-for="(card, index) in boostList" :key="index" />
    </div>
  </div>
</template>

<script>
import TariffCard from "@/components/Tariff/TariffCard";
import BoostCard from "@/components/Tariff/BoostCard";

export default {
  name: "Tariff",
  components: {
    TariffCard,
    BoostCard
  },
  setup() {

    const tariffList = [
      {
        title: 'Стандартный',
        list: [
          {
            name: 'Тариф "Базовый"',
            state: true
          },
          {
            name: 'Статистика по доходам',
            state: true
          },
          {
            name: 'Статистика по клиентам',
            state: true
          },
          {
            name: 'Статистика по конкурентам',
            state: true
          },
          {
            name: 'Рассылка уведомлений',
            state: true
          },
          {
            name: 'Особое отображение на карте',
            state: true
          },
          {
            name: 'Сертификаты',
            state: true
          },
          {
            name: 'Возвращаемость',
            state: true
          }
        ],
        price: 499,
        yearPrice: 4990
      },
      {
        title: 'Средний',
        list: [
          {
            name: 'Тариф "Базовый"',
            state: true
          },
          {
            name: 'Статистика по доходам',
            state: true
          },
          {
            name: 'Статистика по клиентам',
            state: true
          },
          {
            name: 'Статистика по конкурентам',
            state: true
          },
          {
            name: 'Рассылка уведомлений',
            state: true
          },
          {
            name: 'Особое отображение на карте',
            state: true
          },
          {
            name: 'Сертификаты',
            state: true
          },
          {
            name: 'Возвращаемость',
            state: true
          }
        ],
        price: 799,
        yearPrice: 7499
      },
      {
        title: 'Максимальный',
        list: [
          {
            name: 'Тариф "Базовый"',
            state: true
          },
          {
            name: 'Статистика по доходам',
            state: true
          },
          {
            name: 'Статистика по клиентам',
            state: true
          },
          {
            name: 'Статистика по конкурентам',
            state: true
          },
          {
            name: 'Рассылка уведомлений',
            state: true
          },
          {
            name: 'Особое отображение на карте',
            state: true
          },
          {
            name: 'Сертификаты',
            state: true
          },
          {
            name: 'Возвращаемость',
            state: true
          }
        ],
        price: 1299,
        yearPrice: 11990
      },
    ]

    const boostList = [
      {
        title: 'Премиум',
        subtitle: 'Размещение в списке лидеров',
        price: 1600,
        image: 'boost-bg1.png'
      },
      {
        title: 'Особое отображение на карте',
        subtitle: '',
        price: 1600,
        image: 'boost-bg2.png'
      }
    ]

    return { tariffList, boostList }

  }
}
</script>

<style scoped>

  .tariff-page {
    padding: 30px 40px 80px 30px;
  }

  .tariff__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;

    padding-bottom: 145px;
    margin-top: 50px;
    margin-bottom: 50px;

    border-bottom: 1px solid #E0E0E0;
  }

  .boost__title {
    margin-bottom: 30px;
  }

  .boost__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;

    margin-top: 40px;
  }
</style>
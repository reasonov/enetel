<template>
  <div class="ranking-page">
    <div class="ranking__header">
      <h2 class="ranking__title title">Топ мастеров</h2>
    </div>
    <div class="ranking__map">
      <p class="map__text">
        Местоположение
        <span class="map--bold">Россия, Уфа</span>
      </p>
      <img src="../assets/img/arrow-bottom.svg" alt="" class="map__arrow">
    </div>

    <ul class="ranking__paid">
      <li class="paid__card" v-for="(master, index) in paidList" :key="index">
        <img :src="require('../assets/img/paid-masters/' + master.image + '.png')" alt="" class="paid__photo">
        <p class="paid__name">{{ master.name }}</p>
        <p class="paid__job">{{ master.job }}</p>
        <div class="paid__locate locate">
          <img src="../assets/img/map-mark.svg" alt="" class="locate__mark">
          <p class="locate__text">{{ master.map }}</p>
        </div>
        <a :href="master.link" class="paid__link link--main">Открыть профиль</a>
      </li>
    </ul>

    <div class="ranking__main">
      <div class="main__header">
        <div class="drop-menu">
          <p class="drop__text">Все мастера</p>
          <img src="../assets/img/arrow-bottom.svg" alt="">
        </div>
        <div>
          <p class="main__update">До обновления списка <span class="update--bold">3</span> дня</p>
          <a href="/" class="update__link article--link">Как попасть в список лучших мастеров?</a>
        </div>
      </div>

      <ul class="master__list">
        <li class="master__card" v-for="(master, index) in rankList" :key="index">
          <p class="master__index">{{ index + 1 }}</p>
          <img :src="require('../assets/img/ranking/' + master.photo + '.png')" alt="" class="master__photo">
          <p class="master__name">{{ master.name }}</p>
          <p class="master__job">{{ master.job }}</p>
          <div class="locate">
            <img src="../assets/img/map-mark.svg" alt="" class="locate__mark">
            <p class="locate__text">{{ master.locate }}</p>
          </div>
          <div class="master__category">
            <img src="../assets/img/crown.svg" alt="" v-show="master.category">
            <p class="category__text">{{ master.category }}</p>
          </div>
          <a :href="master.link" class="master__link link--main">Открыть профиль</a>
        </li>
        <li class="master__card">
          <p class="master__index">23</p>
          <img src="../assets/img/ranking/profile-photo4.png" alt="" class="master__photo">
          <p class="master__name">Илья Куновский</p>
          <p class="master__job">Бровист</p>
          <div class="locate">
            <img src="../assets/img/map-mark.svg" alt="" class="locate__mark">
            <p class="locate__text">Россия, Уфа</p>
          </div>
          <div class="master__category"></div>
          <a href="/" class="master__link link--main">Открыть профиль</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  setup() {

    const paidList = [
      {
        name: 'Роберт Качинский',
        job: 'Мастер по маникюру',
        map: 'Россия, Уфа',
        image: 'profile-photo1',
        link: '/'
      },
      {
        name: 'Мая Краснова',
        job: 'Мастер по волосам',
        map: 'Россия, Уфа',
        image: 'profile-photo2',
        link: '/'
      },
      {
        name: 'Лилия Ахтямова',
        job: 'Мастер по маникюру',
        map: 'Россия, Уфа',
        image: 'profile-photo3',
        link: '/'
      },
      {
        name: 'Николай Козырев',
        job: 'Массажист',
        map: 'Россия, Уфа',
        image: 'profile-photo4',
        link: '/'
      },
      {
        name: 'Алина Нартова',
        job: 'Косметолог',
        map: 'Россия, Уфа',
        image: 'profile-photo5',
        link: '/'
      }
    ]

    const rankList = [
      {
        photo: 'profile-photo1',
        name: 'Роберт Качинский',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo2',
        name: 'Кирилл Коровин',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo3',
        name: 'Марина Власова',
        job: 'Мастер по педикюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo4',
        name: 'Андрей Соломин',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: 'Топ по маникюру',
        link: '/'
      },
      {
        photo: 'profile-photo5',
        name: 'Глеб Хариев',
        job: 'Парикхмахер',
        locate: 'Россия, Уфа',
        category: 'Топ в тату',
        link: '/'
      },
      {
        photo: 'profile-photo6',
        name: 'Надежда Ломова',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo7',
        name: 'Роберт Качинский',
        job: 'Тату мастер',
        locate: 'Россия, Уфа',
        category: 'Топ по тату',
        link: '/'
      },
      {
        photo: 'profile-photo8',
        name: 'Кирилл Коровин',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo9',
        name: 'Марина Власова',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo10',
        name: 'Андрей Соломин',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo11',
        name: 'Глеб Хариев',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      },
      {
        photo: 'profile-photo12',
        name: 'Надежда Ломова',
        job: 'Мастер по маникюру',
        locate: 'Россия, Уфа',
        category: '',
        link: '/'
      }
    ]

    return { paidList, rankList }

  }
}
</script>

<style scoped>

.ranking-page {
  max-width: 1170px;
  padding: 45px 30px 80px 30px;
  box-sizing: border-box;
}

.ranking__header {
  margin-bottom: 30px;
}

.ranking__map {
  display: flex;
  align-items: flex-end;

  margin-bottom: 30px;
}

.map__text {
  font-size: 16px;
  line-height: 20px;
}

.map--bold {
  margin-left: 10px;
  margin-right: 5px;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

.map__arrow {
  margin-bottom: 5px;
}

.ranking__paid {
  display: flex;
  margin-bottom: 55px;
}

.paid__card {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 25px;

  box-shadow: 0 0 4px -2px rgba(24, 39, 75, 0.12), 0 3px 8px -2px rgba(24, 39, 75, 0.18);
  border-radius: 11px;

  background: #FAFAFA;
}

.paid__card:not(:last-child) {
  margin-right: 15px;
}

.paid__photo {
  width: 80px;
  height: 80px;

  border-radius: 50%;
}

.paid__name {
  margin-top: 15px;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

.paid__job {
  margin-top: 6px;

  font-size: 14px;
  line-height: 18px;
  color: #828496;
}

.paid__locate {
  margin-top: 15px;
}

.paid__link {
  padding: 0 15px;

  font-size: 14px;
}

.locate {
  display: flex;
  align-items: center;
}

.locate__text {
  margin-left: 5px;

  font-size: 12px;
  line-height: 15px;
  color: #828496;
}

.paid__link {
  margin-top: 25px;
}

.main__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 35px;
}

.drop-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 220px;
  height: 40px;
  padding: 10px 15px;

  border: 1px solid #E0E0E0;
  border-radius: 8px;
  box-sizing: border-box;
}

.main__update {
  margin-bottom: 15px;

  font-size: 14px;
  line-height: 18px;
}

.update--bold {
  font-weight: 700;
}

.master__card {
  display: grid;
  grid-template-columns: 0.9fr 4.8fr 16.6fr 19.6fr 14.2fr 18.5fr 13.8fr;
  grid-column-gap: 15px;
  align-items: center;

  height: 70px;
  padding: 0 20px;
  margin-bottom: 5px;

  box-shadow: 0 0 4px -2px rgba(24, 39, 75, 0.12), 0 3px 8px -2px rgba(24, 39, 75, 0.18);
  border-radius: 11px;

  background: #FFFFFF;
}

.master__index {
  font-size: 16px;
}

.master__photo {
  width: 49px;
  height: 49px;
  border-radius: 50%;
}

.master__name {
  font-size: 14px;
  font-weight: 700;
}

.master__job {
  font-size: 14px;
  font-weight: 600;
}

.master__category {
  display: flex;
  align-items: center;
}

.category__text {
  margin-left: 7px;

  font-size: 14px;
  font-weight: 500;
}

.locate__mark {
  width: 11px;
  height: 13px;
}

.master__link {
  padding: 0 10px;

  font-size: 14px;
}


</style>
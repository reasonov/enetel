<template>
  <div class="home-page">
    <div class="records section">
      <h2 class="records__title title">Ближайшие записи</h2>
      <div class="records__wrapper wrapper">
        <div class="records__block block--first">
          <p class="records__subtitle subtitle">Количество записей</p>
          <p class="records__stat stat">126</p>
        </div>
        <div class="records__block block--second">
          <p class="records__subtitle subtitle">Запланированная выручка</p>
          <p class="records__stat stat">800 $</p>
        </div>
        <button class="records__link link--main">Журнал записей</button>
      </div>
    </div>

    <div class="finances section">
      <div class="finances__area">
        <h2 class="finances__title title">Финансовый отчет за месяц</h2>
        <div class="finances__wrapper wrapper">
          <div class="finances__block block--first">
            <p class="finances__subtitle subtitle">Пришло клиентов</p>
            <p class="finances__stat stat">26</p>
          </div>
          <div class="finances__block block--second">
            <p class="finances__subtitle subtitle">Полная сумма выручки</p>
            <p class="finances__stat stat orange">1200 $</p>
          </div>
        </div>
        <button class="finances__link link--main">Финансовый отчет</button>
      </div>
      <div class="finances__area finances__area2"></div>
    </div>

    <div class="ranking section">
      <h2 class="ranking__title title">Место в рейтинге</h2>
      <div class="ranking__wrapper wrapper">
        <div class="ranking__block block--first">
          <p class="ranking__subtitle subtitle">Ваше место в общем рейтинге</p>
          <p class="ranking__stat stat">112</p>
        </div>
        <div class="ranking__block block--second">
          <p class="ranking__subtitle subtitle">Ваше место среди мастеров по бровям</p>
          <p class="ranking__stat stat">16</p>
        </div>
        <a href="/" class="ranking__article article--link">Как поднять свое место в рейтинге?</a>
        <button class="ranking__link link--second">Купить платное продвижение</button>
      </div>
    </div>

    <div class="statistics section">
      <h2 class="statistics__title title">Моя статистика</h2>
      <div class="statistics__wrapper wrapper">
        <div class="statistics__block statistics__block1">
          <p class="statistics__subtitle subtitle">Мои клиенты</p>
          <p class="statistics__stat stat">320</p>
          <button class="statistics__link link--main">Мои клиенты</button>
        </div>
        <div class="statistics__block2"></div>
        <div class="statistics__block">
          <p class="statistics__subtitle subtitle">Ваш профиль посетили</p>
          <p class="statistics__stat stat">1352</p>
          <button class="statistics__link link--second">Найти клиентов</button>
        </div>
      </div>
    </div>

    <div class="tariff section">
      <div class="tariff__block block--big">
        <h2 class="tariff__title title">Информация по тарифному плану</h2>
        <div class="tariff__info">
          <p class="tariff__text">
            Ваш тарифный план:
            <span class="blue">Средний</span>
          </p>
          <p class="tariff__date">Истекает: 27.05.2022</p>
        </div>
        <div>
          <button class="tariff__link link--main">Настройка тарифного плана</button>
        </div>
      </div>
      <div class="notes__block">
        <h2 class="notes__title title">Мои заметки</h2>
        <div class="notes__info">
          <p class="notes__number">
            Заметок:
            <span class="orange">12</span>
          </p>
          <p class="notes__date">10.05.2022</p>
          <p class="notes__text">Клиент на 10 часов, возможно опаздает на 15 минут..</p>
        </div>
        <div>
          <button class="notes__link link--main">Перейти в заметки</button>
        </div>
      </div>
    </div>

    <div class="comments">
      <h2 class="comments__title title">Отзывы</h2>
      <div class="comments__header">
        <p class="comments__subtitle">Последний отзыв</p>
        <a href="/" class="comments__link article--link">Все отзывы</a>
      </div>
      <div class="comments__wrapper wrapper">
        <article class="comments__item block--big">
          <p class="comments__name">Алина В.</p>
          <p class="comments__text">
            Очень понравились услуги данного мастера. Все пожелания были учтены.
            Осталась довольна приду еще. Посоветовала подруге, она тоже посетила данного мастера и тоже осталась в восторге
          </p>
          <div class="comments__rate">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#E0E0E0"/>
            </svg>
          </div>
        </article>
        <article class="comments__item comments__item2">
          <p class="comments__name">Марина Б.</p>
          <p class="comments__text">
            Очень понравились услуги данного мастера. Все пожелания были учтены.
            Осталась довольна приду еще. Посоветовала подруге, она тоже посетила данного мастера и тоже осталась в восторге
          </p>
          <div class="comments__rate">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618Z" fill="#FFE959"/>
            </svg>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home-page {
  padding: 40px 30px 80px 30px;
}

.records {
  margin-bottom: 30px;
}

.records__wrapper {
  margin-top: 40px;
}

.records__link {
  margin-left: 125px;
}

.finances {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 30px;
}

.finances__wrapper {
  margin-top: 40px;
}

.finances__link {
  margin-top: 100px;
}

.ranking__wrapper {
  margin-top: 40px;
}

.ranking__subtitle {
  max-width: 180px;
}

.ranking__article {
  max-width: 170px;
  margin-left: 50px;
}

.ranking__link {
  margin-left: 90px;
}

.finances__area2 {
  width: 650px;
  height: 305px;

  box-shadow: 0 0 4px -2px rgba(24, 39, 75, 0.12), 0 3px 8px -2px rgba(24, 39, 75, 0.08);

  background-image: url("../assets/img/graph1.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.statistics__wrapper {
  align-items: flex-end;

  margin-top: 5px;
}

.statistics__link {
  margin-top: 50px;
}

.statistics__block1 {
  margin-right: 90px;
}

.statistics__block2 {
  width: 450px;
  height: 200px;
  margin-right: 60px;

  background-image: url("../assets/img/graph2.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.tariff {
  display: flex;
}

.tariff__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 240px;
}

.tariff__text {
  margin-bottom: 20px;

  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}

.notes__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 240px;
  margin-left: 30px;
}

.notes__number {
  margin-bottom: 15px;

  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}

.notes__date {
  margin-bottom: 5px;

  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  color: #828496;
}

.notes__text {
  max-width: 215px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

.comments__header {
  display: flex;
  margin-top: 30px;
}

.comments__subtitle {
  margin-right: 30px;

  font-size: 16px;
  font-weight: 600;
}

.comments__link {
  font-size: 16px;
  line-height: 20px;
}

.comments__wrapper {
  margin-top: 25px;
}

.comments__name {
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
}

.comments__text {
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

.comments__rate {
  display: flex;
  justify-content: space-between;

  width: 110px;
}

.comments__item2 {
  margin-left: 30px;
}
</style>
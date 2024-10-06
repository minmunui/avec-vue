<script>
export default {
  name: 'WelcomeSection',
  i18nKo: {
    'minmunui': 'minmunui',
    WelcomeDesc1: '베틀넷에서 밤새 사람들과 함께 즐길 유즈맵을 만들던 소년은 컴퓨터공학을 전공하게 되었습니다.',
    WelcomeDesc2: '당장은 흔한 신입 컴퓨터공학도에 불과하지만, 언제가 찾아올 시대를 고대하며 꾸준히 미래를 준비하고 있습니다.',
    WelcomeDesc3: '이 사이트는 그의 창작물과 공부한 것들을 소개합니다.',
    'Go Detail': '민무늬가 누구인가요?',

    '3D Objects': '3차원 그래픽',
    ThreeDimensionDesc1: '운이 좋게도 학부시절에 그래픽과 관련된 강의를 들을 수 있었습니다.',
    ThreeDimensionDesc2: '기계 속 데이터가 사람의 눈에 도달하는 과정은 과연 컴퓨터공학의 기념비적인 성취라고 할 수 있습니다.',
    ThreeDimensionDesc3: '현재는 선조들이 만든 라이브러리를 이용하여 손쉬운 3D객체를 사용이 가능해졌습니다.',
    'Go 3Dimension': '창작물 살펴보기',

    'Vue 3': 'Vue 3 창작물',
    CreationsDesc1: 'Vue.js는 사용자 인터페이스 개발을 위한 가볍고 유연한 자바스크립트 프레임워크입니다.',
    CreationsDesc2: '배우기 쉽고 성능이 뛰어나 다양한 규모의 프로젝트에서 사용됩니다.',
    CreationsDesc3: 'Vue를 연습하기 위해 만든 것들을 소개합니다.',
    'Go Creations': '포트폴리오 둘러보기',

    'Notion': '노션',
    NotionDesc1: '공부한 것들은 노션을 이용하여 정리하곤 합니다.',
    NotionDesc2: 'minmunui라는 개발자 노트를 보고싶다면, 이곳을 방문해 주세요.',
    NotionDesc3: '일부 산학과제 대외비가 포함되어 있어 공개되지 않을 수 있습니다.',
    'Go Notion' : '노션 읽기'
  },
  i18nEn: {
    Welcome: '{minmunui}'
  }
}
</script>

<template>
  <section class="welcome-section">
    <div class="section-contents">
      <h1>{{ $t('minmunui') }}</h1>
      <p>{{ $t('WelcomeDesc1') }}<br /> {{ $t('WelcomeDesc2') }} <br/> {{ $t('WelcomeDesc3')}} </p>
      <router-link class="link" :to="{name:'about'}">{{ $t('Go Detail') }}</router-link>
    </div>
    <div class="section-contents">
      <h1>{{ $t('3D Objects') }}</h1>
      <p>{{ $t('ThreeDimensionDesc1') }}<br />{{ $t('ThreeDimensionDesc2') }}<br />{{ $t('ThreeDimensionDesc3') }}</p>
      <router-link class="link" :to="{name:'creations-3d'}">{{ $t('Go 3Dimension') }}</router-link>
    </div>
    <div class="section-contents">
      <h1>{{ $t('Vue 3') }}</h1>
      <p>{{ $t('CreationsDesc1') }} <br /> {{ $t('CreationsDesc2') }} <br /> {{ $t('CreationsDesc3') }}</p>
      <router-link class="link" :to="{name:'creations-vue'}">{{ $t('Go Creations') }}</router-link>
    </div>
    <div class="section-contents">
      <h1>{{ $t('Notion')}}</h1>
      <p>{{ $t('NotionDesc1')}} <br/> {{ $t('NotionDesc2')}} <br/> {{ $t('NotionDesc3')}}</p>
      <router-link class="link" :to="{name:'notion'}">{{ $t('Go Notion')}}</router-link>
    </div>
  </section>
</template>

<style scoped>
.welcome-section {
  width: 100%;
  background-color: var(--color-background-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
  padding: 20px;
}

.section-contents {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

p {
  text-align: center;
}

h1 {
  width: 100%;
  text-align: center;
  color: var(--color-heading);
}
</style>
<script>
export default {
  name: 'WelcomeSection',
  i18nKo: {
    Welcome: '{minmunui}',
    WelcomeDesc1: '베틀넷에서 본인이 만든 유즈맵을 사람들과 함께 즐기던 소년은 컴퓨터공학을 전공했습니다.',
    WelcomeDesc2: '시간이 흘러 어린 시절의 순수함과 환상은 사그라들었지만, 언제가 찾아올 시대를 고대하며 미래를 준비하고 있습니다.',
    WelcomeDesc3: '살면서 즐거운 일만 있을 수는 없겠지만, 언젠가 좋은 날이 오지 않을까요?',

    ThreeDimension: '3차원 그래픽',
    ContentsDesc1: '운이 좋게도 학부시절에 그래픽과 관련된 강의를 들을 수 있었습니다.',
    ContentsDesc2: '기계 속 데이터가 사람의 눈에 도달하는 과정은 수학-기술적 경이로움의 연속이었습니다.',
    ContentsDesc3: '현재는 선배 공학도들이 만든 라이브러리를 통해 어렵지 않게 3D객체를 삽입할 수 있습니다.'
  },
  i18nEn: {
    Welcome: '{minmunui}',
    WelcomeDesc1: ''
  }
}
</script>

<template>
  <section class="welcome-section">
    <div class="section-contents">
      <h1>{{ $t('Welcome', { minmunui: 'minmunui' }) }}</h1>
      <p>{{ $t('WelcomeDesc1') }}<br /> {{ $t('WelcomeDesc2') }} <br/> {{ $t('WelcomeDesc3')}} </p>
    </div>
    <div class="section-contents">
      <h1>{{ $t('ThreeDimension') }}</h1>
      <p>{{ $t('ContentsDesc1') }}<br />{{ $t('ContentsDesc2') }}<br/>{{ $t('ContentsDesc3') }}</p>
    </div>
    <div class="section-contents">
      <h1>{{ $t('') }}</h1>
    </div>
  </section>
</template>

<style scoped>
.welcome-section {
  width: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
}

.section-contents {
  padding: 20px 0;
}

p {
  text-align: center;
}

h1 {
  width: 100%;
  text-align: center;
}
</style>
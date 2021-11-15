export default function About() {
  return (
    <section className="about">
      <article className="about-top">
        <h2 className="about-top__slogan">
          남송FS는 유통과정을 최소화하여
          <br />
          불합리한 시장을 바꾸고,
          <br />더 많은 사람들의{" "}
          <span className="slogan__highlight">현명하고 건강한 소비</span>를 돕기
          위해 탄생했습니다.
        </h2>
      </article>
      <acticle className="about-shipping">
        <div className="shipping__img"></div>
        <p className="shipping__content">
          남송FS는 직접 판매만을 고집하여 대형마트와 편의점 등을 거치며
          <br />
          부풀려지는 유통마진을 절감하여 소비자들에게 보다 정직한 가격으로
          돌려드립니다.
        </p>
      </acticle>
    </section>
  );
}

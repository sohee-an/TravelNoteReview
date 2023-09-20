import * as Styled from './styles';

function PhotoBox() {
  return (
    // 후에 map으로 돌리면 될듯
    <Styled.Container>
      <Styled.Img src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/3fuW/image/oKAZIY6tS8e4z_7r4oOgDS-BPgU.jpg" />
      <Styled.Img src="https://mblogthumb-phinf.pstatic.net/MjAxODA5MDVfNDQg/MDAxNTM2MDk4MTcyMDQ5.Y0_CqPuYLKzdcX5tz1RGLkfJXh6_4RA3WTVMsq5d2R0g.OzL_BqH-wdaj41U7u_QBYJZqrTTnuX_aLEq_IWVIaxMg.JPEG.nydelphie/%EC%8A%A4%ED%86%A0%EB%A6%AC_%285%29.jpg?type=w800" />
      <Styled.Img src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/3fuW/image/oKAZIY6tS8e4z_7r4oOgDS-BPgU.jpg" />
    </Styled.Container>
  );
}

export default PhotoBox;

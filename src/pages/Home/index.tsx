import { useParallax } from '../../hooks/useParallax';

import moon from '../../assets/images/moon.png';
import stars from '../../assets/images/stars.png';
import mountains_Front from '../../assets/images/mountains_front.png';
import mountains_Behind from '../../assets/images/mountains_behind.png';

import {
  Banner,
  Button,
  Image,
  ImageWrapper,
  Moon,
  MountainB,
  MountainF,
} from './styles';

const Home = () => {
  const { marginRight, marginTop, mountainTop, moonTop, starLeft } =
    useParallax();

  return (
    <ImageWrapper>
      <Image src={stars} alt="" id="stars" left={starLeft} />
      <Moon src={moon} alt="" id="moon" top={moonTop} />
      <Banner marginRight={marginRight} marginTop={marginTop}>
        Welcome!
      </Banner>
      <Button href="#content" marginTop={marginTop}>
        Explore
      </Button>
      <MountainB
        src={mountains_Behind}
        alt=""
        id="mountains_behind"
        top={mountainTop}
      />
      <MountainF src={mountains_Front} alt="" id="mountains_front" />
    </ImageWrapper>
  );
};

export default Home;

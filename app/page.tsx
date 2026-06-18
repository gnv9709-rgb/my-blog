import { videos } from './data/videos';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <Portfolio
      videos={videos}
      name="이정석"
      email="gnv9709@gmail.com"
    />
  );
}

import { videos } from './data/videos';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <Portfolio
      videos={videos}
      name="Your Name"
      email="your@email.com"
    />
  );
}

import Navbar from "@/_components/Navbar";
import Content from "@/_components/Content";
import Landing, {Events} from "@/_components/landing_page/Landing";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Card width="300px" height="300px" className="mt-[200px]">
        Hello
      </Card> */}
      <Content>
        <Landing/>
        <Events/>
      </Content>
    </div>
  );
};

export default Home;

import Navbar from "@/_components/Navbar";
import Card from "@/_components/Card"
import { captureRejectionSymbol } from "events";

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


function Landing(){
return (
<>
<div className="w-full flex justify-center items-center flex-col gap-y-10 h-screen mt-[40px]" 
// style={{height:"--calc(100vh-189px)"}}
>
      <div className="w-[800px] h-[476px] text-white text-[125px] flex flex-col justify-center items-center" 
    // style={{fontFamily:"Righteous"}}
    >
      <span>
        CREATIVE
      </span>
      <span> 
        COMPUTING
      </span> 
      <span>
        SOCIETY
      </span>
    </div>

    <div className="text-[36px]">
      Learn | Code | collaborate
    </div>
</div>
</>
);
}

function  Events(){
  return (
  <>
    <Card width="200px" height="200px">
        Workshops
    </Card>
  </>
  );
}

function Content({children}:{children:any}){
  return (
  <>
  <div className="w-full pl-[10vw] pr-[10vw]">
    {children}
  </div>
  </>
  );
}
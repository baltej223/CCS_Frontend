import Card from "@/_components/Card";


export default function Landing(){
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

// export function Events() {
//   const events = [
//     "Skill Set Development",
//     "Networking & Growth",
//     "Hackathon Participation",
//     "Project Showcase",
//     "Open Source Contribution",
//     "Career Opportunities",
//   ];

//   return (<>
//     <div className="ml-[100px] mr-[100px]">
//         <Card width="200px" height="250px">
//             Skill Set
//         </Card>
//     </div>
//     </>
//   );
// }



export function Events() {
  const events = [
    "Skill Set Development",
    "Networking & Growth",
    "Hackathon Participation",
    "Project Showcase",
    "Open Source Contribution",
    "Career Opportunities",
  ];

  return (
    <div className="w-full flex justify-center item-center">
    <div className="w-[80%] flex flex-col items-center">
      {events.map((event, idx) => (
        <Card
          key={idx}
          width="200px"
          height="250px"
          className={`flex items-center justify-center text-xl font-bold z-[0]
            ${idx % 2 === 0 ? "mr-auto" : "ml-auto"}`}
        >
          {event}
        </Card>
      ))}
    </div>
    </div>
  );
}

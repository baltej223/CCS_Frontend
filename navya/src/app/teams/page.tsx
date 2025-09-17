import { Children } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import CcsLogo from "../components/model";

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

export default function TeamsPage() {
  return (
    <div>
        <CcsLogo src="/models/CCS_NAME.glb"/>
        <Navbar />
        
        <h1 className="font-righteous align-middle text-6xl text-center p-6">Our Team</h1>
        <div>
            <h2 className="font-righteous align-middle text-5xl text-center p-2">Mentors</h2>
        </div>
        <>
        <Card width="200px" height="200px">
        <img src="../next.svg" alt="Mentor 1" />
        <p>Mentor 1</p>
        </Card>
        </>
    </div>

  );
}
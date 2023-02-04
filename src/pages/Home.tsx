import About from "../components/About";
import Introduction from "../components/Introduction";
import Knowledges from "../components/Knowledges";
import Projects from "../components/Projects";

type HomeProps = {
    setShowButtonHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setShowButtonHeader }: HomeProps) => {

    return (
        <main className="pt-[100px] bg-black-200">
            <Introduction setShowButtonHeader={setShowButtonHeader}/>
            <About />
            <Projects />
            <Knowledges />
        </main>
    )
}

export default Home;
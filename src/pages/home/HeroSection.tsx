import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/macbook-exposed.png";

const HeroSection = () => {
    return (
        <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center">
            <div>
                <h1 className="text-8xl font-bold"><span className="text-gray">Don't worry.</span>
                <br></br>
                <span>We'll fix it.</span></h1>
                <p>Welcome to <span>iRepair</span>, your one-step place for all kinds of Macbook repairs and diagonstics.</p>
                <Button>BOOK A SERVICE</Button>
            </div>
            <div>
                <img src={macbook}></img>
            </div>
        </Container>
    );
};

export default HeroSection;
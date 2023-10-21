import {FaHandMiddleFinger} from 'react-icons/fa';
import Button from "../components/Button";

function ButtonPage(){
    const handleClick = () =>{
        console.log("Click");
    }
    return (
        <div>
            <div>
                <Button primary rounded outline className="mb-2" onClick={handleClick}>
                    <FaHandMiddleFinger/>
                    Fuck you
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <FaHandMiddleFinger/>
                    Fuck you
                </Button>
            </div>
            <div>
                <Button danger>
                    <FaHandMiddleFinger/>
                    Fuck you
                </Button>
            </div>
            <div>
                <Button warning rounded>
                    <FaHandMiddleFinger/>
                    Fuck you
                </Button>
            </div>
            <div>
                <Button success rounded outline>    
                    <FaHandMiddleFinger/>
                    Fuck you
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <FaHandMiddleFinger/>
                    Fuck you
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
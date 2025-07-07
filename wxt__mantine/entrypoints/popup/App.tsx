import {Button} from "@mantine/core";
import './App.css';

function App() {
    return (
        <div className={'p-12'}>
            <h1 className={'p-12 text-red-500 text-4xl'}>mantine</h1>
            <div className={'flex flex-col items-center gap-4'}>
                <Button>Button</Button>
                <Button variant={'secondary'}>Button</Button>
                <Button variant={"outline"}>Button</Button>
            </div>
        </div>
    );
}

export default App;

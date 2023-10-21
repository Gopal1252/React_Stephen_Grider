import Accordion from "./components/Accordion";

function App(){
    const items = [
        {
            id: '1',
            label: 'One',
            content: 'Nothing to see here!'
        },
        {
            id: '2',
            label: 'Two',
            content: 'Nothing to see here two!'
        },
        {
            id: '3',
            label: 'Three',
            content: 'Nothing to see here three!'
        }
    ]

    return <Accordion items={items}/>
}

export default App;
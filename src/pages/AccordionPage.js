import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '678',
            label: 'can i use React on a proj?',
            content: ' You can use it You can use it You can use it You can use it You can use it You can use it You can use it '
        },
        {
            id: '567',
            label: 'can i use JS on a proj?',
            content: ' You can use it You can use it You can use it You can use it You can use it You can use it You can use it '
        },
        {
            id: '123',
            label: 'can i use CSS on a proj?',
            content: ' You can use it You can use it You can use it You can use it You can use it You can use it You can use it '
        },
    ]


    return <Accordion items={items} />;
}

export default AccordionPage;
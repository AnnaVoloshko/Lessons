const cards = [
    {
        id: 1,
        title: 'Title1',
        body: 'Content1',
        footer: 'Footer1'
    }, {
        id: 2,
        title: 'Title2',
        body: 'Content2',
        footer: 'Footer2'
    }, {
        id: 3,
        title: 'Title3',
        body: 'Content3',
        footer: 'Footer3'
    }
]

export const list = () => Promise.resolve([...cards]);
export const get = id => Promise.resolve(cards.find(card => card.id === id));
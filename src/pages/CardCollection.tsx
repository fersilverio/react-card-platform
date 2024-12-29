import { useState } from "react"
import { Card } from "../shared/components/Card";

export function CardCollection(){
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Fireball',
            subtitle: 'Spell Card',
            description: 'Deals 6 damage to all enemy units.',
            image: 'https://via.placeholder.com/300x400',
            actionLabel: 'Use',
            metadata: 'Mana Cost: 5',
        },
        {
            id: 2,
            title: 'Healing Potion',
            subtitle: 'Consumable',
            description: 'Restores 10 health points to your hero.',
            image: 'https://via.placeholder.com/300x400',
            actionLabel: 'Consume',
            metadata: 'Mana Cost: 2',
        },
        {
            id: 3,
            title: 'Dragon Slayer',
            subtitle: 'Weapon',
            description: 'Grants +10 attack for 2 turns.',
            image: 'https://via.placeholder.com/300x400',
            actionLabel: 'Equip',
            metadata: 'Mana Cost: 8',
        },
        {
            id: 4,
            title: 'Dragon Slayer',
            subtitle: 'Weapon',
            description: 'Grants +10 attack for 2 turns.',
            image: 'https://via.placeholder.com/300x400',
            actionLabel: 'Equip',
            metadata: 'Mana Cost: 8',
        },
        {
            id: 5,
            title: 'Dragon Slayer',
            subtitle: 'Weapon',
            description: 'Grants +10 attack for 2 turns.',
            image: 'https://via.placeholder.com/300x400',
            actionLabel: 'Equip',
            metadata: 'Mana Cost: 8',
        },
        {
            id: 6,
            title: 'Dragon Slayer',
            subtitle: 'Weapon',
            description: 'Grants +10 attack for 2 turns.',
            image: 'https://via.placeholder.com/300x400',
            actionLabel: 'Equip',
            metadata: 'Mana Cost: 8',
        },
    ]);
    
    
    return (
        <>
            <div className="bg-git-gray-900 text-white min-h-screen">
                <div className="max-w-3xl mx-auto p-5">
                    {/*Collection Header */}
                    <h1 className="text-2xl text-center font-bold mb-6">Card Collection</h1>
    
                    {/*Cards Grid*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            cards.map(card => (
                                <Card 
                                    key={card.id}
                                    {...card}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
import { useState } from "react"
import { FriendCard } from "../shared/components/FriendCard"

export function FriendCollection() {
    const [friends, useFriends] = useState([
        {
            id: 1,
            name: 'John Doe',
            nickname: 'LittleJohn666',
            image: 'https://via.placeholder.com/300x400',
        },
        {
            id: 2,
            name: 'John Doe 2',
            nickname: 'LittleJohn777',
            image: 'https://via.placeholder.com/300x400',
        },
        {
            id: 3,
            name: 'John Doe 3',
            nickname: 'LittleJohn888',
            image: 'https://via.placeholder.com/300x400',
        },
        {
            id: 4,
            name: 'John Doe 4',
            nickname: 'LittleJohn999',
            image: 'https://via.placeholder.com/300x400',
        },
        {
            id: 5,
            name: 'John Doe 5',
            nickname: 'LittleJohn111',
            image: 'https://via.placeholder.com/300x400',
        },
        {
            id: 6,
            name: 'John Doe 6',
            nickname: 'LittleJohn222',
            image: 'https://via.placeholder.com/300x400',
        },
        {
            id: 7,
            name: 'John Doe 7',
            nickname: 'LittleJohn333',
            image: 'https://via.placeholder.com/300x400',
        },
        {
            id: 8,
            name: 'John Doe 8',
            nickname: 'LittleJohn444',
            image: 'https://via.placeholder.com/300x400',
        },
    ])
    
    return (
        <>
            <div className="bg-git-gray-900 text-white min-h-screen">
                <div className="max-w-3xl mx-auto p-5">
                    {/* Collection Header */}
                    <h1 className="text-2xl text-center font-bold mb-6 p-8">Friend List</h1>
            
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {
                            friends.map(friend => (
                                <FriendCard 
                                    key={friend.id}
                                    {...friend}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
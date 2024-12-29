interface FriendInterface {
    id: number;
    name: string;
    nickname: string;
    image: string;
}

export function FriendCard(props: FriendInterface) {
    return (
        <>
            <div className="bg-gray-800 rounded-lg shadow-md flex flex-col">
                {/* Friend Card Image */}
                <img
                    src={props.image}
                    alt={props.name}
                    className="h-48 w-full object-cover rounded-t-lg"
                />
                
                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow">
                    {/* Card Header */}
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">{props.name}</h2>
                        <p className="text-sm text-gray-400">{props.nickname}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
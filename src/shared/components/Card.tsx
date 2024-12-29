interface CardInterface {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    actionLabel: string;
    metadata: string;
}

export function Card(props: CardInterface) {
    return (
        <>
            <div className="bg-gray-800 rounded-lg shadow-md flex flex-col">
                {/* Card Image */}
                <img
                    src={props.image}
                    alt={props.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                />
            
                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow">
                    {/* Card Header */}
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">{props.title}</h2>
                        <p className="text-sm text-gray-400">{ props.subtitle }</p>
                    </div>
            
                    {/* Card Description */}
                    <p className="text-sm flex-grow">{ props.description }</p>
            
                    {/* Card Footer */}
                    <div className="mt-4 flex items-center justify-between">
                        <button
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold"
                        >
                            { props.actionLabel }
                        </button>
                        <p className="text-gray-400 text-xs">{ props.metadata }</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}
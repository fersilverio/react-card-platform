import { useState } from "react"

export function Profile(){
    const [userName, setUserName] = useState("Player Name");
    const [userLevel, setUserLevel] = useState(35);
    const [userRank, setUserRank] = useState("Diamond");
    const [coins, setCoins] = useState(1500);
    const [crystals, setCrystals] = useState(300);
    const [totalMatches, setTotalMatches] = useState(120);
    const [wins, setWins] = useState(80);
    const [losses, setLosses] = useState(40);
    const [winRate, setWinRate] = useState(66.7);
    const [favoriteDecks, setFavoriteDecks] = useState([
        { name: "Aggro Warriors", winRate: 75 },
        { name: "Control Mages", winRate: 60 },
        { name: "Beastmaster Hunters", winRate: 68 },
    ]);
    const [achievements, setAchievements] = useState([
        "First Victory",
        "Event Champion",
        "50 Wins Streak",
        "Legendary Collector",
    ]);
    const [clan, setClan] = useState("Knights of Valor");
    const [friendsOnline, setFriendsOnline] = useState(23);
    const [missions, setMissions] = useState([
        "Win 3 matches with Aggro Warriors (Reward: 200 Coins)",
        "Play 10 cards in a single turn (Reward: 50 Crystals)",
        "Reach Gold Rank in the current season (Reward: Exclusive Avatar)",
    ]);
    
    return (
        <>
            <div className="bg-gray-900 text-white min-h-screen w-full">
                <div className="max-w-full mx-auto p-6 bg-git-gray-900 rounded-lg shadow-md">
                    {/* Header Section */}
                    <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                alt="Avatar"
                                className="w-20 h-20 rounded-full border-2 border-gray-600"
                            />
                            <div>
                                <h1 className="text-2xl font-bold">{userName}</h1>
                                <p className="text-gray-400">
                                    Level {userLevel} - {userRank}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg">💰 {coins} Coins</p>
                            <p className="text-lg">💎 {crystals} Crystals</p>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <p className="text-xl font-bold">{totalMatches}</p>
                            <p className="text-gray-400">Total Matches</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{wins}</p>
                            <p className="text-gray-400">Wins</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{losses}</p>
                            <p className="text-gray-400">Losses</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{winRate}%</p>
                            <p className="text-gray-400">Win Rate</p>
                        </div>
                    </div>

                    {/* Favorite Decks Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">
                            Favorite Decks
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {favoriteDecks.map((deck) => (
                            <div
                                key={deck.name}
                                className="p-4 bg-gray-700 rounded-lg text-center"
                            >
                                <p className="font-bold">{deck.name}</p>
                                <p className="text-gray-400 text-sm">
                                Win Rate: {deck.winRate}%
                                </p>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">
                            Achievements
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {achievements.map((achievement, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-green-600 rounded-lg text-sm"
                            >
                                {achievement}
                            </span>
                            ))}
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">
                            Social
                        </h2>
                        <div className="flex gap-4">
                            <div className="flex-1 bg-gray-700 p-4 rounded-lg">
                            <p className="font-bold">Clan</p>
                            <p className="text-gray-400 text-sm">{clan}</p>
                            </div>
                            <div className="flex-1 bg-gray-700 p-4 rounded-lg">
                            <p className="font-bold">Friends</p>
                            <p className="text-gray-400 text-sm">{friendsOnline} Online</p>
                            </div>
                        </div>
                    </div>

                    {/* Current Missions Section */}
                    <div className="mt-6">
                        <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">
                            Current Missions
                        </h2>
                        <ul className="list-disc pl-5 text-gray-400">
                            {missions.map((mission, index) => (
                            <li key={index} className="mt-2">
                                {mission}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
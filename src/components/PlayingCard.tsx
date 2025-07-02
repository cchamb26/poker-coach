//cards will have a rank and suit
export type Card = {
    rank: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K" | "A" //card rank
    suit: "♠" | "♦" | "♥" | "♣" //card suits
}

export default function PlayingCard ({ rank, suit }: Card ){//must start with uppercase letter
    return(
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
           {rank}{suit} 
        </div>
    )
}

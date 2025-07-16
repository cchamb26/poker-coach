import type { Card } from '../components/PlayingCard'

export function genDeck(): Card[]{
    const suits = ["♠", "♥", "♦", "♣"]  as const
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"] as const
    const deck: Card[] = []

    for(const suit of suits){
        for(const rank of ranks){
            const card: Card ={ //creates new card type
                rank: rank as Card["rank"],
                suit: suit as Card["suit"]
            }
            deck.push(card)//pushes card to the deck of cards
        }
        
    }
    return deck
}

export function shuffleDeck(deck: Card[]): void{
    
}
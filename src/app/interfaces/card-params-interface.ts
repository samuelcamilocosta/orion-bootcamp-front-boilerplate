export interface ICard {
  id?: number;
  cardId?: number;
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  cardImageDescription: string;
  cardButtonText: string;
  cardPath: string;
  cardAccess?: string;
  created_at?: Date;
  updated_at?: Date;
}

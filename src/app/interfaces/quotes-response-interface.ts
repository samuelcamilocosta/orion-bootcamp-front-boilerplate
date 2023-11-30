import { IQuote } from './quotes-interface';

export interface QuotesResponse extends IQuote {
  id: number;
  created_at: Date;
}

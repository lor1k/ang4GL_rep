import { ICompetition } from './competitions';

export interface IMatches {
    count: number;
    fiilter: object;

    competition: ICompetition;
    matches: object[];
}

export interface ICompetitions{
    count: number, 
    fiilter: object,
    competitions: ICompetition[]
}
export interface ICompetition{
    id: string,
    area: object,
    name: string,
    code: string,
    emblemUrl: string,
    plan: string,
    currentSeason: object,
    numberOfAvailableSeasons: number,
    lastUpdated: string
}


// {"id":2006,
// "area":{"id":2001,"name":"Africa"},
// "name":"WC Qualification",
// "code":null,
// "emblemUrl":null,
// "plan":"TIER_FOUR",
// "currentSeason":{"id":7,"startDate":"2015-10-07","endDate":"2017-11-14","currentMatchday":6,"winner":null},
// "numberOfAvailableSeasons":1,
// "lastUpdated":"2018-06-04T23:54:04Z"},
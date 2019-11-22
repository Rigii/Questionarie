interface RenderData {
    defVal?: string,
    id?: number,
    itemsOnStr?: string,
    name?: string,
    title?: string,
    type?: string,
    values?: string,
    [propName: string]: any;
}

interface StateData {
    bandName?: string,
    realName?: string,
    birdthday?: string,
    name?: string,
    nativeCity?: string,
    specialisation?: string,
    substances?: [],
    [propName: string]: any;
}

export interface InitialStateTypes {
    urlName: string,
    startTest: boolean,
    stopTest: boolean,
    renderData: RenderData[],
    stateData: StateData,
    unfilledFelds: any[],
    correctAnsvers: string[],
    isClear: boolean,
    isFetching: boolean
}
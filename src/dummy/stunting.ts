export type TStunting = {
    numberOfTarget: number
    numberOfMeasure: number
    numberOfStunting: number
    percentageMeasure: number
    percentageStunting: number
}

export function randomStunting(): TStunting {
    const numberOfTarget = Math.floor(Math.random() * 2000)
    const numberOfMeasure = Math.floor(numberOfTarget - (numberOfTarget / 10))
    const numberOfStunting = Math.floor(numberOfMeasure * ((Math.random() * 100) / 100))
    const percentageMeasure = Math.floor(numberOfMeasure / numberOfTarget)
    const percentageStunting = Math.floor(numberOfStunting / numberOfTarget)
    
    return {
        numberOfMeasure,
        numberOfStunting,
        numberOfTarget,
        percentageMeasure,
        percentageStunting
    }
}
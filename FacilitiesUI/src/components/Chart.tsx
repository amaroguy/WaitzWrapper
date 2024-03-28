import { UseQueryResult } from "@tanstack/react-query"
import { FacilityRecord } from "../types/types"
import { facilityRecordsToChartJSData } from "../utils"

interface ChartProps {
    data: UseQueryResult<FacilityRecord[], Error>[]
    isChartDataLoading: boolean
}

export const FacilityChart = ({data, isChartDataLoading}:ChartProps) => {


    if(isChartDataLoading) {
        return <p> The chart is loading </p>
    }

    const chartData = data.map(d => d.data).filter((d) => d != undefined)

    console.log(chartData, "THIS IS THE CHART DATA")

    const datasets = chartData.map((records) => facilityRecordsToChartJSData(records as FacilityRecord[]))

    console.log("DONEEEEE", datasets)

}